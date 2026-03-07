'use client';

import { Container, Burger } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname();

  const menu = [
    { label: 'Активы', href: '/assets' },
    { label: 'Об IC Group', href: '/' },
    { label: 'Закупки', href: '/purchases' },
    { label: 'Акционерам и инвесторам', href: '/investors' },
    { label: 'Пресс-центр', href: '/press' },
    { label: 'Контакты', href: '/contacts' },
    { label: 'Горячая линия', href: '/hotline' },
  ];

  return (
    <header className="sticky top-0 z-10 bg-black-9 text-white">
      <Container className="flex items-center gap-8 justify-between h-[70px]">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/IC-logo-white.svg"
            alt="Логтип компании ICGroup"
            width={150}
            height={80}
            className="h-20"
          />
        </Link>

        <nav className="hidden md:flex gap-8 text-sm whitespace-nowrap">
          {menu.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 transition-colors 
                    ${
                      isActive ? 'text-main-3' : 'text-white hover:text-main-3'
                    }`}
              >
                {item.label}

                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-main-3"></span>
                )}
              </Link>
            );
          })}
        </nav>

        <Burger
          opened={opened}
          onClick={() => setOpened(!opened)}
          className="md:hidden"
          color="white"
        />
      </Container>

      {opened && (
        <div className="md:hidden bg-black-9 border-t border-black-7">
          <nav className="flex flex-col ml-10 mr-10">
            {menu.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpened(false)}
                  className={`border-b border-black-7 p-4 text-l ${
                    isActive ? 'text-main-3' : 'text-white hover:text-main-3'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
