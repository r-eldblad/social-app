import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <header>
      <div className="px-5 py-5 text-white flex justify-between bg-blue-900">
        <h1 className="text-xl font-bold">Social App</h1>
        <ul>
          <Link
            className="hover:bg-blue-800 text-white font-bold py-5 px-5 mx-3 rounded uppercase"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="hover:bg-blue-800 text-white font-bold py-5 px-5 rounded uppercase"
            to="/register"
          >
            Register
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default NavLinks;
