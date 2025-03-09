import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], display: "swap" });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${geistMono.className}`}>
        {children}
      </body>
    </html>
  );
}
