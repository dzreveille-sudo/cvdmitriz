import { useEffect, useState } from "react";
import avatarImg from "./assets/avatar.png";
import cert1 from "./assets/cert1.jpg";
import cert2 from "./assets/cert2.jpg";
import cert3 from "./assets/cert3.PNG";
import resumeFile from "./assets/resume.docx?url";



export default function ResumePortfolioSite() {
  const [selectedImage, setSelectedImage] = useState(null);

useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setSelectedImage(null);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);
  
  const experiences = [
    {
      period: "2020 — 2026",
      role: "Специалист по коммуникации",
      company: "Мэрия Москвы",
      description: "Занимался продвижением проектов мэрии Москвы. Готовил тезисы, пресс-релизы, статьи для СМИ, посты для соцсетей, тексты для медиаэкранов. Делал выжимки с Reddit и X, переводы с английского. Курировал освещение программы «Мой район», участвовал в сопровождении выборов, помогал в выпуске окружной газеты.",
    },
    {
      period: "2018 — 2020",
      role: "Старший редактор",
      company: "Mos.ru",
      description: "Превращал официальные пресс-релизы в живые тексты, готовил большие статьи, брал интервью. Вел раздел «Афиша». Помогал с подготовкой постов для мэра и его команды. Весь контент делал одновременно точным и понятным для широкой аудитории.",
    },
    {
      period: "2013 — 2018",
      role: "Редактор / Копирайтер",
      company: "СМИ",
      description: "Прошел классическую новостную школу: мониторинг, тексты, редактура, выпуск. В числе мест работы — NEWSru.com, телеканал «ТВ Центр», «Матч ТВ», KM.ru, строительный B2B-портал. Благодаря разнообразному опыту без труда ориентируюсь практически в любой тематике.",
    },
  ];

  const portfolioItems = [
  {
    title: "Статьи",
    description: (
      <>
        Для mos.ru готовил материалы на городские темы. Примеры: {" "}
        <a
          href="https://www.mos.ru/news/item/69392073/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-orange-500 underline underline-offset-4 hover:!text-orange-600 transition"
        >
         история района Нагатинский Затон 
        </a>{" "}, 
        <a href="https://www.mos.ru/news/item/64742073/" target="_blank" className="font-semibold text-orange-500 underline underline-offset-4 hover:!text-orange-600 transition">интервью с научным директором Московского планетария</a>,{" "}
        <a href="https://www.mos.ru/news/item/64439073/" target="_blank" className="font-semibold text-orange-500 underline underline-offset-4 hover:!text-orange-600 transition">гид по выставке памяти Дмитрия Брусникина</a>,{" "}
        <a href="https://www.mos.ru/news/item/49668073/" target="_blank" className="font-semibold text-orange-500 underline underline-offset-4 hover:!text-orange-600 transition">интервью с генеральным директором Мосгортура</a>.
      </>
    ),
  },

  {
    title: "Переводы",
    description: (
      <>
        Во время пандемии я работал специалистом в Инфоцентре по Covid-19, где переводил с английского научные исследования. Примеры:{" "}
        <a href="https://disk.yandex.ru/i/Vqv6Kp3z07MeiQ" target="_blank" className="font-semibold text-orange-500 underline underline-offset-4 hover:!text-orange-600 transition">один</a>,{" "}
        <a href="https://disk.yandex.ru/i/QLiPhdvlt9gw-A" target="_blank" className="font-semibold text-orange-500 underline underline-offset-4 hover:!text-orange-600 transition">два</a>,{" "}
        <a href="https://disk.yandex.ru/i/yZswKpOkhsPJ7w" target="_blank" className="font-semibold text-orange-500 underline underline-offset-4 hover:!text-orange-600 transition">три</a>.
      </>
    ),
  },

  {
    title: "Печатная продукция",
    description: (
      <>
        Создавал еженедельные печатные дополнения к газете Metro о жизни округов столицы: от проработки контента до написания текстов и взаимодействия с дизайнерами. {" "}
        <a
          href="https://disk.yandex.ru/d/6uBH_IZBVl2PPA"
          target="_blank"
          className="font-semibold text-orange-500 underline underline-offset-4 hover:!text-orange-600 transition"
        >
          Результат выглядел так
        </a>
        .
      </>
    ),
  },

  {
    title: "Аналитика",
    description: (
      <>
        Для блога про американский футбол написал материал на 10 тысяч знаков о недостатках в методиках драфта игроков у команд NFL. Эта статья до сих пор держит первое место по обсуждаемости на канале.{" "}
        <a
          href="https://t.me/benchwarmersarehere/415"
          target="_blank"
          className="font-semibold text-orange-500 underline underline-offset-4 hover:!text-orange-600 transition"
        >
          Ссылка в Telegram
        </a>
        .
      </>
    ),
  },

  {
    title: "Презентации",
    description: (
      <>
        Для Московского урбанистического форума подготовил {" "}
        <a
          href="https://disk.yandex.ru/i/QaadHJMvVifUhQ"
          target="_blank"
          className="font-semibold text-orange-500 underline underline-offset-4 hover:!text-orange-600 transition"
        >
          PowerPoint презентацию 
        </a>{" "}
         на 50+ страниц, посвященную принципам освещения каждой темы МУФа с учетом конкретной аудитории. 
      </>
    ),
  },
];

  const certificates = [
  {
    title: "Почетная грамота от Департамента информационных технологий Москвы",
    image: cert1,
  },
  {
    title: "Благодарность мэра Москвы",
    image: cert2,
  },
  {
    title: "EF SET Certificate по английскому языку. Уровень C2",
    image: cert3,
  },
];

  return (
    <div className="min-h-screen bg-[#e7e7e2] bg-[linear-gradient(180deg,_#ecece7_0%,_#e2e2dc_100%)] text-[#2a2a27]">
      <header className="sticky top-0 z-40 border-b border-white/30 bg-[#d8d8d3]/70 backdrop-blur-xl">
       <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
  <div>
    <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1f1f1c]">
      Резюме и портфолио
    </div>
    <div className="mt-1 text-sm text-[#1f1f1c] font-semibold">Дмитрий Золотов</div>
  </div>

  <div className="flex items-center gap-3">
    <div className="hidden gap-3 md:flex">
      <a href="#about" className="rounded-full border border-[#8a8a84] bg-[#ecece7] px-4 py-2 text-sm text-[#353531] transition duration-300 hover:-translate-y-0.5 hover:bg-white/50 hover:shadow-md">
        Обо мне
      </a>
      <a href="#experience" className="rounded-full border border-[#8a8a84] bg-[#ecece7] px-4 py-2 text-sm text-[#353531] transition duration-300 hover:-translate-y-0.5 hover:bg-white/50 hover:shadow-md">
        Опыт
      </a>
      <a href="#portfolio" className="rounded-full border border-[#8a8a84] bg-[#ecece7] px-4 py-2 text-sm text-[#353531] transition duration-300 hover:-translate-y-0.5 hover:bg-white/50 hover:shadow-md">
        Проекты
      </a>
      <a href="#certificates" className="rounded-full border border-[#8a8a84] bg-[#ecece7] px-4 py-2 text-sm text-[#353531] transition duration-300 hover:-translate-y-0.5 hover:bg-white/50 hover:shadow-md">
        Сертификаты
      </a>
    </div>

   <a
  href={resumeFile}
  download="Дмитрий_Золотов_Резюме.docx"
  className="rounded-full border border-orange-500 bg-orange-500 px-4 py-2 text-sm text-white transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-md"
>
  Скачать резюме в формате .docx
</a>
  </div>
</nav>
      </header>

      <main>
        <section id="about" className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-6 py-8 lg:grid-cols-[1.45fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#575752] bg-[linear-gradient(180deg,_rgba(255,255,255,0.58),_rgba(233,233,228,0.72))] p-7 ring-1 ring-black/5 transition duration-300 hover:-translate-y-[2px]">
            <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(90deg,_rgba(255,255,255,0.45),_transparent)]" />
            <div className="relative">
              <div className="mb-5 inline-flex rounded-full border border-[#9a9a93] bg-white/45 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#5a5a55]">
                Обо мне
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#232320] md:text-5xl">
                Я – Дмитрий Золотов
              </h1>
              <p className="mt-4 max-w-2xl text-[17px] leading-8 text-[#4a4a46]">
                Мне 36. Более 13 лет я работаю с текстами. В 2012 году окончил Государственный академический университет гуманитарных наук (факультет «Философия и политология»), после чего начал карьеру в новостной журналистике. Успел поработать и на телевидении («Матч ТВ» и «ТВ Центр»). В 2018 году стал старшим редактором на портале мэра Москвы, а позже перешел в управление мэрии, где занимался информационным сопровождением городских проектов.
              </p>

              <div className="mt-7 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-[#575752] bg-white/35 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition duration-300 hover:-translate-y-1 hover:bg-white/50">
                  <div className="text-xs uppercase tracking-[0.16em] text-[#73736d]">Специализация</div>
                  <div className="mt-2 text-sm font-medium text-[#2c2c29]">Редактор / Копирайтер / Технический писатель</div>
                </div>
                <div className="rounded-2xl border border-[#575752] bg-white/35 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition duration-300 hover:-translate-y-1 hover:bg-white/50">
                  <div className="text-xs uppercase tracking-[0.16em] text-[#73736d]">Город</div>
                  <div className="mt-2 text-sm font-medium text-[#2c2c29]">Москва</div>
                </div>
                <div className="rounded-2xl border border-[#575752] bg-white/35 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition duration-300 hover:-translate-y-1 hover:bg-white/50">
                  <div className="text-xs uppercase tracking-[0.16em] text-[#73736d]">Контакты</div>
                  <div className="mt-2 text-sm font-medium text-[#2c2c29]">dzreveille@gmail.com <br /> Telegram: @isaidpluh <br /> +7 (968) 086-92-02</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-end">
            <div className="group relative ml-auto rounded-full border border-[#575752] bg-[linear-gradient(180deg,_#5f5f59_0%,_#464640_100%)] p-[10px] shadow-[0_8px_24px_rgba(65,65,55,0.08)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(65,65,55,0.10)]">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,_rgba(255,255,255,0.25),_transparent_35%)]" />
              <img
                src={avatarImg}
                alt="avatar"
                className="relative h-[260px] w-[260px] rounded-full object-cover md:h-[280px] md:w-[280px]"
              />
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 pb-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#575752] bg-[linear-gradient(180deg,_rgba(255,255,255,0.6),_rgba(230,230,224,0.75))] p-6 ring-1 ring-black/5 transition duration-300 hover:-translate-y-[2px]">
            <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(90deg,_rgba(255,255,255,0.35),_transparent)]" />
            <div className="relative">
              <div className="mb-2 inline-flex rounded-full border border-[#9a9a93] bg-white/45 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#5a5a55]">
  Опыт работы
</div>

<div className="mt-2 space-y-3">
                {experiences.map((e, i) => (
                  <div key={i} className="rounded-2xl border border-[#575752] bg-white/35 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.52)] transition duration-300 hover:-translate-y-1 hover:bg-white/48 hover:shadow-md">
                    <div className="text-xs uppercase tracking-[0.16em] text-[#74746e]">{e.period}</div>
                    <div className="mt-2 text-lg font-medium text-[#262623]">
                      {e.role} <span className="text-[#5a5a55]">— {e.company}</span>
                    </div>
                    <div className="mt-2 text-sm leading-7 text-[#4a4a46]">{e.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="mx-auto max-w-6xl px-6 pb-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#575752] bg-[linear-gradient(180deg,_rgba(255,255,255,0.6),_rgba(230,230,224,0.75))] p-6 ring-1 ring-black/5 transition duration-300 hover:-translate-y-[2px]">
            <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(90deg,_rgba(255,255,255,0.35),_transparent)]" />
            <div className="relative">
              <div className="mb-2 inline-flex rounded-full border border-[#9a9a93] bg-white/45 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#5a5a55]">
  Портфолио
</div>

<ul className="mt-2 space-y-4">
                {portfolioItems.map((p, i) => (
                  <li key={i} className="group flex items-start gap-3 rounded-2xl border border-[#575752] bg-white/35 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.52)] transition duration-300 hover:-translate-y-1 hover:bg-white/48 hover:shadow-md">
  <div className="mt-[0.42rem] h-[7px] w-[7px] shrink-0 rounded-[2px] bg-[#1f1f1c]" />
  <div>
    <div className="text-lg font-medium leading-6 text-[#262623]">{p.title}</div>
    <div className="mt-1 text-sm leading-7 text-[#4a4a46]">{p.description}</div>
  </div>
</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="certificates" className="mx-auto max-w-6xl px-6 pb-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#575752] bg-[linear-gradient(180deg,_rgba(255,255,255,0.6),_rgba(230,230,224,0.75))] p-6 ring-1 ring-black/5 transition duration-300 hover:-translate-y-[2px]">
            <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(90deg,_rgba(255,255,255,0.35),_transparent)]" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-full border border-[#9a9a93] bg-white/45 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#5a5a55]">
                Сертификаты и благодарности
              </div>
              
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {certificates.map((c, i) => (
  <div
    key={i}
    onClick={() => setSelectedImage(c)}
    className="cursor-zoom-in rounded-[1.5rem] border border-[#575752] bg-[#ecece7] p-3 transition duration-300 hover:-translate-y-[2px] hover:bg-white/46"
  >
    <div className="overflow-hidden rounded-[1rem] border border-[#575752] bg-[#ecece7]">
      <img
        src={c.image}
        alt={c.title}
        className="h-[220px] w-full object-cover transition duration-500 hover:scale-[1.03]"
      />
    </div>
    <div className="px-1 pb-1 pt-3 text-sm font-medium text-[#2d2d2a]">{c.title}</div>
  </div>
))}
              </div>
            </div>
          </div>
        </section>
      </main>
       {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl border border-white/10 object-contain"
            />
            <p className="mt-3 text-center text-sm text-white/85">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
