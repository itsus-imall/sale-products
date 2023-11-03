'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function HighSaleBox() {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sub = params.has('sub')
      ? `${checked ? '?' : '&'}sub=${params.get('sub')}`
      : '';
    router.push(`${checked ? `${pathname}${sub}` : `?filter=highsale${sub}`}`);
    setChecked(event.target.checked);
  };
  return (
    <div className='py-2 flex justify-end px-4 align-middle'>
      <input
        id='highsale'
        type='checkbox'
        className='mr-1'
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor='highsale' className='text-0.8rem text-rightGray'>
        높은 할인율
      </label>
    </div>
  );
}
