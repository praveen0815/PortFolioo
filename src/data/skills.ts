export type SkillPriority = "core" | "strong" | "working";

export type Skill = {
  name: string;
  priority: SkillPriority;
};

export type SkillGroup = {
  id: string;
  label: string;
  skills: Skill[];
};

const core = (name: string): Skill => ({ name, priority: "core" });
const strong = (name: string): Skill => ({ name, priority: "strong" });
const working = (name: string): Skill => ({ name, priority: "working" });

export const skillGroups: SkillGroup[] = [
  {
    id: "ai",
    label: "AI & Generative AI",
    skills: [
      core("LLMs"),
      core("Generative AI"),
      core("AI Agents"),
      strong("Prompt Engineering"),
      core("LangChain"),
      working("NLP Basics"),
      working("Machine Learning Basics"),
    ],
  },
  {
    id: "programming",
    label: "Programming",
    skills: [core("Python"), strong("Java"), working("C")],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      core("FastAPI"),
      strong("Spring Boot"),
      strong("Node.js"),
      strong("Express.js"),
      strong("Django"),
      core("REST APIs"),
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      working("HTML"),
      working("CSS"),
      strong("JavaScript"),
      working("TypeScript (Basics)"),
      strong("React"),
      strong("Next.js"),
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      core("PostgreSQL"),
      strong("MySQL"),
      strong("MongoDB"),
      core("Redis"),
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      strong("Git"),
      strong("GitHub"),
      working("VS Code"),
      strong("Postman"),
    ],
  },
  {
    id: "cs",
    label: "Core CS",
    skills: [
      strong("Data Structures & Algorithms"),
      strong("OOP"),
      strong("DBMS"),
    ],
  },
];
