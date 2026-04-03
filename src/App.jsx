import { useEffect, useState } from "react";
import avatarImg from "./assets/avatar.png";
import cert1 from "./assets/cert1.jpg";
import cert2 from "./assets/cert2.jpg";
import cert3 from "./assets/cert3.PNG";

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

  const experiences = [/* без изменений */];
  const portfolioItems = [/* без изменений */];
  const certificates = [/* без изменений */];

  return (
    <div className="min-h-screen min-w-[1280px] overflow-x-auto bg-[#e7e7e2] bg-[linear-gradient(180deg,_#ecece7_0%,_#e2e2dc_100%)] text-[#2a2a27]">
      <header className="sticky top-0 z-40 border-b border-white/30 bg-[#d8d8d3]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1f1f1c]">
              Резюме и портфолио
            </div>
            <div className="mt-1 text-sm text-[#1f1f1c] font-semibold">
              Дмитрий Золотов
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex gap-3">
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
              href="/resume.docx"
              download="Дмитрий_Золотов_Резюме.docx"
              className="rounded-full border border-orange-500 bg-orange-500 px-4 py-2 text-sm text-white transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-md"
            >
              Скачать резюме в формате .docx
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="about"
          className="mx-auto grid max-w-6xl grid-cols-[1.45fr_0.85fr] items-center gap-6 px-6 py-8"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-[#575752] bg-[linear-gradient(180deg,_rgba(255,255,255,0.58),_rgba(233,233,228,0.72))] p-7 ring-1 ring-black/5 transition duration-300 hover:-translate-y-[2px]">
            <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(90deg,_rgba(255,255,255,0.45),_transparent)]" />
            <div className="relative">
              <div className="mb-5 inline-flex rounded-full border border-[#9a9a93] bg-white/45 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#5a5a55]">
                Обо мне
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#232320]">
                Я – Дмитрий Золотов
              </h1>

              <div className="mt-7 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-[#575752] bg-white/35 p-4">
                  <div className="text-xs uppercase">Специализация</div>
                  <div className="mt-2 text-sm">
                    Редактор / Копирайтер / Технический писатель
                  </div>
                </div>
                <div className="rounded-2xl border border-[#575752] bg-white/35 p-4">
                  <div className="text-xs uppercase">Город</div>
                  <div className="mt-2 text-sm">Москва</div>
                </div>
                <div className="rounded-2xl border border-[#575752] bg-white/35 p-4">
                  <div className="text-xs uppercase">Контакты</div>
                  <div className="mt-2 text-sm">
                    dzreveille@gmail.com <br /> Telegram: @isaidpluh <br /> +7
                    (968) 086-92-02
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-end">
            <img
              src={avatarImg}
              alt="avatar"
              className="h-[280px] w-[280px] rounded-full object-cover"
            />
          </div>
        </section>

        <section id="certificates" className="mx-auto max-w-6xl px-6 pb-10">
          <div className="mt-6 grid grid-cols-3 gap-4">
            {certificates.map((c, i) => (
              <div key={i} onClick={() => setSelectedImage(c)}>
                <img src={c.image} alt={c.title} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
