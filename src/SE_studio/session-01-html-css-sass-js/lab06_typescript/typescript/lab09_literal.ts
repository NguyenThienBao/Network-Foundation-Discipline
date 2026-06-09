function printText(s: string, alignment: "left" | "right" | "center") {
  console.log(s, " + ", alignment);
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");

