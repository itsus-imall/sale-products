import ProductWrapper from '@/components/ProductWrapper';
import SubCategory from '@/components/SubCategory';
import SubCategoryWrapper from '@/components/SubCategoryWrapper';
import { getSubCategory } from '@/services/\bapis';

type propsType = {
  params: {
    main: string;
  };
};

export default async function MainPage({ params }: propsType) {
  const { main } = params;
  return (
    <>
      <SubCategoryWrapper main={main} />
      <ProductWrapper categoryNumber={main} />
    </>
  );
}

export async function generateStaticParams() {
  const categoryInfo = await getSubCategory('1368');
  return categoryInfo.map(info => ({
    main: info.category_no + '',
  }));
}
