import { SocialProvider } from '@/enums/socialProviders.enum';

export const baseURL = 'http://localhost:3000/';

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
