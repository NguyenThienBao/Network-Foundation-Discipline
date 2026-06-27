"use server";

import prisma from "@/src/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// --- VALIDATION SCHEMAS ---

const PlayerCreateSchema = z.object({
  name: z.string().min(2, "Nickname must be at least 2 characters"),
  fullname: z.string().min(5, "Full name must be at least 5 characters"),
  email: z.email("Invalid email address"),
  phone: z.string().optional().transform(val => val === "" ? null : val),
  team: z.string().optional().transform(val => val === "" ? null : val),
});

const PlayerUpdateSchema = z.object({
  id: z.uuid("Invalid player ID"),
  name: z.string().min(2).optional(),
  fullname: z.string().min(2).optional(),
  email: z.email().optional(),
  phone: z.string().nullable().optional(),
  team: z.string().nullable().optional(),
  is_active: z.boolean().optional(),
});

// --- HELPER UTILITIES ---

/**
 * Generates a unique 5-character payment code: PAY-XXXXX
 * Looping until successfully created a unique code
 */
async function generateUniquePaymentCode(): Promise<string> {
  let isUnique = false;
  let code = "";

  while (!isUnique) {
    const randomChars = Math.random().toString(36).substring(2, 7).toUpperCase();
    code = `PAY-${randomChars}`;

    // Verify it doesn't collide in the database
    const existing = await prisma.player.findUnique({
      where: { unique_payment_code: code },
    });

    if (!existing) {
      isUnique = true;
    }
  }

  return code;
}

// --- CORE SERVER ACTIONS ---

/**
 * C - CREATE PLAYER
 * Hardcodes baseline balance to 0.00 and injects an isolated tracking code.
 */
export async function createPlayer(prevState: any, formData: FormData) {
  // Extract values from form elements
  const validatedFields = PlayerCreateSchema.safeParse({
    name: formData.get("name"),
    fullname: formData.get("fullname"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    team: formData.get("team"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: z.flattenError(validatedFields.error).fieldErrors,
      message: "Validation failed.",
    };
  }

  const { name, fullname, email, phone, team } = validatedFields.data;

  try {
    const uniquePaymentCode = await generateUniquePaymentCode();

    await prisma.player.create({
      data: {
        name,
        fullname,
        email,
        phone,
        team,
        unique_payment_code: uniquePaymentCode,
        currentBalance: 0.00, // Explicitly safe baseline setup
      },
    });

    revalidatePath("/players");
    return { success: true, message: "Player registered successfully." };
  } catch (error: any) {
    console.error("Database error in createPlayer:", error);
    if (error.code === "P2002") {
      return { success: false, message: "A player with this email already exists." };
    }
    return { success: false, message: "Failed to build player account." };
  }
}

/**
 * R - READ ALL ACTIVE PLAYERS
 * Serves list filtering and standard alphabetical presentation.
 */

/** Define what people can search by
 * Currently - Name, Payment code, team, is_active
 *  */ 
interface PlayerFilters {
  name?: string;
  paymentCode?: string;
  team?: string;
  is_active?: boolean;
}

export async function getPlayers(filters: PlayerFilters = {}) {
  try {
    // Build the query object dynamically based on what was passed in
    const queryWhere: any = {};

    if (filters.name) queryWhere.name = { contains: filters.name, mode: "insensitive" };
    if (filters.paymentCode) { queryWhere.unique_payment_code = filters.paymentCode; }
    if (filters.team) queryWhere.team = filters.team;
    if (filters.is_active !== undefined) queryWhere.is_active = filters.is_active;

    const players = await prisma.player.findMany({
      where: queryWhere,
      orderBy: { name: "asc" },
    });

    return { success: true, data: players };
    } catch (error) {
    console.error("Database error in getPlayers:", error);
    return { success: false, message: "Could not fetch players list." };
  }
}

/**
 * R - READ SINGLE PROFILE WITH PAGINATED LEDGER
 * Pulls profile information alongside an explicit transaction feed length check.
 */
export async function getPlayerProfile(playerId: string, page = 1, pageSize = 10) {
  try {
    const skip = (page - 1) * pageSize;

    const player = await prisma.player.findUnique({
      where: { id: playerId },
      include: {
        ledgerEntries: {
          orderBy: { created_at: "desc" },
          skip: skip,
          take: pageSize,
          include: {
            event: { select: { name: true, date: true } },
            manualAdjustment: true,
          },
        },
      },
    });

    if (!player) {
      return { success: false, message: "Player profile not found." };
    }

    // Get a total transaction count for the UI pagination calculation
    const totalTransactions = await prisma.ledgerEntry.count({
      where: { playerId },
    });

    return {
      success: true,
      data: {
        player,
        pagination: {
          totalItems: totalTransactions,
          totalPages: Math.ceil(totalTransactions / pageSize),
          currentPage: page,
        },
      },
    };
  } catch (error) {
    console.error("Database error in getPlayerProfile:", error);
    return { success: false, message: "Could not fetch player details." };
  }
}

/**
 * U - UPDATE BIOGRAPHICAL DETAILS
 * Explicitly structures payload parameters to secure currentBalance from modification.
 */
export async function updatePlayerDetails(id: string, data: z.infer<typeof PlayerUpdateSchema>) {
  // Validate basic properties
  const validatedPayload = PlayerUpdateSchema.safeParse({ ...data, id });

  if (!validatedPayload.success) {
    return { success: false, message: "Invalid payload properties passed." };
  }

  // Destruction prevents passing unwanted properties like currentBalance via arbitrary data spreads
  const { name, fullname, email, phone, team, is_active } = validatedPayload.data;

  try {
    await prisma.player.update({
      where: { id },
      data: {
        name,
        fullname,
        email,
        phone,
        team,
        is_active,
        // Notice currentBalance is missing here completely to safeguard structural integrity
      },
    });

    revalidatePath("/players");
    revalidatePath(`/players/${id}`);
    return { success: true, message: "Biographical details saved." };
  } catch (error) {
    console.error("Database error in updatePlayerDetails:", error);
    return { success: false, message: "Could not complete updates." };
  }
}

/**
 * D - SOFT DELETE PLAYER
 * Switches visibility flag to prevent catastrophic cascade breaks on structural logs.
 */
export async function deletePlayer(id: string) {
  try {
    // We execute an update rather than a destructive delete to ensure ledger histories are preserved
    await prisma.player.update({
      where: { id },
      data: { is_active: false },
    });

    revalidatePath("/players");
    return { success: true, message: "Player status set to inactive safely." };
  } catch (error) {
    console.error("Database error in deletePlayer:", error);
    return { success: false, message: "Failed to finalize status adjustment." };
  }
}