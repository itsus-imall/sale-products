import ProductWrapper from '@/components/ProductWrapper';

type propsType = {
  params: {
    sub: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function page({ params, searchParams }: propsType) {
  const { sub } = params;
  return <ProductWrapper categoryNumber={sub} searchParams={searchParams} />;
}
