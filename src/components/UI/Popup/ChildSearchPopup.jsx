function ChildSearchProducts({ variants }) {
  const { id, product_id, title, price } = variants;
  return (
    <div className="h-10 max-w-full flex flex-row gap-10 border-2 ">
      <input type="checkbox" className="h-7 ml-5 flex-none w-4" />

      <div className="h-10 flex flex-row float-right right-1">
        <div className="w-auto h-3">{title}</div>
        <div className="w-30">product 1</div>
        <div className="right-2 w-20">$ {price}</div>
      </div>
    </div>
  );
}

export default ChildSearchProducts;
