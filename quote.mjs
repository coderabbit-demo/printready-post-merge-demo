const DESIGNS = {
  "phone-stand": { name: "Phone stand", price: 18, rushEligible: true },
  "cable-organizer": { name: "Cable organizer", price: 12, rushEligible: true },
  "desk-planter": { name: "Desk planter", price: 28, rushEligible: false },
};

const MATERIAL_MULTIPLIERS = { pla: 1, petg: 1.2 };
const RUSH_MULTIPLIER = 1.3;

function getVolumeDiscount(quantity) {
  if (quantity >= 25) return 0.15;
  if (quantity >= 10) return 0.1;
  if (quantity >= 5) return 0.05;
  return 0;
}

export function calculateQuote({ design, material, quantity = 1, rush = false }) {
  const selectedDesign = DESIGNS[design];
  const materialMultiplier = MATERIAL_MULTIPLIERS[material];
  const itemCount = Number(quantity);

  if (!selectedDesign || !materialMultiplier || !Number.isInteger(itemCount) || itemCount < 1 || itemCount > 25) {
    throw new TypeError("Choose a supported design, material, and quantity.");
  }

  if (rush && !selectedDesign.rushEligible) {
    return {
      available: false,
      message: `${selectedDesign.name} is too large for 24-hour rush printing.`,
    };
  }

  const subtotal = selectedDesign.price * materialMultiplier * itemCount;
  const discountRate = getVolumeDiscount(itemCount);
  const savings = subtotal * discountRate;
  const discountedSubtotal = subtotal - savings;
  const total = rush ? discountedSubtotal * RUSH_MULTIPLIER : discountedSubtotal;

  return {
    available: true,
    quantity: itemCount,
    discountRate,
    savings: Math.round(savings * 100) / 100,
    total: Math.round(total * 100) / 100,
    turnaround: rush ? "Ready within 24 hours" : "Ready in 3–5 business days",
  };
}
