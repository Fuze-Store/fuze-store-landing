/**
 * List of plan helpers
 *
 * @module PlanHelper
 * @category Helpers
 *
 */

import { PlanFeature, SubscriptionPlan } from '@/enums/subscription.enum';
import { Plan, PlanFeatureValue } from '@/types/plan';

// TODO: Implement feature labels
export const featureLabels: Record<string, string> = {
  dashboard: 'Dashboard',
  pos: 'Point of Sales',
  event_basic: 'Basic Events',
  event_advanced: 'Advanced Events',
  area: 'Area Management',
  unit: 'Table/Room Management',
  transactions: 'Sale Transactions',
  refunds: 'Refunds',
  catalogs: 'Catalog Management',
  staffs: 'Staffs',
  customers: 'Customers',
  roles_and_permissions: 'Roles and Permissions',
  import_data: 'Import Data',
  export_data: 'Export Data',
  order_histories: 'Order Histories',
  waiting_list: 'Waiting List',
  taxes: 'Taxes',
  gift_cards: 'Gift Cards',
  reports_basic: 'Basic Reports',
  reports_advanced: 'Advanced Reports',
  discounts_basic: 'Basic Discounts',
  discounts_advanced: 'Advanced Discounts',
  store_session: 'Store Session',
  email_notifications: 'Email Notifications',
  sms_notifications: 'SMS Notifications',
  printer: 'Printer Integration',
  ai_agent: 'AI Assistant',
  store_limit: 'Store Limit',
  realtime_sync: 'Real-time Sync',
};

/**
 * Returns the features that are unique to a specific plan compared to all lower-tier plans.
 *
 * The function compares the features of the target plan against all plans lower in the hierarchy.
 * A feature is considered unique if all lower-tier plans either lack the feature or have a strictly lesser value.
 * Supports boolean and numeric feature values.
 *
 * @param planCode - The code of the target plan to compare (case-insensitive).
 * @param plans - An array of all available plans, each with a code and features.
 * @returns An object mapping feature keys to their unique values for the target plan.
 * @throws If the plan code is invalid or the plan is not found in the provided plans array.
 */
export function getUniqueFeaturesByPlan(
  planCode: SubscriptionPlan,
  plans: Plan[],
) {
  const hierarchy = ['FREETRIAL', 'BASIC', 'STARTER', 'STANDARD', 'PREMIUM'];
  const targetIndex = hierarchy.indexOf(planCode.toUpperCase());
  if (targetIndex === -1) throw new Error('Invalid plan code');

  const targetPlan = plans.find((p) => p.code === planCode.toUpperCase());
  if (!targetPlan) throw new Error('Plan not found');

  const lowerPlans = plans.filter(
    (p) => hierarchy.indexOf(p.code) < targetIndex,
  );

  const uniqueFeatures: Plan['features'] = {};

  // 1️⃣ Find features unique/improved vs lower plans
  for (const [featureKey, featureValue] of Object.entries(
    targetPlan.features,
  )) {
    const isUnique = lowerPlans.every((lp) => {
      const lowerValue = lp.features[featureKey];
      if (typeof featureValue === 'boolean') {
        return featureValue && !lowerValue;
      }
      if (typeof featureValue === 'number' && typeof lowerValue === 'number') {
        return featureValue > lowerValue;
      }
      return featureValue !== lowerValue;
    });

    if (isUnique) uniqueFeatures[featureKey] = featureValue;
  }

  return uniqueFeatures;
}

/**
 * Returns an array of unique feature names for a given subscription plan.
 *
 * @param planCode - The code representing the subscription plan to retrieve features for.
 * @param plans - An array of available plans to search for unique features.
 * @returns An array of strings representing the names of unique features for the specified plan.
 */
export function getUniqueKeyFeaturesByPlan(
  planCode: SubscriptionPlan,
  plans: Plan[],
) {
  const uniqueFeatures = getUniqueFeaturesByPlan(planCode, plans);
  return Object.keys(uniqueFeatures);
}

export function getDifferentFeaturesValues(
  plans: Plan[],
): Record<string, Record<string, PlanFeatureValue>> {
  const targetPlan = plans.find((p) => p.code === SubscriptionPlan.PREMIUM);
  if (!targetPlan) return {};

  const differentFeatures: Record<
    string,
    Record<string, PlanFeatureValue>
  > = {};

  // Find features that differ from any other plan (lower OR higher)
  for (const [featureKey, featureValue] of Object.entries(
    targetPlan.features,
  )) {
    const otherValues = plans.map((p) => p.features[featureKey]);
    const hasDifference = otherValues.some((v) => v !== featureValue);

    if (hasDifference) {
      differentFeatures[featureKey] = Object.fromEntries(
        plans.map((p) => [p.code, p.features[featureKey]]),
      );
    }
  }

  return differentFeatures;
}

export function getFeatureValue(value: PlanFeatureValue, feature: string) {
  if (feature === 'pos' && typeof value === 'number') {
    return `${value} orders / month`;
  }

  if (feature === 'transactions' && typeof value === 'number') {
    return `up to last ${value} months`;
  }

  if (
    (feature === PlanFeature.STORE_LIMIT ||
      feature === PlanFeature.EVENT_ADVANCED ||
      feature === PlanFeature.STAFFS ||
      feature === PlanFeature.UNIT ||
      feature === PlanFeature.POS ||
      feature === PlanFeature.TRANSACTIONS ||
      feature === PlanFeature.CATALOGS ||
      feature === PlanFeature.CUSTOMERS ||
      feature === PlanFeature.SMS_NOTIFICATIONS ||
      feature === PlanFeature.AI_AGENT ||
      feature === PlanFeature.AREA) &&
    value === true
  ) {
    return 'Unlimited';
  }

  if (value === true) {
    return 'Included';
  } else if (typeof value === 'number') {
    return Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(
      value,
    );
  } else if (typeof value === 'string') {
    return value;
  }

  return '--';
}
