const experiences = [
  {
    period: '2023 — сейчас',
    role: 'Должность / направление',
    company: 'Название компании',
    description:
      'Кратко опиши ключевые задачи, результаты и стек. Например: управление проектами, работа с клиентами, дизайн, контент, маркетинг или разработка.',
  },
  {
    period: '2021 — 2023',
    role: 'Предыдущая должность',
    company: 'Название компании',
    description:
      'Добавь важные достижения: запустил(а) проект, увеличил(а) продажи, улучшил(а) процессы, создал(а) материалы или развил(а) направление.',
  },
  {
    period: '2019 — 2021',
    role: 'Еще один опыт',
    company: 'Название компании',
    description:
      'Здесь можно оставить 2–3 предложения о роли, обязанностях и результатах.',
  },
]

const portfolioItems = [
  {
    title: 'Проект 01',
    description:
      'Краткое описание проекта: что именно ты делал(а), для кого, какой был результат.',
    link: 'https://example.com/project-1',
    linkText: 'Смотреть пример',
  },
  {
    title: 'Проект 02',
    description:
      'Можно описывать кейсы в свободной форме и вставлять гиперссылки на Behance, Google Drive, Notion, GitHub, Figma или живые сайты.',
    link: 'https://example.com/project-2',
    linkText: 'Открыть кейс',
  },
  {
    title: 'Проект 03',
    description:
      'Добавь сюда еще один проект с кратким пояснением о твоей роли, процессе и результате.',
    link: 'https://example.com/project-3',
    linkText: 'Посмотреть работу',
  },
]

const certificates = [
  {
    title: 'Благодарность 01',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Благодарность 02',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Сертификат',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#1f1f1f]">
      <header className="sticky top-0 z-50 border-b border-[#d9d9d6] bg-[#f7f7f5]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-lg font-semibold uppercase tracking-[0.2em]">Portfolio</div>
            <div className="text-sm text-[#666]">Имя Фамилия</div>
          </div>

          <div className="flex gap-3 text-sm md:gap-6">
            <a href="#about" className="rounded-full border border-[#d9d9d6] px-4 py-2 transition hover:bg-white">
              Обо мне
            </a>
            <a href="#portfolio" className="rounded-full border border-[#d9d9d6] px-4 py-2 transition hover:bg-white">
              Портфолио
            </a>
            <a href="#certificates" className="rounded-full border border-[#d9d9d6] px-4 py-2 transition hover:bg-white">
              Сертификаты
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="about"
          className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-8 px-6 py-14 lg:grid-cols-[1.3fr_0.9fr] lg:px-10 lg:py-20"
        >
          <div className="flex flex-col justify-between rounded-[2rem] border border-[#d9d9d6] bg-white p-8 shadow-sm lg:p-12">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-[#d9d9d6] px-4 py-2 text-sm text-[#555]">
                Резюме / О себе
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                Привет, я <span className="italic text-[#5c5c5c]">Имя Фамилия</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#555] md:text-lg">
                Здесь будет твоя основная информация: кто ты, чем занимаешься, в чем твоя
                специализация, какие задачи умеешь решать и чем можешь быть полезен(на). Этот блок
                можно сделать как красивое краткое представление для работодателя или клиента.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-[#d9d9d6] p-5">
                <div className="text-sm text-[#666]">Специализация</div>
                <div className="mt-2 text-lg font-medium">Например: дизайнер / маркетолог / менеджер</div>
              </div>
              <div className="rounded-3xl border border-[#d9d9d6] p-5">
                <div className="text-sm text-[#666]">Город</div>
                <div className="mt-2 text-lg font-medium">Твой город</div>
              </div>
              <div className="rounded-3xl border border-[#d9d9d6] p-5">
                <div className="text-sm text-[#666]">Контакты</div>
                <div className="mt-2 text-lg font-medium">email / Telegram / телефон</div>
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col gap-6">
            <div className="overflow-hidden rounded-[2rem] border border-[#d9d9d6] bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
                alt="Портрет"
                className="h-[380px] w-full object-cover lg:h-full"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-10">
          <div className="rounded-[2rem] border border-[#d9d9d6] bg-white p-8 shadow-sm lg:p-12">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 inline-flex rounded-full border border-[#d9d9d6] px-4 py-2 text-sm text-[#555]">
                  Опыт работы
                </div>
                <h2 className="text-3xl font-semibold md:text-4xl">Профессиональный путь</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[#666] md:text-base">
                Ниже — блок с опытом работы. Его можно адаптировать под классическое резюме или под более живую подачу с акцентом на достижения.
              </p>
            </div>

            <div className="grid gap-5">
              {experiences.map((item, index) => (
                <div
                  key={index}
                  className="grid gap-4 rounded-[1.75rem] border border-[#d9d9d6] p-6 md:grid-cols-[180px_1fr]"
                >
                  <div className="text-sm text-[#666]">{item.period}</div>
                  <div>
                    <h3 className="text-xl font-medium">
                      {item.role} <span className="text-[#777]">— {item.company}</span>
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#555]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="mx-auto min-h-screen max-w-7xl px-6 py-14 lg:px-10 lg:py-20"
        >
          <div className="rounded-[2rem] border border-[#d9d9d6] bg-white p-8 shadow-sm lg:p-12">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-[#d9d9d6] px-4 py-2 text-sm text-[#555]">
                Портфолио
              </div>
              <h2 className="text-3xl font-semibold md:text-5xl">Проекты и примеры работ</h2>
              <p className="mt-5 text-base leading-7 text-[#555] md:text-lg">
                В этом блоке ты сможешь рассказывать, что именно делал(а), какой был контекст, твоя
                роль и результат. Внутри текста уже предусмотрены гиперссылки на примеры работ.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-[1.75rem] border border-[#d9d9d6] p-6"
                >
                  <div className="text-sm uppercase tracking-[0.2em] text-[#777]">
                    Проект {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-3 text-2xl font-medium">{item.title}</h3>
                  <p className="mt-4 flex-1 text-base leading-7 text-[#555]">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-fit rounded-full border border-[#cfcfcb] px-4 py-2 text-sm transition hover:bg-[#f3f3f1]"
                  >
                    {item.linkText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="certificates"
          className="mx-auto min-h-screen max-w-7xl px-6 py-14 lg:px-10 lg:py-20"
        >
          <div className="rounded-[2rem] border border-[#d9d9d6] bg-white p-8 shadow-sm lg:p-12">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-[#d9d9d6] px-4 py-2 text-sm text-[#555]">
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
                <div key={index} className="rounded-[1.75rem] border border-[#d9d9d6] p-4">
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
  )
}
