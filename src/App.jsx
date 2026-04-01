import avatarImg from "./assets/avatar.png";

export default function ResumePortfolioSite() {
  const experiences = [
    { period: "2023 — сейчас", role: "Должность / направление", company: "Название компании", description: "Кратко опиши ключевые задачи и результат." },
    { period: "2021 — 2023", role: "Предыдущая должность", company: "Название компании", description: "Добавь достижения и рост." },
    { period: "2019 — 2021", role: "Еще один опыт", company: "Название компании", description: "Краткое описание роли." },
  ];

  const portfolioItems = new Array(6).fill(0).map((_, i) => ({
    title: `Проект / кейс 0${i + 1}`,
    description: "Краткое описание проекта, задачи и результата.",
  }));

  const certificates = [
    { title: "Благодарность 01", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" },
    { title: "Благодарность 02", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80" },
    { title: "Сертификат", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" },
  ];

  return (
    <div className="min-h-screen bg-[#d6d6d1] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.25),_transparent_40%),linear-gradient(180deg,_#dcdcd7_0%,_#cfcfca_100%)] text-[#2a2a27]">
      <main>
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-3 px-6 py-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-2xl border border-[#7a7a74] bg-[#e3e3de] p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h1 className="text-3xl font-semibold">Имя Фамилия</h1>
            <p className="mt-4 text-[#4a4a46]">Коротко о себе: чем занимаешься и какую ценность даешь.</p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-[#7a7a74] bg-[#e9e9e4] p-4 transition hover:bg-[#efefea]">Специализация</div>
              <div className="rounded-xl border border-[#7a7a74] bg-[#e9e9e4] p-4 transition hover:bg-[#efefea]">Город</div>
              <div className="rounded-xl border border-[#7a7a74] bg-[#e9e9e4] p-4 transition hover:bg-[#efefea]">Контакты</div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="rounded-full border border-[#5a5a55] bg-[#dcdcd7] p-[8px] shadow-md transition duration-300 hover:scale-[1.03]">
              <img src={avatarImg} alt="avatar" className="h-[280px] w-[280px] rounded-full object-cover" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-6">
          <div className="rounded-2xl border border-[#7a7a74] bg-[#e3e3de] p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Опыт</h2>
            <div className="space-y-3">
              {experiences.map((e, i) => (
                <div key={i} className="rounded-xl border border-[#7a7a74] bg-[#e9e9e4] p-4">
                  <div className="text-sm text-[#6a6a65]">{e.period}</div>
                  <div className="font-medium">{e.role} — {e.company}</div>
                  <div className="text-sm text-[#4a4a46]">{e.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-6">
          <div className="rounded-2xl border border-[#7a7a74] bg-[#e3e3de] p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Проекты</h2>
            <ul className="space-y-4">
              {portfolioItems.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-[#777772]" />
                  <div>
                    <div className="font-medium">{p.title}</div>
                    <div className="text-sm text-[#4a4a46]">{p.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-10">
          <div className="rounded-2xl border border-[#7a7a74] bg-[#e3e3de] p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Сертификаты и благодарности</h2>

            <div className="grid gap-4 md:grid-cols-3">
              {certificates.map((c, i) => (
                <div key={i} className="rounded-xl border border-[#7a7a74] bg-[#e9e9e4] p-3 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="overflow-hidden rounded-lg">
                    <img src={c.image} alt={c.title} className="h-[220px] w-full object-cover" />
                  </div>
                  <div className="mt-3 text-sm">{c.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
