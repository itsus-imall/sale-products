import { getSubCategory } from '@/services/apis';
import SubCategory from './SubCategory';

type propsType = {
  main: string;
};

export default async function SubCategoryWrapper({ main }: propsType) {
  const subCategory = await getSubCategory(main);
  return (
    <nav className='flex flex-nowrap lg:flex-wrap overflow-x-scroll scrollbar-hide px-4 gap-2 py-4'>
      {subCategory.reverse().map(cate => {
        return <SubCategory key={cate.category_no} info={cate} />;
      })}
    </nav>
  );
}
