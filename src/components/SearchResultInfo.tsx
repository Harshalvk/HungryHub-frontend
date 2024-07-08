import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="text-xl font-semibold flex flex-col gap-6 justify-between lg:items-center lg:flex-row">
      <span className="flex gap-2 items-center">
        {total} Restaurants found in {city}
        <Link
          to={"/"}
          className="text-sm font-semibold underline cursor-pointer text-blue-500 hover:text-blue-600"
        >
          Change Loacation
        </Link>
      </span>
      insert sort dropdown here
    </div>
  );
};

export default SearchResultInfo;
