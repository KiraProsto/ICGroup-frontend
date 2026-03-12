import { INewsItem } from '@/app/press/types';

export default function NewsCard({ item }: { item: INewsItem }) {
  return (
    <div className="flex flex-col p-6 rounded-lg bg-white shadow-main-2 shadow-md cursor-pointer transition-all duration-200 hover:scale-[0.99]">
      <p className="self-start bg-gray-1 rounded-md px-3 py-1.5 text-gray-2 text-base font-medium">
        {item.label}
      </p>
      <h2 className="py-3 text-lg font-semibold">{item.title}</h2>
      <p className="text-gray-2 text-sm font-medium text-gray-600 mt-auto">
        {new Date(item.date).toLocaleDateString('ru-RU')}
      </p>
    </div>
  );
}
