import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-0 py-10 px-5">
      <hr className="border-b border-black-0 mt-0 m-20 mb-10" />
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="order-1 md:order-none">
            <h3 className="text-lg font-semibold mb-4">Активы</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">К-телеком</Link>
              </li>
              <li>
                <Link href="#">КТК ТЕЛЕКОМ</Link>
              </li>
              <li>
                <Link href="#">IC Logistics</Link>
              </li>
              <li>
                <Link href="#">IC8</Link>
              </li>
              <li>
                <Link href="#">СпецстройКрым</Link>
              </li>
            </ul>
          </div>

          <div className="order-4 md:order-none">
            <h3 className="text-lg font-semibold mb-4">О нас</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link href="#">Стратегия холдинга</Link>
              </li>
              <li>
                <Link href="#">Акционерам и инвесторам</Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4">Пресс-центр</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Все новости</Link>
              </li>
            </ul>
          </div>

          <div className="order-2 md:order-none">
            <Image
              src="/IC-logo-black.svg"
              alt="Логотип компании ICGroup"
              width={200}
              height={10}
              className="-ml-5 -mt-5 mb-10"
            />
            <h3 className="text-lg font-semibold mb-4">Офис</h3>
            <p className="text-sm mb-6">
              123112, Москва, Пресненская наб., д. 12, этаж 45, к. 82, ЗА
            </p>

            <h3 className="text-lg font-semibold mb-2">E-mail</h3>
            <p className="text-sm mb-6">info@icinvest.ru</p>

            <h3 className="text-lg font-semibold mb-2">Телефон</h3>
            <p className="text-sm">+7 (3652) 67 41 00</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
