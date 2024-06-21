'use client';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { categoryProductType } from '@/services/apis';
import { Navigation } from 'swiper/modules';

type propsType = {
  filterProductsInfo: categoryProductType[];
  review_count: { [key: string]: number };
};
const swiperParams = {
  grabCousor: true,
  slidesPerView: 1.5,
  centeredSlides: true,
  navigation: true,
  modules: [Navigation],
  pagination: true,
  spaceBetween: 16,
};

export default function RankWrapper({
  filterProductsInfo,
  review_count,
}: propsType) {
  return (
    <section className='py-4 max-w-[1024px] overflow-hidden mx-auto bg-backgroundColorOne'>
      <h2 className='main-title'>
        실시간 TOP 12
        <strong className='main-title--summary'>
          품절까지 얼마 남지 않았어요
        </strong>
      </h2>

      <Swiper
        {...swiperParams}
        className='mySwiper !my-4 lg:!px-2 !overflow-visible'
      >
        {filterProductsInfo.slice(0, 12).map((info, index) => (
          <SwiperSlide key={`rank_${info.product_no}`}>
            <ProductCard
              productInfo={info}
              rank={index + 1}
              reviewCount={review_count[info.product_no]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
