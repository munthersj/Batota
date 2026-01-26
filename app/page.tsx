import type { Metadata } from "next";

import DeliveryLandingPage from "./components/DeliveryLandingPage";

type SearchParams = { cat?: string; area?: string };

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}): Promise<Metadata> {
  const sp = (await searchParams) ?? {};
  const cat = sp.cat?.trim();
  const area = sp.area?.trim();
  const hasFilters = !!(cat || area);

  const parts = ["بطوطة ديليفري"];
  if (cat) parts.push(cat);
  if (area) parts.push(area);
  const title = parts.join(" – ");

  const description = [
    "بطوطة للتوصيل شركة نقل وتوصيل داخل الإمارات العربية المتحدة، نقدم توصيل أغراض وطرود، نقل بين المدن مثل عجمان والشارقة ودبي وأبوظبي، توصيل نفس اليوم، وخدمات توصيل للشركات مع تواصل مباشر وسريع عبر واتساب.",
    cat ? `القسم: ${cat}.` : "",
    area ? `المنطقة: ${area}.` : "",
    "تواصل مباشر عبر واتساب.",
  ]
    .filter(Boolean)
    .join(" ");

  return {
    title,
    description,

    // ✅ دائماً خليها للـ Home حتى ما يصير Duplicate Content
    alternates: { canonical: "/" },

    // ✅ لا تفهرس صفحات الفلاتر
    robots: hasFilters
      ? {
          index: false,
          follow: true,
          googleBot: { index: false, follow: true },
        }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true },
        },

    // ✅ مشاركة أجمل حتى لو canonical للـ Home
    openGraph: { title, description },
    twitter: { title, description },
  };
}

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
      {/* JSON-LD scripts ... */}
      <DeliveryLandingPage cat={cat} area={area} />
    </>
  );
}
