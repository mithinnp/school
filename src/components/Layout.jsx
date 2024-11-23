import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout({ username, email, setEmail, setUsername }) {
  console.log(username);
  return (
    <div>
      <Navbar
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
      />
      <Outlet />
    </div>
  );
}

export default Layout;
