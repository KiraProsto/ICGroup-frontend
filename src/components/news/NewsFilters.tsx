import { MultiSelect } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import Image from 'next/image';
import '@mantine/dates/styles.css';

export default function NewsFilters() {
  return (
    <section className="pt-12 px-5 bg-gray-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex gap-4 items-center flex-wrap">
          <select
            className="text-base px-3 py-1 pr-8 border border-gray-2 rounded-md 
                       bg-[url('/news/arrow.svg')] bg-no-repeat bg-[right_14px_center] appearance-none"
          >
            <option value="new">Сначала новые</option>
            <option value="old">Сначала старые</option>
          </select>

          <MultiSelect
            data={[
              { value: 'telecom', label: '+7Телеком' },
              { value: 'logistic', label: 'Логистика' },
              { value: 'connection', label: 'Связь' },
              { value: 'events', label: 'События' },
              { value: 'retail', label: 'Ретейл' },
            ]}
            placeholder="Теги"
            searchable
            className="max-w-[500px]"
          />

          <DatePickerInput
            placeholder="Дата"
            valueFormat="DD.MM.YYYY"
            className="min-w-28"
            clearable
          />

          <div className="relative ml-auto flex items-center">
            <input
              type="text"
              placeholder="Найти публикацию"
              className="text-base leading-relaxed border border-gray-3 rounded-md px-3 py-1 pr-11 placeholder:text-black-9"
            />
            <Image
              src="/news/search.svg"
              alt="Поиск"
              className="absolute right-3 pointer-events-none"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
