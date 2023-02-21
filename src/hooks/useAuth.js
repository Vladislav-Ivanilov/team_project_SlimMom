import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectSid,
  selectUser,
  selectRefreshToken,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const sid = useSelector(selectSid);
  const refreshToken = useSelector(selectRefreshToken);
  return {
    isLoggedIn,
    user,
    sid,
    refreshToken,
  };
};
