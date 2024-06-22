import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";

const TownSearch = () => {
  return (
    <div className="mx-auto bg-orange-400 p-5 min-h-28 mt-14 md:flex justify-center items-center text-center shadow-md">
      <div className="space-y-2 md:flex md:items-center md:justify-center gap-4 w-full md:px-40">
        <h1 className="text-white font-semibold whitespace-nowrap md:text-xl">
          Serach your Restaurant{" "}
          <BuildingStorefrontIcon className="h-4 sm:h-6 inline-block" />
        </h1>

        <Input
          type="text"
          placeholder="Search your City or Town.."
          className="bg-white text-gray-500"
        />
        <Button className="w-full md:w-fit">Serach</Button>
      </div>
    </div>
  );
};

export default TownSearch;
