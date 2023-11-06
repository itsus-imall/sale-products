'use client';

import { useEffect, useState } from 'react';
import mobile from '../../public/images/mobile.jpg';
import pc from '../../public/images/pc.jpg';
import Image from 'next/image';

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
    <section className='mb-2 max-w-[1024px] mx-auto'>
      <Image src={windowWidth > 1000 ? pc : mobile} alt='mobileBanner' />
    </section>
  );
}
