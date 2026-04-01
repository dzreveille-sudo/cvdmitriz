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
    <div className="min-h-[80vh] bg-[#e9e9e7] text-[#1f1f1f] scroll-smooth">
      <header className="sticky top-0 z-50 border-b border-[#d9d9d6] bg-[#e9e9e7]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-lg font-semibold tracking-[0.2em] uppercase">Portfolio</div>
            <div className="text-sm text-[#666]">Имя Фамилия</div>
          </div>
          <div className="flex gap-3 text-sm md:gap-6">
            <a href="#about" className="rounded-full border border-[#bdbdb8] px-4 py-2 transition hover:bg-[#f2f2f0]">
              Обо мне
            </a>
            <a href="#portfolio" className="rounded-full border border-[#bdbdb8] px-4 py-2 transition hover:bg-[#f2f2f0]">
              Портфолио
            </a>
            <a href="#certificates" className="rounded-full border border-[#bdbdb8] px-4 py-2 transition hover:bg-[#f2f2f0]">
              Сертификаты
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="about"
          className="mx-auto grid min-h-[78vh] max-w-7xl grid-cols-1 gap-6 px-6 py-10 lg:grid-cols-[1.45fr_0.75fr] lg:px-10 lg:py-10"
        >
          <div className="flex flex-col justify-center rounded-[2rem] border border-[#bdbdb8] bg-[#f2f2f0] p-7 shadow-sm lg:p-10">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-[#bdbdb8] px-4 py-2 text-sm text-[#555]">
                Резюме / О себе
              </div>
              <h1 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                Привет, я <span className="italic text-[#5c5c5c]">Имя Фамилия</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#555] md:text-lg">
                Здесь будет твоя основная информация: кто ты, чем занимаешься, в чем твоя
                специализация, какие задачи умеешь решать и чем можешь быть полезен(на).
                Этот блок можно сделать как красивое краткое представление для работодателя
                или клиента.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-[#bdbdb8] p-5">
                <div className="text-sm text-[#666]">Специализация</div>
                <div className="mt-2 text-base font-medium">Например: дизайнер / маркетолог / менеджер</div>
              </div>
              <div className="rounded-3xl border border-[#bdbdb8] p-5">
                <div className="text-sm text-[#666]">Город</div>
                <div className="mt-2 text-base font-medium">Твой город</div>
              </div>
              <div className="rounded-3xl border border-[#bdbdb8] p-5">
                <div className="text-sm text-[#666]">Контакты</div>
                <div className="mt-2 text-base font-medium">email / Telegram / телефон</div>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-center lg:justify-end">
            <div className="overflow-hidden overflow-hidden rounded-full border border-[#5a5a57] bg-[#f2f2f0] p-2 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
                alt="Портрет"
                className="h-[220px] w-[220px] rounded-full object-cover md:h-[260px] md:w-[260px]"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-10">
          <div className="rounded-[2rem] border border-[#bdbdb8] bg-[#f2f2f0] p-6 shadow-sm lg:p-8">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 inline-flex rounded-full border border-[#bdbdb8] px-4 py-2 text-sm text-[#555]">
                  Опыт работы
                </div>
                <h2 className="text-2xl font-semibold md:text-3xl">Профессиональный путь</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[#666]">
                Ниже — компактный блок с опытом работы. Его можно адаптировать под классическое резюме или более свободную подачу.
              </p>
            </div>

            <div className="grid gap-4">
              {experiences.map((item, index) => (
                <div
                  key={index}
                  className="grid gap-2 rounded-[1.4rem] border border-[#bdbdb8] p-4 md:grid-cols-[140px_1fr] md:gap-4 md:p-5"
                >
                  <div className="text-sm text-[#666]">{item.period}</div>
                  <div>
                    <h3 className="text-lg font-medium">
                      {item.role} <span className="text-[#777]">— {item.company}</span>
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#555] md:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="mx-auto min-h-[80vh] max-w-7xl px-6 py-10 lg:px-10 lg:py-12"
        >
          <div className="rounded-[2rem] border border-[#bdbdb8] bg-[#f2f2f0] p-8 shadow-sm lg:p-12">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-[#bdbdb8] px-4 py-2 text-sm text-[#555]">
                Портфолио
              </div>
              <h2 className="text-3xl font-semibold md:text-5xl">Проекты и опыт работы</h2>
              <p className="mt-5 text-base leading-7 text-[#555] md:text-lg">
                В этом блоке можно просто перечислить ключевые проекты, задачи и направления, над которыми ты работал(а). Формат — короткие понятные буллиты с описанием.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#bdbdb8] p-6 md:p-8">
              <ul className="space-y-6">
                {portfolioItems.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#8d8d88]" />
                    <div>
                      <h3 className="text-xl font-medium">{item.title}</h3>
                      <p className="mt-2 text-base leading-7 text-[#555]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="certificates"
          className="mx-auto min-h-[80vh] max-w-7xl px-6 py-10 lg:px-10 lg:py-12"
        >
          <div className="rounded-[2rem] border border-[#bdbdb8] bg-[#f2f2f0] p-8 shadow-sm lg:p-12">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-[#bdbdb8] px-4 py-2 text-sm text-[#555]">
                Благодарности и сертификаты
              </div>
              <h2 className="text-3xl font-semibold md:text-5xl">Подтверждение опыта</h2>
              <p className="mt-5 text-base leading-7 text-[#555] md:text-lg">
                Здесь размещаются 3 изображения: например, благодарственные письма, сертификаты,
                дипломы или другие документы. Позже можно заменить картинки на твои реальные файлы.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {certificates.map((item, index) => (
                <div key={index} className="rounded-[1.75rem] border border-[#bdbdb8] p-4">
                  <div className="overflow-hidden rounded-[1.25rem] border border-[#e1e1de] bg-[#fafaf8]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[320px] w-full object-cover"
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
