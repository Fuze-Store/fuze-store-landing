import { CouponDiscountType, CouponDurationType } from '@/enums/coupon.enum';
import { ApiErrorResponse, ApiSuccessResponse } from '@/types';

export interface Coupon {
  id: string;
  code: string;
  description: string | null;
  discountType: CouponDiscountType;
  discountValue: number;
  durationType: CouponDurationType;
  durationInMonths: number | null;
  maxRedemptions: number;
  redeemCount: number;
  expiresAt: string | null;
  createdAt: string;
  updatedAt: string;
}
export type CouponValidatePayload = { code: string };
export type CouponValidatePayloadError = { code: string[] };
export type CouponValidateResponse = ApiSuccessResponse & { data: Coupon };
export type CouponValidateErrorResponse = Omit<ApiErrorResponse, 'errors'> & {
  errors?: Partial<CouponValidatePayloadError>;
};
