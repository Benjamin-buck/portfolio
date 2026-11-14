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
    title: "Novari ATC",
    liveLink: "https://novarihealth.com/",
    repo: null,
    description:
      "Novari ATC is a medical waitlist management platform developed by Novari Health. The application focuses on providing a comprehsive solution for managing surgical waitlists. This project was to reconceptualize the Novari ATC Waitlist Management software from a legacy codebase to a modern, API first approach. The new application was built with a focus on providing an engaging user experience, clear communication of the company's value proposition, and easy navigation for potential clients. The project involved creating a visually appealing design, implementing responsive layouts for optimal viewing on various devices, and integrating interactive elements to enhance user engagement.",
    status: "Current",
    thumbnail: "/novarihealth-1.jpg",
    startDate: "2025-06-16",
    endDate: "Present",
    isPasswordProtected: true,
    features: [
      {
        heading: "Legacy Application Rewrite",
        content: [
          "Led the reconceptualization of the Novari ATC Waitlist Management application from a legacy ColdFusion (2003) codebase to a modern, API-first architecture — React front-end consuming a .NET Web API backend via a Backend-for-Frontend (BFF) pattern.",
          "Maintained full backwards compatibility with existing client integrations throughout the rebuild, ensuring zero disruption to active hospital deployments.",
        ],
      },
      {
        heading: "Figma Component Library & UI Design System",
        content: [
          "Designed and delivered a comprehensive Novari ATC Figma component library — covering typography, colour tokens, spacing, form elements, data tables, modals, and all application-specific components.",
          "Built high-fidelity, fully responsive Figma prototypes for every screen in the application before a single line of production code was written, enabling stakeholder sign-off and developer handoff with zero ambiguity.",
          "Established design system standards that ensured visual consistency across the entire rebuilt platform.",
        ],
      },
      {
        heading: "Technical Solutioning & Architecture",
        content: [
          "Contributed to key front-end architecture decisions including component structure, state management strategy, and API integration patterns in React.",
          "Led technical solutioning sessions for complex backend features, defining CQRS command/query separation patterns within the .NET Web API layer.",
          "Drove the design and implementation of a full Role-Based Access Control (RBAC) system, mapping user roles to fine-grained permission scopes across the application — ensuring compliance with the multi-client, multi-hospital environment Novari operates in.",
        ],
      },
      {
        heading: "Stakeholder & Client Engagement",
        content: [
          "Facilitated requirements gathering and workflow analysis sessions with hospital clients, product owners, and internal stakeholders to translate clinical workflows into software requirements.",
          "Led user testing sessions with end users (surgical coordinators, clinicians, administrators) to validate designs and iterate based on real-world feedback before development milestones.",
          "Produced high-level Business Requirements Documents (BRDs), use cases, and user stories to align development work with client expectations.",
        ],
      },
      {
        heading: "Agile SCRUM Leadership",
        content: [
          "Facilitated all Agile SCRUM ceremonies for the Novari ATC product team — sprint planning, backlog grooming, daily standups, sprint reviews, and retrospectives.",
          "Managed and maintained the full product backlog across both the legacy ATC and ATC rebuild streams, prioritizing work in alignment with the product roadmap and client commitments.",
          "Reported sprint progress, risks, and delivery outcomes directly to upper management and product leadership.",
        ],
      },
    ],
    images: [
      {
        image: "/novarihealth-1.jpg",
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
      {
        image: "/atc-9.png",
        label: "Notifications",
      },
      {
        image: "/atc-10.png",
        label: "Notifications",
      },
      {
        image: "/atc-11.png",
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
    id: 920392023,
    title: "Novari eRequest",
    liveLink: "https://novarihealth.com/",
    repo: null,
    description:
      "Novari eRequest is a modern patient referral management platform developed by Novari Health.",
    status: "Current",
    thumbnail: "/erequest.png",
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
        image: "/erequest.png",
        label: "Novari eRequest",
      },
      {
        image: "/erequest-1.png",
        label: "Novari eRequest - Referral Dashboard",
      },
      {
        image: "/erequest-2.png",
        label: "Case Details",
      },
      {
        image: "/erequest-3.png",
        label: "Surgical Blocks",
      },
      {
        image: "/erequest-4.png",
        label: "Case Scheduling",
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
    id: 9000,
    title: "Band Account",
    liveLink: "https://bandaccount.com/",
    repo: null,
    description:
      "Band Account is a band management platform that puts a band's shows, setlists, rehearsals, tickets, fans and to-dos in one place the whole band can see. It started as a shared workspace for running a band and has grown into a full platform: a members-only fan club, native ticketing with $0 platform fees, a website builder with custom domains, merch, a CRM, social media scheduling, and a musician community. It is a live SaaS product with Free and Premium plans billed per band, and real bands use it to run their day-to-day. I conceived, designed, built, tested and deployed it on my own. The web app is a Next.js monolith with an API-first backend (475+ API routes over a 200+ model PostgreSQL schema) that also powers a native iOS and Android band app and a separate Fan Account app.",
    status: "Current",
    startDate: "2026-03-07",
    endDate: "Present",
    thumbnail: "/bandaccount-band-hq.png",
    images: [
      {
        image: "/bandaccount-band-hq.png",
        label: "Running the band: shows, run of show, setlists and RSVPs",
      },
      {
        image: "/bandaccount-fan-club.png",
        label: "Members-only fan club with ranks, points and perks",
      },
      {
        image: "/bandaccount-early-listening.png",
        label: "Early listening: stream-only previews with ratings",
      },
      {
        image: "/bandaccount-website-builder.png",
        label: "Website builder with themes and custom domains",
      },
      {
        image: "/bandaccount-ticketing.png",
        label: "Native ticketing with club presales and $0 platform fee",
      },
      {
        image: "/bandaccount-task-board.png",
        label: "Task board with subtasks, owners and due dates",
      },
      {
        image: "/bandaccount-rehearsal-mode.png",
        label: "Rehearsal mode: run the set song by song",
      },
      {
        image: "/bandaccount-door-scanning.png",
        label: "QR ticket scanning at the door",
      },
      {
        image: "/bandaccount-tabs-chords.png",
        label: "Guitar and bass tabs with chord diagrams",
      },
      {
        image: "/bandaccount-pricing.png",
        label: "Free and Premium plans, priced per band",
      },
    ],
    features: [
      {
        heading: "Band Workspace",
        content: [
          "Shared band calendar for rehearsals, shows and meetings, with RSVPs and member availability.",
          "Real-time band chat with channels, @mentions, reactions, voice notes and song sharing, powered by Pusher.",
          "Task board with subtasks, owners, due dates, reusable and recurring task templates, and a daily digest of anything due or overdue.",
          "Band goals, member contributions and analytics so everyone can see where the band is heading.",
          "Owner, Admin and Member roles, with invite links and a band switcher for musicians in more than one band.",
        ],
      },
      {
        heading: "Songs, Setlists & Rehearsal Mode",
        content: [
          "Song library with keys, tempos, lyrics, notes, audio and voice notes for drafting new ideas.",
          "Drag-and-drop setlists built from the library, with printable versions and fan-club-only setlists for upcoming shows.",
          "Rehearsal mode runs the set song by song on any phone or tablet, with synced lyrics, a click track and backing tracks.",
          "A guitar and bass tab editor with a part per player, any tuning or capo, per-section chord progressions and fretboard diagrams.",
          "Album planning with tracklists, release readiness checks, track voting and a full listen-through.",
        ],
      },
      {
        heading: "Shows, Tours & Stage Plots",
        content: [
          "A show wizard covering venue, guarantee, contacts, run of show and set times, with venue-local time zones handled correctly.",
          "Lineup invites so other bands on the bill can be added to the show, plus day sheets, guest lists and gear checklists.",
          "Post-show settlement reports, with each band's share flowing into Finance.",
          "Tour planning and a show marketplace for finding gigs and support slots.",
          "Stage plots and tech riders that can be shared with venues by link or as a PDF.",
        ],
      },
      {
        heading: "Native Ticketing & Merch",
        content: [
          "Sell tickets from the band's own show page with early bird, GA, VIP, pay-what-you-can and club presale tiers, each with its own price and cap.",
          "Stripe Connect checkout pays bands directly and Band Account takes no platform fee, so a $20 ticket puts $20 in the band's account.",
          "QR tickets are emailed to fans and scanned at the door from any phone, with a live sales and check-in dashboard.",
          "Ticket sales from external platforms can be tracked alongside native sales.",
          "Merch store, inventory and sales tracking from the same workspace.",
        ],
      },
      {
        heading: "Fan Club & Early Listening",
        content: [
          "A members-only fan club with announcements by email, a forum, and perks such as presales and discount codes.",
          "Fans earn points and climb ranks from Newcomer to Legend, with streaks that reward the ones who keep showing up.",
          "Stream-only previews of unreleased songs and EPs, with star ratings and comments, that switch off on a date the band sets.",
          "A dedicated Fan Account mobile app where fans follow bands, buy tickets, find shows nearby and message each other.",
        ],
      },
      {
        heading: "Website Builder, Blog & Links",
        content: [
          "Block-based band website builder covering shows, music, news, members, gallery and a booking form.",
          "Themes with 7 font pairings, custom colours, light or dark modes and corner styles, served on the band's own domain.",
          "Shows and tickets keep the site up to date automatically.",
          "Band blog and press releases, plus a public links page and band profile.",
        ],
      },
      {
        heading: "CRM, Finance & Social Scheduling",
        content: [
          "CRM for promoters, venues and industry contacts, with email campaigns and automations.",
          "Finance tracker for income, expenses, guarantees and payouts, so the band's money stays transparent.",
          "Social media scheduler for Instagram, Facebook and TikTok: members draft posts and admins approve and publish them.",
        ],
      },
      {
        heading: "Community & Venues",
        content: [
          "A social network for musicians with a feed, forum, groups, local scenes, opportunities, direct messages and bookmarks.",
          "A public directory of bands, shows and fan clubs.",
          "A venue manager where venues can claim their listing and review applications from bands.",
        ],
      },
      {
        heading: "Platform, Billing & Mobile Apps",
        content: [
          "Free and Premium plans billed per band through Stripe on the web and RevenueCat in the mobile apps, with feature gating enforced in the API.",
          "An API-first backend serving the web app, an Expo/React Native band app with home screen widgets, and the Fan Account app.",
          "Notifications delivered in-app, by email (Resend) and as push notifications (Expo).",
          "A platform admin console for users, bands, payments, support tickets, moderation, feedback and system health, with an audit log.",
          "Help centre with docs and support tickets, a referral program, Sentry error monitoring, and Jest and Playwright tests.",
        ],
      },
    ],
    projectDetails: {
      technology: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "PostgreSQL",
        "Prisma",
        "Clerk",
        "Stripe Connect",
        "Pusher",
        "Resend",
        "Vercel",
        "Vercel Blob",
        "Sentry",
        "Expo",
        "React Native",
        "RevenueCat",
        "Jest",
        "Playwright",
      ],
    },
  },
  {
    id: 7302611,
    title: "CareChart",
    repo: null,
    description:
      "CareChart is a multi-tenant electronic medical record (EMR) and practice management platform that serves veterinary clinics, human hospitals and dental offices from a single codebase. It began as PatientPets, a veterinary clinic system, and I generalized it into CareChart: each organization picks an industry profile when it is set up, and the profile decides the vocabulary, data fields, modules and workflows its staff see. The same engine now also powers an auto shop profile, where vehicles take the place of patients, and a fitness profile is in development. CareChart has an ASP.NET Core (.NET 10) API built on CQRS with MediatR and Entity Framework Core over SQL Server, and a Next.js 16 / React 19 front end, with real-time features over SignalR. It is deployed to Azure through infrastructure-as-code and GitHub Actions. Patient data is protected by scoped role-based access control, field-level encryption, access logging and break-the-glass controls modelled on HIPAA and PHIPA, and the system exposes an HL7 FHIR R4 API. I designed and built it on my own, writing a spec for each phase before building it.",
    status: "In Progress",
    startDate: "2026-06-13",
    endDate: "Present",
    thumbnail: "/carechart-dashboard.png",
    images: [
      {
        image: "/carechart-dashboard.png",
        label: "Customizable dashboard with appointments, census and surgical queue",
      },
      {
        image: "/carechart-patient-chart.png",
        label: "Patient chart with allergy alerts, latest vitals and vital trends",
      },
      {
        image: "/carechart-surgical-cases.png",
        label: "Surgical case queue with days-to-target status",
      },
      {
        image: "/carechart-or-block.png",
        label: "OR block booking with setup, procedure and cleanup times",
      },
      {
        image: "/carechart-census.png",
        label: "Inpatient census and bed board",
      },
      {
        image: "/carechart-patient-list.png",
        label: "Patient registry with MRNs and home locations",
      },
      {
        image: "/carechart-appointments-week.png",
        label: "Weekly appointment calendar across physicians and rooms",
      },
      {
        image: "/carechart-or-schedule-week.png",
        label: "OR schedule: surgery blocks by room, surgeon and service",
      },
      {
        image: "/carechart-messages.png",
        label: "Teams-style messaging with channels and patient links",
      },
      {
        image: "/carechart-roles.png",
        label: "Configurable roles and permissions",
      },
      {
        image: "/carechart-dental-tooth-chart.png",
        label: "Dental tooth chart with conditions and planned work",
      },
      {
        image: "/carechart-dental-perio.png",
        label: "Six-site periodontal charting",
      },
      {
        image: "/carechart-dental-treatment-plan.png",
        label: "Phased dental treatment plan with insurance estimates",
      },
    ],
    features: [
      {
        heading: "One Platform, Multiple Industry Profiles",
        content: [
          "Data-driven industry profiles for Veterinary, Human (hospital and clinic), Dental and Auto shop organizations, each chosen when the organization is created.",
          "Veterinary-only data such as species, breed, microchip, adoption and fostering is hidden from human organizations, and human-only data such as MRNs and insurance is hidden from vet clinics.",
          "Global administrators turn modules on per organization based on its contract, with profile defaults, module dependencies and presets.",
          "Organizations can rename core labels such as Patient, Contact, Provider, Visit and Room to match their own terminology.",
          "Fully localized in English and French (Canada), on both the web app and server-generated documents.",
        ],
      },
      {
        heading: "Patient Records & Clinical Data",
        content: [
          "Patient charts with demographics, MRNs, photos, contacts and configurable relationship types (owner, guardian, next of kin, guarantor).",
          "Structured allergies, problem lists, immunizations, and family and social history.",
          "Visits and vitals, with a preset vitals profile per patient type stored as typed columns.",
          "Coded clinical terminologies, with an import tool for terminology sets.",
          "A merge tool for duplicate patients and contacts that keeps a full record of every merge.",
        ],
      },
      {
        heading: "Scheduling & Surgical Services",
        content: [
          "A slot engine and slot finder that search providers, rooms, appointment-type rules, time off and extra hours for open time before booking.",
          "Month, week and day calendars, staff schedules and a waitlist.",
          "Surgical cases with services per location, custom priority sets and a days-to-target status tile (green, yellow, red).",
          "An OR schedule with recurring surgery blocks per room and drag-and-drop case booking.",
          "Inpatient admissions, transfers and discharges (ADT), with a location and bed hierarchy and a live census.",
        ],
      },
      {
        heading: "Dental Practice System",
        content: [
          "An interactive tooth chart and periodontal charting.",
          "Treatment plans built from a procedure catalogue, with dental insurance and guarantors.",
          "Operatory scheduling, recall management, imaging and lab case tracking.",
        ],
      },
      {
        heading: "Billing, Insurance & Quotes",
        content: [
          "Invoicing with payers, patient coverage and bill-to-insurer support.",
          "Client quotes built from an admin-managed price list, which convert into treatment plans.",
          "Payments, billing and email delivery through Resend.",
        ],
      },
      {
        heading: "Security, Compliance & Interoperability",
        content: [
          "Configurable role-based access control: roles are sets of feature and action permissions, assigned at Organization, Location or Provider scope.",
          "Patients have a primary provider, home location and care team that decide who can see their records.",
          "Every record view is logged, and break-the-glass access covers emergencies.",
          "Field-level encryption of PHI with ASP.NET Core Data Protection, blind-index search on health IDs, and private storage for patient files.",
          "Per-organization idle timeouts and MFA requirements, plus a read-only HL7 FHIR R4 API.",
        ],
      },
      {
        heading: "Messaging & Dashboards",
        content: [
          "Teams-style messaging with direct, group, channel and patient-linked chats, delivered in real time over SignalR.",
          "Customizable dashboards with a drag-and-drop widget grid and schedule, clinical, follow-up and business widgets.",
          "Dashboards can be set per role and shared, with platform-wide defaults.",
          "A patients-seen report with trends and breakdowns by provider, location and appointment type.",
        ],
      },
      {
        heading: "Auto Shop Profile",
        content: [
          "Vehicles take the place of patients, with VIN decoding, repair orders, inspections, and estimates with tax.",
          "Bay scheduling, service reminders, fleet accounts, manufacturer recall lookups, parts inventory and lot tracking.",
          "Municipal fleet management with departments, chargebacks, work requests, approvals, budgets and a motor pool.",
        ],
      },
      {
        heading: "Platform Administration & DevOps",
        content: [
          "Platform admins can set up any tenant, deactivate, archive, restore or delete organizations, with an activity record of every action.",
          "Azure App Service and Azure SQL in Canada Central, provisioned with Bicep.",
          "GitHub Actions CI/CD builds once, deploys to a Test environment on every push to main, and promotes the same build to Production.",
          "Over 940 xUnit tests across the CQRS application layer.",
        ],
      },
    ],
    projectDetails: {
      technology: [
        "ASP.NET Core (.NET 10)",
        "C#",
        "Entity Framework Core",
        "SQL Server",
        "MediatR (CQRS)",
        "SignalR",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "HL7 FHIR R4",
        "Azure App Service",
        "Azure SQL",
        "Bicep",
        "GitHub Actions",
        "xUnit",
      ],
    },
  },
  {
    id: 5118420,
    title: "Fan Account",
    repo: null,
    description:
      "Fan Account is the fans' side of Band Account: one app and one login for every band fan club a fan belongs to. Fans follow a single feed from all their clubs, watch band stories, stream early-listening releases, claim perks, climb each club's leaderboard, buy tickets and keep their QR codes, find shows near them, and message other fans. I built it with Expo and React Native, so a single TypeScript codebase ships to iOS, Android and the web as an installable PWA. It has no backend of its own: it uses Band Account's API through a typed client and React Query, and shares Band Account's Clerk sign-in so a fan who later joins a band keeps the same login. Joining a club from the app creates the same fan record the band sees in their Band Account workspace, and clubs a fan joined earlier on a band's website are picked up automatically by email.",
    status: "In Progress",
    startDate: "2026-10-25",
    endDate: "Present",
    thumbnail: "/fanaccount-feed.png",
    images: [
      {
        image: "/fanaccount-feed.png",
        label: "Home feed with story rings, a band story and a club home with your rank",
      },
      {
        image: "/fanaccount-listen.png",
        label: "Early-listening album, the Now Playing player and member perks",
      },
      {
        image: "/fanaccount-shows.png",
        label: "Shows near you, your tickets and a ticket's QR code for the door",
      },
      {
        image: "/fanaccount-community.png",
        label: "Fan-to-fan messages, a club forum thread and the top fans leaderboard",
      },
      {
        image: "/fanaccount-discover.png",
        label: "Discover fan clubs, My clubs with points and ranks, and your profile",
      },
      {
        image: "/fanaccount-themes.png",
        label: "The app in the Amethyst theme, with the theme picker",
      },
    ],
    features: [
      {
        heading: "One Feed for Every Club",
        content: [
          "Home combines the latest posts from every club the fan has joined into one infinite-scrolling feed.",
          "Instagram-style story rings for each band, with full-screen stories that play on from one club to the next.",
          "Discover searches every Band Account fan club by band name or @handle.",
          "Likes, comments and full post threads, all using the club's existing Band Account features.",
        ],
      },
      {
        heading: "Fan Club Home",
        content: [
          "Each club has a hero header made from the band's photo, with a see-through header that fades into the page.",
          "Before joining, fans see what members get. After joining, they see their rank and an animated progress bar.",
          "Tiles open the club's posts, music, perks, setlists, forum and top fans.",
          "Top-fans leaderboards for all time and this month, switched with an animated segmented control.",
          "Perks styled like passes: discount codes, presales, links and downloads for members.",
        ],
      },
      {
        heading: "Early Listening & Audio Player",
        content: [
          "Stream unreleased songs and EPs that bands share with their club before release day.",
          "A persistent mini player and a full Now Playing screen with blurred artwork, a scrubber, 15-second skips and a track list.",
          "Rate and discuss each release with the band and other fans.",
        ],
      },
      {
        heading: "Shows & Tickets",
        content: [
          "Near You lists every band's upcoming shows within a set distance, soonest first, based on the fan's home area or their current location.",
          "Buy tickets in the app through Stripe Checkout, with the order confirmed even when Stripe's webhook is slow.",
          "Your Tickets keeps every ticket a fan holds, whether bought in the app or with their email on a band's website, with QR codes ready for the door.",
          "Fan-club setlists for upcoming shows.",
        ],
      },
      {
        heading: "Fan Community & Messaging",
        content: [
          "Club forums with categories, threads and new-thread posting.",
          "Private messages between fans who share a club, with separate Inbox and Requests views.",
          "Fans start conversations from a club's forum or its top-fans board.",
        ],
      },
      {
        heading: "Design & Theming",
        content: [
          "A custom \"Crimson glow\" design system with a near-black, glass-surfaced UI, an accent gradient, and the Sora and Inter typefaces.",
          "Nine themes (eight dark and one light) chosen from a grid of live previews, with every theme checked for WCAG contrast in automated tests.",
          "A floating glass tab bar, haptics, and spring animations built with Reanimated.",
          "Every colour, gradient, font and radius comes from design tokens, never hard-coded in components.",
        ],
      },
      {
        heading: "Architecture",
        content: [
          "Expo Router file-based navigation across tabs, stacks and sheets.",
          "A typed API client that mirrors Band Account's response shapes, with React Query hooks for server state and zustand for the audio player.",
          "Clerk authentication with Google sign-in and secure token storage.",
          "Environment and form input validated with zod.",
          "Jest tests covering the app's shared logic and theme contrast.",
        ],
      },
    ],
    projectDetails: {
      technology: [
        "React Native",
        "Expo",
        "Expo Router",
        "TypeScript",
        "React Query",
        "Zustand",
        "Clerk",
        "Stripe Checkout",
        "React Native Reanimated",
        "Expo Audio",
        "Expo Location",
        "Zod",
        "Jest",
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
    id: 4471906,
    title: "Rootline Advisory & Partners",
    liveLink: "https://www.rootlineadvisoryandpartners.com/",
    repo: null,
    description:
      "Rootline Advisory & Partners is an Ottawa-based advisory firm that helps business owners buy the right business, structure it on solid ground, and grow it with clarity. I designed and built their corporate website as a headless WordPress project: the client edits all of the copy, services and settings in WordPress, and a Next.js front end renders it as a fast, statically generated site. Content is pulled through WPGraphQL and Advanced Custom Fields and merged over a built-in copy of the client's approved content, so a blank field or a CMS outage falls back gracefully and never breaks a page. Publishing in WordPress triggers on-demand revalidation, so edits go live in seconds. The site presents the firm's three service pillars (Acquisition Advisory, Business Structuring & Design, and Growth Advisory), its story and values, and a contact page with a booking scheduler and an enquiry form.",
    status: "Done",
    thumbnail: "/rootline-home.png",
    images: [
      {
        image: "/rootline-home.png",
        label: "Rootline - Landing Page",
      },
      {
        image: "/rootline-pillars.png",
        label: "Rootline - Service Pillars",
      },
      {
        image: "/rootline-why.png",
        label: "Rootline - Why Rootline",
      },
      {
        image: "/rootline-services-pillars.png",
        label: "Rootline - Services",
      },
      {
        image: "/rootline-service-detail.png",
        label: "Rootline - Growth Advisory Service Page",
      },
      {
        image: "/rootline-about.png",
        label: "Rootline - About",
      },
      {
        image: "/rootline-contact.png",
        label: "Rootline - Contact",
      },
    ],
    features: [
      {
        heading: "Headless WordPress CMS",
        content: [
          "The client edits every page's copy, the services and the contact details in WordPress, using Advanced Custom Fields from a custom plugin I wrote for the site.",
          "Next.js reads the content through WPGraphQL into typed objects, so pages never depend on WordPress directly.",
          "Every field falls back to the client's approved copy, so a blank field never renders empty and a CMS outage never causes an error page.",
          "Sections such as testimonials can be shown or hidden from WordPress without a code change.",
        ],
      },
      {
        heading: "Fast, Static Pages with Instant Publishing",
        content: [
          "Pages are statically generated with the Next.js App Router and revalidated hourly.",
          "Publishing in WordPress calls a secured revalidation webhook with a cache tag, so edits go live in seconds.",
          "Each service gets its own page, generated at build time from WordPress content.",
          "The sitemap, robots.txt, canonical URLs and Open Graph tags are generated automatically.",
        ],
      },
      {
        heading: "Bookings & Enquiries",
        content: [
          "A booking scheduler on the contact page that supports Calendly or Cal.com, falling back to a button if the widget fails to load.",
          "An enquiry form validated on the server, with a honeypot field against spam, delivered by email through Resend.",
          "If email delivery isn't configured in production, visitors see a clear message to email the firm directly, so no enquiry is silently lost.",
        ],
      },
      {
        heading: "Brand & Design",
        content: [
          "An editorial navy, sand and gold design system built with Tailwind CSS v4, pairing serif headlines with a clean sans-serif body.",
          "Every brand asset was derived from the client's supplied logo and photo: transparent emblem and wordmark versions, a light wordmark for dark backgrounds, and a navy duotone skyline for the hero.",
          "Fully responsive layouts with clear calls to action for booking a free discovery call.",
        ],
      },
    ],
    projectDetails: {
      technology: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "WordPress",
        "WPGraphQL",
        "Advanced Custom Fields",
        "Resend",
        "Vercel",
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
