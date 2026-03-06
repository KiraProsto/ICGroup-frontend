export default function Industry() {
  return (
    <section className="py-12 px-5 bg-gray-0">
      <div className="max-w-screen-xl mx-auto">
        <hr className="border-b border-black-0 mt-0 m-20 mb-10" />
        <h2 className="text-4xl font-semibold mb-8">{`{ ОТРАСЛИ }`}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-lg">
            <h3 className="text-xl font-semibold text-main-3">
              Информационные технологии
            </h3>
            <p className="text-sm leading-relaxed">
              Разработка цифровых продуктов и IT‑решений для бизнеса.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-lg">
            <h3 className="text-xl font-semibold text-main-3">
              Телекоммуникации
            </h3>
            <p className="text-sm leading-relaxed">
              Телеком‑инфраструктура, услуги связи и цифровые сервисы для
              абонентов.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-lg">
            <h3 className="text-xl font-semibold text-main-3">Логистика</h3>
            <p className="text-sm leading-relaxed">
              Комплексные логистические решения и оптимизация цепочек поставок.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-lg">
            <h3 className="text-xl font-semibold text-main-3">Строительство</h3>
            <p className="text-sm leading-relaxed">
              Инфраструктурные, коммерческие и промышленные строительные
              проекты.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
