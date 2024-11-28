import ChildSearchProducts from './Popup/ChildSearchPopup';

function SearchProducts({ props }) {
  console.log(props);
  const { title, image, variants } = props;
  return (
    <>
      <div className="h-12 max-w-full flex flex-row gap-10 border-2 sticky ">
        <input type="checkbox" className="h-10 ml-5 flex-none w-5" />
        <img src={image?.src} className="h-10 w-10" />
        <div className="h-12 flex flex-row float-right right-1">
          <div className="w-auto">{title}</div>
          <div className="w-30">product 1</div>
          <div className="right-2 w-20">$ </div>
        </div>
      </div>
      {variants.map((data) => (
        <ChildSearchProducts variants={data} key={data.id} />
      ))}
    </>
  );
}

export default SearchProducts;
