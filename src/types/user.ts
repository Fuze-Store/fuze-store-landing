import { SocialProvider } from '@/enums/socialProviders.enum';
import { Address } from '@/types/address';
import { Subscription } from '@/types/subscription';

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
