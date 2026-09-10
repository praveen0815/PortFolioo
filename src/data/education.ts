export type EducationItem = {
  title: string;
  institution: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    title: "B.E. Mechanical Engineering",
    institution: "Bannari Amman Institute of Technology",
    detail: "CGPA 7.22 / 10",
  },
];

export type Certification = {
  title: string;
  issuer: string;
};

export const certifications: Certification[] = [
  {
    title: "Python & AI Agents",
    issuer: "Udemy",
  },
  {
    title: "Modern AI, Cybersecurity & IoT",
    issuer: "Cisco Networking Academy",
  },
];
