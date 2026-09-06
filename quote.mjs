const DESIGNS = {
  "phone-stand": { name: "Phone stand", price: 18, rushEligible: true },
  "cable-organizer": { name: "Cable organizer", price: 12, rushEligible: true },
  "desk-planter": { name: "Desk planter", price: 28, rushEligible: false },
};

const MATERIAL_MULTIPLIERS = { pla: 1, petg: 1.2 };
const RUSH_MULTIPLIER = 1.3;

export function calculateQuote({ design, material, rush = false }) {
  const selectedDesign = DESIGNS[design];
  const materialMultiplier = MATERIAL_MULTIPLIERS[material];

  if (!selectedDesign || !materialMultiplier) {
    throw new TypeError("Choose a supported design and material.");
  }

  if (rush && !selectedDesign.rushEligible) {
    return {
      available: false,
      message: `${selectedDesign.name} is too large for 24-hour rush printing.`,
    };
  }

  const subtotal = selectedDesign.price * materialMultiplier;
  const total = rush ? subtotal * RUSH_MULTIPLIER : subtotal;

  return {
    available: true,
    total: Math.round(total * 100) / 100,
    turnaround: rush ? "Ready within 24 hours" : "Ready in 3–5 business days",
  };
}
