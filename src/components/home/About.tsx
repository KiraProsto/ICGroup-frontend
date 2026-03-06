export default function About() {
  return (
    <section className="pt-12 px-5 bg-gray-0">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-semibold mb-8">{`{ О НАС }`}</h2>

        <div className=" grid md:grid-cols-2 gap-10">
          <div className="text-2xl font-normal leading-snug">
            Ядро развития бизнес‑направлений —
            <span className="text-main-3">
              {' '}
              современные отраслевые цифровые решения
            </span>
            , наполнение рынка современными IT‑продуктами.
          </div>

          <div className="border-l-4 border-main-3 pl-6">
            <p className="text-xl font-normal leading-snug">
              Сформирована команда топ‑менеджеров с уникальным опытом реализации
              сложных проектов в Узбекистане, Украине, Казахстане, Африке.
            </p>
          </div>
        </div>
        <div className="py-12 px-5">
          <div className="max-w-screen-xl mx-auto grid grid-cols-3 text-center relative">
            <div className="flex flex-col items-center justify-center px-4">
              <div className="text-5xl font-semibold text-main-3">2000+</div>
              <div className="text-sm font-medium mt-3 uppercase tracking-wide">
                сотрудников
              </div>
            </div>

            <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-1 h-20 bg-main-3"></div>

            <div className="flex flex-col items-center justify-center px-4">
              <div className="text-5xl font-semibold text-main-3">30+</div>
              <div className="text-sm font-medium mt-3 uppercase tracking-wide">
                проектов и продуктов
              </div>
            </div>

            <div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-1 h-20 bg-main-3"></div>

            <div className="flex flex-col items-center justify-center px-4">
              <div className="text-5xl font-semibold text-main-3">5</div>
              <div className="text-sm font-medium mt-3 uppercase tracking-wide">
                активов холдинга
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
