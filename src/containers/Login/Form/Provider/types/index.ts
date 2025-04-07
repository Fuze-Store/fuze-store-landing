import * as z from 'zod';

export const schema = z.object({
  email: z.string().min(1, 'Email is required').email(),
  password: z.string().min(1, 'Password is required'),
});
export type FormInputs = z.infer<typeof schema>;

export interface FormContext {
  submit: () => void;
}
