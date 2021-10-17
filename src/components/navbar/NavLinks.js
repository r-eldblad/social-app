import { Link } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";
import { useContext } from "react";

const NavLinks = () => {
  const { token, setToken } = useContext(LoginContext);
  const handleLogout = () => {
    setToken(null);
  };
  return (
    <header>
      <div className="px-5 py-5 text-white flex justify-between bg-blue-900">
        <Link to="/welcome">
          <h1 className="text-xl font-bold">Social App</h1>
        </Link>
        <ul>
          {token ? (
            <Link
              className="hover:bg-blue-800 text-white font-bold py-5 px-5 mx-3 rounded uppercase"
              to="/profile"
            >
              Profile
            </Link>
          ) : null}
          {token ? (
            <Link
              className="hover:bg-blue-800 text-white font-bold py-5 px-5 mx-3 rounded uppercase"
              to="/users"
            >
              Users List
            </Link>
          ) : null}
          {!token ? (
            <Link
              className="hover:bg-blue-800 text-white font-bold py-5 px-5 mx-3 rounded uppercase"
              to="/login"
            >
              Login
            </Link>
          ) : null}
          {!token ? (
            <Link
              className="hover:bg-blue-800 text-white font-bold py-5 px-5 rounded uppercase"
              to="/register"
            >
              Register
            </Link>
          ) : null}
          {token ? (
            <Link
              className="hover:bg-blue-800 text-white font-bold py-5 px-5 rounded uppercase"
              onClick={handleLogout}
              to="/login"
            >
              Logout
            </Link>
          ) : null}
        </ul>
      </div>
    </header>
  );
};

export default NavLinks;
