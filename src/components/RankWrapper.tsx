'use client';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { productInfoType } from '@/services/apis';
import { Navigation, EffectCoverflow } from 'swiper/modules';

import RankIcon from '../../public/svg/icon/star-square-svgrepo-com.svg';

type propsType = {
  filterProductsInfo: productInfoType[];
  review_count: { [key: string]: number };
};
const swiperParams = {
  grabCousor: true,
  slidesPerView: 2,
  effect: 'coverflow',
  centeredSlides: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: true,
  modules: [EffectCoverflow, Navigation],
  pagination: true,
};
export default function RankWrapper({
  filterProductsInfo,
  review_count,
}: propsType) {
  return (
    <section className='py-4 max-w-[1000px] overflow-hidden mx-auto'>
      <h2 className='text-1.5rem px-4 mb-8 flex '>
        <RankIcon className='w-7 inline-block h-7 mr-2' />
        실시간 TOP 12
      </h2>

      <Swiper
        {...swiperParams}
        className='mySwiper !my-4 !px-4 !overflow-visible'
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
      <p className='text-rightGray text-0.8rem px-4'>
        평일 오후 12시까지 결제 시 당일 출고되는 상품입니다.
      </p>
    </section>
  );
}
