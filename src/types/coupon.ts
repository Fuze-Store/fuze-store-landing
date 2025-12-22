import {
  ApiErrorResponse,
  ApiSuccessResponse,
  Coupon,
} from '@fuze-store/fuze-store-shared';

export type CouponValidatePayload = { couponCode: string };
export type CouponValidatePayloadError = { couponCode: string[] };
export type CouponValidateResponse = ApiSuccessResponse & { data: Coupon };
export type CouponValidateErrorResponse = Omit<ApiErrorResponse, 'errors'> & {
  errors?: Partial<CouponValidatePayloadError>;
};
