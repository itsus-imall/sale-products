import { getSubCategory } from '@/services/\bapis';
import SubCategory from './SubCategory';

type propsType = {
  main: string;
  sub?: string | boolean;
};

export default async function SubCategoryWrapper({
  main,
  sub = false,
}: propsType) {
  const subCategory = await getSubCategory(main);
  return (
    <nav className='flex flex-nowrap overflow-x-scroll scrollbar-hide px-4 gap-2 py-4'>
      {subCategory.reverse().map(cate => {
        const selected = cate.category_no + '' === sub;
        return (
          <SubCategory
            key={cate.category_no}
            info={cate}
            main={main}
            selected={selected}
          />
        );
      })}
    </nav>
  );
}
