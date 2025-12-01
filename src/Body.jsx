import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="pt-20">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
