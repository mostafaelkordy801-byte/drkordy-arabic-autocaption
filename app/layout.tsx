import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr Kordy Studio — Arabic AutoCaption",
  description: "من Dr Kordy Studio: كابشن عربي أوفلاين، بدون اشتراك. ادفع مرة واحدة واستخدمه مدى الحياة.",
  icons: { icon: "/drkordy-arabic-autocaption/kd-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
