import SearchProducts from '../SearchProducts';
import productsData from '../../../data/productsData';
import { useState } from 'react';
function SearchPopup() {
  const [searchData, setProductData] = useState(productsData || []);

  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-xl ">Add products</h1>
        <div className="float-right mt-0">X</div>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="        Search products"
          className="h-10 w-full  border-2 border-slate-400 border-r-2"
        />
        <div className="absolute top-1/4 left-2">🔎</div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        {searchData.map((data) => (
          <SearchProducts props={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default SearchPopup;
