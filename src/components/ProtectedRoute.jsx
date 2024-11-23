import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children, username, email }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (username == '' && email == '') {
      navigate('/signup');
    }
  }, [username, email, navigate]);
  if (username == '' && email == '') {
    return null;
  }
  return children;
}

export default ProtectedRoute;
