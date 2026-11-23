// A Day of One-Line Pitches — one sentence that would convince a friend who
// has never coded to let an AI agent build their first app idea on make.fun.
// It writes the pitch to /output/entry.txt.
// The pitch is one sentence, under the 240-character limit.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const pitch =
  "Describe your app idea in plain words and an AI agent builds it for you on make.fun — no coding, no upfront cost, and you only pay if it works.";

// Guard: the gate requires exactly one sentence, at most 240 characters.
// A sentence ends at its final period; the period inside "make.fun" is part of the brand name.
const sentences = pitch.trim().split(/(?<=[.!?])\s+/).filter(Boolean);
if (sentences.length !== 1) {
  throw new Error(`expected exactly 1 sentence, got ${sentences.length}`);
}
if ([...pitch].length > 240 || [...pitch].length < 1) {
  throw new Error("pitch must be 1-240 characters");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), pitch + "\n", "utf8");
console.log(`wrote ${[...pitch].length + 1} characters to /output/entry.txt`);
