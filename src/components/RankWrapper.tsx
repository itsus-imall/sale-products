import {
  getCategoryProduct,
  getProductsInfo,
  getProductsReviewCount,
} from '@/services/apis';
import RankCard from './ProductCard';

export const revalidate = 0;

export default async function RankWrapper() {
  const categoryProductsInfo = await getCategoryProduct('1368');
  const productsInfo = await getProductsInfo(categoryProductsInfo);
  const { review_count } = await getProductsReviewCount(categoryProductsInfo);

  return (
    <section className='py-4'>
      <h2 className='text-1.5rem px-4'>할인관 실시간 랭킹</h2>
      <ul className='flex-nowrap flex gap-4 overflow-y-scroll px-4 my-4 scrollbar-hide '>
        {productsInfo.slice(0, 12).map((info, index) => (
          <RankCard
            key={`rank_${info.product_no}`}
            productInfo={info}
            rank={index + 1}
            discountPrice={
              categoryProductsInfo.find(
                categoryInfo => categoryInfo.product_no === info.product_no,
              )?.discount_price
            }
            reviewCount={review_count[info.product_no]}
          />
        ))}
      </ul>
      <p className='text-rightGray text-0.8rem px-4'>
        평일 오후 12시까지 결제 시 당일 출고되는 상품입니다.
      </p>
    </section>
  );
}