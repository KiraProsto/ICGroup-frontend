import NewsCard from './NewsCard';
import { INewsItem } from '@/app/press/types';

interface INewsListProps {
  items: INewsItem[];
}

export default function NewsList({ items }: INewsListProps) {
  return (
    <section className="pt-12 px-5 bg-gray-0 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-gray-0 grid gap-8 grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
