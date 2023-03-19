import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Spherical Video",
  description: _package.description,
  installed: !!process.env.DAILY_API_KEY,
  type: "daily_video",
  imageSrc: "/api/app-store/dailyvideo/icon.svg",
  variant: "conferencing",
  url: "https://daily.co",
  categories: ["video"],
  trending: true,
  logo: "/api/app-store/dailyvideo/icon.svg",
  publisher: "Spherical",
  verified: true,
  rating: 4.3, // TODO: placeholder for now, pull this from TrustPilot or G2
  reviews: 69, // TODO: placeholder for now, pull this from TrustPilot or G2
  category: "video",
  slug: "daily-video",
  title: "Spherical Meet",
  isGlobal: true,
  email: "help@spherical.works",
  appData: {
    location: {
      linkType: "dynamic",
      type: "integrations:daily",
      label: "Spherical Video",
    },
  },
  key: { apikey: process.env.DAILY_API_KEY },
  dirName: "dailyvideo",
} as AppMeta;

export default metadata;
