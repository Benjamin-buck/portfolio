import { Apple } from "./Apple";
import { ARoseForAnn } from "./ARoseForAnn";
import { GitHub } from "./GitHub";
import { Nike } from "./Nike";
import { Portfolio } from "./Portfolio";
import { Serenity } from "./Serenity";
import { TransportCanada } from "./TransportCanada";
import { Nexdev } from "./Nexdev";

export const allProjects = [
  {
    id: 9,
    title: Nexdev.title,
    description: Nexdev.description,
    image: Nexdev.image,
    status: Nexdev.status,
    href: "/portfolio/nexdev",
    disabled: false,
  },
  {
    id: 8,
    title: ARoseForAnn.title,
    description: ARoseForAnn.description,
    image: ARoseForAnn.image,
    status: ARoseForAnn.status,
    href: "/portfolio/aroseforann",
    disabled: false,
  },
  {
    id: 1,
    title: Serenity.title,
    description: Serenity.description,
    image: Serenity.image,
    status: Serenity.status,
    href: "/portfolio/serenity",
    disabled: false,
  },
  {
    id: 2,
    title: TransportCanada.title,
    description: TransportCanada.description,
    image: TransportCanada.image,
    status: TransportCanada.status,
    href: "/portfolio/transportcanada",
    disabled: false,
  },
  {
    id: 2,
    title: Portfolio.title,
    description: Portfolio.description,
    image: Portfolio.image,
    status: Portfolio.status,
    href: "/portfolio/portfolio",
    disabled: false,
  },
  {
    id: 3,
    title: GitHub.title,
    description: GitHub.description,
    image: GitHub.image,
    status: GitHub.status,
    href: "/portfolio/github",
  },
  {
    id: 4,
    title: "Ping-Panda",
    description: "Description coming soon",
    image: "/coming-soon.png",
    status: "In Progress",
    href: "/portfolio",
    disabled: true,
  },
  {
    id: 5,
    title: "Bugs.io",
    description: "Description coming soon",
    image: "/coming-soon.png",
    status: "Done",
    href: "/portfolio",
    disabled: true,
  },
  {
    id: 6,
    title: Apple.title,
    description: Apple.description,
    image: Apple.image,
    status: Apple.status,
    href: "/portfolio",
    disabled: Apple.disabled,
  },
  {
    id: 7,
    title: Nike.title,
    description: Nike.description,
    image: Nike.image,
    status: Nike.status,
    href: "/portfolio/nike",
  },
];
