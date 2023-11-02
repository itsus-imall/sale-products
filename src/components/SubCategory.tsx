import { categoryType } from '@/services/apis';
import Link from 'next/link';

type propsType = {
  info: categoryType;
  main: string;
  selected: boolean;
};

export default function SubCategory({ info, main, selected }: propsType) {
  return (
    <Link
      className={`${
        selected ? 'font-bold border-red' : 'border-rightGray'
      } border  px-3 whitespace-nowrap rounded-xl text-0.8rem py-[0.15rem]`}
      href={`/${main}/${info.category_no}`}
    >
      {info.category_name}
    </Link>
  );
}
