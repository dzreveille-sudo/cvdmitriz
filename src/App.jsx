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

  return (
    <div className="min-h-screen bg-[#1c1c1a] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_40%),linear-gradient(180deg,_#222220_0%,_#141413_100%)] text-[#e5e5e3]">
      <main>
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 py-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-2xl border border-[#3a3a36] bg-[#262624] p-6 shadow-lg transition hover:-translate-y-1">
            <h1 className="text-3xl font-semibold">Имя Фамилия</h1>
            <p className="mt-4 text-[#cfcfcd]">Коротко о себе: чем занимаешься и какую ценность даешь.</p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-[#3a3a36] bg-[#2e2e2b] p-4">Специализация</div>
              <div className="rounded-xl border border-[#3a3a36] bg-[#2e2e2b] p-4">Город</div>
              <div className="rounded-xl border border-[#3a3a36] bg-[#2e2e2b] p-4">Контакты</div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="rounded-full border border-[#555550] p-[10px] shadow-xl">
              <img
                src={avatarImg}
                alt="avatar"
                className="h-[300px] w-[300px] rounded-full object-cover transition hover:scale-105"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-6">
          <div className="rounded-2xl border border-[#3a3a36] bg-[#262624] p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Опыт</h2>
            <div className="space-y-3">
              {experiences.map((e, i) => (
                <div key={i} className="rounded-xl border border-[#3a3a36] bg-[#2e2e2b] p-4">
                  <div className="text-sm text-[#a5a5a2]">{e.period}</div>
                  <div className="font-medium">{e.role} — {e.company}</div>
                  <div className="text-sm text-[#cfcfcd]">{e.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-6">
          <div className="rounded-2xl border border-[#3a3a36] bg-[#262624] p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Проекты</h2>
            <ul className="space-y-4">
              {portfolioItems.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-[#888883]" />
                  <div>
                    <div className="font-medium">{p.title}</div>
                    <div className="text-sm text-[#cfcfcd]">{p.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
