import type { Metadata } from "next";
import "@/theme/globals.css";

export const metadata: Metadata = {
  title: "Workout",
  description: "Website for maintain your sport progression",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen bg-grey-100">{children}</body>
    </html>
  );
}
