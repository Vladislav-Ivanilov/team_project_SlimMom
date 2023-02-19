import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink>Diary</NavLink>
        </li>
        <li>
          <NavLink>Calculator</NavLink>
        </li>
      </ul>
    </nav>
  );
};
