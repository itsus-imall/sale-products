import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import {
  getCategoryProduct,
  getProductsInfo,
  getProductsReviewCount,
} from '@/services/apis';

import filterRouter from '@/services/filter';
import RankWrapper from '@/components/RankWrapper';
import BannerWrapper from '@/components/BannerWrapper';

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
  const filterProductsInfo = filterRouter(categoryProductsInfo, productsInfo);
  return (
    <html lang='ko'>
      <body className={openSans.className}>
        <main className='h-screen overflow-scroll'>
          <BannerWrapper />
          <RankWrapper
            filterProductsInfo={filterProductsInfo}
            review_count={review_count}
          />
          {children}
        </main>
      </body>
    </html>
  );
}
