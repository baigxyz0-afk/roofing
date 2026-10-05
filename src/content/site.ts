// Business facts come from env. Anything not configured is hidden, never invented.

const env = (k: string) => (process.env[k] ?? "").trim();

const TEMP_PHONE = "(713) 555-0147"; // fictional 555-01xx range; never emitted in schema
const TEMP_PHONE_E164 = "+17135550147";

export const site = {
  name: "Ridgewise Roofing",
  shortName: "Ridgewise",
  domain: "ridgewiseroofing.com",
  url: (env("NEXT_PUBLIC_SITE_URL") || "https://ridgewiseroofing.com").replace(/\/$/, ""),
  market: "United States",
  marketLong: "all 50 states and Washington, D.C.",
  stateAbbr: "US",
  phone: env("NEXT_PUBLIC_BUSINESS_PHONE") || TEMP_PHONE,
  phoneE164: env("NEXT_PUBLIC_BUSINESS_PHONE_E164") || TEMP_PHONE_E164,
  phoneIsReal: Boolean(env("NEXT_PUBLIC_BUSINESS_PHONE")),
  ppcPhone: env("NEXT_PUBLIC_PPC_TRACKING_PHONE") || null,
  email: env("NEXT_PUBLIC_BUSINESS_EMAIL") || null,
  hours: env("NEXT_PUBLIC_BUSINESS_HOURS") || null,
  license: env("NEXT_PUBLIC_LICENSE_NUMBER") || null,
  officeAddress: env("NEXT_PUBLIC_OFFICE_ADDRESS") || null,
  emergency247: env("NEXT_PUBLIC_EMERGENCY_24_7") === "true",
  googleReviewUrl: env("NEXT_PUBLIC_GOOGLE_REVIEW_URL") || null,
  googleProfileUrl: env("NEXT_PUBLIC_GOOGLE_PROFILE_URL") || null,
  gtmId: env("NEXT_PUBLIC_GTM_ID") || null,
  googleVerification: env("NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION") || null,
  bingVerification: env("NEXT_PUBLIC_BING_SITE_VERIFICATION") || null,
  isProduction: process.env.NODE_ENV === "production" && env("NEXT_PUBLIC_ENV") !== "staging",
};

export const availability = site.emergency247
  ? "Emergency calls answered 24/7"
  : "Same-day inspections when a roofer is available";

export const BRAND_PROMISE =
  "One call connects you with an independent local roofing contractor who serves your ZIP code.";

export const DISCLOSURE =
  "Ridgewise Roofing is a referral service. We do not perform roofing work. Calls and requests are connected to independent roofing contractors in our network who set their own prices and are responsible for their own work, insurance and warranties. Roofing license and registration rules vary by state and city, so ask any contractor for proof of the license or registration your state requires and proof of liability insurance before work begins.";

export function telHref(e164 = site.phoneE164) {
  return `tel:${e164}`;
}
