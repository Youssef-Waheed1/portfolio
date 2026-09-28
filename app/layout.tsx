import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Youssef Waheed — Software Engineer";
const description =
  "Youssef Waheed is a Software Engineer focused on full-stack development, backend systems, and application security.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Youssef Waheed" }],
  keywords: ["Software Engineer", "Full-Stack Developer", "Backend Developer", "FastAPI", "Next.js", "Application Security"],
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = { themeColor: "#0B0F14", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-page"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
