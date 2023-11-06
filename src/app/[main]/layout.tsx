import { getSubCategory } from '@/services/apis';
import Link from 'next/link';

type propsType = {
  children: React.ReactNode;
  params: {
    main: string;
  };
};

export default async function CategoryLayout({ children, params }: propsType) {
  const { main } = params;
  const category = await getSubCategory('1368');
  return (
    <section className='py-4 border-t-8 max-w-[1024px] mx-auto'>
      <header>
        <h2 className='text-1.5rem px-4'>
          <div className='filter w-5 h-5 inline-block mr-2' />
          원하는 상품 찾기
        </h2>
        <nav className='relative flex px-4 border-b mt-4'>
          {category.map(({ category_name, category_no }) => {
            const selected = +main === category_no;
            return (
              <Link
                className={`${
                  selected ? 'font-bold border-b-2 border-red' : ''
                } flex-4 text-center text-0.8rem pb-2`}
                href={`/${category_no}`}
                key={category_no}
              >
                {category_name}
              </Link>
            );
          })}
        </nav>
      </header>
      {children}
    </section>
  );
}
