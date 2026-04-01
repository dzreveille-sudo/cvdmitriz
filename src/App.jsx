import avatarImg from "./assets/avatar.png";
export default function ResumePortfolioSite() {
  const experiences = [
    {
      period: "2023 — сейчас",
      role: "Должность / направление",
      company: "Название компании",
      description:
        "Кратко опиши ключевые задачи, результаты и стек. Например: управление проектами, работа с клиентами, дизайн, контент, маркетинг или разработка.",
    },
    {
      period: "2021 — 2023",
      role: "Предыдущая должность",
      company: "Название компании",
      description:
        "Добавь важные достижения: запустил(а) проект, увеличил(а) продажи, улучшил(а) процессы, создал(а) материалы или развил(а) направление.",
    },
    {
      period: "2019 — 2021",
      role: "Еще один опыт",
      company: "Название компании",
      description:
        "Здесь можно оставить 2–3 предложения о роли, обязанностях и результатах.",
    },
  ];

  const portfolioItems = [
    {
      title: "Проект / кейс 01",
      description:
        "Кратко опиши, что именно ты делал(а): например, вёл(а) проект, разрабатывал(а) концепцию, создавал(а) материалы, выстраивал(а) процессы или работал(а) с клиентом.",
    },
    {
      title: "Проект / кейс 02",
      description:
        "Здесь можно написать о второй работе: какая была задача, твоя роль, какие действия ты выполнял(а) и к какому результату это привело.",
    },
    {
      title: "Проект / кейс 03",
      description:
        "Добавь кейс с акцентом на практический опыт, инструменты, коммуникацию, организацию или творческую часть работы.",
    },
    {
      title: "Проект / кейс 04",
      description:
        "Этот пункт можно использовать для описания отдельного направления, крупной задачи или регулярной деятельности.",
    },
    {
      title: "Проект / кейс 05",
      description:
        "Здесь можно показать разнообразие твоих задач и то, как ты умеешь работать с разными форматами проектов.",
    },
    {
      title: "Проект / кейс 06",
      description:
        "Последний пункт — для ещё одного примера работы, достижения или кейса с кратким описанием.",
    },
  ];

  const certificates = [
    {
      title: "Благодарность 01",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Благодарность 02",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Сертификат",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#bdbdb7] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.10),_transparent_30%),linear-gradient(180deg,_#c4c4be_0%,_#a9a9a3_100%)] text-[#1e1e1c] scroll-smooth">
      <header className="sticky top-0 z-50 border-b border-[#5e5e59] bg-[#b8b8b2]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-lg font-semibold uppercase tracking-[0.2em]">Portfolio</div>
            <div className="text-sm text-[#4f4f4a]">Имя Фамилия</div>
          </div>
          <div className="flex gap-3 text-sm md:gap-6">
            <a
              href="#about"
              className="rounded-full border border-[#63635d] bg-[#d1d1cb]/40 px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:bg-[#d9d9d4] hover:shadow-md"
            >
              Обо мне
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-[#63635d] bg-[#d1d1cb]/40 px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:bg-[#d9d9d4] hover:shadow-md"
            >
              Портфолио
            </a>
            <a
              href="#certificates"
              className="rounded-full border border-[#63635d] bg-[#d1d1cb]/40 px-4 py-2 transition duration-300 hover:-translate-y-0.5 hover:bg-[#d9d9d4] hover:shadow-md"
            >
              Сертификаты
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="about"
          className="mx-auto grid min-h-[68vh] max-w-7xl grid-cols-1 gap-5 px-6 py-8 lg:grid-cols-[1.45fr_0.75fr] lg:px-10 lg:py-8"
        >
          <div className="flex flex-col justify-center rounded-[2rem] border border-[#5f5f5a] bg-[linear-gradient(180deg,_rgba(238,238,234,0.72),_rgba(206,206,200,0.72))] p-7 shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] lg:p-10">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-[#696963] bg-[#d4d4ce]/60 px-4 py-2 text-sm text-[#4b4b47]">
                Резюме / О себе
              </div>
              <h1 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                Привет, я <span className="italic text-[#43433f]">Имя Фамилия</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#474743] md:text-lg">
                Здесь будет твоя основная информация: кто ты, чем занимаешься, в чем твоя
                специализация, какие задачи умеешь решать и чем можешь быть полезен(на).
                Этот блок можно сделать как красивое краткое представление для работодателя
                или клиента.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-[#6a6a65] bg-[#d7d7d1]/70 p-5 transition duration-300 hover:-translate-y-1 hover:bg-[#ddddd8] hover:shadow-md">
                <div className="text-sm text-[#565651]">Специализация</div>
                <div className="mt-2 text-base font-medium">Например: дизайнер / маркетолог / менеджер</div>
              </div>
              <div className="rounded-3xl border border-[#6a6a65] bg-[#d7d7d1]/70 p-5 transition duration-300 hover:-translate-y-1 hover:bg-[#ddddd8] hover:shadow-md">
                <div className="text-sm text-[#565651]">Город</div>
                <div className="mt-2 text-base font-medium">Твой город</div>
              </div>
              <div className="rounded-3xl border border-[#6a6a65] bg-[#d7d7d1]/70 p-5 transition duration-300 hover:-translate-y-1 hover:bg-[#ddddd8] hover:shadow-md">
                <div className="text-sm text-[#565651]">Контакты</div>
                <div className="mt-2 text-base font-medium">email / Telegram / телефон</div>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-center lg:justify-end">
            <div className="rounded-full border border-[#3f3f3b] bg-[linear-gradient(180deg,_rgba(85,85,80,0.95),_rgba(56,56,52,0.95))] p-[10px] shadow-[0_15px_35px_rgba(0,0,0,0.16)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)]">
              <img
                src={avatarImg}
                alt="Портрет"
                className="h-[220px] w-[220px] rounded-full object-cover md:h-[260px] md:w-[260px]"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-6 lg:px-10">
          <div className="rounded-[2rem] border border-[#5f5f5a] bg-[linear-gradient(180deg,_rgba(238,238,234,0.72),_rgba(206,206,200,0.72))] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] lg:p-8">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 inline-flex rounded-full border border-[#696963] bg-[#d4d4ce]/60 px-4 py-2 text-sm text-[#4b4b47]">
                  Опыт работы
                </div>
                <h2 className="text-2xl font-semibold md:text-3xl">Профессиональный путь</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[#565651]">
                Ниже — компактный блок с опытом работы. Его можно адаптировать под классическое резюме или более свободную подачу.
              </p>
            </div>

            <div className="grid gap-4">
              {experiences.map((item, index) => (
                <div
                  key={index}
                  className="grid gap-2 rounded-[1.4rem] border border-[#686863] bg-[#d7d7d1]/65 p-4 transition duration-300 hover:-translate-y-1 hover:bg-[#dfdfda] hover:shadow-md md:grid-cols-[140px_1fr] md:gap-4 md:p-5"
                >
                  <div className="text-sm text-[#565651]">{item.period}</div>
                  <div>
                    <h3 className="text-lg font-medium">
                      {item.role} <span className="text-[#555550]">— {item.company}</span>
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#474743] md:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="mx-auto min-h-[68vh] max-w-7xl px-6 py-8 lg:px-10 lg:py-10"
        >
          <div className="rounded-[2rem] border border-[#5f5f5a] bg-[linear-gradient(180deg,_rgba(238,238,234,0.72),_rgba(206,206,200,0.72))] p-8 shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] lg:p-12">
            <div className="mb-8 max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-[#696963] bg-[#d4d4ce]/60 px-4 py-2 text-sm text-[#4b4b47]">
                Портфолио
              </div>
              <h2 className="text-3xl font-semibold md:text-5xl">Проекты и опыт работы</h2>
              <p className="mt-5 text-base leading-7 text-[#474743] md:text-lg">
                В этом блоке можно просто перечислить ключевые проекты, задачи и направления, над которыми ты работал(а). Формат — короткие понятные буллиты с описанием.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#686863] bg-[#d7d7d1]/65 p-6 transition duration-300 hover:bg-[#dfdfda] hover:shadow-md md:p-8">
              <ul className="space-y-6">
                {portfolioItems.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#5a5a55]" />
                    <div>
                      <h3 className="text-xl font-medium">{item.title}</h3>
                      <p className="mt-2 text-base leading-7 text-[#474743]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="certificates"
          className="mx-auto min-h-[68vh] max-w-7xl px-6 py-8 lg:px-10 lg:py-10"
        >
          <div className="rounded-[2rem] border border-[#5f5f5a] bg-[linear-gradient(180deg,_rgba(238,238,234,0.72),_rgba(206,206,200,0.72))] p-8 shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] lg:p-12">
            <div className="mb-8 max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-[#696963] bg-[#d4d4ce]/60 px-4 py-2 text-sm text-[#4b4b47]">
                Благодарности и сертификаты
              </div>
              <h2 className="text-3xl font-semibold md:text-5xl">Подтверждение опыта</h2>
              <p className="mt-5 text-base leading-7 text-[#474743] md:text-lg">
                Здесь размещаются 3 изображения: например, благодарственные письма, сертификаты,
                дипломы или другие документы. Позже можно заменить картинки на твои реальные файлы.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {certificates.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[1.75rem] border border-[#686863] bg-[#d7d7d1]/65 p-4 transition duration-300 hover:-translate-y-1 hover:bg-[#dfdfda] hover:shadow-md"
                >
                  <div className="overflow-hidden rounded-[1.25rem] border border-[#75756f] bg-[#e3e3de]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[320px] w-full object-cover transition duration-300 hover:scale-[1.03]"
                    />
                  </div>
                  <div className="px-2 pb-2 pt-4 text-base font-medium">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
