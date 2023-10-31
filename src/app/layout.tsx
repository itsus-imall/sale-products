import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import {
  getCategoryProduct,
  getProductsInfo,
  getProductsReviewCount,
} from '@/services/\bapis';
import RankCard from '@/components/RankCard';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '아이몰 할인관',
  description: '아이몰 상품을 할인된 가격에 만나보세요!',
};

type propsType = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: propsType) {
  const categoryProductsInfo = await getCategoryProduct('1368');
  const productsInfo = await getProductsInfo(categoryProductsInfo);
  const { review_count } = await getProductsReviewCount(categoryProductsInfo);
  return (
    <html lang='ko'>
      <body className={openSans.className}>
        <main className='h-screen overflow-scroll'>
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
                      categoryInfo =>
                        categoryInfo.product_no === info.product_no,
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
          {children}
        </main>
      </body>
    </html>
  );
}
