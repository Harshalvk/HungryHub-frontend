import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const Usernamemenu = () => {
  const { user, logout } = useAuth0();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 gap-1">
          <img src={user?.picture} alt="user-profile-image" className="h-8 w-8 rounded-full"/>
          {user?.name}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link to="/user-profile">User Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button onClick={() => logout()}>Log Out</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Usernamemenu;
