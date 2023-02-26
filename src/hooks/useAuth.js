import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectRefreshToken, selectSessionId, selectUser } from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const sessionId = useSelector(selectSessionId);
  const refreshToken = useSelector(selectRefreshToken);
  return {
    isLoggedIn,
    user,
    sessionId,
    refreshToken,
  };
};
