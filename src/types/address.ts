export interface Address {
  id: string;
  address1: string;
  address2?: string;
  neighborhood: string;
  city: string;
  province: string;
  postalCode: string | null;
  country: string;
}
