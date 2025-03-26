/**
 * List of store enums
 *
 * @module StoreEnums
 * @category Enums
 *
 */

export const enum StoreStatus {
  CLOSED = 0,
  OPEN = 1,
}

export const enum StoreVolume {
  FEW = 0,
  MODERATE = 1,
  FULL = 2,
}

export enum ServiceMode {
  DELIVERY = 'DELIVERY',
  IN_STORE = 'IN_STORE',
  PICK_UP = 'PICK_UP',
  SERVICE = 'SERVICE',
  TAKE_AWAY = 'TAKE_AWAY',
}

export enum StoreClassification {
  FOOD = 'FOOD',
  ITEM = 'ITEM',
  SERVICE = 'SERVICE',
  VIRTUAL = 'VIRTUAL',
}

export enum StoreType {
  CARWASH = 'CARWASH',
  COFFEE_SHOP = 'COFFEE_SHOP',
  DENTAL = 'DENTAL',
  DERMA = 'DERMA',
  FOOD = 'FOOD',
  HARDWARE = 'HARDWARE',
  LAUNDRY = 'LAUNDRY',
  VAPE = 'VAPE',
  OTHERS = 'OTHERS',
}

export const enum StoreExportTypes {
  CSV = 'csv',
  XLS = 'xls',
  XLSX = 'xlsx',
}

export enum StoreUnitStatus {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
  OCCUPIED = 'OCCUPIED',
  RESERVED = 'RESERVED',
}

export enum StoreSessionStatus {
  ACTIVE = 'ACTIVE',
  CLOSED = 'CLOSED',
}
