import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style/globals.css";
import "./style/test.scss";
import { Aside } from "@/components/ui/aside";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-800 text-slate-100`}>
        {/* <div className="" id="myPortal"></div> */}
        <Aside />
        <main>{children}</main>
      </body>
    </html>
  );
}
