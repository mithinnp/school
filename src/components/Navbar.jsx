import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ username, email, setUsername, setEmail }) {
  const [dropdowns, setDropdowns] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
  });

  // Toggle dropdown for each menu
  const toggleDropdown = (menu) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
      [!menu]: false, // Toggle the specific menu dropdown
    }));
  };
  const navigate = useNavigate();
  function logout() {
    setUsername('');
    setEmail('');
    navigate('/signup');
  }
  // Toggle the dropdown

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Right Side Logo (can be replaced with actual logo) */}
        <div className="text-2xl font-semibold">MyLogo</div>
        {/* Left Side Navigation Links */}
        <div className="flex space-x-6">
          {/* Dropdown Menu Items */}
          {['menu1', 'menu2', 'menu3', 'menu4'].map((menu, index) => (
            <div className="relative" key={index}>
              <button
                onClick={() => toggleDropdown(menu)}
                className="text-white"
              >
                {`Menu ${index + 1}`}
              </button>
              {/* Dropdown for each menu */}
              {dropdowns[menu] && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg z-20">
                  <a href="#" className="block px-4 py-2">
                    Option 1
                  </a>
                  <a href="#" className="block px-4 py-2">
                    Option 2
                  </a>
                  <a href="#" className="block px-4 py-2">
                    Option 3
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <div className="flex items-center space-x-2">
          <button className="flex items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 7l5 5m0 0l-5 5m5-5H3"
              />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
