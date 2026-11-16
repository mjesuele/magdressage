export const siteName = 'MAG Dressage';
export const location = 'North Salem, New York';
export const inquiryLabel = 'Inquire About Training';

export const pages = {
  home: {
    href: '/',
    label: 'Home',
    title: 'MAG Dressage — Dressage Training in North Salem, NY',
    description: 'Boutique dressage training in North Salem, New York, for developing horses, ambitious amateurs, and competitive partnerships.',
  },
  about: {
    href: '/about',
    label: 'About Maia',
    title: 'About Maia Gromadowski — MAG Dressage',
    description: 'Meet Maia Gromadowski, FEI dressage rider and USDF Silver Medalist, and learn about her approach to developing horses and riders.',
  },
  training: {
    href: '/services',
    label: 'Board & Training',
    title: 'Board & Training — MAG Dressage',
    description: 'Explore MAG Dressage’s full-training program, daily horse care, and opportunities for instruction, clinics, and competition.',
  },
  facility: {
    href: '/facility',
    label: 'Facility',
    title: 'The Facility at Comfortside Farm — MAG Dressage',
    description: 'Explore MAG Dressage at Comfortside Farm in North Salem, with Lawton Adams indoor footing, a marked dressage arena, and varied training spaces.',
  },
  contact: {
    href: '/contact',
    label: 'Contact',
    title: 'Contact MAG Dressage — Training Inquiries',
    description: 'Contact MAG Dressage in North Salem, New York, to discuss your horse, your goals, and the full-training program.',
  },
} as const;

export type Page = keyof typeof pages;

export const contact = {
  email: 'magdressage2024@gmail.com',
  phone: '(860) 985-7170',
  telephone: 'tel:+18609857170',
  address: ['24 Baxter Rd', 'North Salem, NY 10560'],
} as const;

export const inquiryEmail = `mailto:${contact.email}?subject=Full-training%20inquiry`;

export const social = [
  { label: 'Instagram', name: '@maiaanagromadowski', href: 'https://www.instagram.com/maiaanagromadowski/' },
  { label: 'Facebook', name: 'Maia Ana Gromadowski', href: 'https://www.facebook.com/maia.gromadowski/' },
] as const;
