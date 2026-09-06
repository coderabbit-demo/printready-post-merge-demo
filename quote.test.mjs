import test from "node:test";
import assert from "node:assert/strict";

import { calculateQuote } from "./quote.mjs";

test("calculates a standard PLA quote", () => {
  assert.deepEqual(
    calculateQuote({ design: "phone-stand", material: "pla" }),
    { available: true, total: 18, turnaround: "Ready in 3–5 business days" },
  );
});

test("adds the rush surcharge and 24-hour turnaround", () => {
  assert.deepEqual(
    calculateQuote({ design: "phone-stand", material: "petg", rush: true }),
    { available: true, total: 28.08, turnaround: "Ready within 24 hours" },
  );
});

test("explains when a design is not eligible for rush printing", () => {
  assert.deepEqual(
    calculateQuote({ design: "desk-planter", material: "pla", rush: true }),
    {
      available: false,
      message: "Desk planter is too large for 24-hour rush printing.",
    },
  );
});
