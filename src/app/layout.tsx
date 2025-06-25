import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naukri Guru | Job Platform",
  description: "Pakistan's leading job recruitment platform",
  keywords: ["jobs", "careers", "recruitment"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
