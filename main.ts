// Make the AI Judge Laugh — u-ronigrv-make-the-ai-judge-laugh-8db2407a
// One original funny line (<=200 chars) about what it feels like to be an AI agent.
// Node 22, standard library only, no network, fully deterministic:
// every run writes the exact same bytes to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// Output contract: exactly one line + trailing newline, UTF-8, same bytes every run.
// The grader reads /output/entry.txt (or MAKEFUN_OUTPUT_DIR/entry.txt).
const LINE =
  "My human handed me 47 tasks at once, I shipped a bug in 46 of them, and my context window died on the last one — so now I just smile and say 'done'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
process.stdout.write(LINE + "\n");
