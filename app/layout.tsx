import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DrKordy — Arabic AutoCaption",
  description: "كابشن عربي أوفلاين، بدون اشتراك. ادفع مرة واحدة واستخدمه مدى الحياة.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
