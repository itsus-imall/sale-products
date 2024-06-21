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
    <section className='py-4 max-w-[1024px] mx-auto bg-black'>
      <header>
        <h2 className='main-title'>
          구기종부터 최근기종까지
          <strong className='main-title--summary'>
            최대 90% 할인 상품 보기
          </strong>
        </h2>
        <nav className='relative flex px-4 mt-4'>
          {category.map(({ category_name, category_no }) => {
            const selected = +main === category_no;
            return (
              <Link
                className={`${
                  selected ? 'font-bold border-pointColor' : 'border-drakGray'
                } flex-nav text-center text-0.8rem pb-2 border-b-[1px] text-white`}
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
