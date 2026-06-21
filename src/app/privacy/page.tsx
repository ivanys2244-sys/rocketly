export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Политика конфиденциальности
        </h1>
        <p className="text-[#4D5E88] text-sm mb-8">
          Последнее обновление: 21 июня 2026
        </p>

        <Section title="1. Какие данные мы собираем">
          Мы собираем только те данные, которые вы сами нам отправляете:
          имя (или псевдоним), контакт в Telegram или email, и текст
          сообщения с описанием проекта. Если вы заходите на сайт как
          гость — мы не сохраняем никаких персональных данных.
        </Section>

        <Section title="2. Как мы используем данные">
          Данные используются только для того, чтобы:
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>ответить на ваш запрос в Telegram или по почте;</li>
            <li>подготовить коммерческое предложение по вашему проекту;</li>
            <li>связаться с вами по поводу запуска и поддержки.</li>
          </ul>
          Мы не передаём ваши данные третьим лицам, не продаём и не
          используем для рассылок.
        </Section>

        <Section title="3. Хранение данных">
          Переписка в Telegram хранится в Telegram, почта — в нашем
          почтовом клиенте. Скрипты и конфигурации проектов — в нашем
          репозитории с ограниченным доступом. Мы не используем сторонние
          CRM-системы и аналитику.
        </Section>

        <Section title="4. Cookies">
          Сайт не использует cookies, скрипты аналитики (Google Analytics,
          Яндекс.Метрика) или сторонние трекеры. Vercel-хостинг может
          собирать технические логи (IP, user-agent) для обеспечения
          безопасности и доставки контента — это вне нашего контроля.
        </Section>

        <Section title="5. Ваши права">
          Вы можете в любой момент:
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>запросить все данные, которые у нас есть о вас;</li>
            <li>потребовать их удаления;</li>
            <li>отозвать согласие на обработку.</li>
          </ul>
          Для этого напишите в Telegram: @manager_rocketly или на
          hello@rocketly.dev.
        </Section>

        <Section title="6. Изменения в политике">
          Мы можем обновлять эту страницу. Дата последнего изменения —
          вверху. Существенных изменений без уведомления не будет.
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
      <div className="text-[#4D5E88] text-sm leading-relaxed">{children}</div>
    </section>
  );
}
