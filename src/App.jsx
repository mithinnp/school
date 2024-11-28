import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import { useState } from 'react';
//import Layout from './components/Layout';
import Home from './components/Home';
//import Admin from './components/Admin';
import PageNotFound from './components/PageNotFound';
// import SkeletonAdmin from './components/skeletons/SkeletonAdmin';
// import { ErrorBoundary } from 'react-error-boundary';
// import ErrorFallBack from './components/ErrorFallBack';
// import SignUp from './components/SignUp';
// import ProtectedRoute from './components/ProtectedRoute';
//const Admin = lazy(() => import('./components/Admin'));
import axios from 'axios';
import Dropdown from './components/Dropdown';
function App() {
  //const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/"
          element={
            <Layout
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
            />
          }
        > */}
        <Route index element={<Home />} />

        {/* <Route
            path="admin"
            element={
              <ErrorBoundary
                FallbackComponent={ErrorFallBack}
                onReset={<Home />}
              >
                <Suspense fallback={<SkeletonAdmin />}>
                  <ProtectedRoute username={username} email={email}>
                    <Admin
                      username={username}
                      setUsername={setUsername}
                      email={email}
                      setEmail={setEmail}
                    />
                  </ProtectedRoute>
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="signup"
            element={
              <SignUp
                username={username}
                setUsername={setUsername}
                email={email}
                setEmail={setEmail}
              />
            }
          /> */}
        <Route path="dropdown" element={<Dropdown />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
