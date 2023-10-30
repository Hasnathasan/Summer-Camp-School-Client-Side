import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import StudentHome from "../Pages/Dashboard/StudentDashboard/StudentHome/StudentHome";
import SelectedClasses from "../Pages/Dashboard/StudentDashboard/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../Pages/Dashboard/StudentDashboard/EnrolledClasses/EnrolledClasses";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/InstructorDashboard/MyClasses/MyClasses";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import Error from "../Pages/Error/Error";
import Payment from "../Pages/Dashboard/StudentDashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory/PaymentHistory";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/instructors',
          element: <Instructors></Instructors>
        },
        {
          path: '/classes',
          element: <Classes></Classes>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
       children: [
        {
          path: '',
          element: <StudentHome></StudentHome>
        },
        {
          path: 'selectedclass',
          element: <SelectedClasses></SelectedClasses>
        },
        {
          path: 'enrolledclass',
          element: <EnrolledClasses></EnrolledClasses>
        },
        {
          path: 'paymenthistory',
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path: 'addnewclass',
          element: <AddClass></AddClass>
        },
        {
          path: "myclasses",
          element: <MyClasses></MyClasses>
        },
        {
          path: 'payment/:id',
          element: <Payment></Payment>
        },
        {
          path: 'manageclasses',
          element: <ManageClasses></ManageClasses>
        },
        {
          path: 'manageusers',
          element: <ManageUsers></ManageUsers>
        }
       ]
    },
    {
      path: "*",
      element: <Error></Error>
    }
  ]);

export default router;