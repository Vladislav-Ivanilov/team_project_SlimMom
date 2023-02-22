import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, sid } = useAuth();
  const shouldRedirect = !isLoggedIn && !sid;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
