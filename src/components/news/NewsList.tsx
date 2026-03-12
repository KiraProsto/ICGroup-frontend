import { newsMockData } from '@/app/press/NewsMockData';
import NewsCard from './NewsCard';

export default function NewsList() {
  return (
    <section className="pt-12 px-5 bg-gray-0 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-gray-0 grid gap-8 grid-cols-2 lg:grid-cols-3">
          {newsMockData.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
