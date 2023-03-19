import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Outlook Calendar",
  description: _package.description,
  type: "office365_calendar",
  title: "Outlook Calendar",
  imageSrc: "/api/app-store/office365calendar/icon.svg",
  variant: "calendar",
  category: "calendar",
  categories: ["calendar"],
  logo: "/api/app-store/office365calendar/icon.svg",
  publisher: "Spherical",
  rating: 5,
  reviews: 69,
  slug: "office365-calendar",
  trending: false,
  url: "https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook",
  verified: true,
  email: "help@spherical.works",
  dirName: "office365calendar",
} as AppMeta;

export default metadata;
