import { render, screen } from '@testing-library/react';
import Home from './page';
import { MantineProvider } from '@mantine/core';

function renderPage() {
  return render(
    <MantineProvider>
      {' '}
      <Home />{' '}
    </MantineProvider>,
  );
}

describe('Главная страница', () => {
  test('рендер страницы', () => {
    renderPage();
    expect(screen.getByText(/АйСи/i)).toBeInTheDocument();
  });

  test('рендер Hero', () => {
    renderPage();
    expect(screen.getByText(/Создаём цифровое будущее/i)).toBeInTheDocument();
  });

  test('рендер Industry', () => {
    renderPage();
    expect(screen.getByText(/Отрасли/i)).toBeInTheDocument();
  });

  test('рендер Products', () => {
    renderPage();
    expect(screen.getByText(/Продукты/i)).toBeInTheDocument();
  });

  test('рендер Contacts', () => {
    renderPage();
    expect(screen.getByText(/\{\s?КОНТАКТЫ\s?\}/i)).toBeInTheDocument();
  });

  test('рендер Clients', () => {
    renderPage();
    expect(screen.getByText(/Клиенты/i)).toBeInTheDocument();
  });
});
