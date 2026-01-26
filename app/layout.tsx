import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://batoto-delivery.cloud"),

  title: {
    default: "بطوطةللتوصيل – نقل وتوصيل داخل الإمارات",
    template: "%s | بطوطةللتوصيل",
  },

  description:
    "بطوطة للتوصيل يقدم خدمات نقل وتوصيل داخل الإمارات العربية المتحدة: نقل من عجمان إلى الشارقة، نقل بين المدن، توصيل أغراض وطرود، وتوصيل شركات بسرعة وأسعار واضحة مع دعم مباشر عبر واتساب.",

  keywords: [
    // البراند
    "بطوطة ديليفري",
    "Batota Delivery",
    "شركة بطوطة للتوصيل",

    // خدمات عامة
    "خدمة توصيل داخل الإمارات",
    "شركة توصيل في الإمارات",
    "توصيل سريع الإمارات",
    "توصيل نفس اليوم",
    "توصيل 24 ساعة",
    "مندوب توصيل",

    // نقل
    "نقل داخل الإمارات",
    "شركة نقل داخل الإمارات",
    "نقل بين المدن",
    "نقل عفش خفيف",
    "نقل أغراض",
    "نقل طرود",

    // مدن (مهم جدًا)
    "توصيل عجمان",
    "توصيل الشارقة",
    "توصيل دبي",
    "توصيل أبوظبي",
    "نقل من عجمان إلى الشارقة",
    "نقل من الشارقة إلى دبي",
    "نقل من دبي إلى أبوظبي",

    // شركات
    "توصيل شركات",
    "توصيل مستندات",
    "توصيل طلبات شركات",

    // واتساب
    "توصيل واتساب",
    "طلب توصيل عبر واتساب",
    "مندوب توصيل واتساب",
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
    url: "https://batoto-delivery.cloud",
    siteName: "بطوطة للتوصيل",
    title: "بطوطة للتوصيل – نقل وتوصيل داخل الإمارات",
    description:
      "خدمة نقل وتوصيل داخل الإمارات: نقل من عجمان إلى الشارقة ودبي وأبوظبي، توصيل أغراض وطرود وشركات بسرعة وموثوقية مع تواصل مباشر.",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "بطوطة للتوصيل" },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "بطوطة للتوصيل – نقل وتوصيل داخل الإمارات",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      {/* خلي الخلفية بيضاء */}
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  );
}
