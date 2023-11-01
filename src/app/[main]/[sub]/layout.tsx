import SubCategoryWrapper from '@/components/SubCategoryWrapper';

type propsType = {
  children: React.ReactNode;
  params: {
    main: string;
    sub: string;
  };
};

export default function layout({ children, params }: propsType) {
  const { main, sub } = params;
  return (
    <>
      <SubCategoryWrapper main={main} sub={sub} />
      {children}
    </>
  );
}
