export const siteContent = {
  brand: {
    name: "RAW POWER",
    tagline: "Find Your Raw Power",
  },
  
  hero: {
    badge: "24/7 ACCESS • NO EXCUSES",
    headline: {
      line1: "FIND YOUR",
      line2: "RAW POWER",
    },
    subtext: "Train where serious people get serious results. No fluff, no excuses — just raw effort and real transformation.",
    cta: {
      primary: "BOOK FREE TRIAL",
      secondary: "VIEW CLASSES →",
    },
    stats: "500+ MEMBERS  |  10,000+ CLASSES  |  24/7 ACCESS",
    backgroundImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",
  },

  proof: {
    heading: {
      line1: "REAL PEOPLE.",
      line2: "REAL RESULTS.",
    },
    statsCards: [
      {
        number: "2,500",
        unit: "KG",
        label: "TOTAL WEIGHT LIFTED THIS MONTH",
        color: "green" as const,
      },
      {
        number: "500",
        unit: "+",
        label: "ACTIVE MEMBERS",
        color: "cyan" as const,
      },
      {
        number: "95",
        unit: "%",
        label: "RETENTION RATE",
        color: "red" as const,
      },
    ],
    transformations: [
      {
        name: "Sarah Mitchell",
        result: "LOST 20KG IN 12 WEEKS",
        imageUrl: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "James Thompson",
        result: "GAINED 8KG MUSCLE IN 16 WEEKS",
        imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Alex Rivera",
        result: "DEADLIFT PR: 180KG → 240KG",
        imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80",
      },
    ],
    testimonials: [
      {
        quote: "Raw Power changed everything. Down 20kg, up 3 belt sizes in strength. The coaches push you, the community keeps you accountable.",
        name: "Sarah M.",
        meta: "Member since 2022",
      },
      {
        quote: "I've tried every gym. This is the only one where I actually show up. The energy is unmatched.",
        name: "James K.",
        meta: "Member since 2023",
      },
      {
        quote: "Best decision I made this year. The personal training is worth every cent — I hit PRs I didn't think were possible.",
        name: "Alex T.",
        meta: "Member since 2024",
      },
      {
        quote: "The 24/7 access changed my life. I work nights and this is the only gym that fits my schedule. Equipment is top-tier.",
        name: "Marcus R.",
        meta: "Member since 2023",
      },
      {
        quote: "Coming here feels like joining a movement. Everyone is here to work, no egos, just pure effort and support.",
        name: "Emma L.",
        meta: "Member since 2022",
      },
      {
        quote: "I was skeptical about group classes but these are different. High intensity, expert coaching, actual results.",
        name: "David P.",
        meta: "Member since 2024",
      },
    ],
  },

  offerings: {
    heading: {
      line1: "CHOOSE YOUR",
      line2: "PATH TO POWER",
    },
    cards: [
      {
        id: "memberships",
        title: "GYM MEMBERSHIPS",
        description: "24/7 access to the full equipment floor. Train on your schedule, no restrictions.",
        benefits: [
          "24/7 facility access",
          "Full equipment floor",
          "Open gym sessions",
          "Locker & shower facilities",
          "Member-only events",
        ],
        cta: "LEARN MORE →",
      },
      {
        id: "classes",
        title: "GROUP CLASSES",
        description: "High-intensity coached sessions designed to push your limits. From HIIT to Olympic lifting.",
        benefits: [
          "Expert-led coaching",
          "Small group focus",
          "Strength & conditioning",
          "HIIT & metabolic training",
          "Unlimited class access",
        ],
        cta: "SEE SCHEDULE →",
      },
      {
        id: "training",
        title: "PERSONAL TRAINING",
        description: "One-on-one coaching tailored to your goals. Custom programming, accountability, and results-driven methodology.",
        benefits: [
          "Custom training programs",
          "1-on-1 dedicated sessions",
          "Nutrition guidance",
          "Progress tracking & testing",
          "Flexible scheduling",
        ],
        cta: "BOOK CONSULTATION →",
      },
    ],
  },

  schedule: {
    heading: "THIS WEEK'S FEATURED CLASSES",
    classes: [
      {
        name: "STRENGTH FOUNDATION",
        time: "MON • 6:00 AM",
        coach: "Coach Marcus",
        intensity: "MODERATE",
        spots: "4 SPOTS LEFT",
        description: "Build fundamental strength with compound movements.",
      },
      {
        name: "POWER HOUR",
        time: "TUE • 6:30 PM",
        coach: "Coach Sarah",
        intensity: "HIGH",
        spots: "2 SPOTS LEFT",
        description: "Explosive Olympic lifting and power development.",
      },
      {
        name: "METABOLIC CONDITIONING",
        time: "WED • 7:00 AM",
        coach: "Coach Alex",
        intensity: "EXTREME",
        spots: "SOLD OUT",
        description: "High-intensity intervals to torch calories and build endurance.",
      },
      {
        name: "DEADLIFT CLINIC",
        time: "THU • 5:30 PM",
        coach: "Coach James",
        intensity: "MODERATE",
        spots: "6 SPOTS LEFT",
        description: "Perfect your deadlift technique with expert guidance.",
      },
      {
        name: "SATURDAY SWEAT",
        time: "SAT • 9:00 AM",
        coach: "Coach Emma",
        intensity: "HIGH",
        spots: "3 SPOTS LEFT",
        description: "Full-body burnout to end the week strong.",
      },
      {
        name: "OPEN GYM",
        time: "SUN • ALL DAY",
        coach: "Self-guided",
        intensity: "FLEXIBLE",
        spots: "UNLIMITED",
        description: "Use the full facility on your own schedule.",
      },
    ],
  },

  ctaBanner: {
    heading: "READY TO START YOUR TRANSFORMATION?",
    subtext: "Book your free trial today. No commitment, no pressure — just come see what Raw Power is about.",
    buttonText: "BOOK FREE TRIAL NOW",
    note: "First session completely free. Cancel anytime.",
  },

  footer: {
    tagline: "Train where serious people get serious results.",
    contact: {
      phone: "+61 3 9876 5432",
      email: "hello@rawpowergym.com.au",
      address: "123 Industrial Drive, Collingwood VIC 3066",
    },
    hours: [
      { days: "Monday - Friday", time: "24/7 Access" },
      { days: "Saturday - Sunday", time: "24/7 Access" },
      { days: "Staffed Hours", time: "6AM - 10PM Daily" },
    ],
    social: [
      { platform: "Instagram", handle: "@rawpowergym", url: "#" },
      { platform: "Facebook", handle: "/rawpowergym", url: "#" },
      { platform: "TikTok", handle: "@rawpowergym", url: "#" },
    ],
    links: {
      company: [
        { label: "About Us", href: "#" },
        { label: "Our Coaches", href: "#" },
        { label: "Testimonials", href: "#" },
        { label: "Contact", href: "#" },
      ],
      membership: [
        { label: "Pricing", href: "#" },
        { label: "Class Schedule", href: "#" },
        { label: "Personal Training", href: "#" },
        { label: "Free Trial", href: "#" },
      ],
      legal: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Membership Agreement", href: "#" },
      ],
    },
  },
} as const;
