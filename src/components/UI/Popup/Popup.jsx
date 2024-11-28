import SearchProducts from '../SearchProducts';

import SearchPopup from './searchPopup';

function Popup() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div
        className="bg-white p-6 rounded-lg w-10/12 mb-80 "
        onClick={(e) => e.stopPropagation()} // Prevent click on modal content from closing it
      >
        <SearchPopup />
      </div>
    </div>
  );
}

export default Popup;
