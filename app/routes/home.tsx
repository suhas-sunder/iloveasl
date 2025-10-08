import type { Route } from "./+types/home";
import { json } from "@remix-run/node";

/* =========================================================
   META
========================================================= */
export function meta({}: Route.MetaArgs) {
  const title = "I Love ASL | Learn American Sign Language Online";
  const description =
    "I Love ASL offers free lessons, video tutorials, printable ASL alphabet charts, fingerspelling practice, and tips to help beginners communicate confidently with the Deaf community.";
  const url = "https://iloveasl.com/";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content: [
        "ASL lessons",
        "American Sign Language",
        "learn sign language",
        "fingerspelling practice",
        "ASL alphabet chart",
        "deaf culture",
        "ASL for beginners",
        "ASL video tutorials",
        "sign language dictionary",
        "inclusive communication",
      ].join(", "),
    },
    { name: "robots", content: "index,follow,max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: `${url}og-image.jpg` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { rel: "canonical", href: url },
    { name: "theme-color", content: "#0d9488" }, // teal
  ];
}

/* =========================================================
   LOADER
========================================================= */
export function loader() {
  return json({ nowISO: new Date().toISOString() });
}

/* =========================================================
   UTIL
========================================================= */
const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-xl border border-teal-100 bg-white p-6 shadow-sm ${className}`}
  >
    {children}
  </div>
);

/* =========================================================
   PAGE
========================================================= */
export default function Home({ loaderData: { nowISO } }: Route.ComponentProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "I Love ASL",
        url: "https://iloveasl.com/",
        description:
          "I Love ASL is a beginner-friendly platform that provides lessons, ASL alphabet charts, fingerspelling drills, and Deaf culture guides.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is I Love ASL free to use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. All basic lessons, alphabet charts, and video tutorials are free for personal use.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need previous sign language experience?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No experience required. Our guides start with the ASL alphabet and common phrases.",
            },
          },
          {
            "@type": "Question",
            name: "Are there printable ASL alphabet charts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Download high-resolution printable ASL alphabet charts to keep at your study desk or classroom.",
            },
          },
          {
            "@type": "Question",
            name: "Can kids use these lessons?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. The beginner lessons are kid-friendly and include fun games for practice.",
            },
          },
          {
            "@type": "Question",
            name: "Do you cover Deaf culture and etiquette?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We include lessons on Deaf culture, respectful communication, and common etiquette tips.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-teal-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* TOP BAR */}
      <div className="w-full border-b border-teal-100 bg-teal-50/70">
        <div className="mx-auto max-w-7xl px-4 py-2 text-sm text-teal-700">
          Learn ASL online • Last updated{" "}
          {new Date(nowISO).toLocaleDateString()}
        </div>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-teal-800">
              Learn American Sign Language with Confidence
            </h1>
            <p className="text-lg text-slate-800 leading-relaxed">
              <strong>I Love ASL</strong> makes learning accessible and fun.
              Start with free <strong>ASL alphabet charts</strong>, step-by-step{" "}
              <strong>video tutorials</strong>, and
              <strong> fingerspelling drills</strong>. Gain confidence to
              communicate with the Deaf community while exploring culture and
              etiquette.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#lessons"
                className="rounded-lg border border-teal-300 bg-white px-4 py-2 text-teal-800 shadow-sm hover:bg-teal-100"
              >
                Start Learning
              </a>
              <a
                href="#alphabet"
                className="rounded-lg border border-teal-300 bg-white px-4 py-2 text-teal-800 shadow-sm hover:bg-teal-100"
              >
                View ASL Alphabet
              </a>
            </div>
          </div>

          <Card>
            <h2 className="text-base font-semibold text-teal-900">
              Quick Highlights
            </h2>
            <ul className="mt-3 grid gap-2 text-sm text-slate-800 sm:grid-cols-2">
              <li>🤟 ASL alphabet & printable charts</li>
              <li>🎥 Beginner video lessons</li>
              <li>🧒 Kid-friendly practice games</li>
              <li>🌎 Deaf culture & etiquette guides</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* LESSONS */}
      <section
        id="lessons"
        className="mx-auto max-w-7xl px-4 py-10 space-y-8 leading-relaxed text-slate-800"
      >
        <h2 className="text-2xl font-bold text-teal-800">
          ASL Lessons & Practice
        </h2>
        <p>
          Our structured lessons help beginners move from basic letters to
          everyday communication. Each unit combines written guides,
          high-quality videos, and quizzes to track progress.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold text-teal-800">
              ASL Alphabet
            </h3>
            <p className="text-sm">
              Master fingerspelling A-Z with downloadable charts and guided
              hand-shape videos.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-teal-800">
              Common Greetings
            </h3>
            <p className="text-sm">
              Learn how to sign “Hello”, “Good morning”, “Nice to meet you” and
              other everyday phrases.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-teal-800">
              Everyday Phrases
            </h3>
            <p className="text-sm">
              Practice sentences for school, work, shopping, and making friends.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-teal-800">
              Fingerspelling Speed Drills
            </h3>
            <p className="text-sm">
              Boost recognition speed with random word practice and
              flash-card-style drills.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-teal-800">
              Deaf Culture & Etiquette
            </h3>
            <p className="text-sm">
              Understand respectful communication, attention-getting techniques,
              and cultural insights.
            </p>
          </Card>
        </div>
      </section>

      {/* ALPHABET */}
      <section
        id="alphabet"
        className="mx-auto max-w-7xl px-4 py-10 space-y-8 leading-relaxed text-slate-800"
      >
        <h2 className="text-2xl font-bold text-teal-800">
          ASL Alphabet & Fingerspelling
        </h2>
        <p>
          Fingerspelling is the foundation of ASL. Our downloadable alphabet
          charts and HD videos demonstrate each handshape from multiple angles.
          Learners can print charts for desk reference or classroom displays.
        </p>
      </section>

      {/* CULTURE */}
      <section
        id="culture"
        className="mx-auto max-w-7xl px-4 py-10 space-y-8 leading-relaxed text-slate-800"
      >
        <h2 className="text-2xl font-bold text-teal-800">
          Deaf Culture & Community
        </h2>
        <p>
          Learning ASL is also about building bridges. Our culture section
          highlights the history of American Sign Language, important figures
          like Thomas Gallaudet and Laurent Clerc, and the rich heritage of Deaf
          art, theatre, and storytelling traditions.
        </p>
      </section>

      {/* SEO-RICH LONGFORM CONTENT */}
      <section
        id="asl-longform"
        className="mx-auto max-w-7xl px-4 py-12 space-y-12 leading-relaxed text-slate-800"
      >
        {/* INTRO */}
        <div>
          <h2 className="text-3xl font-bold text-teal-800">
            The Journey to Learning American Sign Language
          </h2>
          <p>
            Learning <strong>American Sign Language (ASL)</strong> is more than
            mastering hand movements-it’s about embracing a visual language that
            connects millions of Deaf, hard-of-hearing, and hearing individuals.
            ASL is the primary language of the Deaf community in the United
            States and parts of Canada, blending rich
            <strong> linguistic structure</strong> with unique cultural
            traditions. By starting your ASL journey online, you gain the
            flexibility to learn at your own pace while respecting the heritage
            and significance of this language.
          </p>
        </div>

        {/* HISTORY */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            A Brief History of ASL
          </h3>
          <p>
            ASL’s roots trace back to early 19th-century America, when
            <strong> Thomas Hopkins Gallaudet</strong> and French educator
            <strong> Laurent Clerc</strong> helped establish the first permanent
            school for the Deaf in Hartford, Connecticut, in 1817. By blending
            elements of French Sign Language (LSF) with regional sign systems
            already used in the United States, a new, fully-fledged
            <strong> signed language</strong> evolved. Today, ASL stands as a
            recognized language with its own grammar, syntax, and visual-spatial
            structure distinct from English.
          </p>
          <p>
            Understanding the history of ASL gives learners a deeper
            appreciation of the resilience and creativity of the Deaf community
            and their contributions to American culture.
          </p>
        </div>

        {/* IMPORTANCE */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            Why Learning ASL Matters
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Inclusive communication:</strong> Break language barriers
              and connect directly with Deaf and hard-of-hearing friends,
              classmates, or colleagues.
            </li>
            <li>
              <strong>Career opportunities:</strong> ASL proficiency benefits
              teachers, interpreters, social workers, medical staff, and
              customer service roles.
            </li>
            <li>
              <strong>Cognitive benefits:</strong> Learning a second language,
              especially a visual-gestural one, boosts memory, multitasking, and
              spatial awareness.
            </li>
            <li>
              <strong>Cultural appreciation:</strong> Gain insight into Deaf
              heritage, storytelling, theatre, and the rich traditions of the
              community.
            </li>
            <li>
              <strong>Accessibility advocacy:</strong> Promotes equality and
              helps build a society where communication is not a barrier.
            </li>
          </ul>
        </div>

        {/* BEGINNER TIPS */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            Beginner Tips to Start Learning ASL
          </h3>
          <p>
            The key to ASL success is <strong>consistent practice</strong> and
            immersion in visual learning. Beginners can start with the{" "}
            <strong>ASL alphabet and fingerspelling</strong> for names, practice{" "}
            <strong>basic greetings</strong> and common phrases, and then
            gradually explore grammatical features like facial expressions and
            non-manual signals.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              🤟 Practice 10–15 minutes daily with fingerspelling drills using
              random words.
            </li>
            <li>
              📺 Watch ASL video lessons repeatedly to reinforce visual memory
              of handshapes.
            </li>
            <li>
              🪞 Use a mirror to ensure your signing angles are clear to your
              audience.
            </li>
            <li>
              👥 Join online ASL communities or practice groups to learn
              naturally through conversation.
            </li>
            <li>
              📖 Keep a sign vocabulary journal with drawings or screenshots for
              quick reference.
            </li>
            <li>
              🎯 Focus on clarity of movement and facial expressions, which
              carry crucial grammar in ASL.
            </li>
          </ul>
        </div>

        {/* FINGERSPELLING */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            Mastering the ASL Alphabet & Fingerspelling
          </h3>
          <p>
            <strong>Fingerspelling</strong> is used to spell out names, places,
            and words without a dedicated ASL sign. To improve recognition
            speed:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Start by learning <strong>handshapes A–Z</strong> using printable
              charts.
            </li>
            <li>
              Work on <strong>smooth transitions</strong> between letters,
              especially common clusters like “CH” or “ST”.
            </li>
            <li>
              Try <strong>flash-card apps</strong> or random word generators to
              build real-time recognition.
            </li>
            <li>
              Practice <strong>reading fingerspelling</strong> from ASL videos
              or signing friends for receptive skills.
            </li>
            <li>
              Increase speed gradually-accuracy comes first, then fluency.
            </li>
          </ul>
        </div>

        {/* FACIAL EXPRESSIONS */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            Facial Expressions & Body Language
          </h3>
          <p>
            ASL relies heavily on <strong>non-manual markers</strong> such as
            eyebrow movements, head tilts, and body shifts to indicate tone,
            questions, or emphasis. For example, raising eyebrows often signals
            a yes/no question. Beginners should practice signing in front of a
            mirror to integrate facial grammar naturally with hand movements.
          </p>
        </div>

        {/* CULTURE */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            Respecting Deaf Culture
          </h3>
          <p>
            Learning ASL also means respecting the values and norms of the Deaf
            community:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Use a gentle tap on the shoulder or a hand wave to get attention,
              never shouting.
            </li>
            <li>
              Maintain <strong>eye contact</strong> while signing; breaking eye
              contact is seen as disengagement.
            </li>
            <li>
              Be patient with your own mistakes and show willingness to
              learn-community members often appreciate genuine effort.
            </li>
            <li>
              Support <strong>Deaf-owned businesses</strong> and events to
              engage with the culture respectfully.
            </li>
          </ul>
        </div>

        {/* TECHNOLOGY */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            Using Technology to Learn ASL
          </h3>
          <p>
            Technology has made ASL learning more accessible than ever. Websites
            like
            <strong> I Love ASL</strong> provide structured lessons,
            downloadable charts, and quizzes. YouTube and PWA-based flash card
            apps allow on-the-go fingerspelling drills, while video calls let
            learners practice in real conversations with tutors or peers.
          </p>
        </div>

        {/* ACCESSIBILITY */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            ASL and Accessibility Advocacy
          </h3>
          <p>
            Beyond language, ASL is part of a larger movement for{" "}
            <strong>communication access</strong>. Understanding ASL helps
            advocate for captioned media, sign language interpreters in public
            events, and inclusive classrooms. Supporting accessibility makes
            communities more welcoming and equitable for everyone.
          </p>
        </div>

        {/* EXAM PREP & CAREER */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            ASL for Students, Educators & Professionals
          </h3>
          <p>
            Teachers use ASL to create inclusive classrooms for Deaf and
            hard-of-hearing students. Healthcare workers who know ASL can
            communicate better with patients. Interpreting is also a rewarding
            career path that requires advanced ASL skills and cultural
            knowledge.
          </p>
        </div>

        {/* CONCLUSION */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            Building a Lifelong Connection Through ASL
          </h3>
          <p>
            By dedicating time to learn ASL, you contribute to a more inclusive
            society while gaining a practical skill that fosters empathy,
            creativity, and human connection. Whether you start with alphabet
            charts or conversational phrases, every sign you learn helps build a
            bridge between worlds.
          </p>
        </div>
      </section>

      {/* ADDITIONAL SEO-RICH CONTENT */}
      <section
        id="asl-advanced"
        className="mx-auto max-w-7xl px-4 py-12 space-y-12 leading-relaxed text-slate-800"
      >
        {/* STORYTELLING */}
        <div>
          <h2 className="text-3xl font-bold text-teal-800">
            The Art of Storytelling in ASL
          </h2>
          <p>
            Storytelling is central to <strong>Deaf culture</strong> and a
            powerful way to advance ASL fluency. Visual stories rely on{" "}
            <strong>
              facial expressions, role-shifting, classifiers, and space
            </strong>{" "}
            to bring characters and actions to life without spoken words. Many
            community events showcase{" "}
            <strong>Deaf poets and storytellers</strong> who use sign rhythm,
            handshape repetition, and dramatic pauses to evoke emotion.
            Beginners who study storytelling early often develop stronger sign
            clarity and better comprehension of advanced grammatical structures.
          </p>
        </div>

        {/* GRAMMAR */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            ASL Grammar & Sentence Structure
          </h3>
          <p>
            Unlike English, ASL uses a <strong>topic–comment</strong> structure
            and depends on visual space to indicate subjects, objects, and time
            references. Learners must grasp the importance of{" "}
            <strong>time-topic-comment order</strong>, facial grammar for
            questions, and directional verbs that show who is doing what to
            whom. Developing proper grammar elevates communication beyond
            isolated signs to meaningful dialogue.
          </p>
        </div>

        {/* CLASSIFIERS */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            Understanding Classifiers
          </h3>
          <p>
            <strong>Classifiers</strong> are specialized handshapes that
            describe size, shape, movement, or quantity. For example, a
            “3-handshape” may represent a moving vehicle, while a bent-V can
            depict a person sitting. Mastering classifiers allows storytellers
            to paint vivid visual scenes, making conversations efficient and
            expressive.
          </p>
        </div>

        {/* REGIONAL VARIATIONS */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            Regional & Cultural Variations in ASL
          </h3>
          <p>
            ASL is not entirely uniform-there are{" "}
            <strong>regional differences</strong> across the United States and
            Canada. Some signs vary by region, generation, or cultural
            influence, just as spoken languages have dialects. Learning about
            these variations prepares students to understand signers from
            diverse backgrounds and demonstrates cultural respect.
          </p>
        </div>

        {/* FINGERSPELLING SPEED */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            Improving Fingerspelling Fluency
          </h3>
          <p>
            Advanced learners focus on <strong>receptive fingerspelling</strong>
            -reading rapid letter sequences in real conversations. Techniques
            include watching experienced signers without pausing videos,
            practicing with word lists, and training in peripheral vision to
            catch the overall shape of words instead of each letter
            individually.
          </p>
        </div>

        {/* HISTORY & CIVIL RIGHTS */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            Milestones in Deaf History & Civil Rights
          </h3>
          <p>
            The story of ASL is tied to significant milestones in{" "}
            <strong>Deaf history</strong>: the founding of the{" "}
            <strong>American School for the Deaf</strong> in 1817, the
            <strong> Gallaudet University</strong> establishment in 1864, and
            the 1988
            <strong> “Deaf President Now”</strong> movement that became a
            landmark in civil-rights advocacy for Deaf leadership and
            recognition of ASL as a legitimate language. Highlighting these
            events inspires learners and underscores the resilience of the Deaf
            community.
          </p>
        </div>

        {/* ASL IN EDUCATION */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            ASL in Schools & Early Childhood Development
          </h3>
          <p>
            Research shows that <strong>early exposure</strong> to ASL benefits
            cognitive and language development for Deaf children and even
            enhances vocabulary growth for hearing babies through{" "}
            <strong>baby sign language</strong>. Schools that incorporate
            bilingual ASL-English programs create inclusive environments where
            Deaf students thrive academically and socially.
          </p>
        </div>

        {/* INTERPRETING CAREERS */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            Becoming a Certified ASL Interpreter
          </h3>
          <p>
            For learners who want to pursue interpreting as a profession,
            advanced ASL skills and cultural competency are essential.
            Interpreters must pass standardized exams such as
            <strong> RID’s National Interpreter Certification</strong> and
            adhere to the
            <strong> Code of Professional Conduct</strong>. Career opportunities
            exist in schools, medical facilities, legal settings, media, and
            public events-anywhere communication access is needed.
          </p>
        </div>

        {/* ASL IN MEDIA */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            ASL in Media & Entertainment
          </h3>
          <p>
            From <strong>Broadway shows</strong> interpreted in real time to
            films like
            <em> CODA</em> showcasing Deaf actors, ASL continues to shape
            mainstream entertainment. Captions, on-screen interpreters, and
            ASL-inclusive productions expand representation and awareness.
            Encouraging more accessible media helps normalize sign language use
            in everyday life.
          </p>
        </div>

        {/* COMMUNITY INVOLVEMENT */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            Joining Deaf Community Events
          </h3>
          <p>
            Immersing yourself in community events-such as{" "}
            <strong>Silent Dinners</strong>,<strong> ASL socials</strong>, or
            local <strong>Deaf Expo</strong> gatherings-accelerates learning
            through real conversations. These events let beginners practice
            natural signing, pick up idiomatic expressions, and develop cultural
            awareness that classroom lessons alone can’t provide.
          </p>
        </div>

        {/* CONCLUSION */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-700">
            Your Path to ASL Mastery
          </h3>
          <p>
            Whether your goal is casual conversation with Deaf friends or a
            professional interpreting career,{" "}
            <strong>
              consistent practice, cultural respect, and real-world exposure
            </strong>
            will guide you to fluency. By continuing to explore advanced
            topics-storytelling, classifiers, grammar nuances, and Deaf
            history-you enrich both your skill set and your understanding of the
            vibrant Deaf community.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="mx-auto max-w-7xl px-4 py-10 leading-relaxed text-slate-800"
      >
        <h2 className="text-2xl font-bold text-teal-800">
          Frequently Asked Questions
        </h2>
        <dl className="mt-6 space-y-6">
          {(jsonLd["@graph"][1].mainEntity as any[]).map((q, i) => (
            <div key={i}>
              <dt className="font-semibold text-teal-900">{q.name}</dt>
              <dd className="mt-1">{q.acceptedAnswer.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-teal-200 bg-teal-50/60 py-8 text-center text-sm text-teal-800">
        © {new Date().getFullYear()} I Love ASL • Learn Sign Language Together
      </footer>
    </main>
  );
}
