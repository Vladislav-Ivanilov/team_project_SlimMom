import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectSid, selectUser } from 'redux/auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const sid = useSelector(selectSid);

    return {
        isLoggedIn,
        user,
        sid,
    };
};
