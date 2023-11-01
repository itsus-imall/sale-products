import { getSubCategory } from '@/services/\bapis';
import SubCategory from './SubCategory';

type propsType = {
  main: string;
  sub?: string;
};

export default async function SubCategoryWrapper({ main, sub }: propsType) {
  const subCategory = await getSubCategory(main);
  return (
    <nav className='flex flex-nowrap overflow-x-scroll scrollbar-hide px-4 gap-2 my-4'>
      {subCategory.reverse().map(cate => {
        return <SubCategory key={cate.category_no} info={cate} main={main} />;
      })}
    </nav>
  );
}
