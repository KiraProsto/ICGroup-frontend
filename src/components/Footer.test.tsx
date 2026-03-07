import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';
import '@testing-library/jest-dom';

describe('Footer', () => {
  test('рендер логотипа', () => {
    render(<Footer />);
    expect(screen.getByAltText(/icgroup/i)).toBeInTheDocument();
  });

  test('раздел Активы', () => {
    render(<Footer />);
    expect(screen.getByText(/Активы/i)).toBeInTheDocument();
    expect(screen.getByText(/К-телеком/i)).toBeInTheDocument();
    expect(screen.getByText(/IC8/i)).toBeInTheDocument();
  });

  test('раздел О нас', () => {
    render(<Footer />);
    expect(screen.getByText(/О нас/i)).toBeInTheDocument();
    expect(screen.getByText(/Стратегия холдинга/i)).toBeInTheDocument();
  });

  test('раздел Пресс-центр', () => {
    render(<Footer />);
    expect(screen.getByText(/Пресс-центр/i)).toBeInTheDocument();
    expect(screen.getByText(/Все новости/i)).toBeInTheDocument();
  });

  test('контакты: адрес, email, телефон', () => {
    render(<Footer />);

    expect(
      screen.getByText(/Москва, Пресненская наб\., д\. 12/i),
    ).toBeInTheDocument();

    expect(screen.getByText(/info@icinvest\.ru/i)).toBeInTheDocument();

    expect(
      screen.getByText((content) =>
        /\+7\s?\(3652\)\s?67\s?41\s?00/.test(content),
      ),
    ).toBeInTheDocument();
  });
});
