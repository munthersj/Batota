import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sahm-delivery.ae"),

  title: {
    default: "سهم للتوصيل – نقل وتوصيل داخل الإمارات",
    template: "%s | سهم للتوصيل",
  },

  description:
    "سهم للتوصيل يقدم خدمات نقل وتوصيل داخل الإمارات العربية المتحدة: نقل من عجمان إلى الشارقة، نقل بين المدن، توصيل أغراض وطرود، وتوصيل شركات بسرعة وأسعار واضحة مع دعم مباشر عبر واتساب.",

  keywords: [
    "سهم للتوصيل",
    "نقل داخل الإمارات",
    "نقل من عجمان إلى الشارقة",
    "نقل من الشارقة إلى دبي",
    "نقل من دبي إلى أبوظبي",
    "نقل بين المدن",
    "توصيل أغراض",
    "توصيل طرود",
    "توصيل شركات",
    "توصيل نفس اليوم",
    "شركة توصيل الإمارات",
    "مندوب توصيل عجمان",
    "مندوب توصيل الشارقة",
    "توصيل سريع الإمارات",
  ],

  alternates: { canonical: "/" },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "ar_AE",
    url: "https://sahm-delivery.ae",
    siteName: "سهم للتوصيل",
    title: "سهم للتوصيل – نقل وتوصيل داخل الإمارات",
    description:
      "خدمة نقل وتوصيل داخل الإمارات: نقل من عجمان إلى الشارقة ودبي وأبوظبي، توصيل أغراض وطرود وشركات بسرعة وموثوقية مع تواصل مباشر.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "سهم للتوصيل" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "سهم للتوصيل – نقل وتوصيل داخل الإمارات",
    description:
      "نقل من عجمان إلى الشارقة ودبي وأبوظبي + توصيل أغراض وطرود وشركات داخل الإمارات.",
    images: ["/og.jpg"],
  },

  themeColor: "#ffffff",

  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      {/* خلي الخلفية بيضاء */}
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  );
}
