import { MultiSelect, Select, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import Image from 'next/image';
import '@mantine/dates/styles.css';

export default function NewsFilters() {
  return (
    <section className="pt-12 px-5 bg-gray-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex gap-4 items-center flex-wrap">
          <Select
            data={[
              { value: 'new', label: 'Сначала новые' },
              { value: 'old', label: 'Сначала старые' },
            ]}
            placeholder="Сортировка"
            className="min-w-[180px]"
            rightSection={
              <Image
                src="/news/arrow.svg"
                alt="стрелочка"
                className="w-2"
                width={16}
                height={16}
              />
            }
            rightSectionWidth={30}
          />

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

          <TextInput
            placeholder="Найти публикацию"
            className="ml-0 md:ml-auto"
            rightSection={
              <Image
                src="/news/search.svg"
                alt="Поиск"
                width={16}
                height={16}
                className="pointer-events-none"
              />
            }
            rightSectionWidth={36}
            styles={{
              input: {
                fontSize: '16px',
                paddingRight: '40px',
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}
