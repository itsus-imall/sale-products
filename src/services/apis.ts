const BASE_URL = 'https://itsus.co.kr:5555/api/imall/saleProducts';

export type categoryType = {
  category_no: number;
  category_name: string;
  parent_category_no: number;
};

export type categoryProductType = {
  product_no: number;
  discount_price?: string | null | undefined;
  product_name: string;
  price: string;
  list_image: string;
};

export type productInfoType = {
  product_no: number;
  product_name: string;
  price: string;
  list_image: string;
  discount_price?: string | null | undefined;
};

export type reviewCountType = {
  review_count: { [key: string]: number };
};

export const getSubCategory = async (
  categoryNumber: string,
): Promise<categoryType[]> => {
  const res = await fetch(
    `${BASE_URL}/subCategory?categoryNumber=${categoryNumber}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );
  return await res.json();
};

export const getCategoryProduct = async (
  categoryNumber: string,
): Promise<categoryProductType[]> => {
  const res = await fetch(
    `${BASE_URL}/categoryProduct?categoryNumber=${categoryNumber}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );
  return await res.json();
};

export const getProductsInfo = async (
  payload: categoryProductType[],
): Promise<productInfoType[]> => {
  const productsNumber = payload.map(product => product.product_no);
  const res = await fetch(`${BASE_URL}/productInfo`, {
    next: {
      revalidate: 3600,
    },
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productsNumber }),
  });
  return await res.json();
};

export const getProductsReviewCount = async (
  payload: categoryProductType[],
): Promise<reviewCountType> => {
  const productsNumber = payload.map(product => product.product_no);
  const res = await fetch(
    `https://alph.kr/api/module/review/count?mall_id=youngwuk2&shop_no=1&product_no=${productsNumber.join(
      ',',
    )}`,
    {
      next: {
        revalidate: 0,
      },
    },
  );
  return await res.json();
};
