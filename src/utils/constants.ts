import { SocialProvider } from '@/enums/socialProviders.enum';

export const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

/***********************
 *       SOCIAL        *
 ***********************/

export const SOCIAL_PROVIDERS = [
  SocialProvider.FACEBOOK,
  SocialProvider.GOOGLE,
];

export const SOCIAL_LINKS = {
  facebook: 'https://web.facebook.com/profile.php?id=61580336897253',
  viber:
    'https://invite.viber.com/?g2=AQBjWRnR0%2B5AhlVPjtSKqBZRo%2BgLxIe2GipjXl7aQBgkfWVuwl6pi0f7ZnGcgWbM',
  youtube: 'https://www.youtube.com/@fuzestore',
  tiktok: 'https://www.tiktok.com/',
};

/***********************
 *        EMAIL        *
 ***********************/

/**
 * email resend cooldown (in seconds)
 */
export const EMAIL_RESEND_COOLDOWN = 120; // seconds
