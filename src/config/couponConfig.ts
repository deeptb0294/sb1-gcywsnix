export interface Coupon {
  code: string;
  discount: number;
  description: string;
}

export const coupons: Record<string, Coupon> = {
  'WELCOME10': {
    code: 'WELCOME10',
    discount: 0.1,
    description: '10% off on your first purchase'
  },
  'SPECIAL20': {
    code: 'SPECIAL20',
    discount: 0.2,
    description: '20% off special discount'
  },
  'EXPORTS60': {
    code: 'EXPORTS60',
    discount: 0.6,
    description: '60% off mega discount'
  }
};