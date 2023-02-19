import { NavLink } from 'react-router-dom';
export const AuthNav = () => {
  return (
    <ul>
      <li>
        <NavLink>Log in</NavLink>
      </li>
      <li>
        <NavLink>Register</NavLink>
      </li>
    </ul>
  );
};
