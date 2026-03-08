'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();

    const x = ((clientX - rect.left) / rect.width - 0.5) * 25;
    const y = ((clientY - rect.top) / rect.height - 0.5) * 25;

    setOffset({ x, y });
  };

  return (
    <section
      className="w-full bg-black-9 py-5 px-5"
      onMouseMove={handleMouseMove}
    >
      <div
        className="
          max-w-screen-xl mx-auto 
          flex flex-col md:flex-row 
          items-center md:items-center 
          justify-center
          gap-2 md:gap-2 
          min-h-[250px] md:min-h-[520px]
        "
      >
        <div className="hidden md:flex flex-1 items-center justify-center">
          <div
            className="relative w-[420px] h-[420px] md:w-[520px] md:h-[520px] 
                       transition-transform duration-150"
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px)`,
            }}
          >
            <Image
              src="/IC-blur.svg"
              alt="3D Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div
          className="
            flex-1 
            flex flex-col 
            items-center md:items-start 
            justify-center 
            text-center md:text-left 
            text-white 
            gap-4 md:gap-6
            min-h-[250px] md:min-h-0
          "
        >
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]">
              АйСи
            </span>{' '}
            <span className="text-main-3 drop-shadow-[0_0_25px_rgba(0,255,150,0.6)]">
              Групп
            </span>
          </h1>

          <p className="text-2xl md:text-3xl font-light leading-snug text-gray-200 max-w-[600px]">
            <span className="text-main-3">{'///'}</span> Создаём цифровое
            будущее бизнеса.
          </p>
        </div>
      </div>
    </section>
  );
}
