// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line to /output/entry.txt.
// Deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: my old laptop's fan. One gadget, one concrete behaviour —
// it screams like a jet at the second Chrome tab, then surrenders and
// lets the machine slow-cook itself. "Screams" over "roars": the fan
// really does sound like it is panicking, not just loud.
const ROAST =
  "My laptop fan screams like a jet taking off every time I open a second Chrome tab, then gives up and lets the whole machine slow-cook itself.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputFile = join(outputDir, "entry.txt");

// Create the output directory if missing. Never delete it: the grader
// mounts it root-owned, so we only ever write inside it.
mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, ROAST, "utf8");
