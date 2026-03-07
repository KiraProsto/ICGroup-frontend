import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';
import { MantineProvider } from '@mantine/core';
import '@testing-library/jest-dom';

function renderHeader() {
  return render(
    <MantineProvider>
      <Header />
    </MantineProvider>,
  );
}

describe('Header', () => {
  test('рендер логотипа', () => {
    renderHeader();
    expect(screen.getByAltText(/icgroup/i)).toBeInTheDocument();
  });

  test('рендер навигации', () => {
    renderHeader();

    expect(screen.getByRole('link', { name: /Активы/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Об IC Group/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Закупки/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Акционерам и инвесторам/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Пресс-центр/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Контакты/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Горячая линия/i }),
    ).toBeInTheDocument();
  });
});
