import ProductWrapper from '@/components/ProductWrapper';
import SubCategoryWrapper from '@/components/SubCategoryWrapper';
import { getSubCategory } from '@/services/apis';

import 'swiper/css';

type propsType = {
  params: {
    main: string;
  };
  searchParams: { [key: string]: string | undefined };
};

export default async function MainPage({ params, searchParams }: propsType) {
  const { main } = params;
  const { sub } = searchParams;
  return (
    <>
      <SubCategoryWrapper main={main} />
      <ProductWrapper
        categoryNumber={sub ?? main}
        searchParams={searchParams}
      />
    </>
  );
}

export async function generateStaticParams() {
  const categoryInfo = await getSubCategory('1368');
  return categoryInfo.map(info => ({
    main: info.category_no + '',
  }));
}
