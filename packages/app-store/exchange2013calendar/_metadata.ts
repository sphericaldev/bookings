import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Microsoft Exchange 2013 Calendar",
  description: _package.description,
  installed: true,
  type: "exchange2013_calendar",
  title: "Microsoft Exchange 2013 Calendar",
  imageSrc: "/api/app-store/exchange2013calendar/icon.svg",
  variant: "calendar",
  category: "calendar",
  categories: ["calendar"],
  label: "Exchange Calendar",
  logo: "/api/app-store/exchange2013calendar/icon.svg",
  publisher: "Spherical",
  rating: 5,
  reviews: 69,
  slug: "exchange2013-calendar",
  trending: false,
  url: "",
  verified: true,
  email: "help@spherical.works",
  dirName: "exchange2013calendar",
} as AppMeta;

export default metadata;
