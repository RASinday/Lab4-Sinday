import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tip Calculator App',
  description: 'Frontend Mentor using Next.js and Tailwind CSS',
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
