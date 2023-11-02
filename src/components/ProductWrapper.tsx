import {
  getCategoryProduct,
  getProductsInfo,
  getProductsReviewCount,
} from '@/services/apis';
import ProductCard from './ProductCard';
import HighSaleBox from './HighSaleBox';

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
  return (
    <>
      <HighSaleBox />
      <ul className='flex flex-wrap justify-start gap-4 px-4'>
        {productsInfo.map(info => (
          <ProductCard
            key={`rank_${info.product_no}`}
            productInfo={info}
            discountPrice={
              categoryProductsInfo.find(
                categoryInfo => categoryInfo.product_no === info.product_no,
              )?.discount_price
            }
            reviewCount={review_count[info.product_no]}
          />
        ))}
      </ul>
    </>
  );
}
