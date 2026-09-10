export type Project = {
  name: string;
  category: string;
  featured?: boolean;
  description: string;
  problem: string;
  built: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    name: "Customer360 Banking AI Backend",
    category: "AI / Backend / Conversational AI",
    featured: true,
    description:
      "An AI-powered banking backend designed to support customer-centric banking conversations and services.",
    problem:
      "Banking conversations need reliable APIs, durable context, and LLM workflows that can route intent without losing customer state.",
    built: "A FastAPI backend with conversation context, turn logging, Redis session handling, and LLM-powered customer query flows.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Redis",
      "Claude / AWS Bedrock",
      "REST APIs",
    ],
    features: [
      "Customer, account, loan, card, and KYC APIs",
      "Conversation context and history",
      "Conversation turn logging",
      "LLM-powered conversational workflows",
      "Redis-based context and session handling",
      "PostgreSQL database integration",
      "Multi-tenant, bank-aware backend concepts",
      "WhatsApp conversational integration",
      "AI-powered customer query handling",
    ],
  },
  {
    name: "State Government Sponsored Scheme Eligibility Predictor",
    category: "Machine Learning / AI / Backend",
    description:
      "A machine-learning eligibility prediction system for Tamil Nadu government welfare schemes using socio-economic citizen data.",
    problem:
      "Citizens and administrators need a structured way to estimate welfare-scheme eligibility from socio-economic attributes.",
    built: "A FastAPI service with a Decision Tree model, preprocessing pipeline, and REST endpoints for prediction and model information.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "FastAPI"],
    features: [
      "Data preprocessing",
      "Feature-based eligibility prediction",
      "Decision Tree machine-learning model",
      "Support for multiple government schemes",
      "FastAPI REST endpoints",
      "Model information endpoint",
      "Prediction endpoint",
      "Health endpoint",
      "Automated API testing",
    ],
    note: "Trained and evaluated using synthetic citizen data.",
    github:
      "https://github.com/praveen0815/AI-Based-Government-Scheme-Eligibility-Predictor",
  },
  {
    name: "StudentVoiceAI",
    category: "AI / Full Stack",
    description:
      "An AI-powered student feedback and complaint management platform designed to organize student complaints and improve communication between students and administration.",
    problem:
      "Campus complaints are often unstructured, which makes it harder for administration to review and respond consistently.",
    built: "A responsive web app with complaint submission, backend APIs, MongoDB persistence, and AI-powered complaint categorization.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "MongoDB",
    ],
    features: [
      "Complaint submission",
      "Backend APIs",
      "Database integration",
      "Responsive frontend",
      "AI-powered complaint categorization",
    ],
    github: "https://github.com/praveen0815/StudentVoiceAI",
  },
  {
    name: "CampusSlotAI",
    category: "Full Stack",
    description:
      "A campus sports booking system for managing sports slots and user bookings.",
    problem:
      "Campus sports facilities need a clear way to authenticate users, show availability, and record bookings.",
    built: "A full-stack booking app with authentication, real-time slot availability, booking APIs, and Supabase-backed data.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Supabase",
    ],
    features: [
      "Authentication",
      "Sports slot booking",
      "Real-time slot availability",
      "Booking APIs",
      "User management",
      "Supabase integration",
    ],
    github: "https://github.com/praveen0815/CampSlotAI-New",
  },
];
