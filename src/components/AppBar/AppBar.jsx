import { useAuth } from 'hooks';

import Logo from 'components/Logo/Logo';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';
export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Logo/>
      {isLoggedIn && <Navigation />}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
