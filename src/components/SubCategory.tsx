import { categoryType } from '@/services/\bapis';
import Link from 'next/link';

type propsType = {
  info: categoryType;
  main: string;
};

export default function SubCategory({ info, main }: propsType) {
  return (
    <Link
      className='border border-rightGray px-3 whitespace-nowrap rounded-xl text-0.8rem'
      href={`${main}/${info.category_no}`}
    >
      {info.category_name}
    </Link>
  );
}
