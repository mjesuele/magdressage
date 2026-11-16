import type { ImageMetadata } from 'astro';
import homeRidingMobile from '../../resources/assets/IMG-5537.JPG';
import aboutPortrait from '../../resources/assets/IMG-5539.JPG';
import homeRiding from '../../resources/assets/IMG-5542.JPG';
import horseCare from '../../resources/assets/IMG-5544.JPG';
import viewingLounge from '../../resources/assets/IMG-5549.JPG';
import riderLounge from '../../resources/assets/IMG-5550.JPG';
import indoorInstruction from '../../resources/assets/IMG-5553.JPG';
import barnExterior from '../../resources/assets/IMG-5556.JPG';
import indoorArena from '../../resources/assets/IMG-5557.JPG';
import outdoorArena from '../../resources/assets/IMG-5558.JPG';
import dressageTraining from '../../resources/assets/IMG-5584.JPG';
import roundPen from '../../resources/assets/IMG-5590.JPG';
import riderCubbies from '../../resources/assets/IMG-5595.JPG';
import farmPath from '../../resources/assets/IMG-5868.JPG';
import waterTreadmill from '../../resources/assets/IMG-5869.JPG';

export const photoCredit = 'Bethany P Photography';
const suppliedPhoto = {
  photographer: 'Bethany Pastorial (Bethany P Photography LLC)',
  usage: 'Matt confirmed website-use rights. Footer credit is voluntary and requested by Matt.',
};

export interface PhotoAsset {
  label: string;
  // Exact export filename. Verify the reported subject against the original.
  candidate: string;
  subject: string;
  role: string;
  // Fill these once the original and its usage permission are reviewed.
  original?: string;
  photographer?: string;
  usage?: string;
  credit?: string;
  image?: ImageMetadata;
  alt?: string;
  focalPoint?: { desktop: string; mobile: string };
}

export interface PhotoSlot extends PhotoAsset {
  mobile?: PhotoAsset;
}

export const photos = {
  'home-maia-riding-milena': {
    ...suppliedPhoto,
    label: 'Maia riding Milena — desktop hero',
    candidate: 'IMG_5542.jpeg',
    original: 'IMG-5542.JPG',
    subject: 'Maia riding Milena between evergreens',
    role: 'Proposed desktop Home hero from Maia’s alternative',
    image: homeRiding,
    alt: 'Maia riding her gray mare, Milena, outdoors.',
    focalPoint: { desktop: '52% 92%', mobile: '52% 92%' },
    mobile: {
      ...suppliedPhoto,
      label: 'Maia riding Milena — mobile hero',
      candidate: 'IMG_5537.jpeg',
      original: 'IMG-5537.JPG',
      subject: 'Portrait of Maia riding Milena alongside a hedge',
      role: 'Maia’s selected mobile Home hero',
      image: homeRidingMobile,
      alt: 'Maia riding her gray mare, Milena, outdoors.',
      focalPoint: { desktop: '50% 88%', mobile: '50% 88%' },
    },
  },
  'about-maia-with-milena': {
    ...suppliedPhoto,
    label: 'Maia with Milena and her dog',
    candidate: 'IMG_5539.jpeg',
    original: 'IMG-5539.JPG',
    subject: 'Maia with Milena and her dog',
    role: 'Maia’s selected About portrait, also used on the Home link',
    image: aboutPortrait,
    alt: 'Maia standing beside her gray mare, Milena.',
    focalPoint: { desktop: '50% 30%', mobile: '50% 30%' },
  },
  'training-maia-teaching': {
    ...suppliedPhoto,
    label: 'Instruction in the indoor arena',
    candidate: 'IMG_5553.jpeg',
    original: 'IMG-5553.JPG',
    subject: 'Instruction in the indoor arena',
    role: 'Board & Training lead and Home link',
    image: indoorInstruction,
    alt: 'An instructor stands beside a mounted rider in the indoor arena.',
    focalPoint: { desktop: '58% 60%', mobile: '58% 60%' },
  },
  'training-dressage': {
    ...suppliedPhoto,
    label: 'Dressage training in the indoor',
    candidate: 'IMG_5584.jpeg',
    original: 'IMG-5584.JPG',
    subject: 'Dressage training in the indoor',
    role: 'Board & Training full-training support',
    image: dressageTraining,
    alt: 'A rider schools a dark horse beside the mirrors in the indoor arena.',
    focalPoint: { desktop: '50% 85%', mobile: '50% 85%' },
  },
  'training-horsemanship': {
    ...suppliedPhoto,
    label: 'Maia interacting with a horse',
    candidate: 'IMG_5544.jpeg',
    original: 'IMG-5544.JPG',
    subject: 'A handler with a dark horse',
    role: 'Board & Training horse-care support',
    image: horseCare,
    alt: 'A handler reaches up to a dark horse beside the round pen.',
  },
  'facility-indoor-arena': {
    ...suppliedPhoto,
    label: 'Indoor arena',
    candidate: 'IMG_5557.jpeg',
    original: 'IMG-5557.JPG',
    subject: 'Indoor arena',
    role: 'Facility lead and Home link',
    image: indoorArena,
    alt: 'Sunlight falls across the indoor arena beneath its timber roof.',
    focalPoint: { desktop: '50% 76%', mobile: '50% 68%' },
  },
  'facility-barn-exterior': {
    ...suppliedPhoto,
    label: 'Comfortside Farm exterior',
    candidate: 'IMG_5556(1).jpeg',
    original: 'IMG-5556.JPG',
    subject: 'Barn exterior',
    role: 'Facility introduction',
    image: barnExterior,
    alt: 'The barn at Comfortside Farm has black siding, stone walls, and white doors.',
  },
  'facility-outdoor-arena': {
    ...suppliedPhoto,
    label: 'Outdoor dressage arena',
    candidate: 'IMG_5558.jpeg',
    original: 'IMG-5558.JPG',
    subject: 'Outdoor dressage arena',
    role: 'Facility training gallery',
    image: outdoorArena,
    alt: 'The outdoor dressage arena framed by clipped hedges and autumn trees.',
  },
  'facility-round-pen': {
    ...suppliedPhoto,
    label: 'Oversized round pen',
    candidate: 'IMG_5590(1).jpeg',
    original: 'IMG-5590.JPG',
    subject: 'Round pen in use',
    role: 'Facility training gallery',
    image: roundPen,
    alt: 'A handler works a dark horse in the round pen.',
    focalPoint: { desktop: '57% 50%', mobile: '57% 50%' },
  },
  'facility-water-treadmill': {
    ...suppliedPhoto,
    label: 'Water treadmill',
    candidate: 'IMG-5869.JPG',
    original: 'IMG-5869.JPG',
    subject: 'Equine water treadmill',
    role: 'Facility care feature',
    image: waterTreadmill,
    alt: 'Side view of the equine water treadmill showing its railings and control panel.',
    focalPoint: { desktop: '50% 58%', mobile: '50% 58%' },
  },
  'facility-viewing-lounge': {
    ...suppliedPhoto,
    label: 'Indoor viewing lounge',
    candidate: 'IMG_5549.jpeg',
    original: 'IMG-5549.JPG',
    subject: 'Indoor viewing lounge',
    role: 'Facility rider amenities',
    image: viewingLounge,
    alt: 'Chairs and a sofa in the lounge overlooking the indoor arena.',
  },
  'facility-rider-lounge': {
    ...suppliedPhoto,
    label: 'Rider lounge',
    candidate: 'IMG_5550.jpeg',
    original: 'IMG-5550.JPG',
    subject: 'Rider lounge',
    role: 'Facility rider amenities',
    image: riderLounge,
    alt: 'Saddles line one wall of the rider lounge beside a sofa and coffee table.',
  },
  'facility-rider-cubbies': {
    ...suppliedPhoto,
    label: 'Rider equipment cubbies',
    candidate: 'IMG-5595.JPG',
    original: 'IMG-5595.JPG',
    subject: 'Rider equipment storage',
    role: 'Facility rider amenities',
    image: riderCubbies,
    alt: 'Wooden cubbies hold riding helmets and tall boots.',
    focalPoint: { desktop: '50% 60%', mobile: '50% 60%' },
  },
  'facility-farm-path': {
    ...suppliedPhoto,
    label: 'Comfortside Farm grounds',
    candidate: 'IMG-5868.JPG',
    original: 'IMG-5868.JPG',
    subject: 'Tree-lined path',
    role: 'Facility closing gallery',
    image: farmPath,
    alt: 'A tree-lined path runs beside a fence at Comfortside Farm.',
  },
} satisfies Record<string, PhotoSlot>;

export type Photo = keyof typeof photos;
