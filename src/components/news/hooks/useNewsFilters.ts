'use client';
import { INewsItem } from '@/app/press/types';
import { useMemo, useState } from 'react';

type SortType = 'new' | 'old';

interface IUseNewsFiltersProps {
  data: INewsItem[];
}

export function useNewsFilters({ data }: IUseNewsFiltersProps) {
  const [sort, setSort] = useState<SortType>('new');
  const [tags, setTags] = useState<string[]>([]);
  const [date, setDate] = useState<Date | null>(null);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let result = [...data];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((item) => item.title.toLowerCase().includes(q));
    }

    if (date) {
      const selected = date.toISOString().slice(0, 10);
      result = result.filter((item) => item.date === selected);
    }

    if (tags.length > 0) {
      result = result.filter((item) => tags.includes(item.tag));
    }

    result.sort((a, b) => {
      if (sort === 'new') {
        return b.date.localeCompare(a.date);
      }
      return a.date.localeCompare(b.date);
    });
    return result;
  }, [data, sort, tags, date, search]);

  return {
    sort,
    setSort,
    tags,
    setTags,
    date,
    setDate,
    search,
    setSearch,
    filtered,
  };
}
