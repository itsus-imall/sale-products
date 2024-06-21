'use client';

import { categoryType } from '@/services/apis';
import { useRouter, useSearchParams } from 'next/navigation';

type propsType = {
  info: categoryType;
};

export default function SubCategory({ info }: propsType) {
  const router = useRouter();
  const params = useSearchParams();
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { category_no } = event.currentTarget.dataset;
    router.push(`?sub=${category_no}`);
  };
  const selected = params.get('sub') === info.category_no + '';
  return (
    <button
      className={`${
        selected
          ? 'font-bold bg-white border-transparent text-black'
          : 'border-rightGray text-rightGray'
      } border  px-3 whitespace-nowrap rounded-[0.35rem] text-0.8rem py-[0.15rem]`}
      data-category_no={`${info.category_no}`}
      onClick={onClick}
    >
      {info.category_name}
    </button>
  );
}
