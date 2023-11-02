import { categoryProductType, productInfoType } from './apis';

const filterRouter = (
  categorys: categoryProductType[],
  products: productInfoType[],
  route: string | string[] | undefined,
) => {
  let result;
  const salePrice = filterSalePrice(categorys, products);
  switch (route) {
    case 'highsale':
      result = filterHighSalePrice(salePrice);
      break;
    default:
      result = salePrice;
      break;
  }
  return result;
};

const filterSalePrice = (
  categorys: categoryProductType[],
  products: productInfoType[],
) =>
  products.map(product => {
    const discount_price = categorys.find(
      category => category.product_no === product.product_no,
    );
    return { ...product, ...discount_price };
  });

const filterHighSalePrice = (array: productInfoType[]) =>
  array.sort((a, b) => {
    const discountA = calculateDiscountPercentage(a);
    const discountB = calculateDiscountPercentage(b);
    return discountB - discountA;
  });

const calculateDiscountPercentage = (product: productInfoType) => {
  const discount =
    ((+product.price - +product.discount_price!) / +product.price) * 100;
  return discount;
};

export default filterRouter;
