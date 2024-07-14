import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link to="/order-status" className="flex items-center bg-white">
        Order Status
      </Link>
      <Link to="/manage-restaurant" className="flex items-center bg-white">
        My Restaurant
      </Link>
      <Link to="/user-profile" className="flex items-center bg-white">
        User Profile
      </Link>
      <Button className="flex items-center px-3" onClick={() => logout()}>
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
