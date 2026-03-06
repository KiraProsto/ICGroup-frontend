export default function Contacts() {
  return (
    <section className="py-12 px-5 bg-gray-0">
      <div className="max-w-screen-xl mx-auto">
        <hr className="border-b border-black-0 mt-0 m-20 mb-10" />
        <h2 className="text-4xl font-semibold mb-8">{`{ КОНТАКТЫ }`}</h2>

        <div className="mx-auto shadow-lg bg-white p-10 max-w-[1000px] rounded-xl flex flex-col items-center justify-center md:flex-row gap-6">
          <div className="md:w-1/2 w-full">
            <h1 className="flex-1 text-3xl font-bold leading-relaxed">
              <span className="text-main-3">Связаться</span> с нами вы можете по
              следующим контактам:
            </h1>
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-semibold leading-relaxed">
                123112, Москва, Пресненская наб., д. 12, этаж 45, к. 82, 3А
              </h2>
              <p className="text-sm text-gray-9">Офис</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Info@icinvest.ru</h2>
              <p className="text-sm text-gray-9">Пишите</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">8 (3652) 67 41 00</h2>
              <p className="text-sm text-gray-9">Звоните</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
