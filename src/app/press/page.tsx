import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NewsFilters from '@/components/news/NewsFilters';
import NewsList from '@/components/news/NewsList';
import PageTitle from '@/components/PageTitle';

export default function News() {
  return (
    <div>
      <Header />
      <PageTitle title="Новости" />
      <NewsFilters />
      <NewsList />
      <Footer />
    </div>
  );
}
