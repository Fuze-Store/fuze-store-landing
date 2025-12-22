import type { SocialProvider } from '@/enums/socialProviders.enum';
import type { Address } from '@/types/address';
import type { Subscription } from '@fuze-store/fuze-store-shared';

export interface User {
  id: string;
  createdAt: string;
  email: string;
  isVerified: boolean;
  updatedAt: string;
  username: string;
  address?: Address;
  info?: UserInfo;
  providers?: UserProvider[];
  subscription?: Subscription;
}

export type UserInfo = {
  id: string;
  avatar: string | null;
  firstName: string;
  fullName: string;
  initials: string;
  lastName: string;
};

export type UserProvider = {
  id: string;
  avatar: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  provider: SocialProvider;
  providerId: string;
  updatedAt: string;
};
