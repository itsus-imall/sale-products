'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import mobile from '../../public/images/mobile.jpg';
import pc from '../../public/images/pc.jpg';
import ClockSvg from '../../public/svg/icon/Vector.svg';

export default function BannerWrapper() {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      setWindowWidth(windowWidth);
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section className='max-w-[1024px] mx-auto relative'>
      <Image src={windowWidth > 1000 ? pc : mobile} alt='mobileBanner' />
      <h3 className='text-white text-center text-sm absolute bottom-8 left-1/2 block -translate-x-1/2 w-full tracking-tighter font-medium'>
        한정수량으로 판매되는 상품입니다
        <p className='flex items-center justify-center text-sm text-gray-400 mt-1 '>
          <ClockSvg className='mr-1.5' />
          품절 전 구매하세요!
        </p>
      </h3>
    </section>
  );
}
