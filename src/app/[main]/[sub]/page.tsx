import ProductWrapper from '@/components/ProductWrapper';

type propsType = {
  params: {
    sub: string;
  };
};

export default function page({ params }: propsType) {
  const { sub } = params;
  return <ProductWrapper categoryNumber={sub} />;
}
