import { getCategory } from '@/services/\bapis';
import Link from 'next/link';

type propsType = {
  children: React.ReactNode;
  params: {
    category: string;
  };
};

export default async function CategoryLayout({ children, params }: propsType) {
  const { category: categoryParam } = params;
  const categoryInfo = await getCategory('1368');
  console.log(+categoryParam);
  return (
    <section className='py-4 border-t-8'>
      <h2 className='text-1.5rem px-4'>
        <div className='filter w-5 h-5 inline-block mr-2' />
        원하는 상품 찾기
      </h2>
      <nav className='relative flex px-4 border-b mt-4'>
        {categoryInfo.map(({ category_name, category_no }) => {
          const selected = +categoryParam === category_no;
          return (
            <Link
              className={`${
                selected ? 'font-bold border-b-2 border-red' : ''
              } flex-4 text-center text-0.8rem pb-2`}
              href={`${category_no}`}
              key={category_no}
            >
              {category_name}
            </Link>
          );
        })}
      </nav>
      {children}
    </section>
  );
}
