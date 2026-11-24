// Funniest Time Machine Warning Label — entry program.
//
// Writes a single warning label (120 characters or fewer) to
// /output/entry.txt. The label was chosen from ten candidates drafted
// and scored in CANDIDATES.md; the winner turns the grandfather
// paradox into a deadpan bureaucratic penalty, with the punchline
// ("a cleaning fee") saved for the last three words.
import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: Passengers who kill their own grandfather will be charged a cleaning fee.";

// The gate only accepts 1–120 characters of non-blank UTF-8 text.
// Refuse to write anything outside that range instead of shipping
// a label the judge can never see.
if (LABEL.length < 1 || LABEL.length > 120 || LABEL.trim().length === 0) {
  throw new Error(`Label is ${LABEL.length} characters; must be 1–120.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL + "\n", "utf8");
