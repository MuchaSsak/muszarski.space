import { i18n } from "@lingui/core";
import { t } from "@lingui/core/macro";

import {
  BlenderLogo,
  JavaScriptLogo,
  NextJsLogo,
  NpmLogo,
  ReactLogo,
  ReactRouterLogo,
  TailwindCssLogo,
  TanstackQueryLogo,
  ThreeJsLogo,
  TypeScriptLogo,
} from "@/components/icons";

// EmailJS
export const EMAILJS_PUBLIC_KEY = "Unh7wKuX7D61UVGOX";
export const EMAILJS_SERVICE_ID = "service_ygvcefb";
export const EMAILJS_TEMPLATE_ID = "template_4e3jgyp";

// Links
export const CONTACT_EMAIL = "mat.muszarski@gmail.com";
export const GITHUB_LINK = "https://github.com/MuchaSsak";
export const GITHUB_AVATAR_LINK =
  "https://avatars.githubusercontent.com/u/107958275?v=4";
export const INSTAGRAM_LINK = "https://www.instagram.com/mat.muszarski/";
export const LINKEDIN_LINK =
  "https://www.linkedin.com/in/mateusz-muszarski-b1168a28a/";
export const WEBSITE_LINK = "https://muszarski.space";
export const OLD_PORTFOLIO_WEBSITE_LINK = "https://2d.muszarski.space";

// Scrolling
export const AVAILABLE_SCROLLING_SECTIONS = [
  "#42f876",
  "#42f876",
  "#42f876",
  "#e56d1e",
  "#e56d1e",
  "#e56d1e",
  "#e5b61e",
  "#e5b61e",
  "#e5b61e",
  "#ffea80",
  "#ffea80",
  "#2d3efa",
];

// Job experience
export type JobExperienceItemDialogData = {
  logoImgSrc: string;
  learnMoreUrl: string;
  countryEmoji: string;
  StartedDate: () => string;
  EndedDate: () => string;
  Location: () => string;
  Occupation: () => string;
  company: string;
  Description: () => string;
  Responsibilities: () => React.ReactNode;
  SkillsNeeded: () => React.ReactNode;
};
export const JOB_EXPERIENCE_LIST = {
  beniaminek: {
    logoImgSrc: "/assets/textures/asteroids/beniaminek_logo.png",
    learnMoreUrl: "http://beniaminek03.pl/",
    countryEmoji: "🇵🇱",
    StartedDate: () =>
      i18n.date(new Date("05-07-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("05-30-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Location: () => t`Starogard Gdański, Pomerania, Poland`,
    Occupation: () => t`Programmer (intern)`,
    company: "Klub Sportowy Beniaminek 03",
    Description: () => t`Practices for programming and social skills.`,
    Responsibilities: () => (
      <>
        <li>{t`technical support`}</li>
        <li>{t`developing a website`}</li>
        <li>{t`helping other employees with various problems`}</li>
        <li>{t`creating spreadsheets`}</li>
        <li>{t`writing and creating social media posts`}</li>
        <li>{t`attending meetings with volunteers`}</li>
      </>
    ),
    SkillsNeeded: () => (
      <>
        <li>{t`front-end development`}</li>
        <li>{t`IT troubleshooting`}</li>
        <li>{t`flexibility`}</li>
        <li>{t`helpfulness`}</li>
        <li>{t`foreign languages`}</li>
      </>
    ),
  } as JobExperienceItemDialogData,

  esc: {
    logoImgSrc: "/assets/textures/asteroids/esc_logo.png",
    learnMoreUrl:
      "https://lidosk.org/en/announcements/caretta-caretta-2025-esc-team-volunteering-project-application-form",
    countryEmoji: "🇹🇷",
    StartedDate: () =>
      i18n.date(new Date("07-14-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("09-08-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Location: () => `Demre, Antalya, Türkiye`,
    Occupation: () => t`European Solidarity Corps group volunteer`,
    company: "LIDOSK",
    Description: () =>
      t`Rescuing threatened species of sea turtles and cleaning up the local environment alongside other foreign volunteers.`,
    Responsibilities: () => (
      <>
        <li>{t`monitoring sea turtles nests`}</li>
        <li>{t`rescuing hatchlings`}</li>
        <li>{t`analyzing nearby threats to the animals and getting rid of them`}</li>
        <li>{t`cleaning up local beaches from garbage`}</li>
        <li>{t`keeping the volunteers' living space tidy`}</li>
        <li>{t`attending mentor on-site and onine meetings`}</li>
        <li>{t`promoting our home town and organizing events`}</li>
        <li>{t`taking pictures and videos for the national agency`}</li>
      </>
    ),
    SkillsNeeded: () => (
      <>
        <li>{t`foreign languages`}</li>
        <li>{t`time management`}</li>
        <li>{t`adaptibility`}</li>
        <li>{t`self-motivation`}</li>
      </>
    ),
  } as JobExperienceItemDialogData,

  evelstar: {
    logoImgSrc: "/assets/textures/asteroids/evelstar_logo.png",
    learnMoreUrl: "https://about.glovoapp.com/how-we-ride/couriers/",
    countryEmoji: "🇵🇱",
    StartedDate: () =>
      i18n.date(new Date("06-25-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("07-12-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Location: () => t`Starogard Gdański, Pomerania, Poland`,
    Occupation: () => t`Bike courier`,
    company: "Evelstar Sp. z o.o.",
    Description: () =>
      t`Delivering orders via the partnered mobile application — Glovo.`,
    Responsibilities: () => (
      <>
        <li>{t`verifying packages integrity`}</li>
        <li>{t`obeying traffic laws`}</li>
      </>
    ),
    SkillsNeeded: () => (
      <>
        <li>{t`cycling`}</li>
        <li>{t`time management`}</li>
        <li>{t`adaptibility`}</li>
      </>
    ),
  } as JobExperienceItemDialogData,
};

// Certificates
export type CertificateData = {
  Title: () => React.ReactNode;
  authorName: string;
  websiteLink: string;
  StartedDate: () => React.ReactNode;
  EndedDate: () => React.ReactNode;
  Icon: () => React.ReactNode;
  isRelevant: boolean;
};

export const CERTIFICATES_LIST: CertificateData[] = [
  {
    Title: () => t`Youth Entrepreneurship in Palanga, Lithuania`,
    authorName: "Elektrėnų kultūros centras",
    websiteLink: "https://kcelektrenai.lt/",
    StartedDate: () =>
      i18n.date(new Date("07-11-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("07-16-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <span className="font-emoji">💼</span>,
    isRelevant: true,
  },
  {
    Title: () =>
      t`Developing Infrastructure to Work with Youth in Daugirdiškės, Lithuania`,
    authorName: "Elektrėnų kultūros centras",
    websiteLink: "https://kcelektrenai.lt/",
    StartedDate: () =>
      i18n.date(new Date("06-11-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("06-16-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <span className="font-emoji">🏗️</span>,
    isRelevant: true,
  },
  {
    Title: () => t`Digital Youth Work Methods in Saraiķi, Latvia`,
    authorName: "YOU+",
    websiteLink: "https://www.youpluss.lv/",
    StartedDate: () =>
      i18n.date(new Date("05-27-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("06-06-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <span className="font-emoji">💻</span>,
    isRelevant: true,
  },
  {
    Title: () =>
      t`Alternative Participation of Rural Youth in Bakuriani, Georgia`,
    authorName: "Umbrella",
    websiteLink: "https://umbrellayouth.org/",
    StartedDate: () =>
      i18n.date(new Date("05-08-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("05-08-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <span className="font-emoji">📢</span>,
    isRelevant: true,
  },
  {
    Title: () => t`Three.js Journey — Learn WebGL with Three.js`,
    authorName: "Bruno Simon",
    websiteLink: "https://threejs-journey.com",
    StartedDate: () =>
      i18n.date(new Date("12-02-2024"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("01-30-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <ThreeJsLogo />,
    isRelevant: true,
  },
  {
    Title: () =>
      t`The Ultimate React Course 2024: React, Next.js, Redux & More`,
    authorName: "Jonas Schmedtmann",
    websiteLink: "https://www.udemy.com/course/the-ultimate-react-course/",
    StartedDate: () =>
      i18n.date(new Date("08-27-2023"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("12-30-2023"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <ReactLogo />,
    isRelevant: true,
  },
  {
    Title: () => t`The Complete JavaScript Course 2023: From Zero to Expert!`,
    authorName: "Jonas Schmedtmann",
    websiteLink: "https://www.udemy.com/course/the-complete-javascript-course/",
    StartedDate: () =>
      i18n.date(new Date("03-28-2023"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("09-10-2023"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <JavaScriptLogo />,
    isRelevant: true,
  },
  {
    Title: () => t`Complete Blender Megacourse: Beginner to Expert`,
    authorName: "Skillademia Academy",
    websiteLink:
      "https://www.udemy.com/course/complete-blender-megacourse-beginner-to-expert/",
    StartedDate: () =>
      i18n.date(new Date("07-21-2023"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("08-13-2023"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <BlenderLogo />,
    isRelevant: true,
  },
  {
    Title: () =>
      t`CompTIA A+ Core 1 (220-1101) Complete Course & Practice Exam`,
    authorName: "Jason Dion",
    websiteLink: "https://www.udemy.com/course/comptia-a-core-1/",
    StartedDate: () =>
      i18n.date(new Date("03-19-2023"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("04-11-2023"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <span className="font-emoji">🛠️</span>,
    isRelevant: true,
  },

  {
    Title: () => t`Learn to DJ With Just Your Laptop: No DJ Equipment Needed`,
    authorName: "Jak Bradley",
    websiteLink:
      "https://www.udemy.com/course/no-dj-equipment-needed-dj-course/",
    StartedDate: () =>
      i18n.date(new Date("08-25-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("08-26-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <span className="font-emoji">🎧</span>,
    isRelevant: false,
  },
  {
    Title: () => t`Speak Any Language in 10 Days - Conversational lvl [2024]`,
    authorName: "Aleksander Garstka",
    websiteLink:
      "https://www.udemy.com/course/learn-how-to-speak-a-language-in-10-days/",
    StartedDate: () =>
      i18n.date(new Date("08-16-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("08-18-2025"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <span className="font-emoji">🌍</span>,
    isRelevant: false,
  },
  {
    Title: () => t`Three.js, React Three Fiber, Drei, React Spring & More`,
    authorName: "Ahmad Al-shurafa",
    websiteLink:
      "https://www.udemy.com/course/learn-react-react-three-fiber-drei-react-spring-more/",
    StartedDate: () =>
      i18n.date(new Date("04-22-2024"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    EndedDate: () =>
      i18n.date(new Date("05-04-2024"), {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    Icon: () => <ThreeJsLogo />,
    isRelevant: false,
  },
];

// Projects
export type ProjectData = {
  Title: () => React.ReactNode;
  Description: () => React.ReactNode;
  Icons: () => React.ReactNode;
  thumbnailImgUrl: string;
  liveLink: string;
  codeLink: string;
};
export const PROJECTS_LIST: ProjectData[] = [
  {
    Title: () => t`Youth Work Synergy`,
    Description: () => (
      <>
        <span>{t`A website including 3D features made to promote a beautiful organiation in Luxemburg `}</span>
        <span className="font-emoji">🇱🇺</span>
      </>
    ),
    Icons: () => (
      <>
        <li>
          <ThreeJsLogo className="size-9" />
        </li>
        <li>
          <NextJsLogo className="size-9" />
        </li>
        <li>
          <TailwindCssLogo className="size-9" />
        </li>
      </>
    ),
    codeLink: "https://github.com/MuchaSsak/yws.lu",
    liveLink: "https://yws-lu.vercel.app",
    thumbnailImgUrl: "/assets/pictures/yws_lu_thumbnail.jpg",
  },
  {
    Title: () => t`Beniaminek 03 Screensaver`,
    Description: () =>
      t`3D screensaver for a sports club using GPGPU computing in R3F ⚡`,
    Icons: () => (
      <>
        <li>
          <ThreeJsLogo className="size-9" />
        </li>
        <li>
          <TypeScriptLogo className="size-9" />
        </li>
        <li>
          <ReactLogo className="size-9" />
        </li>
        <li>
          <TailwindCssLogo className="size-9" />
        </li>
      </>
    ),
    codeLink: "https://github.com/MuchaSsak/beniaminek03-screensaver",
    liveLink: "https://beniaminek03-screensaver.vercel.app",
    thumbnailImgUrl: "/assets/pictures/beniaminek03_screensaver_thumbnail.jpg",
  },
  {
    Title: () => t`LingoType`,
    Description: () =>
      t`A foreign language learning app for vocabulary reinforcement by typing ⌨️`,
    Icons: () => (
      <>
        <li>
          <ThreeJsLogo className="size-9" />
        </li>
        <li>
          <NextJsLogo className="size-9" />
        </li>
        <li>
          <TanstackQueryLogo className="size-9" />
        </li>
      </>
    ),
    codeLink: "https://github.com/MuchaSsak/lingotype",
    liveLink: "https://lingotype.vercel.app",
    thumbnailImgUrl: "/assets/pictures/lingotype_thumbnail.jpg",
  },
  {
    Title: () => t`2D Space Portfolio`,
    Description: () =>
      t`A fully animated Next.js portfolio with the help of ThreeJS, Framer Motion, shadcn/ui and clever usage of .webm videos 🌌`,
    Icons: () => (
      <>
        <li>
          <ThreeJsLogo className="size-9" />
        </li>
        <li>
          <NextJsLogo className="size-9" />
        </li>
        <li>
          <TailwindCssLogo className="size-9" />
        </li>
      </>
    ),
    codeLink: "https://github.com/MuchaSsak/2d-space-portfolio",
    liveLink: OLD_PORTFOLIO_WEBSITE_LINK,
    thumbnailImgUrl: "/assets/pictures/space_portfolio_thumbnail.jpg",
  },
  {
    Title: () => t`React ClickMe`,
    Description: () =>
      t`A react library full of highly customizable and animated buttons out of the box. This project includes an SPA for documentation and an NPM package 👉`,
    Icons: () => (
      <>
        <li>
          <TypeScriptLogo className="size-9" />
        </li>
        <li>
          <ReactLogo className="size-9" />
        </li>
        <li>
          <NpmLogo className="size-9" />
        </li>
        <li>
          <ReactRouterLogo className="size-9" />
        </li>
      </>
    ),
    codeLink: "https://github.com/MuchaSsak/clickme-website",
    liveLink: "https://react-clickme.vercel.app",
    thumbnailImgUrl: "/assets/pictures/clickme_website_thumbnail.jpg",
  },
  {
    Title: () => t`Home Budget`,
    Description: () =>
      t`An SPA for managing your finances by taking track of your budgets and expenses. Utilizes the browser's localStorage and advanced UI state using React's Context API with useReducer 💸`,
    Icons: () => (
      <>
        <li>
          <JavaScriptLogo className="size-9" />
        </li>
        <li>
          <ReactLogo className="size-9" />
        </li>
        <li>
          <TailwindCssLogo className="size-9" />
        </li>
        <li>
          <ReactRouterLogo className="size-9" />
        </li>
      </>
    ),
    codeLink: "https://github.com/MuchaSsak/home-budget",
    liveLink: "https://mm-homebudget.vercel.app",
    thumbnailImgUrl: "/assets/pictures/home_budget_thumbnail.jpg",
  },
];
