import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to="/">Workouts</Link>
      <nav>
        <NavLink to="about">About</NavLink>
      </nav>
    </header>
  );
};
export default Navbar;
