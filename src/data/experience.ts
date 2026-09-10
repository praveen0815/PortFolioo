export type ExperienceRole = {
  title: string;
  type: string;
  start: string;
  end: string;
  location: string;
  workMode: string;
  current?: boolean;
  contributions: string[];
};

export type ExperienceCompany = {
  company: string;
  roles: ExperienceRole[];
};

export const experience: ExperienceCompany[] = [
  {
    company: "InTalksAI",
    roles: [
      {
        title: "Software Engineer",
        type: "Part-time",
        start: "Aug 2026",
        end: "Present",
        location: "Coimbatore, Tamil Nadu",
        workMode: "Remote",
        current: true,
        contributions: [
          "Developing backend APIs in Python and FastAPI for AI-powered banking applications.",
          "Contributing to an LLM-based multi-agent architecture for customer query orchestration.",
          "Working on conversation logging and context management.",
          "Implementing intent routing and state-based workflows, including YAML-based orchestration.",
          "Building REST APIs backed by PostgreSQL and Redis.",
          "Integrating LLM-powered conversational features with external APIs.",
          "Contributing to conversational AI flows for banking use cases.",
        ],
      },
      {
        title: "Software Engineer Intern",
        type: "Internship",
        start: "Jun 2026",
        end: "Aug 2026",
        location: "Coimbatore, Tamil Nadu",
        workMode: "On-site",
        contributions: [],
      },
    ],
  },
];
