"use client";

import Link from "next/link";
import Reveal from "./Reveal";

const BRAND = {
  name: "بطوطة ديليفري",
  tagline: "توصيل سريع وموثوق داخل الإمارات",
  phone: "+971563808849",
  whatsapp: "https://wa.me/971563808849",
};

const NAV = [
  { label: "الرئيسية", href: "#home" },
  { label: "الخدمات", href: "#services" },
  { label: "لماذا نحن", href: "#why" },
  { label: "كيف نعمل", href: "#how" },
  { label: "الأسئلة الشائعة", href: "#faq" },
  { label: "تواصل", href: "#contact" },
];

const SERVICES = [
  {
    title: "توصيل نفس اليوم",
    desc: "خدمة سريعة للطلبات العاجلة داخل المدينة وخارجها.",
    icon: "⚡",
  },
  {
    title: "توصيل أغراض",
    desc: "توصيل أغراضك وطلباتك من وإلى أي مكان بسرعة.",
    icon: "🚚",
  },
  {
    title: "توصيل شركات",
    desc: "عقود شهرية وتوصيل يومي للفواتير والطرود.",
    icon: "🏢",
  },
  {
    title: "توصيل بين المدن",
    desc: "نقل الطرود بين إمارات الدولة .",
    icon: "🗺️",
  },
  {
    title: "توصيل حيوانات",
    desc: "نقل الحيوانات من وإلى أي مكان .",
    icon: "🐕‍🦺",
  },
  {
    title: "توصيل أشخاص",
    desc: "توصيل اشخاص  من وإلى أي مكان بسرعة.",
    icon: "🚕",
  },
];

const FEATURES = [
  { title: "تسعير واضح", desc: "سعر التوصيل يُحدد حسب المسافة ونوع الطلب." },
  {
    title: "سرعة واستجابة",
    desc: "تأكيد الطلب خلال دقائق عبر واتساب أو الاتصال.",
  },
  { title: "أمان وثقة", desc: "تعامل محترم وتحديثات لحظية حتى التسليم." },
  { title: "تغطية واسعة", desc: "توصيل داخل الإمارات (حسب توفر الخدمة)." },
];

const STEPS = [
  {
    n: "01",
    title: "أرسل التفاصيل",
    desc: "شارك موقع الاستلام/التسليم ونوع الطلب.",
  },
  {
    n: "02",
    title: "نؤكد السعر والوقت",
    desc: "نرسل لك السعر ووقت التوصيل المتوقع.",
  },
  {
    n: "03",
    title: "انطلاق وتسليم",
    desc: "مندوبنا يستلم ويوصل—مع تحديثات حتى التسليم.",
  },
];

const FAQ = [
  {
    q: "هل يوجد توصيل داخل كل الإمارات؟",
    a: "نغطي أغلب المناطق حسب توفر المندوبين. أرسل موقعك وسنؤكد فورًا.",
  },
  {
    q: "كم يستغرق التوصيل؟",
    a: "يعتمد على المسافة والازدحام. نعطيك وقتًا تقريبيًا قبل تأكيد الطلب.",
  },
  {
    q: "هل يوجد توصيل للشركات؟",
    a: "نعم، تتوفر عقود شهرية وخيارات توصيل يومية/أسبوعية.",
  },
  {
    q: "كيف أتواصل وأرسل تفاصيل الطلب؟",
    a: "عن طريق واتساب أو الاتصال المباشر. ستجد الأزرار في الصفحة.",
  },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4">{children}</div>;
}

function SectionTitle({
  kicker,
  title,
  desc,
}: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {kicker ? (
        <div className="text-xs font-semibold text-orange-600">{kicker}</div>
      ) : null}
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
      ) : null}
    </div>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="btn-shine inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-600 to-orange-500 px-3 md:px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-sky-700 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400/40"
    >
      {children}
    </a>
  );
}

function GhostButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-orange-200 hover:bg-orange-50/60 focus:outline-none focus:ring-2 focus:ring-orange-200"
    >
      {children}
    </a>
  );
}

export default function DeliveryLandingPage({
  cat,
  area,
}: {
  cat: string;
  area: string;
}) {
  // props موجودة للمرونة (querystring) — حالياً الواجهة صفحة تعريفية ثابتة
  void cat;
  void area;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top bar */}
      <div className="border-b border-slate-200 bg-white">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-3 py-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1">
                <span>📞</span>
                <a
                  className="font-semibold text-slate-900"
                  href={`tel:${BRAND.phone}`}
                >
                  {BRAND.phone}
                </a>
              </span>
              <span className="text-slate-300">|</span>
              <span className="inline-flex items-center gap-1">
                <span>💬</span>
                <a
                  className="font-semibold text-slate-900"
                  href={BRAND.whatsapp}
                >
                  واتساب
                </a>
              </span>
            </div>
            <div className="hidden sm:block">
              خدمة توصيل داخل الإمارات • دعم عربي
            </div>
          </div>
        </Container>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-3">
            <Link href="#home" className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl shadow-xl font-extrabold">
                <img src="/logo.png" alt="ب" />
              </div>
              <div className="leading-tight">
                <div className="text-[14px] font-[700] font-Batoota">
                  {BRAND.name}
                </div>
                <div className="text-[11px] text-slate-500">
                  {BRAND.tagline}
                </div>
              </div>
            </Link>

            <nav
              className="hidden items-center gap-1 md:flex"
              aria-label="التنقل"
            >
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="rounded-2xl px-3 py-2 text-sm text-slate-600 transition hover:bg-orange-50 hover:text-slate-900"
                >
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <PrimaryButton href={BRAND.whatsapp}>
                اطلب عبر واتساب
              </PrimaryButton>
            </div>
          </div>
        </Container>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="animate-float-slow absolute -top-40 right-1/2 h-72 w-72 translate-x-1/2 rounded-full bg-sky-200/60 blur-3xl" />
            <div className="animate-float-slow absolute -bottom-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-200/50 blur-3xl" />
          </div>

          <Container>
            <div className="grid items-center gap-10 py-12 md:grid-cols-2 md:py-16">
              <div>
                <Reveal>
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                    <span className="text-orange-600">⚡</span>
                    توصيل سريع • تسعير واضح • دعم مباشر
                  </div>
                </Reveal>

                <Reveal delay={80}>
                  <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                    مندوب يوصل طلبك…
                    <span className="text-sky-700"> خلال وقت قياسي</span>
                    <span className="text-orange-500">.</span>
                  </h1>
                </Reveal>

                <Reveal delay={140}>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                    {BRAND.name} يقدم توصيل أفراد وشركات داخل الإمارات. أرسل
                    تفاصيل الطلب على واتساب وسنؤكد السعر والوقت فورًا.
                  </p>
                </Reveal>

                <Reveal delay={200}>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <PrimaryButton href={BRAND.whatsapp}>
                      ابدأ الآن عبر واتساب
                    </PrimaryButton>
                    <GhostButton href={`tel:${BRAND.phone}`}>
                      اتصال مباشر
                    </GhostButton>
                  </div>
                </Reveal>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { v: "+10", t: "سنوات خبرة (مثال)" },
                    { v: "24/7", t: "دعم واستجابة" },
                    { v: "سريع", t: "توصيل داخل المدينة" },
                  ].map((k, i) => (
                    <Reveal key={k.v} delay={260 + i * 80}>
                      <div className="hover-lift rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="text-lg font-extrabold">{k.v}</div>
                        <div className="mt-1 text-xs text-slate-600">{k.t}</div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <Reveal delay={120} className="relative">
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <img
                    src="/ads.png"
                    alt="مندوب توصيل"
                    className="h-[380px] w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <Reveal
                  delay={260}
                  className="absolute -bottom-6 right-6 left-6"
                >
                  <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm font-extrabold">تأكيد سريع</div>
                        <div className="mt-1 text-xs text-slate-600">
                          ارسل الموقع + نوع الطلب + رقم التواصل
                        </div>
                      </div>
                      <a
                        href={BRAND.whatsapp}
                        className="rounded-2xl bg-orange-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
                      >
                        ارسل التفاصيل
                      </a>
                    </div>
                  </div>
                </Reveal>
              </Reveal>
            </div>
          </Container>

          <div className="h-10 bg-gradient-to-b from-transparent to-slate-50" />
        </section>

        {/* Services */}
        <section id="services" className="border-t border-slate-200 bg-white">
          <Container>
            <div className="py-12">
              <SectionTitle
                kicker="خدماتنا"
                title="حلول توصيل تناسبك"
                desc="اختر نوع الخدمة المناسبة—وسنؤكد لك السعر ووقت التوصيل."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
                {SERVICES.map((s, i) => (
                  <Reveal key={s.title} delay={i * 80}>
                    <div className="hover-lift rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-50 to-orange-50 text-xl">
                          {s.icon}
                        </div>
                        <div>
                          <div className="text-sm font-extrabold">
                            {s.title}
                          </div>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Why */}
        <section id="why" className="border-t border-slate-200 bg-slate-50">
          <Container>
            <div className="py-12">
              <SectionTitle
                kicker="مميزات"
                title="ليش تختار سهم؟"
                desc="نركز على السرعة، الوضوح، والتواصل السهل حتى التسليم."
              />
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {FEATURES.map((f, i) => (
                  <Reveal key={f.title} delay={i * 90}>
                    <div className="hover-lift rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                      <div className="text-sm font-extrabold">{f.title}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {f.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* How */}
        <section id="how" className="border-t border-slate-200 bg-white">
          <Container>
            <div className="py-12">
              <SectionTitle
                kicker="الخطوات"
                title="كيف نعمل؟"
                desc="3 خطوات بسيطة من الرسالة حتى التسليم."
              />
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {STEPS.map((s, i) => (
                  <Reveal key={s.n} delay={i * 100}>
                    <div className="hover-lift rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-semibold text-slate-500">
                          الخطوة
                        </div>
                        <div className="rounded-2xl bg-gradient-to-r from-sky-600 to-orange-500 px-3 py-1 text-xs font-bold text-white">
                          {s.n}
                        </div>
                      </div>
                      <div className="mt-4 text-lg font-extrabold">
                        {s.title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {s.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-slate-200 bg-slate-50">
          <Container>
            <div className="py-12">
              <SectionTitle
                kicker="مساعدة"
                title="الأسئلة الشائعة"
                desc="أجوبة سريعة لأكثر الأسئلة تكرارًا."
              />
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {FAQ.map((f, i) => (
                  <Reveal key={f.q} delay={i * 80}>
                    <details className="hover-lift group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                      <summary className="cursor-pointer list-none text-sm font-extrabold">
                        <div className="flex items-center justify-between gap-4">
                          <span>{f.q}</span>
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 group-open:bg-orange-50 group-open:text-orange-700">
                            +
                          </span>
                        </div>
                      </summary>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {f.a}
                      </p>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Contact */}
        {/* <section id="contact" className="border-t border-slate-200 bg-white">
          <Container>
            <div className="py-12">
              <SectionTitle kicker="تواصل" title="جاهز؟ خلّنا نوصل طلبك" desc="أرسل التفاصيل الآن وسنرد عليك بسرعة." />

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="text-sm font-extrabold">طرق التواصل</div>
                  <div className="mt-4 grid gap-3 text-sm text-slate-700">
                    <a className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:bg-slate-50" href={`tel:${BRAND.phone}`}>
                      📞 اتصال: <span className="font-semibold">{BRAND.phone}</span>
                    </a>
                    <a className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:bg-slate-50" href={BRAND.whatsapp}>
                      💬 واتساب: <span className="font-semibold">ابدأ محادثة</span>
                    </a>
                  </div>
                  <p className="mt-4 text-xs leading-6 text-slate-500">
                    نصيحة: ارسل (موقع الاستلام + موقع التسليم + نوع الطلب + وقت مناسب) لتأكيد أسرع.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-sm font-extrabold">نموذج سريع</div>
                  <p className="mt-2 text-sm text-slate-600">(اختياري) يفتح واتساب برسالة جاهزة.</p>

                  <form
                    className="mt-4 grid gap-3"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = e.currentTarget;
                      const fd = new FormData(form);
                      const name = String(fd.get("name") || "").trim();
                      const from = String(fd.get("from") || "").trim();
                      const to = String(fd.get("to") || "").trim();
                      const note = String(fd.get("note") || "").trim();
                      const msg =
                        `مرحباً، أنا ${name || ""}.\n` +
                        `موقع الاستلام: ${from || ""}\n` +
                        `موقع التسليم: ${to || ""}\n` +
                        `ملاحظات: ${note || ""}`;
                      const url = `${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`;
                      window.open(url, "_blank");
                    }}
                  >
                    <input
                      name="name"
                      placeholder="الاسم"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-200"
                    />
                    <input
                      name="from"
                      placeholder="موقع الاستلام"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-200"
                    />
                    <input
                      name="to"
                      placeholder="موقع التسليم"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-200"
                    />
                    <textarea
                      name="note"
                      placeholder="ملاحظات (نوع الطلب/وقت مناسب...)"
                      className="min-h-[110px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-200"
                    />
                    <button
                      type="submit"
                      className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                    >
                      إرسال إلى واتساب
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </section> */}

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white">
          <Container>
            <div className="flex flex-col gap-3 py-10 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <div>
                © {new Date().getFullYear()} {BRAND.name} — جميع الحقوق محفوظة
              </div>
              <div className="flex items-center gap-3">
                <a className="hover:text-slate-900" href="#home">
                  أعلى الصفحة
                </a>
                <span className="text-slate-300">|</span>
                <a className="hover:text-slate-900" href={BRAND.whatsapp}>
                  واتساب
                </a>
              </div>
            </div>
          </Container>
        </footer>
      </main>
    </div>
  );
}
