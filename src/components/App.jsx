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
  return <div>Hello</div>;
};
