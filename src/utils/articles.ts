import { Guide } from '@/types/doc';

export const guides: Guide[] = [
  {
    title: 'Getting Started',
    description:
      'Learn how to create your store, set up your POS. Perfect for new users who want a smooth and easy setup experience.',
    links: [
      { href: '/docs/getting-started', text: 'Getting Started Guide' },
      { href: '/docs/account/create-an-account', text: 'Create an Account' },
      { href: '/docs/account/creating-a-store', text: 'Creating a Store' },
      {
        href: '/docs/account/upgrading-subscription',
        text: 'Upgrading Subscription',
      },
    ],
  },
  {
    title: 'Point of Sale (POS)',
    description:
      'Step-by-step help for using your POS register, managing orders, and handling sales events.',
    links: [
      {
        href: '/docs/store/pos_register',
        text: 'Using the POS Register/Terminal',
        links: [
          {
            href: '/docs/store/order/creating-an-order',
            text: 'Creating an Order',
          },
          {
            href: '/docs/store/order/updating-an-order',
            text: 'Updating an Order',
          },
        ],
      },
      { href: '/docs/store/pos_orders', text: 'Managing Orders' },
      {
        href: '/docs/store/pos_event_basic',
        text: 'Appointments and Reservations',
      },
      { href: '/docs/store/pos_unit', text: 'Using Area and Unit' },
    ],
  },
  {
    title: 'Sales',
    description:
      'Everything you need to know about tracking orders, payments, and processing refunds.',
    links: [
      {
        href: '/docs/store/order/overview',
        text: 'Order Overview',
        links: [
          {
            href: '/docs/store/order/history',
            text: 'Managing Orders',
          },
          {
            href: '/docs/store/order/closing-an-order',
            text: 'Closing an Order',
          },
          {
            href: '/docs/store/order/status-flow',
            text: 'How order status flow works',
          },
          {
            href: '/docs/store/order/completing-an-order',
            text: 'Different ways to customize order flows',
          },
        ],
      },
      {
        href: '/docs/store/transaction/overview',
        text: 'Transaction Overview',
      },
      { href: '/docs/store/order/refunds', text: 'Refunds' },
    ],
  },
  {
    title: 'Catalog',
    description:
      'Organize your products, services, and add-ons for a smooth selling experience.',
    links: [
      {
        href: '/docs/store/category/overview',
        text: 'Categories Overview',
        links: [
          {
            href: '/docs/store/category/creating-a-category',
            text: 'Creating a Category',
          },
          {
            href: '/docs/store/category/updating-a-category',
            text: 'Updating a Category',
          },
          {
            href: '/docs/store/category/deleting-a-category',
            text: 'Deleting a Category',
          },
        ],
      },
      {
        href: '/docs/store/product/overview',
        text: 'Products Overview',
        links: [
          {
            href: '/docs/store/product/creating-a-product',
            text: 'Creating a Product',
          },
          {
            href: '/docs/store/product/updating-a-product',
            text: 'Updating a Product',
          },
          {
            href: '/docs/store/product/deleting-a-product',
            text: 'Deleting a Product',
          },
        ],
      },
      {
        href: '/docs/store/service/overview',
        text: 'Services Overview',
        links: [
          {
            href: '/docs/store/service/creating-a-service',
            text: 'Creating a Service',
          },
          {
            href: '/docs/store/service/updating-a-service',
            text: 'Updating a Service',
          },
          {
            href: '/docs/store/service/deleting-a-service',
            text: 'Deleting a Service',
          },
        ],
      },
      {
        href: '/docs/store/modifier/overview',
        text: 'Modifiers Overview',
        links: [
          {
            href: '/docs/store/modifier/creating-a-modifier',
            text: 'Creating a Modifier',
          },
          {
            href: '/docs/store/modifier/updating-a-modifier',
            text: 'Updating a Modifier',
          },
          {
            href: '/docs/store/modifier/deleting-a-modifier',
            text: 'Deleting a Modifier',
          },
        ],
      },
    ],
  },
  {
    title: 'Store Settings',
    description:
      'Set up your store preferences, address, taxes, payment methods, and more.',
    links: [
      { href: '/docs/account_preferences', text: 'Preferences' },
      { href: '/docs/account_address', text: 'Store Address' },
      { href: '/docs/account_social', text: 'Social Links' },
      { href: '/docs/account_import', text: 'Import Data' },
      { href: '/docs/account_export', text: 'Export Data' },
      { href: '/docs/account_unit_area', text: 'Area and Unit Management' },
      { href: '/docs/account_session', text: 'Session Management' },
      {
        href: '/docs/account_roles_and_permissions',
        text: 'Roles & Permissions',
      },
    ],
  },
  {
    title: 'Charges and Payments',
    description:
      'Manage taxes, payment methods, discounts, and gift cards for your store.',
    links: [
      { href: '/docs/account_taxes', text: 'Taxes' },
      { href: '/docs/account_payment_methods', text: 'Payment Methods' },
      { href: '/docs/account_discounts', text: 'Discounts' },
      { href: '/docs/account_gift_cards', text: 'Gift Cards' },
    ],
  },
  {
    title: 'Users',
    description: 'Manage your customer list and staff accounts with ease.',
    links: [
      {
        href: '/docs/store/customer/overview',
        text: 'Customer Overview',
        links: [
          { href: '/docs/store/customer/overview', text: 'Managing Customers' },
          {
            href: '/docs/store/customer/creating-a-customer',
            text: 'Creating a customer',
          },
        ],
      },
      {
        href: '/docs/store/staff/overview',
        text: 'Staff Overview',
        links: [
          { href: '/docs/store/staff/overview', text: 'Managing Staffs' },
          {
            href: '/docs/store/staff/creating-a-staff',
            text: 'Creating a staff',
          },
        ],
      },
    ],
  },
  {
    title: 'Account',
    description: 'Manage multiple stores and your account settings.',
    links: [
      {
        href: '/docs/account/subscription',
        text: 'Subscriptions',
        links: [
          {
            href: '/docs/account/upgrading-subscription',
            text: 'Upgrading Subscription',
          },
          {
            href: '/docs/account/downgrading-subscription',
            text: 'Downgrading Subscription',
          },
          {
            href: '/docs/account/canceling-subscription',
            text: 'Canceling Subscription',
          },
        ],
      },
      { href: '/docs/account/profile', text: 'Profile Settings' },
      { href: '/docs/account/security', text: 'Security Settings' },
    ],
  },
  {
    title: 'App & Devices',
    description:
      'Set up printers, connect devices, and troubleshoot your POS hardware and app.',
    links: [
      {
        href: '/docs/store/app_printer',
        text: 'Printer Setup',
        links: [
          {
            href: '/docs/store/app_printer/connecting',
            text: 'Connecting a Printer',
          },
          {
            href: '/docs/store/app_printer/configuring',
            text: 'Configuring Printer Settings',
          },
          {
            href: '/docs/store/app_printer/troubleshooting',
            text: 'Printer Troubleshooting',
          },
        ],
      },
      {
        href: '/docs/store/app_devices',
        text: 'Device Connections',
        links: [
          {
            href: '/docs/store/app_devices/connecting',
            text: 'Connecting Devices',
          },
          {
            href: '/docs/store/app_devices/supported',
            text: 'Supported Devices',
          },
          {
            href: '/docs/store/app_devices/troubleshooting',
            text: 'Device Troubleshooting',
          },
        ],
      },
      { href: '/docs/store/app_faq', text: 'App & Device FAQs' },
    ],
  },
];
