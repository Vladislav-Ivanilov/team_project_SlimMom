import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/diary">Diary</NavLink>
        </li>
        <li>
          <NavLink to="/">Calculator</NavLink>
        </li>
      </ul>
    </nav>
  );
};
