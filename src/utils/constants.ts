import { SocialProvider } from '@/enums/socialProviders.enum';

export const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

/***********************
 *       SOCIAL        *
 ***********************/

export const SOCIAL_LINKS = [SocialProvider.FACEBOOK, SocialProvider.GOOGLE];

/***********************
 *        EMAIL        *
 ***********************/

/**
 * email resend cooldown (in seconds)
 */
export const EMAIL_RESEND_COOLDOWN = 120; // seconds
