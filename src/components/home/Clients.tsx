import Image from 'next/image';

export default function Clients() {
  return (
    <section className="py-12 px-5 bg-gray-0">
      <div className="max-w-screen-xl mx-auto">
        <hr className="border-b border-black-0 mt-0 m-20 mb-10" />
        <h2 className="text-4xl font-semibold mb-8">{`{ КЛИЕНТЫ }`}</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { src: '/clients/IC-8.svg', alt: 'АйСи Эйт' },
            { src: '/clients/Logistic.png', alt: 'АйСи Логистик' },
            { src: '/clients/Volna.png', alt: 'Волна' },
            { src: '/clients/Win.png', alt: 'Win Mobile' },
            { src: '/clients/Telekom.png', alt: '+7 Телеком' },
          ].map((item, i) => (
            <div
              key={i}
              className="w-40 h-24 bg-black-9 rounded-xl shadow-lg shadow-main-3 flex items-center justify-center p-6"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={120}
                height={120}
                className="object-contain max-h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
