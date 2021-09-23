import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default NavLinks;
