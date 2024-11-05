import { GitHub } from "./GitHub";
import { Nike } from "./Nike";

export const allProjects = [
  {
    id: 1,
    title: GitHub.title,
    description: GitHub.description,
    image: GitHub.image,
    status: GitHub.status,
    href: "/portfolio/github",
  },
  {
    id: 2,
    title: Nike.title,
    description: Nike.description,
    image: Nike.image,
    status: Nike.status,
    href: "/portfolio/nike",
  },
];
