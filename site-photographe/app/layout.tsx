import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stan Jamme - Photo",
  description: "Portfolio photo professionnel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Turret+Road:wght@200;300;400;500;700;800&display=swap"
        />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}