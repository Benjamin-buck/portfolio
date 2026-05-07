export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  published: boolean;
  content: {
    heading?: string;
    body?: string;
    image?: string;
    imageCaption?: string;
  }[];
}

export const articles: Article[] = [
  {
    slug: "building-design-systems-in-figma",
    title: "Building Design Systems in Figma",
    image: "/designsystem.png",
    published: false,
    description:
      "A practical guide to creating and maintaining design systems in Figma, with tips on organization, component design, and reusability.",
    date: "2026-04-20",
    readTime: "20 min read",
    tags: ["SaaS", "Next.js", "Indie Dev"],
    content: [
      {
        body: "Figma is a powerful design tool that has revolutionized the way software development projects are planned, designed, and executed. In this article, I'll share my insights and experience as a Software Product Designer on creating consistency through design systems, how to create them, and why they are so important in software branding and development.",
      },
      // image-only section (no body required):
      // {
      //   image: "/atc-1.png",
      //   imageCaption: "A standalone image",
      // },
      {
        heading: "What is a Design System",
        body: "A design system is a collection of reusable components, guided by clear standards that can be assembled together to build any number of application screens, layouts, and flows. Design systems are more than just a style guide or a component library; they encompass the entire design language of a product, including typography, color schemes, spacing, and interaction patterns. This article focuses on a practical, step by step guide into creating and maintaining your company's design system in Figma.",
      },
      {
        heading: "Creating your first design system",
        body: "Open up Figma and create a new file and give it a title. For this example design system, we'll be creating a design system for a fictional iOS application named 'Side Chat'. We'll start of with by creating a new page in our Figma file and naming it 'Typography'. Within this page, we'll start off easy by creating the heading / typography styles for our design system. We can start by creating a text box and typing 'Heading 1' and applying the following styles to it: Font Family: Rubix, Font Weight: Semi Bold, Font Size: 26px. Once we have our Heading 1 style created, we can right click on the text box and select the option to create a component. This should add a purple dashed border around the component. Lets create 6 more variants of this component for all the headings / paragraph text as follows:",
      },
      {
        image: "/figma-1.png",
        imageCaption:
          "A screenshot of the Figma file with the heading styles component created",
      },
      // {
      //   heading: "Boring tech is underrated",
      //   body: "I chose Next.js, PostgreSQL, Prisma, and Stripe — all tools I already knew well. There was a constant temptation to try something new and exciting, but familiarity meant I could move fast and debug quickly. Save experiments for side projects, not your production product.",
      // },
    ],
  },
];
