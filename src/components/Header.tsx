import logo from "../assets/logo.png";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { useAuth0 } from "@auth0/auth0-react";
import Usernamemenu from "./Usernamemenu";
import { Link } from "react-router-dom";

const Header = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <div className="flex justify-between items-center py-3 px-8 max-w-7xl mx-auto border-b">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" />
        <Link to="/">
          <h1 className="text-2xl font-Poppins font-semibold cursor-pointer">HungryHub</h1>
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-2">
        {isAuthenticated ? (
          <Usernamemenu />
        ) : (
          <Button className="bg-[#202020]" onClick={() => loginWithRedirect()}>
            LogIn
          </Button>
        )}
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
