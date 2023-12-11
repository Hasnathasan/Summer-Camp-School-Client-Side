import { FaBookmark, FaHome, FaRegBookmark } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import useCheckUserRole from "../../../Hooks/useCheckUserRole";
import Loader from "../../../Components/Loader";
const Dashboard = () => {
  const [userRole, isUserRoleLoading] = useCheckUserRole();
  console.log(userRole, isUserRoleLoading);
  if (isUserRoleLoading) {
    return <Loader></Loader>;
  }
  const mainLinks = (
    <>
      <li>
        <NavLink className="p-3 text-base" to="/">
          <FaHome></FaHome> Home
        </NavLink>
      </li>
      <li>
        <NavLink className="p-3 text-base" to="/classes">
          <FaHome></FaHome> Classes
        </NavLink>
      </li>
      <li>
        <NavLink className="p-3 text-base" to="/instructors">
          <FaHome></FaHome> Instructors
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-[100%] overflow-auto flex flex-col min-h-screen items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side my-5 w-full">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        {/* Sidebar content here */}
        <div className="w-80"></div>
        <ul className="menu flex-nowrap fixed px-8 h-[600px] bg-white py-10 w-80 rounded-xl space-y-2 shadow-xl">
          <h2 className="text-2xl mb-5">Dashboard</h2>
          {userRole?.role === "admin" ? (
            <>
              <li>
                <NavLink className="p-3 text-base" to=" ">
                  <FaHome></FaHome> Admin
                </NavLink>
              </li>
              <li>
                <NavLink className="p-3 text-base" to="manageclasses">
                  <FaRegBookmark></FaRegBookmark> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink className="p-3 text-base" to="manageusers">
                  <FaBookmark></FaBookmark> Manage Users
                </NavLink>
              </li>
              <div className="divider"></div>
              {mainLinks}
            </>
          ) : userRole?.role === "instructor" ? (
            <>
              <li>
                <NavLink className="p-3 text-base" to=" ">
                  <FaHome></FaHome> instructor
                </NavLink>
              </li>
              <li>
                <NavLink className="p-3 text-base" to="addnewclass">
                  <FaRegBookmark></FaRegBookmark> Add New Class
                </NavLink>
              </li>
              <li>
                <NavLink className="p-3 text-base" to="myclasses">
                  <FaBookmark></FaBookmark> My Classes
                </NavLink>
              </li>
              <div className="divider"></div>
              {mainLinks}
            </>
          ) : (
            <>
              <li>
                <NavLink className="p-3 text-base" to=" ">
                  <FaHome></FaHome> Student
                </NavLink>
              </li>
              <li>
                <NavLink className="p-3 text-base" to="selectedclass">
                  <FaRegBookmark></FaRegBookmark> My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink className="p-3 text-base" to="enrolledclass">
                  <FaBookmark></FaBookmark> My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink className="p-3 text-base" to="paymenthistory">
                  <FaBookmark></FaBookmark> Payment History
                </NavLink>
              </li>
              <div className="divider"></div>
              {mainLinks}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
