import { Apple } from "./Apple";
import { GitHub } from "./GitHub";
import { Nike } from "./Nike";

export const allProjects = [
  {
    id: 2,
    title: "Benjamin Alan Portfolio",
    description: "Description coming soon",
    image: "/coming-soon.png",
    status: "Done",
    href: "/portfolio",
    disabled: true,
  },
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
    title: "Ping-Panda",
    description: "Description coming soon",
    image: "/coming-soon.png",
    status: "In Progress",
    href: "/portfolio",
    disabled: true,
  },
  {
    id: 2,
    title: "Bugs.io",
    description: "Description coming soon",
    image: "/coming-soon.png",
    status: "Done",
    href: "/portfolio",
    disabled: true,
  },
  {
    id: 2,
    title: Apple.title,
    description: Apple.description,
    image: Apple.image,
    status: Apple.status,
    href: "/portfolio",
    disabled: Apple.disabled,
  },
  {
    id: 3,
    title: Nike.title,
    description: Nike.description,
    image: Nike.image,
    status: Nike.status,
    href: "/portfolio/nike",
  },
];
