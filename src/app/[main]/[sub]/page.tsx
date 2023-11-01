type propsType = {
  params: {
    main: string;
  };
};

export default function page({ params }: propsType) {
  console.log(params);
  return <div>page</div>;
}
