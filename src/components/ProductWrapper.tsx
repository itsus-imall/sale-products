import {
  getCategoryProduct,
  getProductsInfo,
  getProductsReviewCount,
} from '@/services/apis';
import ProductCard from './ProductCard';
import HighSaleBox from './HighSaleBox';
import filterRouter from '@/services/filter';

type propsType = {
  categoryNumber: string;
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ProductWrapper({
  categoryNumber,
  searchParams,
}: propsType) {
  const categoryProductsInfo = await getCategoryProduct(categoryNumber);
  const productsInfo = await getProductsInfo(categoryProductsInfo);
  const { review_count } = await getProductsReviewCount(categoryProductsInfo);
  const { filter } = searchParams;
  const filterProductsInfo = filterRouter(
    categoryProductsInfo,
    productsInfo,
    filter,
  );
  return (
    <>
      <HighSaleBox />
      <ul className='flex flex-wrap justify-start gap-4'>
        {filterProductsInfo.map(info => (
          <ProductCard
            key={`rank_${info.product_no}`}
            productInfo={info}
            reviewCount={review_count[info.product_no]}
          />
        ))}
      </ul>
    </>
  );
}
