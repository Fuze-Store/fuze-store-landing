/**
 * List of subscription enums
 *
 * @module SubscriptionEnums
 * @category Enums
 *
 */

export enum SubscriptionStatus {
  ACTIVE = 'ACTIVE',
  PENDING = 'PENDING',
  CANCELED = 'CANCELED',
}

export enum SubscriptionInvoiceStatus {
  PAID = 'PAID',
  PENDING = 'PENDING',
}

export enum SubscriptionPlan {
  FREETRIAL = 'FREETRIAL',
  BASIC = 'BASIC',
  STARTER = 'STARTER',
  STANDARD = 'STANDARD',
  ENTERPRISE = 'ENTERPRISE',
}
