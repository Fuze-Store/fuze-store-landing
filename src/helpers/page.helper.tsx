import BusinessIcon from '@mui/icons-material/Business';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SecurityIcon from '@mui/icons-material/Security';

export const paths = {
  home: '/',
  openApp: '/open-app',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  features: '/features',
  aboutUs: '/about-us',
  contactUs: '/contact-us',
  services: '/services',
  pricing: '/pricing',
  docs: '/docs',
  helpCenter: '/help-center',
  account: '/account',
  accountInfo: '/account/info',
  accountEdit: '/account/edit',
  accountInvoice: '/account/invoices',
  accountAddress: '/account/address',
  accountChangeEmail: '/account/change-email',
  accountSecurity: '/account/security',
  accountSecurityPassword: '/account/security/password',
  accountSubscription: '/account/subscription',
  accountSubscriptionChoosePlan: '/account/subscription/plans',
  accountPaymentMethodDetails: '/account/payment-methods/[id]',
};

export const authPages = ['/login', '/register', '/forgot-password'];

export const navPages = [
  {
    path: paths.home,
    label: 'Home',
  },
  {
    path: paths.features,
    label: 'Features',
  },
  {
    path: paths.pricing,
    label: 'Pricing',
  },
  {
    path: paths.aboutUs,
    label: 'About Us',
  },
  {
    path: paths.helpCenter,
    label: 'Help Center',
  },
  {
    path: paths.contactUs,
    label: 'Contact Us',
  },
];

export const accountPages = [
  {
    path: paths.account,
    label: 'Account',
    icon: <PersonIcon />,
  },
  {
    path: paths.accountSubscription,
    label: 'Subscription',
    icon: <CurrencyExchangeIcon />,
  },
  {
    path: paths.accountSecurity,
    label: 'Security',
    icon: <SecurityIcon />,
  },
  {
    path: paths.accountAddress,
    label: 'Address',
    icon: <BusinessIcon />,
  },
  {
    path: paths.accountInvoice,
    label: 'Invoices',
    icon: <ReceiptIcon />,
  },
];
