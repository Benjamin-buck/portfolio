import { myProjects, type Project } from "@/constants/projects/myProjects";

export type { Project };

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2026-03-07" → "Mar 2026". Leaves non-date strings ("Present") alone. */
export const formatMonth = (value?: string) => {
  if (!value) return null;
  const m = /^(\d{4})-(\d{2})/.exec(value);
  if (!m) return value;
  return `${MONTHS[Number(m[2]) - 1]} ${m[1]}`;
};

export const projectYear = (p: Project) => p.startDate?.slice(0, 4) ?? null;

export const timeline = (p: Project) => {
  const start = formatMonth(p.startDate);
  if (!start) return null;
  const end = formatMonth(p.endDate) ?? "Present";
  return `${start} — ${end}`;
};

/** First sentence of the description, for cards and ledes. */
export const lede = (p: Project) => {
  const match = /^(.+?[.!?])(\s|$)/.exec(p.description.trim());
  return match ? match[1] : p.description;
};

export const indexOf = (p: Project) => myProjects.findIndex((x) => x.id === p.id);

export const pad = (n: number) => String(n).padStart(2, "0");

export const projects = myProjects;
