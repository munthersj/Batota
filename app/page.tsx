import Script from "next/script";
import DeliveryLandingPage from "./components/DeliveryLandingPage";

export default function Page({
  searchParams,
}: {
  searchParams?: { cat?: string; area?: string };
}) {
  const cat = searchParams?.cat ?? "الكل";
  const area = searchParams?.area ?? "";

  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="ld-org"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "سهم للتوصيل",
            url: "https://sahm-delivery.ae/",
            logo: "https://sahm-delivery.ae/logo.png",
            image: "https://sahm-delivery.ae/og.jpg",
            description: "خدمة توصيل سريعة وموثوقة داخل الإمارات: توصيل أفراد وشركات، توصيل نفس اليوم ودعم مباشر.",
            areaServed: "AE",
            availableLanguage: ["ar"],
            sameAs: [],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+971500000000",
                contactType: "customer support",
                availableLanguage: ["ar"],
              },
            ],
          }),
        }}
      />
      <Script
        id="ld-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "سهم للتوصيل",
            url: "https://sahm-delivery.ae/",
            inLanguage: "ar",
          }),
        }}
      />

      <DeliveryLandingPage cat={cat} area={area} />
    </>
  );
} 
