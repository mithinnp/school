import { useState } from 'react';
import Button from './UI/Button';
import { NavLink } from 'react-router-dom';
import Popup from './UI/Popup/Popup';

function Product() {
  const [isDiscountAdded, setIsDiscountAdded] = useState(true);
  function tougleButton(el) {
    setIsDiscountAdded(!el);
  }

  return (
    <div className="flex flex-col">
      <div className="flex *: gap-6">
        <h1 className="flex-none">1.</h1>
        <div className=" relative flex-1 w-full">
          <input
            type="text"
            placeholder="please select product"
            className="h-10 w-full  border-2 border-slate-400"
          />
          <div className="absolute right-3 top-1/4 cursor-pointer">✏</div>
        </div>
        {isDiscountAdded ? (
          <Button onClick={() => tougleButton(isDiscountAdded)}>
            Select disount
          </Button>
        ) : (
          <div>
            <input
              type="text"
              defaultValue={0}
              className=" h-10 w-1/15 border-2 border-slate-400"
            />
            <select id="perOffer border-2 ">
              <option value="0">%off</option>
              <option value="10">10% off</option>
              <option value="20">20% off</option>
            </select>
          </div>
        )}
      </div>
      <div>
        <a className="float-right mr-20 text-blue-500 underline cursor-pointer">
          Show variants
        </a>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="flex flex-col gap-5 mt-5 md:w-1/2 ">
      <Product />
      <Product />
      <h1>popup</h1>
      <Popup />
    </div>
  );
}

export default Dropdown;
