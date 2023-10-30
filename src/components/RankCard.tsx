'use client';
import { productInfoType } from '@/services/apis';
import Image from 'next/image';

type propsType = {
  productInfo: productInfoType;
  rank: number;
  discountPrice: string | null | undefined;
  reviewCount: number;
};

export default function RankCard({
  productInfo: { product_no, product_name, price, list_image },
  rank,
  discountPrice,
  reviewCount,
}: propsType) {
  const salePercent =
    ((Number(price) - Number(discountPrice ?? price)) / Number(price)) * 100;

  const onClick = (event: React.MouseEvent<HTMLLIElement>) => {
    console.log(event.currentTarget);
  };

  return (
    <li
      data-product_no={product_no}
      onClick={onClick}
      className='flex-2 max-w-300 flex flex-col gap-y-1'
    >
      <Image src={list_image} width={500} height={500} alt={product_name} />
      <span className='border-b border-rightGray block'>{rank}</span>
      <div className='flex flex-row items-baseline gap-1 whitespace-nowrap'>
        <strong className='text-red text-salePrice'>
          {Math.floor(salePercent)}%
        </strong>
        <p className='text-black text-salePrice'>
          {Number(discountPrice)?.toLocaleString()}원
        </p>
        <p className='line-through text-rightGray text-price'>
          {Number(price).toLocaleString()}원
        </p>
      </div>
      <p className='text-productName'>{product_name}</p>
      <div className='flex flex-row items-baseline gap-1'>
        <p className='text-price text-white bg-drakGray font-bold box-content px-2 rounded'>
          오늘 출발
        </p>
        <p className='text-rightGray text-price'>리뷰 {reviewCount}</p>
      </div>
    </li>
  );
}
