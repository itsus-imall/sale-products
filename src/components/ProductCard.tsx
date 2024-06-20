'use client';
import { categoryProductType } from '@/services/apis';
import Image from 'next/image';

type propsType = {
  productInfo: categoryProductType;
  rank?: number;
  reviewCount: number;
};

export default function ProductCard({
  productInfo: { product_no, product_name, price, list_image, discount_price },
  rank,
  reviewCount,
}: propsType) {
  const salePercent =
    ((Number(price) - Number(discount_price ?? price)) / Number(price)) * 100;

  const onClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const { product_no } = event.currentTarget.dataset;
    window.parent.postMessage(
      { status: 'redirection-product', value: product_no },
      '*',
    );
  };

  return (
    <li
      data-product_no={product_no}
      onClick={onClick}
      className={`${
        rank ? 'mt-4 p-2' : ''
      } cursor-pointer relative select-none max-w-lg flex-2 flex flex-col gap-y-1 lg:flex-4`}
    >
      <Image
        src={list_image}
        width={500}
        height={500}
        alt={product_name}
        className='rounded-[0.7rem]'
      />
      {rank ? (
        <span className='text-[2rem] font-bold absolute top-0 left-0 translate-x-[1rem] translate-y-[0.5rem] tracking-tight'>
          {rank}
        </span>
      ) : null}
      <div className='flex flex-row items-baseline gap-1 whitespace-nowrap'>
        <strong className='text-pointColor text-1.1rem'>
          {Math.floor(salePercent)}%
        </strong>
        <p className='text-white text-1.1rem'>
          {Number(discount_price)?.toLocaleString()}원
        </p>
        <p className='line-through text-rightGray text-0.8rem'>
          {Number(price).toLocaleString()}원
        </p>
      </div>
      <p className='text-0.8rem text-overflow text-white'>{product_name}</p>
      {rank ? null : (
        <p className='text-0.7rem text-rightGray'>평일 오후 12시까지 결제 시</p>
      )}
      <div className='flex flex-row items-baseline gap-1'>
        <p className='shipping-tag'>오늘 출발</p>
        <p className='text-rightGray text-0.8rem'>리뷰 {reviewCount}</p>
      </div>
    </li>
  );
}
