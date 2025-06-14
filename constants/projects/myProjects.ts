export const myProjects = [
  {
    id: 9,
    title: "Humane Society",
    liveLink: "https://humanesociety-sigma.vercel.app/",
    repo: null,
    description:
      "This project was created to showcase a full-stack application geared towards Animal Shelters in order to facilitate the foster / adoption process of applications. The project aims to have a fully functional back-end / database to store animals, integrate a seamless adoption application process, and allow shelter employees to enter and process shelter animals.",
    status: "In Progress",
    thumbnail: "https://i.gyazo.com/4caca7c49689c5ac66aebecc2d8c17fe.jpg",
    images: [
      {
        image: "https://i.gyazo.com/4caca7c49689c5ac66aebecc2d8c17fe.jpg",
        label: "Humane Society - Landing Page",
      },
      {
        image: "https://i.gyazo.com/be2ecb5bff8fc6cd86f58663d636031c.jpg",
        label: "Humane Society - Landing Page",
      },
      {
        image: "https://i.gyazo.com/13a01cfc3b96421bd9e4db79aac43aa5.jpg",
        label: "Humane Society - Adopt",
      },
      {
        image: "https://placehold.co/600x400.png",
        label: "TBD",
      },
      {
        image: "https://placehold.co/600x400.png",
        label: "TBD",
      },
    ],
    features: [
      {
        heading: "Stunning Front End Interface",
        content: [
          "Beautifully designed / thought out user experience / user interface.",
        ],
      },
    ],
    projectDetails: {
      technology: ["Next.js", "React"],
    },
  },
  {
    id: 8,
    title: "Awada Realestate Group",
    liveLink: "https://awadagroup.vercel.app/",
    repo: null,
    description:
      "In collaboration with the Awada Realestate Group in Ottawa, I designed and built their new real estate website with one focus in mind: the client. This project was to focus on bringing as much value to the end client as possible, giving them all of the tools they will need in order to determine if and when to buy or sell realestate.",
    status: "Done",
    thumbnail: "https://i.gyazo.com/fdbf1b018b7d951a07355f27f629347c.jpg",
    images: [
      {
        image: "https://i.gyazo.com/fdbf1b018b7d951a07355f27f629347c.jpg",
        label: "Awada Group - Landing Page",
      },
      {
        image: "https://i.gyazo.com/72dfcb6f41a2337b2572faafb45385ec.jpg",
        label: "Awada Group - Featured Areas",
      },
      {
        image: "https://i.gyazo.com/2607fb22a77927781416fd717c507d46.jpg",
        label: "Awada Group - Highlights",
      },
      {
        image: "https://i.gyazo.com/a34bfbc0dac7ad8f78ba9edf856e740f.png",
        label: "Awada Group - Home Appraisal Tool",
      },
      {
        image: "https://i.gyazo.com/3c3de862f2871aa1513f3946d1c8c055.jpg",
        label: "Awada Group - Sellers page",
      },
    ],
    features: [
      {
        heading: "Full MLS Integration",
        content: [
          "Fully integrated with the MLS DDF API's to securely query property listings, sort properties by types",
          "Back-end API's created to securely call DDF API on the server and not expose sensitive data to the client.",
          "Complex query strings which dynamically build the query requests via the use of query parameters.",
        ],
      },
      {
        heading: "User Authentication / Management Integration using Clerk",
        content: [
          "Utilizes Clerk's user authentication management system to successfully authenticate user sessions and securely store them in the Convex database.",
          "User roles created to allow for different permission sets based on the user's assigned role.",
          "Use of middleware to protect specific routes which require authentication and / or specific user roles.",
        ],
      },
      {
        heading: "Convex back-end database integration",
        content: [
          "Utilizes a convex database / backend to store user data in a series of related tables.",
          "Tracks authenticated user's actions and stores them in the table associated to each user.",
          "Stores MLS listings the user has saved & previously viewed for future reference.",
          "Utilizes previously viewed listings to suggest 'similar' listings through a custom algorithm",
        ],
      },
      {
        heading: "Beautiful Landing Page UI",
        content: [
          "A modern and elegant layout with a minimalistic design.",
          "Sleek animations to capture the user's attention as the website loads and the user scrolls the page.",
          "Clear call-to-action (CTA) form encouraging user engagement and lead generation.",
        ],
      },
      {
        heading: "Mobile Responsive",
        content: [
          "Each page and component used was designed and built to not only look great on a desktop view, but is also completely responsive.",
          "Features fully functional mobile navigation menu",
          "The 'property search' feature fully collapses on mobile devices and utilizes a pop-up modal to allow a better user experience on mobile devices.",
        ],
      },
    ],
    projectDetails: {
      technology: [
        "Next.js",
        "React",
        "GSAP",
        "Clerk",
        "Convex",
        "next-themes",
        "TailwindCSS",
        "MLS API Integration",
        "CRM API Integration",
        "Google Places API",
      ],
    },
  },
  // 1
  // {
  //   id: 2,
  //   title: "Kingston Humane Society",
  //   liveLink: "https://humanesociety-sigma.vercel.app/",
  //   repo: null,
  //   description:
  //     "I designed and developed a modern, user-friendly website for the Kingston Humane Society using Next.js. The platform enhances the adoption process by showcasing adoptable dogs with an interactive image slider and detailed pet information. It also features an engaging blog section, smooth animations, and a visually appealing UI to create a seamless user experience. The project focused on performance, accessibility, and responsiveness, ensuring visitors can easily browse available pets and learn more about the organization on any device.",
  //   status: "In Progress",
  //   thumbnail:
  //     "https://zor0pdp300.ufs.sh/f/WhvLxAaX5BHQCFLVcArHcZiFSny9MgJ8WRh7IvzmaLkf24Ad",
  //   images: [
  //     {
  //       image: "https://i.gyazo.com/5c211ee2a6947c743f55ce8685b327d0.jpg",
  //       label: "Kingston Humane Society - Home Page",
  //     },
  //     {
  //       image: "https://i.gyazo.com/8003c1e130a52e4315c137a76922c5d1.jpg",
  //       label: "Kingston Humane Society - Animal Categories",
  //     },
  //     {
  //       image: "https://i.gyazo.com/79aa4316e7db53e5690fe684083c725f.jpg",
  //       label: "Adoptable Dogs / Animals",
  //     },
  //     {
  //       image: "https://i.gyazo.com/f92f836b57479f9a415b00e86195e7b7.jpg",
  //       label: "Hot off the Collar Blog",
  //     },
  //     {
  //       image: "https://i.gyazo.com/6eed3675952f0a77a3b5e35eb738e6ab.jpg",
  //       label: "Individual Blog Posts",
  //     },
  //   ],
  //   features: [
  //     {
  //       heading: "Beautiful Landing Page UI",
  //       content: [
  //         "A beautifully designed homepage that highlights the Kingston Humane Society's vision, mission, and key services.",
  //         "A section displaying the most recent donations.",
  //         "Clear call-to-action (CTA) buttons encouraging user engagement and lead generation.",
  //         "Elegant design that encorporates the Kingston Humane Society's colors and branding.",
  //       ],
  //     },
  //     {
  //       heading: "Static & Dynamic Pages",
  //       content: [
  //         "The website features a mixture of static and dynamic pages.",
  //         "The dogs are pulled via API from their internal system to ensure the latest information is up to date.",
  //         "The blog section is pulled via API from their internal blog system.",
  //       ],
  //     },
  //   ],
  //   projectDetails: {
  //     technology: ["Next.js", "React", "Express"],
  //   },
  // },

  // 2
  {
    id: 1,
    title: "The Apex Labs",
    liveLink: "https://nexdev-silk.vercel.app/",
    repo: "https://github.com/Benjamin-buck/nexdev",
    description:
      "The NexDev Agency Web Application is a modern, responsive website built using Next.js, designed to showcase the agency’s expertise, services, and portfolio. The application features a sleek, user-friendly landing page and includes several additional static and dynamic pages to provide a comprehensive online presence for the agency.",
    status: "In Progress",
    thumbnail:
      "https://zor0pdp300.ufs.sh/f/WhvLxAaX5BHQ1LRJ1roWVw79szU8ZQuM4jalqn0PdARkfNrG",
    images: [
      {
        image: "https://i.gyazo.com/96a95298a0b4a60de972a0a0bb900639.png",
        label: "Landing Page",
      },
      {
        image: "https://i.gyazo.com/f71593715098c809c96a345132383e38.jpg",
        label: "See through sticky navigation bar",
      },
      {
        image: "https://i.gyazo.com/aa8fd479cf4625ba0e0442406e291bd8.jpg",
        label: "Bento Grid",
      },
      {
        image: "https://i.gyazo.com/908ff189ac8967badae476084980a1a0.png",
        label: "Testimonials & Footer",
      },
      {
        image: "https://i.gyazo.com/dc9c070be98df74ea95dd5c4d3c52f25.png",
        label: "Get a Quote form",
      },
    ],
    features: [
      {
        heading: "Beautiful Landing Page UI",
        content: [
          "A beautifully designed homepage that highlights the agency’s vision, mission, and key services.",
          "Engaging, interactive elements that captivate visitors.",
          "Clear call-to-action (CTA) buttons encouraging user engagement and lead generation.",
          "Smooth animations and transitions to enhance user experience.",
        ],
      },
      {
        heading: "Static Pages",
        content: [
          "A well-structured About Us page detailing the agency’s background, values, and team members.",
          "A dedicated Services page outlining the various offerings, with a focus on the quality and impact of each service.",
          "A Portfolio page that showcases the agency’s completed projects, demonstrating the agency’s experience and expertise across various industries.",
          "Contact page with a dynamic form for inquiries and potential client interactions.",
        ],
      },
    ],
    projectDetails: {
      status: "In Progress",
      technology: ["Next.js", "React", "Express"],
    },
  },

  // 3
  {
    id: 6,
    title: "Transport Canada",
    liveLink: "https://tc.canada.ca/en",
    description:
      "I've been employed and working with Transport Canada on-going for the past 5 years on various IT infrastructure and software development projects.",
    status: "On Going",
    thumbnail:
      "https://canadianaviator.com/wp-content/uploads/2022/10/TCCA.jpg",
    images: [
      {
        image:
          "https://www.transportationservices.ca/wp-content/uploads/2018/06/truck-transportation.jpg",
        label: "Transport Canada Image 1",
      },
      {
        image:
          "https://www.insidelogistics.ca/wp-content/uploads/sites/3/2024/08/LogisticsModes.jpg",
        label: "Transport Canada Image 2",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthSDjCgbrYr15vpcUDcSdbDhzwwKhCbgqCg&s",
        label: "Transport Canada Image 3",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRQUjZJ-HFd-E6kumD4MGnSfR-UJpVApHrsg&s",
        label: "Transport Canada Image 4",
      },
      {
        image:
          "https://www.fcc-inc.com/wp-content/uploads/FCC-Transportation-Facts.jpg",
        label: "Transport Canada Image 5",
      },
    ],
    features: [
      {
        heading: "Business Analysis",
        content: [
          "Worked as a Business Analyst / Business Systems Analyst on the following Transport Canada Applications: Client Identification Database (CID), CANUTEC Registration Service (CRS), Regulatory Oversight Management (ROM), Facilities and Design Registrations (FDR), and the TDG Online Portal.",
        ],
      },
      {
        heading: "User Experience / User Interface Design",
        content: [
          "Developed low / high fidelity mockups using Figma to aid the development and product owner teams.",
          "Optimized for speed and performance, ensuring fast load times.",
          "Accessibility-friendly design following WCAG guidelines.",
        ],
      },
      {
        heading: "Agile SCRUM Leader",
        content: [
          "Lead all SCRUM ceremonies for the team",
          "Gathered business requirements from business teams and developed high level BRD's, use cases, and user stories for development.",
        ],
      },
      {
        heading: "Applications I've Worked On:",
        content: [
          "Client Identification Database (CID)",
          "CANUTEC Registration System (CRS)",
          "Regulatory Oversight Management (ROM)",
          "Facilities and Design Registration (FDR)",
          "TDG Online Portal",
          "Dangerous Goods Accident Information System (DGAIS)",
        ],
      },
    ],
    projectDetails: {
      technology: ["Classified Information"],
    },
  },

  {
    id: 7,
    title: "Bugs.io",
    liveLink: "",
    repo: "",
    description:
      "A full stack application designed to log system bugs, modify the details / title of the issues, and assign it to users. This app features full authentication, full CRUD functionality for adding, modifying, and deleting issues, etc.",
    status: "Done",
    thumbnail: "https://i.gyazo.com/48065c306526f4d9e4a81c035b15bd0d.png",
    images: [
      {
        image: "https://i.gyazo.com/dd658e5ced68879cb9b67d598a4d08dd.png",
        label: "Github Landing Page",
      },
      {
        image: "https://i.gyazo.com/86120e2a5fc70086731abb9da633ae97.png",
        label: "Github Landing Page part 2",
      },
      {
        image: "https://i.gyazo.com/dfe619a3bf9a049a466d2f721c535130.png",
        label: "Footer",
      },
      {
        image: "https://i.gyazo.com/550ffe427d38529a1568d34a5f402ef6.png",
        label: "Github Internal Dashboard",
      },
      {
        image: "https://i.gyazo.com/2af947a61e635446a5efc06b037130d8.png",
        label: "Account page",
      },
    ],
    features: [
      {
        heading: "User Authentication / Management",
        content: [
          "Utilizes authentication providers (google) to authenticate and manage application users.",
          "Allows for users to assign bugs / issues to either themselves or other users.",
        ],
      },
      {
        heading: "Responsive & Optimized Performance",
        content: [
          "Fully responsive design ensuring a seamless experience across all devices.",
          "Optimized for speed and performance, ensuring fast load times.",
          "Accessibility-friendly design following WCAG guidelines.",
        ],
      },
      {
        heading: "Static Pages",
        content: [
          "Well structured static pages with interactive menus and navigation",
          "Well structured HTML and beaitufully styled with Tailwind CSS",
        ],
      },
    ],
    projectDetails: {
      technology: ["Next.js", "Tailwind CSS", "GSAP", "Vercel"],
    },
  },

  // 4
  {
    id: 4,
    title: "GitHub User Interface Clone",
    liveLink: "https://github.benjaminalan.io",
    repo: "https://github.com/Benjamin-buck/github-clone",
    description:
      "A clone of the popular user interface. This project aimed to challenge my skills at building complex user interfaces. The clone features a full landing page and additional internal pages once the 'Sign in' button is selected.",
    status: "Done",
    thumbnail:
      "https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1-1024x512.png",
    images: [
      {
        image: "https://i.gyazo.com/9b6b1da8c74d42a72eb7d062cffc4783.png",
        label: "Github Landing Page",
      },
      {
        image: "https://i.gyazo.com/616b5ad07206a688836cf4dde9a62676.jpg",
        label: "Github Landing Page part 2",
      },
      {
        image: "https://i.gyazo.com/65385053f867ce111fb90599f17b573b.png",
        label: "Footer",
      },
      {
        image: "https://i.gyazo.com/2e14f96e0862f51657b0a4a4fcddf4df.png",
        label: "Github Internal Dashboard",
      },
      {
        image: "https://i.gyazo.com/f705cf836d5204d1664a693f829d4bc0.png",
        label: "Account page",
      },
      {
        image: "https://i.gyazo.com/bfd32b1ba380731f7da124a579708a51.png",
        label: "Issues page",
      },
    ],
    features: [
      {
        heading: "Pixel Perfect Landing Page Clone",
        content: [
          "Features a pixel perfect clone of the official GitHub website landing page.",
        ],
      },
      {
        heading: "Responsive & Optimized Performance",
        content: [
          "Fully responsive design ensuring a seamless experience across all devices.",
          "Optimized for speed and performance, ensuring fast load times.",
          "Accessibility-friendly design following WCAG guidelines.",
        ],
      },
      {
        heading: "Static Pages",
        content: [
          "Well structured static pages with interactive menus and navigation",
          "Well structured HTML and beaitufully styled with Tailwind CSS",
        ],
      },
    ],
    projectDetails: {
      technology: ["Next.js", "Tailwind CSS", "GSAP", "Vercel"],
    },
  },

  // 5
  {
    id: 3,
    title: "Serenity Landscaping",
    liveLink: "https://serenity-sage.vercel.app/",
    repo: "https://github.com/Benjamin-buck/serenity",
    description:
      "A modern, visually appealing website built with Next.js for Serenity Landscaping, showcasing services, past projects, and a seamless user experience.",
    status: "Done",
    thumbnail: "https://i.gyazo.com/0a4ba76ed713171d0e1cab17b182d8ef.png",
    images: [
      {
        image: "https://i.gyazo.com/f350331f4bba6ff4c10378ea0f600ddd.jpg",
        label: "Landing Page",
      },
      {
        image: "https://i.gyazo.com/f844556434c45d44a93d1bc60b2b79c8.jpg",
        label: "See through sticky navigation bar",
      },
      {
        image: "https://i.gyazo.com/32ffa45f1c68056c4321eee6151c6721.png",
        label: "Bento Grid",
      },
      {
        image: "https://i.gyazo.com/0dec32610272e33fa19d45707ef10167.jpg",
        label: "Testimonials & Footer",
      },
      {
        image: "https://i.gyazo.com/42d05671c0aab94cd1f7fc031c7fa8f6.png",
        label: "Get a Quote form",
      },
    ],
    features: [
      {
        heading: "Beautiful Landing Page UI",
        content: [
          "A beautifully designed homepage that highlights the agency’s vision, mission, and key services.",
          "Engaging, interactive elements that captivate visitors.",
          "Clear call-to-action (CTA) buttons encouraging user engagement and lead generation.",
          "Smooth animations and transitions to enhance user experience.",
        ],
      },
      {
        heading: "Responsive & Optimized Performance",
        content: [
          "Fully responsive design ensuring a seamless experience across all devices.",
          "Optimized for speed and performance, ensuring fast load times.",
          "Accessibility-friendly design following WCAG guidelines.",
        ],
      },
      {
        heading: "Static Pages",
        content: [
          "A well-structured About Us page detailing the agency’s background, values, and team members.",
          "A dedicated Services page outlining the various offerings, with a focus on the quality and impact of each service.",
          "A Portfolio page that showcases the agency’s completed projects, demonstrating the agency’s experience and expertise across various industries.",
          "Contact page with a dynamic form for inquiries and potential client interactions.",
        ],
      },
    ],
    projectDetails: {
      technology: ["Next.js", "Tailwind CSS", "GSAP", "Vercel"],
    },
  },

  // 6
  {
    id: 5,
    title: "Nike Landing Page Clone",
    liveLink: "https://nike.benjaminalan.io",
    repo: "https://github.com/Benjamin-buck/Nike-Clone",
    description:
      "A user interface clone of the popular show brand 'Nike'. This project features a beautiful and responsive clone of the Nike landing page UI.",
    status: "Done",
    thumbnail:
      "https://res.cloudinary.com/dmubfrefi/image/private/s--OPpDHsl3--/c_crop,h_2728,w_4090,x_334,y_0/c_scale,w_3840/f_auto/q_auto/v1/dee-about-cms-prod-medias/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?_a=BAAAV6Bs",
    images: [
      {
        image: "https://i.gyazo.com/2837f5419e9f6e8b66a5d5a3ff1f0172.jpg",
        label: "Hero",
      },
      {
        image: "https://i.gyazo.com/30361be1d415fb2b9de16713ee919534.png",
        label: "Products",
      },
      {
        image: "https://i.gyazo.com/f14032f9d780e13934a8e8d7ae84e6b1.jpg",
        label: "Product Showcase",
      },
      {
        image: "https://i.gyazo.com/0d135460ec506b935eec1cce1d964c98.jpg",
        label: "Showcase section",
      },
      {
        image: "https://i.gyazo.com/f3beedc8b5cfc752b64303c9e7ecb872.png",
        label: "Testimonials",
      },
      {
        image: "https://i.gyazo.com/c846a69ebf8a42d7ddbf5a5a154ae29d.png",
        label: "Footer",
      },
    ],
    features: [
      {
        heading: "Beautiful Landing Page UI",
        content: [
          "A beautifully designed homepage that highlights the agency’s vision, mission, and key services.",
          "Engaging, interactive elements that captivate visitors.",
          "Clear call-to-action (CTA) buttons encouraging user engagement and lead generation.",
          "Smooth animations and transitions to enhance user experience.",
        ],
      },
      {
        heading: "Responsive & Optimized Performance",
        content: [
          "Fully responsive design ensuring a seamless experience across all devices.",
          "Optimized for speed and performance, ensuring fast load times.",
          "Accessibility-friendly design following WCAG guidelines.",
        ],
      },
      {
        heading: "Static Pages",
        content: [
          "A well-structured About Us page detailing the agency’s background, values, and team members.",
          "A dedicated Services page outlining the various offerings, with a focus on the quality and impact of each service.",
          "A Portfolio page that showcases the agency’s completed projects, demonstrating the agency’s experience and expertise across various industries.",
          "Contact page with a dynamic form for inquiries and potential client interactions.",
        ],
      },
    ],
    projectDetails: {
      technology: ["Next.js", "Tailwind CSS", "GSAP", "Vercel"],
    },
  },
];
