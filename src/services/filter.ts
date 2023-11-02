import { categoryProductType, categoryType, productInfoType } from './apis';

const filterRouter = (
  categorys: categoryProductType[],
  products: productInfoType[],
) => {
  let result = salePriceFilter(categorys, products);
  //   switch (route) {
  //     case '':
  //       break;

  //     default:
  //       break;
  //   }
  return result;
};

const salePriceFilter = (
  categorys: categoryProductType[],
  products: productInfoType[],
) => {
  return products.map(product => {
    const discount_price = categorys.find(
      category => category.product_no === product.product_no,
    );
    return { ...product, ...discount_price };
  });
};

export default filterRouter;
