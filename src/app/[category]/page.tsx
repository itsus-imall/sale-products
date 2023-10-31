import { getCategory } from '@/services/\bapis';
import Link from 'next/link';

type propsType = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: propsType) {
  const { category } = params;
  const categoryInfo = await getCategory('1379');
  console.log(categoryInfo);
  return (
    <div>
      {categoryInfo.map(info => {
        return (
          <Link href={`${info.category_no}`} key={info.category_no}>
            {info.category_name}
          </Link>
        );
      })}
    </div>
  );
}

export async function generateStaticParams() {
  const categoryInfo = await getCategory('1368');
  return categoryInfo.map(info => ({
    category: info.category_no + '',
  }));
}
