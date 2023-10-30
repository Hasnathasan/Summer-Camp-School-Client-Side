
import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "../Shared/Navbar/NavigationBar";
import FooterSection from "../Shared/Footer/FooterSection";
import { useEffect } from "react";


const Main = () => {
    const location = useLocation();
useEffect(() => {
window.scrollTo(0, 0);
}, [location.pathname]);
    return (
        <div className="overflow-hidden">
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Main;