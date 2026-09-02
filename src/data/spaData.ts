export interface Treatment {
  id: string;
  name: string;
  category: 'massages' | 'rituals';
  tagline: string;
  description: string;
  duration: string;
  price: string;
  benefits: string[];
  image: string;
  scents: string[];
  recommendedMood?: string;
}

export interface SignatureCard {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  highlight: string;
  ritualSteps: string[];
}

export interface MoodOption {
  id: 'relaxed' | 'restored' | 'recharged' | 'renewed';
  label: string;
  title: string;
  subtext: string;
  recommendedTreatment: string;
  treatmentPrice: string;
  treatmentDuration: string;
  aromaNote: string;
  technique: string;
  bgImage: string;
}

export interface RitualStep {
  number: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  details: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  treatment: string;
  rating: number;
}

export interface MembershipPlan {
  id: string;
  tier: string;
  subtitle: string;
  price: string;
  cadence: string;
  description: string;
  popular?: boolean;
  benefits: string[];
}

export const SIGNATURE_EXPERIENCES: SignatureCard[] = [
  {
    id: 'exp-1',
    number: '01',
    title: 'THE ROYAL SIGNATURE',
    tagline: 'Imperial Rejuvenation',
    description: 'Warm rare botanical oils, myofascial sculpting, and gold-leaf infused compressions for sovereign tranquility.',
    duration: '120 MIN',
    price: '₹4,500',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    highlight: '24k Gold Botanical Elixir & Private Jacuzzi',
    ritualSteps: [
      'Cedarwood & Rose Welcome Foot Ablution',
      'Synchronized Warm Herbal Compress',
      'Marma Point Acupressure & Scalp Serenity'
    ]
  },
  {
    id: 'exp-2',
    number: '02',
    title: 'DEEP REST & STILLNESS',
    tagline: 'Somatic Decompression',
    description: 'Heated volcanic basalt stones and rhythmic lomi strokes to release deep structural tension.',
    duration: '90 MIN',
    price: '₹3,500',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop',
    highlight: 'Volcanic Stones & Herbal Sauna Access',
    ritualSteps: [
      'Tibetan Singing Bowl Sound Bath',
      'Magnesium Muscle De-tensioning',
      'Chamomile & Vetiver Temple Therapy'
    ]
  },
  {
    id: 'exp-3',
    number: '03',
    title: 'AROMA BOTANICA RITUAL',
    tagline: 'Rare Terroir Aromatics',
    description: 'Cold-pressed wild neroli, oud, and sandalwood essences with continuous fluid lymphatic strokes.',
    duration: '75 MIN',
    price: '₹2,800',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop',
    highlight: 'Wild Harvested Organic Essential Elixirs',
    ritualSteps: [
      'Olfactory Scent Consultation',
      'Fluid Lymphatic Meridians',
      'Warm Floral Mist Awakening'
    ]
  },
  {
    id: 'exp-4',
    number: '04',
    title: 'COUPLES IMPERIAL ESCAPE',
    tagline: 'Dual Private Sanctuary',
    description: 'Side-by-side restorative massages followed by an artisan private jacuzzi bath and herbal tea service.',
    duration: '150 MIN',
    price: '₹7,500',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
    highlight: 'Private Candlelit Suite, Jacuzzi & Rose Bath',
    ritualSteps: [
      'Private Suite Welcome Elixir',
      'Synchronized 90-Min Couple Massages',
      'Mineralized Jacuzzi & Lounge Delicacies'
    ]
  }
];

export const TREATMENTS_DATA: Treatment[] = [
  // Signature Massages
  {
    id: 'royal-relaxation',
    name: 'Royal Relaxation Massage',
    category: 'massages',
    tagline: 'Effortless serenity through fluid, rhythmic strokes.',
    description: 'Swedish-style long gliding strokes with warm organic jojoba oil to melt away daily stress.',
    duration: '60 / 90 MIN',
    price: '₹2,200 / ₹3,100',
    benefits: ['Lowers cortisol', 'Deep sleep', 'Better circulation'],
    scents: ['Sweet Orange', 'Lavender', 'Bergamot'],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop',
    recommendedMood: 'relaxed'
  },
  {
    id: 'deep-tissue-release',
    name: 'Deep Tissue Recovery',
    category: 'massages',
    tagline: 'Targeted myofascial release for chronic muscle tension.',
    description: 'Concentrated pressure with cooling arnica balm for deep knot release and muscle recovery.',
    duration: '60 / 90 MIN',
    price: '₹2,500 / ₹3,400',
    benefits: ['Trigger point relief', 'Joint mobility', 'Spine release'],
    scents: ['Eucalyptus', 'Wintergreen', 'Black Pepper'],
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop',
    recommendedMood: 'restored'
  },
  {
    id: 'aromatherapy-sovereign',
    name: 'Aromatherapy Sovereign',
    category: 'massages',
    tagline: 'Bespoke rare botanical essences infused with holistic bodywork.',
    description: 'Custom organic extracts applied along energy meridians to balance body and mind.',
    duration: '75 / 90 MIN',
    price: '₹2,600 / ₹3,500',
    benefits: ['Mental clarity', 'Lymphatic detox', 'Radiant skin'],
    scents: ['Wild Neroli', 'Frankincense', 'Sandalwood'],
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800&auto=format&fit=crop',
    recommendedMood: 'recharged'
  },
  {
    id: 'hot-stone-obsidian',
    name: 'Obsidian Hot Stone Therapy',
    category: 'massages',
    tagline: 'Warm volcanic stones penetrating deep within muscle layers.',
    description: 'Heated mineral basalt stones along chakra centers radiating deep soothing warmth.',
    duration: '90 MIN',
    price: '₹3,600',
    benefits: ['Thermal release', 'Energy flow', 'Tension relief'],
    scents: ['Amber', 'Cedarwood', 'Vanilla Pod'],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    recommendedMood: 'renewed'
  },
  {
    id: 'balinese-royal',
    name: 'Balinese Royal Ritual',
    category: 'massages',
    tagline: 'Exotic island bodywork blending acupressure and gentle stretching.',
    description: 'Palace acupressure, skin rolling, and floral oils to awaken vital energy pathways.',
    duration: '90 MIN',
    price: '₹3,200',
    benefits: ['Vital qi flow', 'Spinal ease', 'Skin nourishment'],
    scents: ['Jasmine', 'Frangipani', 'Patchouli'],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    recommendedMood: 'renewed'
  },

  // Wellness Rituals
  {
    id: 'stress-relief-ritual',
    name: 'Stress Relief Sanctuary',
    category: 'rituals',
    tagline: 'Comprehensive adrenal reset and scalp de-tensioning.',
    description: 'Warm paraffin back application, soothing scalp therapy, and full-body decompression.',
    duration: '100 MIN',
    price: '₹3,800',
    benefits: ['Calms nervous system', 'Adrenal recharge', 'Headache relief'],
    scents: ['Chamomile', 'Clary Sage', 'Geranium'],
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
    recommendedMood: 'relaxed'
  },
  {
    id: 'sleep-restore',
    name: 'Sleep & Somatic Restore',
    category: 'rituals',
    tagline: 'Engineered specifically to alleviate mental fatigue & insomnia.',
    description: 'Gentle cranial holds, warm magnesium compresses, and theta-wave rhythmic strokes.',
    duration: '90 MIN',
    price: '₹3,300',
    benefits: ['Restorative sleep', 'Mental calm', 'Nervous reset'],
    scents: ['Valerian', 'Lavender', 'Vetiver'],
    image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=800&auto=format&fit=crop',
    recommendedMood: 'restored'
  },
  {
    id: 'head-shoulder-ritual',
    name: 'Cranial & Cervical Serenity',
    category: 'rituals',
    tagline: 'Specialized focus for screen fatigue and upper-body strain.',
    description: 'Targeted neck, jaw, and cranium release with warm herbal oil and jade combs.',
    duration: '45 MIN',
    price: '₹1,800',
    benefits: ['Neck relief', 'TMJ ease', 'Visual clarity'],
    scents: ['Peppermint', 'Rosemary', 'Basil'],
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop',
    recommendedMood: 'recharged'
  },
  {
    id: 'foot-revival',
    name: 'Imperial Foot & Reflexology',
    category: 'rituals',
    tagline: 'Restoration through ancient reflex zone activation.',
    description: 'Himalayan salt soak, scrub exfoliation, and deep pressure across neural foot pathways.',
    duration: '60 MIN',
    price: '₹1,950',
    benefits: ['Grounds energy', 'Reduces swelling', 'Reflex stimulation'],
    scents: ['Lemongrass', 'Ginger Lily', 'Spearmint'],
    image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=800&auto=format&fit=crop',
    recommendedMood: 'renewed'
  }
];

export const MOOD_OPTIONS: MoodOption[] = [
  {
    id: 'relaxed',
    label: 'RELAXED',
    title: 'Drift Into Absolute Serenity',
    subtext: 'Quiet the mind and soften tired muscles.',
    recommendedTreatment: 'Royal Relaxation & Lavender Warm Stone',
    treatmentPrice: '₹3,100',
    treatmentDuration: '90 MIN',
    aromaNote: 'Provence Lavender & French Bergamot',
    technique: 'Continuous Gliding Effleurage',
    bgImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'restored',
    label: 'RESTORED',
    title: 'Heal Deep Muscle Tension',
    subtext: 'Intensive physical renewal for demanding schedules.',
    recommendedTreatment: 'Deep Tissue Recovery & Arnica Elixir',
    treatmentPrice: '₹3,400',
    treatmentDuration: '90 MIN',
    aromaNote: 'Eucalyptus, Wintergreen & Black Pepper',
    technique: 'Targeted Cross-Fiber Myofascial Release',
    bgImage: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'recharged',
    label: 'RECHARGED',
    title: 'Awaken Dynamic Vital Energy',
    subtext: 'Combat sluggishness and elevate personal vitality.',
    recommendedTreatment: 'Aromatherapy Sovereign & Lymphatic Flow',
    treatmentPrice: '₹3,500',
    treatmentDuration: '90 MIN',
    aromaNote: 'Wild Neroli, Grapefruit & Sandalwood',
    technique: 'Rhythmic Energizing Meridians',
    bgImage: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'renewed',
    label: 'RENEWED',
    title: 'Complete Mind-Body Metamorphosis',
    subtext: 'Full physical detox and radiant wellness glow.',
    recommendedTreatment: 'The Royal Signature 24k Gold Experience',
    treatmentPrice: '₹4,500',
    treatmentDuration: '120 MIN',
    aromaNote: 'Mysore Sandalwood, Amber & Frankincense',
    technique: 'Multi-Sensory Stone, Sound & Botanical Layering',
    bgImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop'
  }
];

export const RITUAL_JOURNEY_STEPS: RitualStep[] = [
  {
    number: '01',
    step: 'ARRIVE',
    title: 'The Portal of Silence',
    subtitle: 'Leaving Delhi behind',
    description: 'Chilled floral welcome infusion, private consultation, and personalized aroma selection.',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1000&auto=format&fit=crop',
    details: ['Private Consultation Lounge', 'Signature Herbal Elixir', 'Scent Customization']
  },
  {
    number: '02',
    step: 'UNWIND',
    title: 'Thermal Sauna & Jacuzzi',
    subtitle: 'Softening the body',
    description: 'Marble eucalyptus steam, heated sauna, and warm mineral jacuzzi bath to open pores and quiet the mind.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop',
    details: ['Eucalyptus Steam Suite', 'Thermal Jacuzzi & Sauna', 'Tibetan Sound Tuning']
  },
  {
    number: '03',
    step: 'RESTORE',
    title: 'Master Bodywork Ceremony',
    subtitle: 'Somatic expertise meets sovereign comfort',
    description: 'Ergonomic heated cloud tables and custom warm botanical oils applied with calibrated precision.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop',
    details: ['Handmade Terroir Oils', 'Heated Cloud Cushioning', 'Hygienic Private Suites']
  },
  {
    number: '04',
    step: 'RENEW',
    title: 'Awakening in the Tea Pavilion',
    subtitle: 'Returning transformed',
    description: 'Relaxation rotunda with rare single-estate herbal teas and organic refreshments.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1000&auto=format&fit=crop',
    details: ['Single-Estate Herbal Tea', 'Organic Delicacies', 'Home Care Guidance']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Imperial Private Suite',
    category: 'Private Suite',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
    aspect: 'col-span-1 md:col-span-2 row-span-2',
    description: 'Acoustic sanctuary suite with warm ambient lighting and supreme hygiene.'
  },
  {
    id: 'g-2',
    title: 'Jacuzzi & Thermal Hydrotherapy',
    category: 'Water Sanctuary',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1000&auto=format&fit=crop',
    aspect: 'col-span-1',
    description: 'Heated hydro-soak jacuzzi pools with relaxing minerals.'
  },
  {
    id: 'g-3',
    title: 'Artisanal Botanical Oils',
    category: 'Rare Oils',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1000&auto=format&fit=crop',
    aspect: 'col-span-1',
    description: 'Cold-pressed wild organic flora distilled exclusively for our sanctuary.'
  },
  {
    id: 'g-4',
    title: 'Sauna & Steam Chamber',
    category: 'Thermal Lounge',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop',
    aspect: 'col-span-1',
    description: 'Deep detoxifying herbal sauna and eucalyptus steam chambers.'
  },
  {
    id: 'g-5',
    title: 'Private Couple Pavilion',
    category: 'Couples Sanctuary',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    aspect: 'col-span-1 md:col-span-2',
    description: 'Side-by-side couple therapy beds with private jacuzzi bath.'
  },
  {
    id: 'g-6',
    title: 'Obsidian Volcanic Therapy',
    category: 'Hot Stone',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop',
    aspect: 'col-span-1',
    description: 'Mineral-heated basalt stones positioned along chakra energy points.'
  },
  {
    id: 'g-7',
    title: 'Tea Rotunda & Organic Elixirs',
    category: 'Lounge & Teas',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1000&auto=format&fit=crop',
    aspect: 'col-span-1',
    description: 'Rare white herbal teas and dried organic delicacies in our quiet lounge.'
  },
  {
    id: 'g-8',
    title: 'Aromatherapy Alchemy Suite',
    category: 'Botanical Atelier',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1000&auto=format&fit=crop',
    aspect: 'col-span-1 md:col-span-2',
    description: 'Artisanal organic distillation of wild flowers, resins, and essential balms.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Kasa Royal Spa offers great value for the quality of service they provide. I opted for a full-body massage, and it was absolutely worth every penny. I’ll definitely be back!",
    author: "Kaynat Salim",
    title: "Verified Google Review",
    treatment: "Full Body Royal Massage",
    rating: 5
  },
  {
    quote: "The therapists at Kasa Royal Spa are so skilled and friendly. They really know how to make you feel at ease and ensure a soothing experience. Highly recommended!",
    author: "Ezaz Khan",
    title: "Verified Google Review",
    treatment: "Therapeutic Bodywork Ritual",
    rating: 5
  },
  {
    quote: "Kasa royal spa is one of its kind of an all-inclusive spa that comes with facilities such as a Jacuzzi, sauna and steam room that you may use in addition to your treatments. Their staff is also excellent.",
    author: "Vinod Mehra",
    title: "Verified Google Review",
    treatment: "All-Inclusive Jacuzzi & Steam Ritual",
    rating: 5
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'essential',
    tier: 'ROYAL ESSENTIAL',
    subtitle: 'Monthly Sacred Routine',
    price: '₹2,999',
    cadence: '/ month',
    description: '1 Bespoke 90-Min Treatment, 24/7 priority booking, and complimentary Jacuzzi & Steam access.',
    benefits: [
      '1 Bespoke 90-Minute Signature Treatment per month',
      'Priority 24/7 reservation window',
      'Complimentary Jacuzzi & Steam access',
      '10% privileged rate on retail botanical elixirs'
    ]
  },
  {
    id: 'signature',
    tier: 'ROYAL SIGNATURE',
    subtitle: 'The Executive Sovereign',
    price: '₹5,499',
    cadence: '/ month',
    popular: true,
    description: '2 Bespoke 90-Min Treatments, VIP suite allocation, and unlimited Jacuzzi, Sauna & Steam access.',
    benefits: [
      '2 Bespoke 90-Minute or 1 120-Minute Royal Signature per month',
      'Guaranteed VIP suite allocation',
      'Unlimited Jacuzzi, Sauna & Steam Suite access',
      '1 Guest Pass per quarter with full royal privileges',
      '15% privileged rate across all spa services & rare oils'
    ]
  },
  {
    id: 'private',
    tier: 'ROYAL PRIVATE',
    subtitle: 'The Ultimate Sanctuary Access',
    price: '₹9,999',
    cadence: '/ month',
    description: '4 Master Treatments per month, dedicated Master Therapist, and 24/7 round-the-clock priority access.',
    benefits: [
      '4 Bespoke 90-Minute Master Treatments per month',
      'Dedicated Master Therapist assigned to your profile',
      'Private Suite reserved with bespoke aromatherapy & soundscape',
      'Unlimited Jacuzzi, Sauna & Tea Pavilion access',
      '24 Hours Round-The-Clock priority access',
      'Exclusive invitations to private wellness sessions'
    ]
  }
];

export const SPA_STATS = [
  { value: '4.8★', label: 'GOOGLE RATED', sub: '30+ verified authentic reviews' },
  { value: '24/7', label: 'OPEN ROUND THE CLOCK', sub: 'Day & night private sanctuary' },
  { value: '100%', label: 'HYGIENIC & PRIVATE', sub: 'Individual luxury suites' },
  { value: 'ROYAL', label: 'ALL-INCLUSIVE SPA', sub: 'Jacuzzi, Sauna & Steam room' }
];

export const FAQS = [
  {
    q: 'Where is The Royal Massage Spa located in Delhi?',
    a: 'Central Market, Sec-6 Market, Sector 6 Dwarka, Dwarka, Delhi, 110075 (Plus Code: H3R6+43 Delhi). Conveniently accessible with ample parking.'
  },
  {
    q: 'What are your operational hours?',
    a: 'We are open 24 Hours, 7 days a week (Monday through Sunday).'
  },
  {
    q: 'What all-inclusive facilities are available with treatments?',
    a: 'Jacuzzi, detoxifying Sauna, eucalyptus Steam rooms, and private hygienic treatment suites.'
  },
  {
    q: 'How can I book an appointment?',
    a: 'Reserve online instantly, call our line, or chat with our 24/7 WhatsApp concierge.'
  }
];
