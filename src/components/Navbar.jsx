import { Link, useNavigate } from 'react-router-dom';

function Navbar({ username, email, setUsername, setEmail }) {
  const navigate = useNavigate();
  function logout() {
    setUsername('');
    setEmail('');
    navigate('/signup');
  }
  return (
    <div className="h-12 bg-slate-400 flex flex-row gap-20">
      <Link
        to={username && email ? '/admin' : '/signup'}
        className="text-lg font-bold cursor-pointer hover:text-red-100"
      >
        {username && email ? 'admin' : 'signup'}
      </Link>
      <h1>two</h1>
      <h1>three</h1>
      <h1>four</h1>
      <Link
        onClick={
          typeof username != 'undefined' &&
          typeof email != 'undefined' &&
          username.length > 2 &&
          email.length > 2
            ? logout
            : null
        }
        className="text-lg font-bold cursor-pointer hover:text-red-100"
      >
        {typeof username != 'undefined' &&
        typeof email != 'undefined' &&
        username.length > 2 &&
        email.length > 2
          ? 'logout'
          : 'login'}
        💆‍♂️
      </Link>
    </div>
  );
}

export default Navbar;
