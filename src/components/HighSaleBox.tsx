'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HighSaleBox() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const pathname = usePathname();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    router.push(`${checked ? `${pathname}` : '?filter=highsale'}`);
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
