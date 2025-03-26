import { AvailableCountry } from '@/enums/country.enum';
import { AvailableCurrency } from '@/enums/currencies.enum';
import { StoreClassification } from '@/enums/store.enum';
import { Address } from '@/types/address';

export interface Store {
  id: string;
  name: string;
  logo: string | null;
  isActive: boolean;
  currency: AvailableCurrency;
  country: AvailableCountry;
  classifications?: Classification[];
  createdAt: string;
  updatedAt: string;
  address?: Address | null;
  //   social?: StoreSocial;
  //   contacts?: StoreContact[];
  //   serviceModes?: StoreServiceMode[];
  //   tags?: StoreTag[];
  //   metadata?: UserStoreMetadata;
  //   subscription?: StoreSubscription;
}

export type Classification = {
  id: string;
  classification: StoreClassification;
};
