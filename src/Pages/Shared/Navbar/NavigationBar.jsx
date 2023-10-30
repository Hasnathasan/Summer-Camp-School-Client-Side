import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import useAuth from "../../../Hooks/useAuth";
import Toggle from "../../../Components/Toggle";

const NavigationBar = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li tabIndex={0}>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>
      { user?
        <li>
        <NavLink to="dashboard">Dashboard</NavLink>
      </li>:""
      }
      <li>
        <Toggle></Toggle>
      </li>
    </>
  );
  return (
    <div className="navbar bg-blue-gray-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-10 space-y-2 mt-3 p-5 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        {user ? (
          <button className="btn btn-ghost normal-case text-xl">Logout</button>
        ) : (
          <Link to="/login" className="btn btn-ghost normal-case text-xl">
            Login
          </Link>
        )}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-2 menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center justify-center gap-2">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
            <button
              onClick={() => logOut()}
              className="btn btn-ghost normal-case text-xl"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
