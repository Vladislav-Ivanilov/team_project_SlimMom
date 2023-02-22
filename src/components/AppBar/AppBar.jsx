import { useAuth } from 'hooks';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';
export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <a href="/">LOGO</a>
      {isLoggedIn && <Navigation />}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
