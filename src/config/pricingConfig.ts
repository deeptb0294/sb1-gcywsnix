import type { PricingPlan } from '../types/pricing';

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 16999,
    features: [
      "Upto 2 min",
      "Basic color correction",
      "2-3 revisions",
      "72-hour delivery",
    ]
  },
  {
    id: "professional",
    name: "Professional",
    price: 24999,
    features: [
      "Upto 10 min",
      "Advanced color grading",
      "Custom effects",
      "4 revisions",
      "48-hour delivery",
    ]
  },
  {
    id: "premium",
    name: "Premium",
    price: 49999,
    features: [
      "Upto 25 min",
      "Professional color grading",
      "Complex effects & transitions",
      "Unlimited revisions",
      "Priority delivery",
    ]
  }
];