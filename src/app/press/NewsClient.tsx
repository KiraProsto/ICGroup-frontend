'use client';

import { useNewsFilters } from '@/components/news/hooks/useNewsFilters';
import { newsMockData } from './NewsMockData';
import NewsFilters from '@/components/news/NewsFilters';
import NewsList from '@/components/news/NewsList';

export default function NewsClient() {
  const {
    sort,
    setSort,
    tags,
    setTags,
    date,
    setDate,
    search,
    setSearch,
    filtered,
  } = useNewsFilters({ data: newsMockData });
  return (
    <>
      <NewsFilters
        sort={sort}
        onSortChange={setSort}
        tags={tags}
        onTagsChange={setTags}
        date={date}
        onDateChange={setDate}
        search={search}
        onSearchChange={setSearch}
      />
      <NewsList items={filtered} />
    </>
  );
}
