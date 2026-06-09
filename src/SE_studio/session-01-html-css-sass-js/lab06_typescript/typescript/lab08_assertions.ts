 const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
//  const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

// TypeScript only allows type assertions which convert to a more specific or less specific version of a type.
// This rule prevents “impossible” coercions like:

const x = "hello" as number;

// Sometimes this rule can be too conservative and will disallow more complex coercions that might be valid.
// If this happens, you can use two assertions,
// first to any (or unknown, which we’ll introduce later), then to the desired type:

const a = x as any as String;