import { validJson } from "@calcom/lib/jsonUtils";
import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Google Calendar",
  description: _package.description,
  installed: !!(process.env.GOOGLE_API_CREDENTIALS && validJson(process.env.GOOGLE_API_CREDENTIALS)),
  type: "google_calendar",
  title: "Google Calendar",
  imageSrc: "/api/app-store/googlecalendar/icon.svg",
  variant: "calendar",
  category: "calendar",
  categories: ["calendar"],
  logo: "/api/app-store/googlecalendar/icon.svg",
  publisher: "Spherical",
  rating: 5,
  reviews: 69,
  slug: "google-calendar",
  trending: false,
  url: "https://workspace.google.com/products/calendar",
  verified: true,
  email: "help@spherical.works",
  dirName: "googlecalendar",
} as AppMeta;

export default metadata;
