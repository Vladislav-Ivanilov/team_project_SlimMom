import { Ul, NavLinkStyles } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Ul>
      <li>
        <NavLinkStyles to="/login">Log in</NavLinkStyles>
      </li>
      <li>
        <NavLinkStyles to="/register">Registration</NavLinkStyles>
      </li>
    </Ul>
  );
};
