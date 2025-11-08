/**
 * App Endpoints
 *
 * @module Endpoints
 * @category Utils
 *
 */

export const endpoints = {
  account: {
    me: '/api/v1/account',
    update: '/api/v1/account',
    delete: '/api/v1/account',
    resendEmailVerification: '/api/v1/account/email/resend',
    changeEmail: '/api/v1/account/email/change',
    address: '/api/v1/account/address',
    createAddress: '/api/v1/account/address',
    updateAddress: '/api/v1/account/address',
    changePassword: '/api/v1/account/password',
    logout: '/api/v1/logout',

    refresh: '/api/v1/account/refresh',
    authenticateSocial: '/api/v1/account/social-login',
    sendOtp: '/api/v1/account/generate-otp',
    verifyOtp: '/api/v1/account/verify-phone-number',
    confirmEmail: '/api/v1/account/confirm-email',
  },
  accountInvoice: {
    list: '/api/v1/account/invoices',
    get: '/api/v1/account/invoices/:invoiceId',
    download: '/api/v1/account/invoices/:invoiceId/download',
  },
  accountSubscription: {
    get: '/api/v1/account/subscriptions',
    changePlan: '/api/v1/account/subscriptions/change-plan',
    reactivate: '/api/v1/account/subscriptions/reactivate',
    cancel: '/api/v1/account/subscriptions/cancel',
  },
  accountPaymentMethod: {
    session: '/api/v1/account/subscriptions/payment-methods/session',
    list: '/api/v1/account/subscriptions/payment-methods',
    create: '/api/v1/account/subscriptions/payment-methods',
    setDefault:
      '/api/v1/account/subscriptions/payment-methods/:paymentMethodId/set-default',
    delete: '/api/v1/account/subscriptions/payment-methods/:paymentMethodId',
  },
  auth: {
    register: '/api/v1/register',
    login: '/api/v1/login',
    logout: '/api/v1/logout',
    forgotPassword: '/api/v1/password/forgot',
    checkPassword: '/api/v1/password/check/:email/:token',
    resetPassword: '/api/v1/password/reset/:email/:token',
  },
  coupon: {
    validate: '/api/v1/coupons/validate',
    apply: '/api/v1/coupons/apply',
  },
  newsletter: {
    subscribe: '/api/v1/newsletters/subscribe',
    unsubscribe: '/api/v1/newsletters/unsubscribe',
  },
  social: {
    login: '/api/v1/social/login',
    link: '/api/v1/social/link',
    unlink: '/api/v1/social/unlink',
    callback: '/api/v1/social/login/:provider/callback',
  },
  subscriptionPlan: {
    list: '/api/v1/subscriptions/plans',
  },
  support: {
    query: '/api/v1/support/query',
  },
};

export default endpoints;
