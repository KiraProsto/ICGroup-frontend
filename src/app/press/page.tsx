import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import NewsClient from './NewsClient';

export const metadata = {
  title: 'IC Group | Новости',
};

export default function News() {
  return (
    <div>
      <Header />
      <PageTitle title="Новости" />
      <NewsClient />
      <Footer />
    </div>
  );
}
