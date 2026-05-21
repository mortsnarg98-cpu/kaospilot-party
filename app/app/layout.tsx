import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaospilot Translocation Party",
  description: "Graduation party för avgångsåret",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
