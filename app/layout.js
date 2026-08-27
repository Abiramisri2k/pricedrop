import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Price Drop",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <Toaster richColors/>
    </html>
  );
}
