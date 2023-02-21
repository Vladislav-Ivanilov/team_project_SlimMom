// export const App = () => {
//   return <div>Hello</div>;
// };
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { sessionRefreshing } from 'redux/auth/operation';
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';

export const App = () => {
  const dispatch = useDispatch();
  const { sid } = useAuth();

  useEffect(() => {
    if (!sid) {
      return;
    }
    dispatch(sessionRefreshing());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <>
      <LoginForm />
      <RegisterForm />
    </>
  );
};
