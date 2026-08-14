import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr Kordy Studio — Arabic AutoCaption",
  description: "من Dr Kordy Studio: كابشن عربي أوفلاين، بدون اشتراك. ادفع مرة واحدة واستخدمه مدى الحياة.",
  icons: { icon: "/drkordy-arabic-autocaption/kd-logo-v2.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','7900225340063115');
          var pageViewEventId='pageview_'+Date.now()+'_'+Math.random().toString(36).slice(2);
          fbq('track','PageView',{}, {eventID:pageViewEventId});`}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} alt=""
            src="https://www.facebook.com/tr?id=7900225340063115&ev=PageView&noscript=1" />
        </noscript>
      </body>
    </html>
  );
}
