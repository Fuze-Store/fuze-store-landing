import { Guide } from '@/types/doc';

export const guides: Guide[] = [
  {
    title: 'Dashboard',
    description:
      'Learn how to navigate your main dashboard, view key stats, and access important store information at a glance.',
    links: [
      { href: '/docs/dashboard', text: 'How to use your Dashboard' },
      { href: '/docs/store_reports', text: 'Viewing Store Reports' },
    ],
  },
  {
    title: 'Point of Sale (POS)',
    description:
      'Step-by-step help for using your POS register, managing orders, and handling sales events.',
    links: [
      { href: '/docs/pos_register', text: 'Using the POS Register' },
      { href: '/docs/pos_orders', text: 'Managing Orders' },
      { href: '/docs/pos_event_basic', text: 'Basic Events (Sales, Returns)' },
      {
        href: '/docs/pos_event_advanced',
        text: 'Advanced Events (Discounts, Voids)',
      },
      { href: '/docs/pos_unit', text: 'Units & Quantities' },
    ],
  },
  {
    title: 'Sales',
    description:
      'Everything you need to know about tracking orders, payments, and processing refunds.',
    links: [
      { href: '/docs/sales_order_history', text: 'Order History' },
      { href: '/docs/sales_transactions', text: 'Sales & Payments' },
      { href: '/docs/sales_refunds', text: 'Refunds' },
    ],
  },
  {
    title: 'Catalog',
    description:
      'Organize your products, services, and add-ons for a smooth selling experience.',
    links: [
      {
        href: '/docs/category/overview',
        text: 'Categories Overview',
        links: [
          {
            href: '/docs/category/creating-a-category',
            text: 'Creating a Category',
          },
          {
            href: '/docs/category/updating-a-category',
            text: 'Updating a Category',
          },
          {
            href: '/docs/category/deleting-a-category',
            text: 'Deleting a Category',
          },
        ],
      },
      { href: '/docs/catalog_products', text: 'Products' },
      { href: '/docs/catalog_services', text: 'Services' },
      { href: '/docs/catalog_modifiers', text: 'Modifiers (Add-ons)' },
    ],
  },
  {
    title: 'Customers & Staff',
    description: 'Manage your customer list and staff accounts with ease.',
    links: [
      { href: '/docs/user_customers', text: 'Managing Customers' },
      { href: '/docs/user_staffs', text: 'Managing Staff' },
    ],
  },
  {
    title: 'Store Settings',
    description:
      'Set up your store preferences, address, taxes, payment methods, and more.',
    links: [
      { href: '/docs/store_preferences', text: 'Preferences' },
      { href: '/docs/store_address', text: 'Store Address' },
      { href: '/docs/store_taxes', text: 'Taxes' },
      { href: '/docs/store_payment_methods', text: 'Payment Methods' },
      { href: '/docs/store_discounts', text: 'Discounts' },
      { href: '/docs/store_social', text: 'Social Links' },
      { href: '/docs/store_import', text: 'Import Data' },
      { href: '/docs/store_export', text: 'Export Data' },
      { href: '/docs/store_unit_area', text: 'Unit Area' },
      { href: '/docs/store_gift_cards', text: 'Gift Cards' },
      { href: '/docs/store_session', text: 'Session Management' },
      {
        href: '/docs/store_roles_and_permissions',
        text: 'Roles & Permissions',
      },
    ],
  },
  {
    title: 'Account',
    description: 'Manage multiple stores and your account settings.',
    links: [
      { href: '/docs/account_multistore', text: 'Multi-Store Management' },
    ],
  },
  {
    title: 'App & Devices',
    description: 'Set up printers and connect devices to your POS system.',
    links: [{ href: '/docs/app_printer', text: 'Printer Setup' }],
  },
];
