import { getSubCategory } from '@/services/\bapis';
import Link from 'next/link';

type propsType = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: propsType) {
  return <div></div>;
}

export async function generateStaticParams() {
  const categoryInfo = await getSubCategory('1368');
  return categoryInfo.map(info => ({
    category: info.category_no + '',
  }));
}
