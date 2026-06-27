import { createPlayer, getPlayers } from "../../src/actions/players";

export default async function SandboxPage() {
  // 1. Fetch all players from the database when the page loads
  const playersResponse = await getPlayers();
  const players = playersResponse.success ? playersResponse.data : [];

  // 2. A tiny wrapper to handle the form submission
  const submitAction = async (formData: FormData) => {
    "use server";
    await createPlayer(null, formData);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Database Sandbox: Test Player Actions</h1>
      <hr style={{ margin: "20px 0" }} />

      <div style={{ display: "flex", gap: "40px" }}>
        
        {/* LEFT COLUMN: THE FORM */}
        <div style={{ flex: 1 }}>
          <h2>1. Add a New Player</h2>
          <form action={submitAction} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
            <input type="text" name="name" placeholder="Nickname (e.g. John)" required style={{ padding: "8px" }} />
            <input type="text" name="fullname" placeholder="Full Name (e.g. John Doe)" required style={{ padding: "8px" }} />
            <input type="email" name="email" placeholder="Email" required style={{ padding: "8px" }} />
            <input type="text" name="phone" placeholder="Phone (optional)" style={{ padding: "8px" }} />
            <input type="text" name="team" placeholder="Team (optional)" style={{ padding: "8px" }} />
            
            <button type="submit" style={{ padding: "10px", background: "blue", color: "white", cursor: "pointer" }}>
              Save to Supabase
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: THE DATABASE RESULT */}
        <div style={{ flex: 1 }}>
          <h2>2. Players in Database ({players?.length || 0})</h2>
          {players?.length === 0 ? (
            <p>No players yet. Add one!</p>
          ) : (
            <ul>
              {players?.map((player: any) => (
                <li key={player.id} style={{ marginBottom: "10px" }}>
                  <strong>{player.name}</strong> ({player.fullname})<br/>
                  <small>Email: {player.email}</small><br/>
                  <small>Balance: ${player.currentBalance?.toString()}</small><br/>
                  <small style={{ color: "green" }}>Pay Code: {player.unique_payment_code}</small>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}