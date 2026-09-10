import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title = "Learn ASL Online | I Love ASL";
  const description =
    "I Love ASL is an independent American Sign Language learning project in development, focused on clear visual lessons, fingerspelling, everyday vocabulary, grammar, and Deaf culture.";
  const url = "https://iloveasl.com/";

  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index,follow,max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "I Love ASL",
        url,
        description,
        inLanguage: "en",
      },
    },
  ];
}

const plannedTopics = [
  {
    title: "ASL alphabet",
    description:
      "Clear visual references for the handshapes used in the manual alphabet.",
  },
  {
    title: "Fingerspelling",
    description:
      "Practice designed to build letter recognition, accuracy, and smoother recall.",
  },
  {
    title: "Everyday vocabulary",
    description:
      "Useful signs and phrases presented with enough context to support real learning.",
  },
  {
    title: "Grammar and Deaf culture",
    description:
      "Language structure, non-manual signals, variation, and cultural context alongside vocabulary.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6faf9] font-sans text-slate-900">
      <header className="border-b border-slate-200/80 bg-white/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <a
            href="/"
            className="flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            aria-label="I Love ASL home"
          >
            <span
              className="grid size-10 place-items-center rounded-xl bg-teal-700 text-sm font-black tracking-tight text-white shadow-sm"
              aria-hidden="true"
            >
              ASL
            </span>
            <span className="text-lg font-extrabold tracking-tight text-slate-950">
              I Love ASL
            </span>
          </a>
          <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-teal-800">
            In development
          </span>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white">
        <div
          className="pointer-events-none absolute -right-28 -top-36 size-96 rounded-full bg-teal-100/70 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-28 size-80 rounded-full bg-emerald-50 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              American Sign Language learning
            </p>
            <h1 className="max-w-3xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.03]">
              Learn ASL one clear step at a time.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I Love ASL is an independent learning project being built for
              beginners who want a practical, visual way to study American Sign
              Language. The first learning tools will focus on the alphabet,
              fingerspelling, everyday vocabulary, grammar, and Deaf culture.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#roadmap"
                className="rounded-xl bg-teal-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              >
                See what is coming
              </a>
              <a
                href="#about-asl"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-teal-300 hover:bg-teal-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              >
                What is ASL?
              </a>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-500">
              This is an early placeholder while the first learning experience
              is being developed. No lessons, certification, or interpreting
              services are being advertised as available yet.
            </p>
          </div>

          <div className="mx-auto w-full max-w-lg lg:mx-0 lg:justify-self-end">
            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-5 shadow-2xl shadow-slate-900/10 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
                    Planned learning path
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">
                    Start simple, then build fluency
                  </p>
                </div>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                  Preview
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  ["01", "Alphabet and handshapes"],
                  ["02", "Fingerspelling practice"],
                  ["03", "Everyday signs and phrases"],
                  ["04", "Grammar, context, and culture"],
                ].map(([number, label]) => (
                  <div
                    key={number}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-teal-400 text-xs font-black text-slate-950">
                      {number}
                    </span>
                    <span className="font-semibold text-slate-100">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
            What we are building
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            A focused starting point for ASL beginners
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The goal is not to publish a giant list of isolated signs. I Love
            ASL is being designed around clear visual instruction, repeated
            practice, and enough language and cultural context to make the
            material useful.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {plannedTopics.map((topic) => (
            <article
              key={topic.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-slate-950">{topic.title}</h3>
                <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  Planned
                </span>
              </div>
              <p className="mt-3 leading-7 text-slate-600">{topic.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about-asl" className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
              About the language
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              What is American Sign Language?
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              American Sign Language, or ASL, is a visual language used
              predominantly in the United States and in many parts of Canada.
              Handshape, placement, movement, facial expression, and body
              movement all contribute to meaning.
            </p>
            <p>
              ASL has its own grammar and syntax. It is not simply English
              represented with the hands, and sign languages are not universal.
              Like spoken languages, signed languages can also vary by region
              and community.
            </p>
            <a
              href="https://nad.org/knowledge-hub/american-sign-language/what-is-american-sign-language/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg font-bold text-teal-800 underline decoration-teal-300 decoration-2 underline-offset-4 hover:text-teal-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              Learn more from the National Association of the Deaf
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="rounded-3xl border border-teal-200 bg-teal-50 p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
                Early development
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                More useful than a generic coming-soon page
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                This site is intentionally live while the learning tools are in
                development. That gives the project a stable home and lets early
                search and visitor interest inform what gets built first.
              </p>
            </div>
            <a
              href="#roadmap"
              className="inline-flex justify-center rounded-xl border border-teal-300 bg-white px-5 py-3 text-sm font-bold text-teal-900 shadow-sm transition hover:bg-teal-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              View planned topics
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} I Love ASL</p>
          <p className="max-w-2xl text-slate-400 sm:text-right">
            Independent educational project. Not a certification or professional
            interpreting service.
          </p>
        </div>
      </footer>
    </main>
  );
}
