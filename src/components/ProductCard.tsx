'use client';
import { productInfoType } from '@/services/apis';
import Image from 'next/image';

type propsType = {
  productInfo: productInfoType;
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
        rank ? 'flex-2.5' : 'flex-2'
      } max-w-300 flex flex-col gap-y-1 cursor-pointer min-w-[159px]`}
    >
      <Image src={list_image} width={300} height={300} alt={product_name} />
      {rank ? (
        <span className='border-b border-[#d9d9d9] block text-0.8rem'>
          {rank < 10 ? `0${rank}` : rank}
        </span>
      ) : null}
      <div className='flex flex-row items-baseline gap-1 whitespace-nowrap'>
        <strong className='text-red text-1.2rem'>
          {Math.floor(salePercent)}%
        </strong>
        <p className='text-black text-1.2rem'>
          {Number(discount_price)?.toLocaleString()}원
        </p>
        <p className='line-through text-rightGray text-0.8rem'>
          {Number(price).toLocaleString()}원
        </p>
      </div>
      <p className='text-0.8rem text-overflow'>{product_name}</p>
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
