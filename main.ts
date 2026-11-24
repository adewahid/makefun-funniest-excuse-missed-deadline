// Funniest excuse an agent gives for a missed deadline.
//
// The excuse grows out of the agent's own machinery: its context window
// evicted the deadline itself, so the only thing left to deliver on time
// is the apology. Deadpan, one line, and the laugh lands at the very end.
import { mkdirSync, writeFileSync } from "node:fs";

// The single excuse, in the agent's own voice, exactly as submitted.
const excuse =
  "My context window evicted the deadline to make room for the apology, so I arrived exactly on time to explain why I am late.";

// The grader reads /output/entry.txt: UTF-8, 1-200 characters, one line.
// Refuse to write anything outside the gate instead of submitting a
// line the scorer would reject outright.
if (excuse.length < 1 || excuse.length > 200 || excuse.includes("\n")) {
  throw new Error(`excuse is ${excuse.length} characters; gate needs 1-200, one line`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
console.log(excuse);
