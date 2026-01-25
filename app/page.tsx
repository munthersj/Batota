import Script from "next/script";
import DeliveryLandingPage from "./components/DeliveryLandingPage";

// Next.js 15 (App Router): `searchParams` is typed as a Promise.
type SearchParams = { cat?: string; area?: string };

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const sp = (await searchParams) ?? {};
  const cat = sp.cat ?? "الكل";
  const area = sp.area ?? "";

  return (
    <>
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
            description:
              "خدمة توصيل سريعة وموثوقة داخل الإمارات: توصيل أفراد وشركات، توصيل نفس اليوم ودعم مباشر.",
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
