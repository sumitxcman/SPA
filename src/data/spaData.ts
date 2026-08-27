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
    tagline: 'Imperial Head-to-Toe Rejuvenation',
    description: 'An expansive multi-sensory journey combining warm rare botanical oils, slow rhythm myofascial sculpting, and gold-leaf infused compressions for sovereign tranquility.',
    duration: '120 MIN',
    price: '₹4,500',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    highlight: 'Includes 24k Gold Botanical Elixir & Private Jacuzzi Soak',
    ritualSteps: [
      'Warm Cedarwood & Rose Welcome Foot Ablution',
      'Full Body Synchronized Warm Herbal Compress',
      'Imperial Marma Point Acupressure & Scalp Serenity'
    ]
  },
  {
    id: 'exp-2',
    number: '02',
    title: 'DEEP REST & STILLNESS',
    tagline: 'Somatic Nervous System Recalibration',
    description: 'Designed specifically to quiet an overstimulated mind. Gentle passive stretching, weighted warm basalt stones, and rhythmic lomi strokes release deep emotional fatigue.',
    duration: '90 MIN',
    price: '₹3,500',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop',
    highlight: 'Heated Volcanic Stones & Herbal Sauna Access',
    ritualSteps: [
      'Tibetan Singing Bowl Sound Bath Induction',
      'Magnesium Infused Muscle De-tensioning',
      'Warm Chamomile & Vetiver Temple Therapy'
    ]
  },
  {
    id: 'exp-3',
    number: '03',
    title: 'AROMA BOTANICA RITUAL',
    tagline: 'Rare Terroir Aromatics & Sensory Transcendence',
    description: 'Custom-distilled oud, wild neroli, and sandalwood essences inhaled through steam and applied with continuous lymphatic strokes to elevate mood and vital radiance.',
    duration: '75 MIN',
    price: '₹2,800',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop',
    highlight: 'Wild Harvested Organic Essential Elixirs',
    ritualSteps: [
      'Aromatherapeutic Olfactory Consultation',
      'Full Body Fluid Rhythms & Acupressure',
      'Warm Floral Mist & Herbal Tonic Awakening'
    ]
  },
  {
    id: 'exp-4',
    number: '04',
    title: 'COUPLES IMPERIAL ESCAPE',
    tagline: 'Dual Private Sanctuary Experience',
    description: 'A secluded private suite retreat for two. Side-by-side bespoke restorative massages followed by an artisan private jacuzzi bath and herbal tea service.',
    duration: '150 MIN',
    price: '₹7,500',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
    highlight: 'Private Candlelit Suite, Jacuzzi & Rose Petal Bath',
    ritualSteps: [
      'Private Suite Welcome with Vintage Herbal Nectar',
      'Synchronized 90-Minute Custom Couple Massages',
      'Mineralized Jacuzzi Bath & Private Lounge Confection'
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
    description: 'Our hallmark Swedish-influenced holistic massage using long gliding movements, warm organic jojoba oil, and light pressure to melt everyday stress.',
    duration: '60 / 90 MIN',
    price: '₹2,200 / ₹3,100',
    benefits: ['Lowers cortisol levels', 'Promotes deep sleep', 'Improves peripheral circulation'],
    scents: ['Sweet Orange', 'French Lavender', 'Bergamot'],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop',
    recommendedMood: 'relaxed'
  },
  {
    id: 'deep-tissue-release',
    name: 'Deep Tissue Recovery',
    category: 'massages',
    tagline: 'Targeted myofascial release for chronic muscle tension.',
    description: 'Precise, concentrated pressure addressing deep connective tissues, sports strain, and postural misalignments using cooling arnica balm.',
    duration: '60 / 90 MIN',
    price: '₹2,500 / ₹3,400',
    benefits: ['Releases stubborn trigger points', 'Restores joint mobility', 'Alleviates lumbar stiffness'],
    scents: ['Eucalyptus', 'Wintergreen', 'Black Pepper'],
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop',
    recommendedMood: 'restored'
  },
  {
    id: 'aromatherapy-sovereign',
    name: 'Aromatherapy Sovereign',
    category: 'massages',
    tagline: 'Bespoke rare botanical essences infused with holistic bodywork.',
    description: 'You select from our private collection of artisanal botanical extracts. Applied gently along lymphatic meridians to harmonize physical and emotional wellness.',
    duration: '75 / 90 MIN',
    price: '₹2,600 / ₹3,500',
    benefits: ['Emotional uplift & clarity', 'Lymphatic detoxification', 'Nourishes dry skin'],
    scents: ['Wild Neroli', 'Frankincense', 'Mysore Sandalwood'],
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800&auto=format&fit=crop',
    recommendedMood: 'recharged'
  },
  {
    id: 'hot-stone-obsidian',
    name: 'Obsidian Hot Stone Therapy',
    category: 'massages',
    tagline: 'Warm volcanic stones penetrating deep within muscle layers.',
    description: 'Hand-shaped basalt stones heated in mineral water and positioned along chakra energy centers, radiating soothing warmth that melts structural tension.',
    duration: '90 MIN',
    price: '₹3,600',
    benefits: ['Thermal muscle relaxation', 'Expands energy flow', 'Relieves vascular congestion'],
    scents: ['Amber Resin', 'Cedarwood', 'Vanilla Pod'],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    recommendedMood: 'renewed'
  },
  {
    id: 'balinese-royal',
    name: 'Balinese Royal Ritual',
    category: 'massages',
    tagline: 'Exotic island bodywork blending acupressure and gentle stretching.',
    description: 'An ancient palace ritual employing thumb-and-palm pressure, skin rolling, and essential flower oils to awaken the body’s innate vital qi.',
    duration: '90 MIN',
    price: '₹3,200',
    benefits: ['Stimulates chi circulation', 'Unwinds spinal tension', 'Skin renewal'],
    scents: ['Jasmine Sambac', 'Frangipani', 'Patchouli'],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    recommendedMood: 'renewed'
  },

  // Wellness Rituals
  {
    id: 'stress-relief-ritual',
    name: 'Stress Relief Sanctuary',
    category: 'rituals',
    tagline: 'A comprehensive unwind for adrenal reset.',
    description: 'Begins with an herbal foot bath, followed by warm paraffin back application, soothing scalp therapy, and full-body decompression.',
    duration: '100 MIN',
    price: '₹3,800',
    benefits: ['Calms nervous agitation', 'Deep adrenal recharge', 'Headache relief'],
    scents: ['Roman Chamomile', 'Clary Sage', 'Geranium'],
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
    recommendedMood: 'relaxed'
  },
  {
    id: 'sleep-restore',
    name: 'Sleep & Somatic Restore',
    category: 'rituals',
    tagline: 'Engineered specifically to alleviate chronic insomnia.',
    description: 'Gentle cranial sacral holds, warm magnesium compresses, and slow hypnotic wave strokes calibrated to induce theta-wave brain states.',
    duration: '90 MIN',
    price: '₹3,300',
    benefits: ['Deep restorative sleep induction', 'Relieves mental chatter', 'Nervous system reset'],
    scents: ['Valerian Root', 'Lavender Fine', 'Vetiver'],
    image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=800&auto=format&fit=crop',
    recommendedMood: 'restored'
  },
  {
    id: 'head-shoulder-ritual',
    name: 'Cranial & Cervical Serenity',
    category: 'rituals',
    tagline: 'Specialized focus for screen fatigue and upper-body strain.',
    description: 'Targeted release for the neck, trapezoids, jaw, and cranium utilizing warm herbal oil and jade combs to disperse accumulated digital fatigue.',
    duration: '45 MIN',
    price: '₹1,800',
    benefits: ['Eases screen-induced neck strain', 'Temporomandibular relief', 'Visual clarity'],
    scents: ['Peppermint', 'Rosemary', 'Sweet Basil'],
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop',
    recommendedMood: 'recharged'
  },
  {
    id: 'foot-revival',
    name: 'Imperial Foot & Reflexology',
    category: 'rituals',
    tagline: 'Restoration through ancient reflex zone activation.',
    description: 'Warm Himalayan salt soak, botanical scrub exfoliation, followed by deep pressure point stimulation across 60+ neural pathways on both feet.',
    duration: '60 MIN',
    price: '₹1,950',
    benefits: ['Grounds somatic energy', 'Reduces lower leg edema', 'Organ reflex stimulation'],
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
    subtext: 'For when the mind needs quietude, the muscles need softening, and you wish to simply let the world pause.',
    recommendedTreatment: 'Royal Relaxation & Lavender Warm Stone',
    treatmentPrice: '₹3,100',
    treatmentDuration: '90 MIN',
    aromaNote: 'Provence Lavender & French Bergamot',
    technique: 'Continuous Gliding Effleurage & Gentle Acupressure',
    bgImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'restored',
    label: 'RESTORED',
    title: 'Heal Deep Fatigue & Tension',
    subtext: 'For chronic muscle aches, postural strain from demanding schedules, and intensive physical renewal.',
    recommendedTreatment: 'Deep Tissue Recovery & Arnica Elixir',
    treatmentPrice: '₹3,400',
    treatmentDuration: '90 MIN',
    aromaNote: 'Eucalyptus, Wintergreen & Black Pepper',
    technique: 'Targeted Cross-Fiber Friction & Myofascial Unwinding',
    bgImage: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'recharged',
    label: 'RECHARGED',
    title: 'Awaken Dynamic Vital Energy',
    subtext: 'For combating sluggishness, clearing mental fog, and elevating personal vitality to peak performance.',
    recommendedTreatment: 'Aromatherapy Sovereign & Lymphatic Flow',
    treatmentPrice: '₹3,500',
    treatmentDuration: '90 MIN',
    aromaNote: 'Wild Neroli, Grapefruit & Sandalwood',
    technique: 'Rhythmic Percussion & Energizing Meridians',
    bgImage: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'renewed',
    label: 'RENEWED',
    title: 'Complete Mind-Body Metamorphosis',
    subtext: 'For a fresh beginning. Full physical detoxification, cellular nourishment, and radiant spiritual glow.',
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
    subtitle: 'Leaving the noise of Delhi behind',
    description: 'You are greeted by your dedicated wellness concierge in Sector 6 Dwarka. Phones are secured, shoes are exchanged for silk slippers, and a chilled floral infusion calms your pulse.',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1000&auto=format&fit=crop',
    details: ['Private Consultation Lounge', 'Signature Herbal Elixir', 'Personal Olfactory Scent Selection']
  },
  {
    number: '02',
    step: 'UNWIND',
    title: 'Thermal Sauna & Jacuzzi Immersion',
    subtitle: 'Preparing the body for deep receptivity',
    description: 'Relax within our eucalyptus-infused marble steam chamber, sauna, and warm mineral jacuzzi bath to soften fascia, open pores, and quiet mental agitation.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop',
    details: ['Eucalyptus Marble Steam Suite', 'Thermal Jacuzzi & Sauna Access', 'Tibetan Resonance Tuning']
  },
  {
    number: '03',
    step: 'RESTORE',
    title: 'The Master Bodywork Ceremony',
    subtitle: 'Somatic expertise meets sovereign comfort',
    description: 'Lying upon our ergonomic heated cloud tables in ultra-hygienic private suites, your master therapist applies custom-blended warm oils with calibrated, unhurried precision.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop',
    details: ['Handmade Botanical Terroir Oils', 'Heated Cloud Cushioning', 'Hygienic Private Suites']
  },
  {
    number: '04',
    step: 'RENEW',
    title: 'Awakening in the Tea Pavilion',
    subtitle: 'Gently returning to the world transformed',
    description: 'Transition leisurely in the quiet relaxation rotunda with artisanal rare herbal teas and organic refreshments before stepping back into reality completely rejuvenated.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1000&auto=format&fit=crop',
    details: ['Single-Estate Herbal Tea Service', 'Organic Delicacies', 'Personalized Home Care Guidance']
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
    description: 'Designed for the discerning individual who treats restorative wellness as a non-negotiable monthly discipline.',
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
    description: 'Our most coveted tier for comprehensive bi-weekly physical restoration, priority suites, and guest privileges.',
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
    description: 'Unlimited access to the sanctuary private lounge, personalized master therapist dedication, and 24/7 concierge support.',
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
    a: 'We are located at Central Market, Sec-6 Market, Sector 6 Dwarka, Dwarka, Delhi, 110075 (Plus Code: H3R6+43 Delhi). Conveniently accessible with ample parking.'
  },
  {
    q: 'What are your operational hours?',
    a: 'We are open 24 Hours, 7 days a week (Monday through Sunday) to accommodate your schedule at any hour.'
  },
  {
    q: 'What all-inclusive facilities are available with treatments?',
    a: 'Our sanctuary features full-service Jacuzzi, detoxifying Sauna, eucalyptus Steam rooms, and private hygienic treatment rooms available alongside your bodywork.'
  },
  {
    q: 'How can I book an appointment?',
    a: 'You can instantly reserve online through our website booking system, call us directly, or connect with our concierge via WhatsApp at any hour.'
  }
];
