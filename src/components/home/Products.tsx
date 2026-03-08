'use client';
import { useState } from 'react';
import Image from 'next/image';

const products = [
  {
    title: 'Week‑Week',
    desc: 'Сервис автоматизации оказания туристических услуг. Онлайн‑бронирование отелей, экскурсий и событий региона в одном сервисе.',
    img: '/products/week-week.png',
  },
  {
    title: 'Умный офис',
    desc: 'Сервис объединяет всё, что нужно для комфортной работы сотрудников: от бронирования переговорных комнат и парковки до быстрых ссылок на корпоративные системы.',
    img: '/products/smartoffice.png',
  },
  {
    title: 'WMS — логистика',
    desc: 'Система автоматизации распределительного центра. Полный цикл WMS: склад, поставки, отгрузки, контроль и оптимизация.',
    img: '/products/wms.png',
  },
  {
    title: 'B2C самообслуживание',
    desc: 'Решения для телеком‑бизнеса: личные кабинеты, мобильные приложения, биллинг и сервисы для клиентов. Улучшаем UX и ускоряем обслуживание.',
    img: '/products/b2c.png',
  },
  {
    title: 'Техметрик',
    desc: 'Сервис для учёта и контроля работы выездных бригад. Полный цикл управления задачами, маршрутами и исполнением.',
    img: '/products/techmetrik.png',
  },
  {
    title: '1С решения',
    desc: 'Внедрение, доработка и сопровождение сложных конфигураций 1С:ERP, 1С:УХ, 1С:КА для различных отраслей бизнеса.',
    img: '/products/1c.png',
  },
];

export default function Products() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-12 px-5 bg-gray-0">
      <div className="max-w-screen-xl mx-auto">
        <hr className="border-b border-black-0 mt-0 m-20 mb-10" />
        <h2 className="text-4xl font-semibold mb-8">{`{ ПРОДУКТЫ }`}</h2>

        <div className="flex flex-col md:flex-row gap-10">
          <ul className="flex-1 flex flex-col gap-4">
            {products.map((p, i) => (
              <li
                key={i}
                onMouseEnter={() => setActive(i)}
                className={`cursor-pointer text-xl font-medium py-3 px-4 rounded-lg transition-all shadow-lg
                  ${active === i ? 'bg-main-3 text-white' : 'bg-white'}
                `}
              >
                {p.title}
              </li>
            ))}
          </ul>

          <div className="flex-1 bg-white shadow-xl rounded-xl p-8 flex flex-col gap-6 transition-all">
            <h3 className="text-2xl font-semibold text-main-3">
              {products[active].title}
            </h3>

            <p className="text-base leading-relaxed">{products[active].desc}</p>

            <div className="flex justify-center w-full h-52 relative rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={products[active].img}
                alt={products[active].title}
                width={320}
                height={50}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
