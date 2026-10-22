import type { TabItem } from "@/types";

export const tabs: TabItem[] = [
  { title: "writing", pathName: "/" },
  { title: "about", pathName: "/about" },
  { title: "projects", pathName: "/projects" },
];

export const projects = [
  {
    name: "portfolio-nextjs",
    description: "My personal portfolio built with Next.js and TypeScript, designed for speed and clean code",
    stacks: "Typescript",
    url: "https://github.com/peterhfss/portfolio-nextjs",
    status: "stable",
  },
  {
    name: "pedroh-devlog",
    description: "My personal dev blog documenting my Full-Stack journey, one commit at a time.",
    stacks: "Next.js · TypeScript",
    url: "https://github.com/peterhfss/pedroh-devlog",
    status: "in progress",
  },
];

export const stacks = [
  "TypeScript",
  "Python",
  "Docker",
  "React",
  "Node.js",
  "FastAPI",
  "Fastify",
  "PostgreSQL",
];

export function formatDate(date: string) {
  const data = new Date(date);
  const formato: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  return data.toLocaleDateString("en-US", formato);
}

export function getSiteUrl() {
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL !== undefined) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL !== undefined) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}
