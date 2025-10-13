import type { SocialProvider } from '@/enums/socialProviders.enum';
import type { StringArray, ValueOf } from '@/types';
import type { Address } from '@/types/address';
import type {
  ApiErrorResponse,
  ApiSuccessResponse,
  Subscription,
} from '@fuze-store/fuze-store-shared';

// ---- ACCOUNT

export interface Account {
  id: string;
  createdAt: string;
  email: string;
  isVerified: boolean;
  updatedAt: string;
  username: string;
  address?: Address;
  info: AccountInfo;
  providers?: AccountProvider[];
  subscription?: Subscription;
}

export type AccountInfo = {
  id: string;
  avatar: string | null;
  firstName: string;
  fullName: string;
  initials: string;
  lastName: string;
};

export type AccountProvider = {
  id: string;
  avatar: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  provider: SocialProvider;
  providerId: string;
  updatedAt: string;
};

export type AccountDetailsResponse = ApiSuccessResponse & {
  data: Account;
};

export type AccountDetailsErrorResponse = ApiErrorResponse & {
  errors?: AccountDetailsPayloadError;
};

export type AccountDetailsPayloadError = {
  username: string[];
  info: {
    firstName: string[];
    lastName: string[];
  };
};

export type AccountDetailsPayload = {
  username: string;
  info: {
    firstName: string;
    lastName: string;
  };
};

// ---- ACCOUNT ADDRESS

export type AccountAddressResponse = ApiSuccessResponse & {
  data: Address;
};
export type AccountAddressErrorResponse = ApiErrorResponse & {
  errors: AddressPayloadError;
};

export type AddressPayload = Omit<Address, 'id'>;
export type AddressPayloadError = StringArray<Omit<Address, 'id'>>;

// ---- ACCOUNT EMAIL

export type AccountEmailErrorResponse = ApiErrorResponse & {
  errors: AccountEmailPayloadError;
};

export type AccountEmailPayload = { email: string };
export type AccountEmailPayloadError = StringArray<AccountEmailPayload>;

// ---- RTK
export interface RTKAccountState {
  emailResendDate: {
    unix: number | null;
  };
}
export type PayloadUpdateAccountFields = {
  key: keyof RTKAccountState;
  value: ValueOf<RTKAccountState>;
};
export type PayloadResetAccountFields = [keyof RTKAccountState] | undefined;
