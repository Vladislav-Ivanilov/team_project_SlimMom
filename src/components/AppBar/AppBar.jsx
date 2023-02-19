import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigator } from '../Navigation/Navigation';
export const AppBar = () => {
  return (
    <header>
      <a href="/">LOGO</a>
      <Navigator />
      {<UserMenu /> ?? <AuthNav />}
    </header>
  );
};
