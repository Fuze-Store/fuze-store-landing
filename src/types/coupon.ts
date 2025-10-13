import {
  ApiErrorResponse,
  ApiSuccessResponse,
  Coupon,
} from '@fuze-store/fuze-store-shared';

export type CouponValidatePayload = { code: string };
export type CouponValidatePayloadError = { code: string[] };
export type CouponValidateResponse = ApiSuccessResponse & { data: Coupon };
export type CouponValidateErrorResponse = Omit<ApiErrorResponse, 'errors'> & {
  errors?: Partial<CouponValidatePayloadError>;
};
