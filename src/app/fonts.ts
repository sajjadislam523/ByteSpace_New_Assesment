import localFont from "next/font/local";

export const poppins = localFont({
  src: [
    { path: "../fonts/poppins/poppins-latin-500-normal.woff2", weight: "500" },
    { path: "../fonts/poppins/poppins-latin-600-normal.woff2", weight: "600" },
    { path: "../fonts/poppins/poppins-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const satoshi = localFont({
  src: [
    { path: "../fonts/satoshi/Satoshi-Regular.woff2", weight: "400" },
    { path: "../fonts/satoshi/Satoshi-Medium.woff2", weight: "500" },
    { path: "../fonts/satoshi/Satoshi-Bold.woff2", weight: "700" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const clashDisplay = localFont({
  src: [{ path: "../fonts/clash-display/ClashDisplay-Bold.woff2", weight: "700" }],
  variable: "--font-clash-display",
  display: "swap",
});
