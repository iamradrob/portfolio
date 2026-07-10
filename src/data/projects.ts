import floralImg from "@/assets/kasturi-roy-floral.jpg";
import varoomImg from "@/assets/nik-varoom.jpg";
import synthwaveImg from "@/assets/nik-synthwave.jpg";
import deerImg from "@/assets/omk-deer.jpg";
import holographicImg from "@/assets/simon-lee-holographic.jpg";
import catImg from "@/assets/syarafina-cat.jpg";
import birdImg from "@/assets/nypl-bird.jpg";
import jewelryImg from "@/assets/nypl-jewelry.jpg";
import spheresImg from "@/assets/victoria-spheres.jpg";
// 1. IMPORT YOUR NEW LOCAL IMAGE HERE USING THE ALIAS PATH:
import thymelogSplash from "@/assets/brand-identity/thymelog/thymelog-splash.png";
import thymelogSpread from "@/assets/brand-identity/thymelog/thymelog-spread.png";
import pressureSplash from "@/assets/brand-identity/pressure/pressure-splash.png";
import pressureSpread from "@/assets/brand-identity/pressure/pressure-spread.png";
import xylichewSplash from "@/assets/brand-identity/xylichew/xylichew-splash.png";
import xylichewSpread from "@/assets/brand-identity/xylichew/xylichew-spread.png";
import cottonSplash from "@/assets/brand-identity/cotton/cotton-splash.png";
import cottonSpread from "@/assets/brand-identity/cotton/cotton-spread.png";
import beeSplash from "@/assets/brand-identity/bee/beesplash.jpg";
import beeSpread from "@/assets/brand-identity/bee/beespread.jpg";
import sparkleSplash from "@/assets/brand-identity/gg/sparklesplash.jpg";
import sparkleSpread from "@/assets/brand-identity/gg/sparklespread.jpg";
import nutrollSplash from "@/assets/brand-identity/gg/nutrollsplash.jpg";
import nutrollSpread from "@/assets/brand-identity/gg/nutrollspread.jpg";
import cookieSplash from "@/assets/brand-identity/gg/cookiesplash.jpg";
import cookieSpread from "@/assets/brand-identity/gg/cookiespread.jpg";
import puffSplash from "@/assets/brand-identity/gg/puffsplash.jpg";
import puffSpread from "@/assets/brand-identity/gg/puffspread.jpg";
import faceoffsplash from "@/assets/brand-identity/secondslide/faceoffsplash.jpg";
import faceoffspread from "@/assets/brand-identity/secondslide/faceoffspread.jpg";
import skippyprintsplash from "@/assets/print-editorial/skippyprintsplash.jpg";
import skippyprintspread from "@/assets/print-editorial/skippyprintspread.jpg";
import icelaxsplash from "@/assets/print-editorial/icelaxsplash.jpg";
import icelaxspread from "@/assets/print-editorial/icelaxspread.jpg";
import forksplash from "@/assets/print-editorial/forksplash.jpg";
import forkspread from "@/assets/print-editorial/forkspread.jpg";
import homesearchsplash from "@/assets/print-editorial/homesearchsplash.jpg";
import homesearchspread from "@/assets/print-editorial/homesearchspread.jpg";
import illussplash from "@/assets/illustrations/illussplash.jpg";
import illusspread from "@/assets/illustrations/illusspread.jpg";
import jjsplash from "@/assets/illustrations/jjsplash.jpg";
import jjspread from "@/assets/illustrations/jjspread.jpg";
import rakinsplash from "@/assets/illustrations/rakinsplash.jpg";
import rakinspread from "@/assets/illustrations/rakinspread.jpg";
import slasherssplash from "@/assets/illustrations/slasherssplash.jpg";
import slashersspread from "@/assets/illustrations/slashersspread.jpg";
import digitalsplash from "@/assets/digital/digitalsplash.jpg";
import digitalspread from "@/assets/digital/digitalspread.jpg";


export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  year: string;
  client?: string;
  images: string[];
  color: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

// The five allowed tags, distributed evenly in order
const allowedTags = [
  "Brand Identity",
  "Print & Editorial",
  "Digital & Web",
  "Packaging",
  "Illustration"
];

export const projects: Project[] = [
  {
    id: "thymelog",
    title: "ThymeLog",
    tags: ["Brand Identity"],
    description: "A native Android application designed to simplify plant tracking and growth logging. The project encompasses full product delivery, from building a minimalist, organic visual identity to rapid deployment on the Google Play Store using AI-assisted 'vibe coding' development methodologies.",
    year: "2025",
    client: "Personal Project",
    images: [
      thymelogSplash,
      thymelogSpread
      
    ],
    color: "#FF6B6B",
    aspectRatio: "portrait"
  },

  {
    id: "ggskippynutroll",
    title: "Genius Gourmet X Skippy Nut Roll",
    tags: ["Brand Identity"],
    description: "Visual identity and packaging design for the Genius Gourmet x Skippy Nut Roll collaboration. The branding seamlessly fuses nostalgic indulgence with functional nutrition, transforming a classic comfort food into a modern, high-protein snack that balances craving and wellness..",
    year: "2025",
    client: "Genius Gourmet",
    images: [
      nutrollSplash,
      nutrollSpread
    ],
    color: "#A855F7",
    aspectRatio: "portrait"
  },
  {
    id: "sparklingprotein",
    title: "Genius Gourmet Sparkling Protein",
    tags: ["Brand Identity"],
    description: "Visual identity and packaging design designed to disrupt the functional beverage market. The branding shifts protein drinks away from their chalky, supplement-root origins into a sleek, vibrant lifestyle essential focused on modern wellness.",
    year: "2025",
    client: "Genius Gourmet",
    images: [
      sparkleSplash,
      sparkleSpread
    ],
    color: "#A855F7",
    aspectRatio: "portrait"
  },

  {
    id: "cookiebiteprotein",
    title: "Genius Gourmet Protein Cookie Bites",
    tags: ["Brand Identity"],
    description: "Visual identity and packaging design developed from the ground up for a premium snack line. The branding reimagines a bakery classic into a modern, macro-friendly treat, balancing clean, health-focused aesthetics with the indulgent, shelf-popping appeal of a classic sweet snack.",
    year: "2024",
    client: "Genius Gourmet",
    images: [
      cookieSplash,
      cookieSpread
    ],
    color: "#A855F7",
    aspectRatio: "portrait"
  },
  {
    id: "faceofffactory",
    title: "Faceoff Factory",
    tags: ["Brand Identity"],
    description: "Comprehensive team branding and apparel design for a six-team lacrosse league. The project involved creating distinct jersey designs, custom typography, and dynamic logo systems for each franchise, resulting in a cohesive yet fiercely competitive visual identity across the entire league.",
    year: "2026",
    client: "Secondslide",
    images: [
      faceoffsplash,
      faceoffspread
    ],
    color: "#4ECDC4",
    aspectRatio: "portrait"
  },
  {
    id: "proteinpuff",
    title: "Genius Gourmet Protein Puffs",
    tags: ["Brand Identity"],
    description: "A ground-up visual identity and packaging design for a savory, functional snack line. The branding elevates a familiar comfort snack into a sleek, modern wellness option.",
    year: "2025",
    client: "Genius Gourmet",
    images: [
      puffSplash,
      puffSpread
    ],
    color: "#A855F7",
    aspectRatio: "portrait"
  },
  {
    id: "pressuregrappling",
    title: "Pressure Grappling",
    tags: ["Brand Identity"],
    description: "Art direction and apparel design for Pressure Grappling. The project involved creating bold logos, cohesive brand identity systems, and custom illustrations, resulting in specialized apparel design for high-performance athletic wear.",
    year: "2018",
    client: "Pressure Grappling",
    images: [
      pressureSplash,
      pressureSpread
    ],
    color: "#4ECDC4",
    aspectRatio: "landscape"
  },
  {
    id: "xylichew",
    title: "Xylichew Gum",
    tags: ["Brand Identity"],
    year: "2025",
    description: "A comprehensive overhaul of the visual identity for Xylichew, a sugar-free, 100% xylitol-based chewing gum. The new design shifts the brand away from a purely medicinal or clinical \"health-food aisle\" look toward a vibrant, lifestyle-oriented aesthetic that emphasizes crisp, natural freshness and dental wellness.",
    client: "Nature's Stance",
    images: [
      xylichewSplash,
      xylichewSpread
    ],
    color: "#A855F7",
    aspectRatio: "portrait"
  },
  {
    id: "cottonmouthmints",
    title: "Cotton Mouth Mints",
    tags: ["Brand Identity"],
    description: "A comprehensive visual identity concept for Cotton Mouth Mints, Gum, and Sours, capturing a nature-forward stance tailored specifically for a younger demographic. The new design shifts the product away from the traditional, clinical \"dry-mouth remedy\" look toward a vibrant, lifestyle-oriented aesthetic that positions natural relief as a trendy, everyday wellness essential for a Gen Z and Millennial audience.",
    year: "2024",
    client: "Nature's Stance",
    images: [
      cottonSplash,
      cottonSpread
    ],
    color: "#A855F7",
    aspectRatio: "portrait"
  },
  {
    id: "beepropolis",
    title: "Bee Propolis Nasal Spray",
    tags: ["Brand Identity"],
    description: "A ground-up design and visual identity for a premium Bee Propolis Nasal Spray. The branding shifts propolis away from its traditional, old-fashioned 'apothecary' roots into a sleek, modern wellness essential.",
    year: "2024",
    client: "Nature's Stance",
    images: [
      beeSplash,
      beeSpread
    ],
    color: "#A855F7",
    aspectRatio: "portrait"
  },
  {
    id: "skippyprint",
    title: "Genius Gourmet X Skippy Sales Sheets",
    tags: ["Print & Illustration"],
    description: "Strategic print design and marketing collateral developed to launch the high-profile retail collaboration. The project features a cohesive ecosystem of sales sheets and promotional postcards, leveraging sleek typography and bold product photography to communicate value propositions, drive wholesale buyer engagement, and maximize retail distribution.",
    year: "2025",
    client: "Genius Gourmet x Skippy",
    images: [
      skippyprintsplash,
      skippyprintspread
    ],
    color: "#A855F7",
    aspectRatio: "portrait"
  },
  {
    id: "icelaxprint",
    title: "Secondslide Sales Sheets",
    tags: ["Print & Illustration"],
    description: "High-impact print design and sales collateral developed to showcase custom team uniform programs. The project utilizes clean layouts, structured data presentation, and dynamic apparel graphics to provide sales teams with a premium, easy-to-navigate tool that streamlines the custom ordering process for coaches and leagues.",
    year: "2026",
    client: "Secondslide",
    images: [
      icelaxsplash,
      icelaxspread
    ],
    color: "#A855F7",
    aspectRatio: "portrait"
  },
  {
    id: "homesearchprint",
    title: "Homesearch Brochure and Catalog",
    tags: ["Print & Illustration"],
    description: "Editorial layout and print design for a minimalist real estate catalog and marketing brochure.",
    year: "2018",
    client: "Homesearch",
    images: [
      homesearchsplash,
      homesearchspread
    ],
    color: "#A855F7",
    aspectRatio: "portrait"
  },
  {
    id: "americanfork",
    title: "American Fork Billboard",
    tags: ["Print & Illustration"],
    description: "High-impact outdoor advertising design developed for the City of American Fork, Utah. The project features clean typography, bold community messaging, and an intentional visual hierarchy engineered for immediate legibility and maximum engagement at a distance.",
    year: "2024",
    client: "American Fork",
    images: [
      forksplash,
      forkspread
    ],
    color: "#A855F7",
    aspectRatio: "portrait"
  },
  {
    id: "illustrations",
    title: "Various Illustrations",
    tags: ["Print & Illustration"],
    description: "A series of custom illustrations and graphic assets developed for youth soccer uniforms. The project blends dynamic, high-energy sports illustration with technical apparel design, creating a versatile visual toolkit engineered to scale seamlessly across jerseys, training gear, and team merchandise.",
    year: "2026",
    client: "Various",
    images: [
      illussplash,
      illusspread
    ],
    color: "#A855F7",
    aspectRatio: "portrait"
  },
  {
    id: "ojslashers",
    title: "OJ Slashers",
    tags: ["Print & Illustration"],
    description: "Illustration and apparel design for a standalone baseball lifestyle t-shirt.",
    year: "2026",
    client: "Youth Gold Baseball",
    images: [
      slasherssplash,
      slashersspread
    ],
    color: "#A855F7",
    aspectRatio: "portrait"
  },
  {
    id: "rakinbacon",
    title: "Rakin' Bacon",
    tags: ["Print & Illustration"],
    description: "Illustration and apparel design for a standalone baseball lifestyle t-shirt.",
    year: "2026",
    client: "Youth Gold Baseball",
    images: [
      rakinsplash,
      rakinspread
    ],
    color: "#A855F7",
    aspectRatio: "portrait"
  },
  {
    id: "jjillustrations",
    title: "T-Shirt Illustrations",
    tags: ["Print & Illustration"],
    description: "Illustration and apparel design for Pressure Grappling Jiu Jitsu",
    year: "2019",
    client: "Various",
    images: [
      jjsplash,
      jjspread
    ],
    color: "#A855F7",
    aspectRatio: "portrait"
  },
  {
    id: "digital",
    title: "Various Banners and Web Design",
    tags: ["Digital & Web"],
    description: "A curated selection of web design layouts and high-impact digital banner campaigns. The project highlights a versatile approach to digital branding, balancing clean user-interface design with strategic visual hierarchy to optimize click-through rates, drive user engagement, and maintain brand consistency.",
    year: "",
    client: "Various",
    images: [
      digitalsplash,
      digitalspread
    ],
    color: "#A855F7",
    aspectRatio: "portrait"
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Get unique categories from all project tags
export const getCategories = (): string[] => {
  const allTags = projects.flatMap(project => project.tags);
  return [...new Set(allTags)];
};
