interface Project {
  id: number;
  title: string;
  liveLink?: string;
  repo?: string | null;
  description: string;
  status: string;
  thumbnail: string;
  images?: { image: string; label: string }[];
  startDate?: string;
  endDate?: string;
  features: { heading: string; content: string[] }[];
  projectDetails: { technology: string[] };
  isPasswordProtected?: boolean;
}

export const myProjects: Project[] = [
  {
    id: 9,
    title: "Novari Health",
    liveLink: "https://novarihealth.com/",
    repo: null,
    description:
      "Novari Health is a healthcare technology company that provides a comprehensive platform for managing patient care, streamlining operations, and improving healthcare outcomes. The platform offers a range of features including electronic health records (EHR), telemedicine capabilities, appointment scheduling, and patient engagement tools. Novari Health aims to enhance the efficiency and effectiveness of healthcare delivery while prioritizing patient-centered care. Portfolio items are not publicly available for this project due to confidentiality agreements with the employer. Please request more information if you would like to learn more about this project.",
    status: "Current",
    thumbnail: "/novarihealth-1.jpg",
    startDate: "2025-06-16",
    endDate: "Present",
    isPasswordProtected: true,
    features: [
      {
        heading: "Legacy Application Rewrite",
        content: [
          "Reconceptialized the Novari ATC Waitlist Management software from a legacy codebase to a modern, API first approach.",
          "RSVP tracking so you always know who's coming.",
        ],
      },
    ],
    images: [
      {
        image: "/novarihealth-1.JPG",
        label: "Novari Health",
      },
      {
        image: "/atc-1.png",
        label: "ATC Waitlist ",
      },
      {
        image: "/atc-2.png",
        label: "Case Details",
      },
      {
        image: "/atc-3.png",
        label: "Surgical Blocks",
      },
      {
        image: "/atc-4.png",
        label: "Case Scheduling",
      },
      {
        image: "/atc-5.png",
        label: "Weekly Surgical Blocks",
      },

      {
        image: "/atc-6.png",
        label: "Case History",
      },

      {
        image: "/atc-7.png",
        label: "Secure Messaging",
      },

      {
        image: "/atc-8.png",
        label: "Notifications",
      },
    ],
    projectDetails: {
      technology: [
        "React",
        ".NET Core",
        "Entity Framework",
        "SQL",
        "Redis",
        "Redux",
      ],
    },
  },
  {
    id: 20391039,
    title: "SideChat",
    repo: null,
    description:
      "Sidechat is a movie / tv show companion, offering a full suite of features to enable conversations among movie / tv show fans. The platform offers a redit style discussion forum for each movie / tv show with time-coded comments to ensure that you can follow along with the conversation as you watch. Sidechat also offers a 'watch together' feature which allows users to synchronize their video playback with friends and family while chatting in real time through the platform.",
    status: "In Progress",
    thumbnail: "/sidechat-1.png",
    startDate: "2026-05-01",
    endDate: "Present",
    features: [
      {
        heading: "iOS & Android Mobile Application",
        content: [
          "Cross-platform iOS and Android mobile application built with React Native and Expo.",
          "NativeWind (Tailwind CSS for React Native) for consistent, utility-first styling across both platforms.",
          "React Native Reanimated for smooth spring and keyframe animations throughout the app.",
          "Safe area handling, keyboard avoidance, and proper insets for notches and bottom bars on all devices.",
        ],
      },
      {
        heading: "User Accounts, Login & Onboarding",
        content: [
          "Email and password authentication plus Google OAuth single sign-on, powered by Clerk.",
          "Multi-step registration wizard: email verification, profile photo upload, and age gate (13+).",
          "Genre selection onboarding step — users choose a minimum of 3 favourite genres from 18 options before entering the app.",
          "Friend discovery onboarding step to find and follow friends immediately after signing up.",
          "Edit account screen for updating display name, bio (150 character limit), and profile picture at any time.",
        ],
      },
      {
        heading: "Movie & TV Show Browsing",
        content: [
          "Full TMDB API integration surfaces trending, now playing, top rated, and upcoming movies and TV shows.",
          "Dedicated Movies and TV Shows tabs with horizontal carousel sections and expandable 'See All' paginated lists.",
          "Genre filtering across 18+ genres for both movies and TV shows.",
          "Full-text search for movies and TV shows by title.",
          "Detail pages show poster, backdrop, overview, cast (top 20 with photos), similar content, TMDB reviews, and community ratings.",
        ],
      },
      {
        heading: "Synchronized Watch Comments",
        content: [
          "Post comments tied to a specific timestamp in a movie or TV episode — comments appear in-sync as other viewers reach that moment.",
          "Nested reply threads on any timestamped comment.",
          "Upvote and downvote system on all comments with live vote counts.",
          "Filter comments to show only friends' reactions or all users watching the same content.",
          "Full season and episode awareness for TV shows, including an episode picker modal with stills, runtime, air date, and overview.",
        ],
      },
      {
        heading: "Watch Sessions",
        content: [
          "Start, pause, and resume watch sessions with persistent state saved to the database.",
          "Session tracks started_at, paused_duration, and status (idle / watching / paused).",
          "Supports both movies and individual TV episodes within a single session model.",
          "Friend filter mode lets users watch with only selected friends' comments visible.",
        ],
      },
      {
        heading: "Reviews & Ratings",
        content: [
          "Rate any movie or TV show on a 0–5 star scale with 0.1 decimal precision.",
          "Optional written review accompanies each rating.",
          "Edit existing reviews at any time — rating and text both updatable.",
          "Community review feed on every detail page shows all user reviews with expandable long-form text.",
          "Own review is highlighted with a 'You' badge in community feeds.",
        ],
      },
      {
        heading: "Points & Rank System",
        content: [
          "Ten-tier rank system from Lurker (0 pts) through Legend (8,000 pts), each with a unique icon and colour.",
          "Earn points for every action: +1 per comment, +5 per new review, +2 per movie watched, +2 per new follower, +3 per friendship formed.",
          "Rank-up modal celebration triggers automatically when a user crosses a rank threshold.",
          "Progress bar on profiles shows current rank, points to next rank, and overall standing.",
          "Top 5 highest-ranked users are surfaced with a recognition badge across the app.",
        ],
      },
      {
        heading: "Social Features",
        content: [
          "Friend request system with send, accept, decline, and cancel flows — two-way confirmation required to become friends.",
          "One-way follow system independent of friendships, with follower and following counts on every profile.",
          "User search with case-insensitive full-text lookup by username.",
          "Public profiles display bio, avatar, stats (reviews, movies watched, followers, following), and a feed of their watch comments and reviews.",
          "Profile buttons dynamically reflect current relationship: Friends, Follow, Add Friend, Pending, or Unfollow.",
        ],
      },
      {
        heading: "Notifications",
        content: [
          "In-app notifications for comment replies and incoming friend requests.",
          "Unread badge count on the notifications tab updates in real time.",
          "Notifications auto-mark as read when the screen is opened.",
          "Dedicated pending friend requests section with one-tap Accept and Decline actions.",
          "Notification items link back to the movie or show where the interaction occurred.",
        ],
      },
      {
        heading: "Watchlist",
        content: [
          "Save any movie or TV show to a personal watchlist with a single tap.",
          "Watchlist screen shows all saved items with movie/TV indicators and quick-remove option.",
          "Persisted to the database so the watchlist is available across devices.",
        ],
      },
    ],
    images: [
      {
        image: "/sidechat-1.png",
        label: "Sidechat",
      },
      {
        image: "/sidechat-2.png",
        label: "Sidechat",
      },
      {
        image: "/sidechat-3.png",
        label: "Sidechat",
      },
      {
        image: "/sidechat-4.png",
        label: "Sidechat",
      },
      {
        image: "/sidechat-5.png",
        label: "Sidechat",
      },
    ],
    projectDetails: {
      technology: [
        "React Native",
        "Expo",
        "TypeScript",
        "NativeWind",
        "Clerk",
        "PostgreSQL",
        "Neon",
        "TMDB API",
        "React Navigation",
        "React Native Reanimated",
      ],
    },
  },
  {
    id: 9000,
    title: "Band Account",
    liveLink: "https://bandaccount.com/",
    repo: null,
    description:
      "The Band Account app was built with a simple purpose: to make managing a band easier so that musicians can focus on what they do best. This application was developed as a SaaS application and is live in production with real users and bands that rely on it for their management needs. This application was conceptualized, architected, developed, tested, and deplyed as a solo project with lots of love and care at every step of the way. Band Account was built with an API first approach, and has been accompanied by an iOS and Android dedicated mobile application that consumes the same APIs for a seamless experience across all platforms.",
    status: "Done",
    thumbnail: "/bandaccount-1.png",
    images: [
      {
        image: "/bandaccount-1.png",
        label: "Band Account 1",
      },
      {
        image: "/bandaccount-3.png",
        label: "Band Account 2",
      },
      {
        image: "/bandaccount-4.png",
        label: "Band Account 3",
      },
      {
        image: "/bandaccount-5.png",
        label: "Band Account 4",
      },
      {
        image: "/bandaccount-6.png",
        label: "Band Account 5",
      },
    ],
    features: [
      {
        heading: "Shared Calendar",
        content: [
          "Schedule rehearsals, shows, and meetings in one shared band calendar.",
          "RSVP tracking so you always know who's coming.",
        ],
      },
      {
        heading: "Setlist Manager",
        content: [
          "Build and reorder setlists with drag-and-drop.",
          "Attach notes per song per show.",
          "Print your setlists once you're happy with them.",
        ],
      },
      {
        heading: "Song Library",
        content: [
          "Store your full catalogue with audio files, lyrics, tabs, BPM, and key information.",
          "Link songs to setlists and shows for easy access on the road.",
          "Audio uploads up to 100 MB per file.",
        ],
      },
      {
        heading: "Show & Gig Management",
        content: [
          "Track venues, guarantees, set times, and setlists for every gig past and present.",
        ],
      },
      {
        heading: "Band Chat",
        content: [
          "Real-time channels with @mentions, unread highlights, and notifications so nothing gets missed.",
          "Message persistence and email notifications keep the whole band in sync.",
        ],
      },
      {
        heading: "Task Board",
        content: [
          "Five-column Kanban board with drag-and-drop functionality.",
          "Priorities, assignees, due dates, labels, attachments, and comments on every task.",
          "Filter and search across all tasks.",
        ],
      },
      {
        heading: "Member Management",
        content: [
          "Invite band members via a shareable link.",
          "Assign Admin or Member roles with different permission sets.",
          "See who's in the band at a glance.",
        ],
      },
      {
        heading: "Finance Tracker",
        content: [
          "Log income and expenses, track guarantees, and keep your band's finances transparent.",
        ],
      },
      {
        heading: "Native Ticketing",
        content: [
          "Sell tickets directly from your show page — no third-party platform.",
          "Multiple ticket types with Stripe integration (2.5% fee).",
          "QR codes, browser-based door scanner, and a full sales dashboard.",
          "Revenue goes straight to your bank.",
        ],
      },
      {
        heading: "Show Marketplace",
        content: [
          "Post and browse gig opportunities.",
          "Connect with promoters and find support slots.",
        ],
      },
      {
        heading: "Stage Plots & Tech Riders",
        content: [
          "Create and manage your stage plot and tech rider.",
          "Share with venues and update as your setup evolves.",
        ],
      },
      {
        heading: "And a lot more",
        content: [
          "Smart notifications, tour planning, and public links page.",
          "Social feed, band profiles, and direct messaging.",
          "File attachments, @mentions, and real-time updates throughout.",
        ],
      },
    ],
    projectDetails: {
      technology: [
        "Next.js",
        "React",
        "PostgreSQL",
        "Prisma",
        "Stripe API",
        "Vercel",
        "Expo",
        "React Native",
      ],
    },
  },
  {
    id: 20901928,
    title: "The Storible Company",
    liveLink: "https://thestoriblecompany.com.",
    repo: null,
    description:
      "The Storible Company is a fractional Human Resources based service business. This project was to design and build a modern, sleek, and user-friendly corporate website to showcase the company's services and offerings. The website was built with a focus on providing an engaging user experience, clear communication of the company's value proposition, and easy navigation for potential clients. The project involved creating a visually appealing design, implementing responsive layouts for optimal viewing on various devices, and integrating interactive elements to enhance user engagement.",
    status: "Done",
    thumbnail: "/storible-1.png",
    images: [
      {
        image: "/storible-1.png",
        label: "Landing Page",
      },
      {
        image: "/storible-2.png",
        label: "Storible - Landing Page",
      },
      {
        image: "/storible-3.png",
        label: "Storible - Features",
      },
      {
        image: "/storible-4.png",
        label: "Storible - Call to Action / Intake Form",
      },
      {
        image: "/storible-5.png",
        label: "Storible - Contact Us",
      },
    ],
    features: [
      {
        heading: "Hero Section with Engaging Animations",
        content: [
          "Engaging hero section with captivating animations to immediately grab the user's attention.",
          "Explicit calls to action which encourage user engagement and lead generation.",
        ],
      },
    ],
    projectDetails: {
      technology: [
        "Wordpress",
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Elementor",
      ],
    },
  },
  {
    id: 2930028,
    title: "Awada Realestate Group",
    liveLink: "https://awadagroup.com/",
    repo: null,
    description:
      "In collaboration with the Awada Realestate Group in Ottawa, I designed and built their new real estate website with one focus in mind: the client. This project was to focus on bringing as much value to the end client as possible, giving them all of the tools they will need in order to determine if and when to buy or sell realestate.",
    status: "Done",
    thumbnail: "/awadagroup-1.png",
    images: [
      {
        image: "/awadagroup-1.png",
        label: "Awada Group - Landing Page",
      },
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

  // 3
  {
    id: 6203920,
    title: "Transport Canada",
    liveLink: "https://tc.canada.ca/en",
    repo: null,
    description:
      "I was employed and working with Transport Canada on-going for the past 5 years on various IT infrastructure and software development projects.",
    status: "Done",
    startDate: "2020-01-06",
    endDate: "2025-06-15",
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

  // {
  //   id: 29a27420s,
  //   title: "Bugs.io",
  //   liveLink: "",
  //   repo: "",
  //   description:
  //     "A full stack application designed to log system bugs, modify the details / title of the issues, and assign it to users. This app features full authentication, full CRUD functionality for adding, modifying, and deleting issues, etc.",
  //   status: "Done",
  //   thumbnail: "https://i.gyazo.com/48065c306526f4d9e4a81c035b15bd0d.png",
  //   images: [
  //     {
  //       image: "https://i.gyazo.com/dd658e5ced68879cb9b67d598a4d08dd.png",
  //       label: "Github Landing Page",
  //     },
  //     {
  //       image: "https://i.gyazo.com/86120e2a5fc70086731abb9da633ae97.png",
  //       label: "Github Landing Page part 2",
  //     },
  //     {
  //       image: "https://i.gyazo.com/dfe619a3bf9a049a466d2f721c535130.png",
  //       label: "Footer",
  //     },
  //     {
  //       image: "https://i.gyazo.com/550ffe427d38529a1568d34a5f402ef6.png",
  //       label: "Github Internal Dashboard",
  //     },
  //     {
  //       image: "https://i.gyazo.com/2af947a61e635446a5efc06b037130d8.png",
  //       label: "Account page",
  //     },
  //   ],
  //   features: [
  //     {
  //       heading: "User Authentication / Management",
  //       content: [
  //         "Utilizes authentication providers (google) to authenticate and manage application users.",
  //         "Allows for users to assign bugs / issues to either themselves or other users.",
  //       ],
  //     },
  //     {
  //       heading: "Responsive & Optimized Performance",
  //       content: [
  //         "Fully responsive design ensuring a seamless experience across all devices.",
  //         "Optimized for speed and performance, ensuring fast load times.",
  //         "Accessibility-friendly design following WCAG guidelines.",
  //       ],
  //     },
  //     {
  //       heading: "Static Pages",
  //       content: [
  //         "Well structured static pages with interactive menus and navigation",
  //         "Well structured HTML and beaitufully styled with Tailwind CSS",
  //       ],
  //     },
  //   ],
  //   projectDetails: {
  //     technology: ["Next.js", "Tailwind CSS", "GSAP", "Vercel"],
  //   },
  // },

  {
    id: 4,
    title: "GitHub User Interface Clone",
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
  // {
  //   id: 5,
  //   title: "Nike Landing Page Clone",
  //   liveLink: "https://nike.benjaminalan.io",
  //   repo: "https://github.com/Benjamin-buck/Nike-Clone",
  //   description:
  //     "A user interface clone of the popular show brand 'Nike'. This project features a beautiful and responsive clone of the Nike landing page UI.",
  //   status: "Done",
  //   thumbnail:
  //     "https://res.cloudinary.com/dmubfrefi/image/private/s--OPpDHsl3--/c_crop,h_2728,w_4090,x_334,y_0/c_scale,w_3840/f_auto/q_auto/v1/dee-about-cms-prod-medias/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?_a=BAAAV6Bs",
  //   images: [
  //     {
  //       image: "https://i.gyazo.com/2837f5419e9f6e8b66a5d5a3ff1f0172.jpg",
  //       label: "Hero",
  //     },
  //     {
  //       image: "https://i.gyazo.com/30361be1d415fb2b9de16713ee919534.png",
  //       label: "Products",
  //     },
  //     {
  //       image: "https://i.gyazo.com/f14032f9d780e13934a8e8d7ae84e6b1.jpg",
  //       label: "Product Showcase",
  //     },
  //     {
  //       image: "https://i.gyazo.com/0d135460ec506b935eec1cce1d964c98.jpg",
  //       label: "Showcase section",
  //     },
  //     {
  //       image: "https://i.gyazo.com/f3beedc8b5cfc752b64303c9e7ecb872.png",
  //       label: "Testimonials",
  //     },
  //     {
  //       image: "https://i.gyazo.com/c846a69ebf8a42d7ddbf5a5a154ae29d.png",
  //       label: "Footer",
  //     },
  //   ],
  //   features: [
  //     {
  //       heading: "Beautiful Landing Page UI",
  //       content: [
  //         "A beautifully designed homepage that highlights the agency’s vision, mission, and key services.",
  //         "Engaging, interactive elements that captivate visitors.",
  //         "Clear call-to-action (CTA) buttons encouraging user engagement and lead generation.",
  //         "Smooth animations and transitions to enhance user experience.",
  //       ],
  //     },
  //     {
  //       heading: "Responsive & Optimized Performance",
  //       content: [
  //         "Fully responsive design ensuring a seamless experience across all devices.",
  //         "Optimized for speed and performance, ensuring fast load times.",
  //         "Accessibility-friendly design following WCAG guidelines.",
  //       ],
  //     },
  //     {
  //       heading: "Static Pages",
  //       content: [
  //         "A well-structured About Us page detailing the agency’s background, values, and team members.",
  //         "A dedicated Services page outlining the various offerings, with a focus on the quality and impact of each service.",
  //         "A Portfolio page that showcases the agency’s completed projects, demonstrating the agency’s experience and expertise across various industries.",
  //         "Contact page with a dynamic form for inquiries and potential client interactions.",
  //       ],
  //     },
  //   ],
  //   projectDetails: {
  //     technology: ["Next.js", "Tailwind CSS", "GSAP", "Vercel"],
  //   },
  // },
];
