import { Guide } from '@/types/doc';

export const guides: Guide[] = [
  {
    title: 'Getting Started',
    description:
      'Learn how to create your store, set up your POS. Perfect for new users who want a smooth and easy setup experience.',
    links: [
      { href: '/docs/what-is-fuze-store', text: 'What is Fuze Store' },
      { href: '/docs/getting-started', text: 'Getting Started Guide' },
      { href: '/docs/account/create-an-account', text: 'Create an Account' },
      { href: '/docs/store/creating-a-store', text: 'Creating a Store' },
      {
        href: '/docs/account/subscription/upgrading-subscription',
        text: 'Upgrading Subscription',
      },
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
    title: 'Point of Sale (POS)',
    description:
      'Step-by-step help for using your POS register, managing orders, and handling sales events.',
    links: [
      {
        href: '/docs/store/pos/using-pos-register',
        text: 'Using the POS Register/Terminal',
      },
      { href: '/docs/store/pos/managing-orders', text: 'POS Order Screens' },
      {
        href: '/docs/store/pos/event/overview',
        text: 'Events',
        links: [
          {
            href: '/docs/store/pos/event/creating-an-event',
            text: 'Creating an Event',
          },
          {
            href: '/docs/store/pos/event/updating-an-event',
            text: 'Updating an Event',
          },
          {
            href: '/docs/store/pos/event/canceling-an-event',
            text: 'Canceling an Event',
          },
        ],
      },
      {
        href: '/docs/store/pos/unit/overview',
        text: 'POS Unit (Area and Unit Management)',
        links: [
          {
            href: '/docs/store/pos/unit/updating-unit-status',
            text: 'Updating Unit Status',
          },
          {
            href: '/docs/store/pos/unit/making-an-order-with-unit',
            text: 'Making an Order in a Unit',
          },
        ],
      },
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
      },
      {
        href: '/docs/store/transaction/overview',
        text: 'Transaction Overview',
      },
      {
        href: '/docs/store/refund/overview',
        text: 'Refunds',
        links: [
          {
            href: '/docs/store/refund/completing-a-refund',
            text: 'Completing a Refund',
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
      {
        href: '/docs/store/setup-your-store-preference',
        text: 'Setup your store preference',
      },
      {
        href: '/docs/store/updating-store-info',
        text: 'Updating Store Information',
      },
      {
        href: '/docs/store/adding-store-address',
        text: 'Adding Store Address',
      },
      { href: '/docs/store/import-export-data', text: 'Import/Export Data' },
      {
        href: '/docs/store/area/overview',
        text: 'Area and Unit Management',
        links: [
          {
            href: '/docs/store/area/creating-an-area',
            text: 'Creating an Area',
          },
          {
            href: '/docs/store/area/updating-an-area',
            text: 'Updating an Area',
          },
          {
            href: '/docs/store/area/deleting-an-area',
            text: 'Deleting an Area',
          },
          {
            href: '/docs/store/area/creating-a-unit',
            text: 'Creating a Unit',
          },
          {
            href: '/docs/store/area/updating-a-unit',
            text: 'Updating a Unit',
          },
          {
            href: '/docs/store/area/deleting-a-unit',
            text: 'Deleting a Unit',
          },
        ],
      },
      { href: '/docs/store/using-store-session', text: 'Using Store Session' },
      {
        href: '/docs/store/roles-and-permission/overview',
        text: 'Roles & Permissions',
        links: [
          {
            href: '/docs/store/roles-and-permission/creating-a-role',
            text: 'Creating a Role',
          },
          {
            href: '/docs/store/staff/assigning-role',
            text: 'Assigning a Role',
          },
          {
            href: '/docs/store/roles-and-permission/updating-a-role',
            text: 'Updating a Role',
          },
          {
            href: '/docs/store/roles-and-permission/deleting-a-role',
            text: 'Deleting Role',
          },
        ],
      },
      {
        href: '/docs/store/transferring-ownership',
        text: 'Transferring Ownership',
      },
    ],
  },
  {
    title: 'Charges and Payments',
    description:
      'Manage taxes, payment methods, discounts, and gift cards for your store.',
    links: [
      {
        href: '/docs/store/tax/overview',
        text: 'Tax Overview',
        links: [
          {
            href: '/docs/store/tax/creating-a-tax',
            text: 'Creating a Tax',
          },
          {
            href: '/docs/store/tax/attaching-tax-to-item',
            text: 'Attaching Tax to Item',
          },
          {
            href: '/docs/store/tax/removing-tax-when-ordering',
            text: 'Removing Tax When Ordering',
          },
          {
            href: '/docs/store/tax/updating-a-tax',
            text: 'Updating a Tax',
          },
          {
            href: '/docs/store/tax/deleting-tax',
            text: 'Deleting a Tax',
          },
        ],
      },
      {
        href: '/docs/store/payment-method/overview',
        text: 'Payment Methods',
        links: [
          {
            href: '/docs/store/payment-method/adding-payment-methods',
            text: 'Adding Payment Methods to Store',
          },
          {
            href: '/docs/store/payment-method/removing-a-payment-method',
            text: 'Removing Payment Method from Store',
          },
          {
            href: '/docs/store/payment-method/adding-payment-to-order',
            text: 'Adding Payment to Order',
          },
        ],
      },
      {
        href: '/docs/store/discount/overview',
        text: 'Discounts',
        links: [
          {
            href: '/docs/store/discount/creating-a-discount',
            text: 'Creating a Discount',
          },
          {
            href: '/docs/store/discount/applying-discount-to-order',
            text: 'Applying a Discount to Order',
          },
          {
            href: '/docs/store/discount/updating-a-discount',
            text: 'Updating a Discount',
          },
          {
            href: '/docs/store/discount/deleting-a-discount',
            text: 'Deleting a Discount',
          },
        ],
      },
      {
        href: '/docs/store/gift-card/overview',
        text: 'Gift Cards',
        links: [
          {
            href: '/docs/store/gift-card/creating-a-gift-card',
            text: 'Creating a Gift Card',
          },
          {
            href: '/docs/store/gift-card/applying-gift-cards-to-order',
            text: 'Applying Gift Cards to Order',
          },
          {
            href: '/docs/store/gift-card/updating-a-gift-card',
            text: 'Updating a Gift Card',
          },
          {
            href: '/docs/store/gift-card/deleting-gift-card',
            text: 'Deleting a Gift Card',
          },
        ],
      },
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
          {
            href: '/docs/store/customer/managing-customers',
            text: 'Managing Customers',
          },
          {
            href: '/docs/store/customer/adding-customer-to-store',
            text: 'Adding a Customer to Store',
          },
          {
            href: '/docs/store/customer/updating-customer-info',
            text: 'Updating Customer Information',
          },
          {
            href: '/docs/store/customer/deleting-customer',
            text: 'Deleting a Customer',
          },
        ],
      },
      {
        href: '/docs/store/staff/overview',
        text: 'Staff Overview',
        links: [
          {
            href: '/docs/store/staff/managing-staffs',
            text: 'Managing Staffs',
          },
          {
            href: '/docs/store/staff/creating-a-staff',
            text: 'Adding a Staff to Store',
          },
          {
            href: '/docs/store/staff/resending-email-confirmation',
            text: 'Resending Email confirmation',
          },
          {
            href: '/docs/store/staff/assigning-role',
            text: 'Assigning Role',
          },
          {
            href: '/docs/store/staff/updating-staff-info',
            text: 'Updating Staff Information',
          },
          {
            href: '/docs/store/staff/deleting-staff',
            text: 'Deleting a Staff',
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
        href: '/docs/account/subscription/overview',
        text: 'Subscriptions',
        links: [
          {
            href: '/docs/account/subscription/upgrading-subscription',
            text: 'Upgrading Subscription',
          },
          {
            href: '/docs/account/subscription/downgrading-subscription',
            text: 'Downgrading Subscription',
          },
          {
            href: '/docs/account/subscription/canceling-subscription',
            text: 'Canceling Subscription',
          },
          {
            href: '/docs/account/subscription/adding-payment-method',
            text: 'Adding Payment Method',
          },
          {
            href: '/docs/account/subscription/removing-payment-method',
            text: 'Removing Payment Method',
          },
          {
            href: '/docs/account/subscription/set-default-payment-method',
            text: 'Setting Default Payment Method',
          },
        ],
      },
      {
        href: '/docs/account/overview',
        text: 'Account Overview',
        links: [
          {
            href: '/docs/account/updating-account-info',
            text: 'Updating Account Information',
          },
          {
            href: '/docs/account/changing-email',
            text: 'Changing Email',
          },
          {
            href: '/docs/account/linking-unlinking-social-accounts',
            text: 'Linking and Unlinking Social Accounts',
          },
        ],
      },
      { href: '/docs/store/switching-stores', text: 'How to Switch Stores' },
      {
        href: '/docs/account/security/overview',
        text: 'Security',
        links: [
          {
            href: '/docs/account/security/change-password',
            text: 'Change Password',
          },
        ],
      },
    ],
  },
  {
    title: 'Import and Export Data',
    description: 'Manage your data import and export processes efficiently.',
    links: [
      {
        href: '/docs/store/import/overview',
        text: 'Import Overview',
        links: [
          {
            href: '/docs/store/import/categories',
            text: 'Importing Categories',
          },
          {
            href: '/docs/store/import/products',
            text: 'Importing Products',
          },
          {
            href: '/docs/store/import/product-stocks',
            text: 'Importing Product Stocks',
          },
          {
            href: '/docs/store/import/services',
            text: 'Importing Services',
          },
          {
            href: '/docs/store/import/modifiers',
            text: 'Importing Modifiers',
          },
          {
            href: '/docs/store/import/taxes',
            text: 'Importing Taxes',
          },
          {
            href: '/docs/store/import/discounts',
            text: 'Importing Discounts',
          },
          {
            href: '/docs/store/import/areas',
            text: 'Importing Areas',
          },
          {
            href: '/docs/store/import/roles',
            text: 'Importing Roles',
          },
          {
            href: '/docs/store/import/gift-cards',
            text: 'Importing Gift Cards',
          },
          {
            href: '/docs/store/import/staffs',
            text: 'Importing Staffs',
          },
        ],
      },
      {
        href: '/docs/store/export/overview',
        text: 'Export Overview',
      },
    ],
  },
  {
    title: 'App & Devices',
    description:
      'Set up printers, connect devices, and troubleshoot your POS hardware and app.',
    links: [
      {
        href: '/docs/app/printer/setup',
        text: 'Printer Setup',
      },
      { href: '/docs/app/general-info', text: 'Knowing about app information' },
    ],
  },
  {
    title: 'Security',
    description:
      'Learn how to keep your account secure, manage passwords, and handle security settings.',
    links: [{ href: '/docs/account/forgot-password', text: 'Forgot Password' }],
  },
  {
    title: 'Other Resources',
    description:
      'Explore additional resources, guides, and documentation to enhance your experience.',
    links: [
      {
        href: '/docs/other/how-pos-pricing-works',
        text: 'How POS Pricing works',
      },
      {
        href: '/docs/other/how-account-subscription-works',
        text: 'How Account Subscription works',
      },
    ],
  },
];
