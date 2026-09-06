const DESIGNS = {
  "phone-stand": { price: 18 },
  "cable-organizer": { price: 12 },
  "desk-planter": { price: 28 },
};

const MATERIAL_MULTIPLIERS = { pla: 1, petg: 1.2 };

export function calculateQuote({ design, material }) {
  const selectedDesign = DESIGNS[design];
  const materialMultiplier = MATERIAL_MULTIPLIERS[material];

  if (!selectedDesign || !materialMultiplier) {
    throw new TypeError("Choose a supported design and material.");
  }

  return {
    total: Math.round(selectedDesign.price * materialMultiplier * 100) / 100,
    turnaround: "Ready in 3–5 business days",
  };
}
