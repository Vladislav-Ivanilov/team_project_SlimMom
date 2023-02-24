// import { NavLink } from 'react-router-dom';
import { Ul, NavLinkStyles } from '../AuthNav/AuthNav.styled';

export const Navigation = () => {
  return (
    <nav>
      <Ul>
        <li>
          <NavLinkStyles to="/diary">Diary</NavLinkStyles>
        </li>
        <li>
          <NavLinkStyles to="/">Calculator</NavLinkStyles>
        </li>
      </Ul>
    </nav>
  );
};
