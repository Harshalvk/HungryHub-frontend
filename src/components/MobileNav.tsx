import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Bars3Icon className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          {isAuthenticated ? (
            <div className="flex gap-2 items-center">
              <img
                src={user?.picture}
                alt="user-profile-image"
                className="rounded-full h-10 w-10"
              />
              <div>
                <p className="text-sm">{user?.name}</p>
                <p className="text-xs">{user?.email}</p>
              </div>
            </div>
          ) : (
            <span>Welcome to HungryHub!</span>
          )}
          <Separator className="my-3" />
          <SheetDescription className="flex flex-col gap-2">
            {isAuthenticated ? (
              <MobileNavLinks />
            ) : (
              <Button className="w-full" onClick={() => loginWithRedirect()}>
                LogIn
              </Button>
            )}
          </SheetDescription>
        </SheetTitle>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
