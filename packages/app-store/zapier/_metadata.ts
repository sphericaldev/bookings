import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Zapier",
  description: _package.description,
  installed: true,
  category: "automation",
  categories: ["automation"],
  imageSrc: "/api/app-store/zapier/icon.svg",
  logo: "/api/app-store/zapier/icon.svg",
  publisher: "Spherical",
  rating: 0,
  reviews: 0,
  slug: "zapier",
  title: "Zapier",
  trending: true,
  type: "zapier_automation",
  url: "https://zapier.com/",
  variant: "automation",
  verified: true,
  email: "help@spherical.works",
  dirName: "zapier",
} as AppMeta;

export default metadata;
