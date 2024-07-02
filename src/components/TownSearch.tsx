import { useNavigate } from "react-router-dom";
import SearchBar, { SearchForm } from "./SearchBar";

const TownSearch = () => {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className=" bg-orange-400 p-5 min-h-28 md:mt-14 shadow-md md:flex justify-center items-center text-center">
      <SearchBar
        placeHolder="Search by city or town"
        onSubmit={handleSearchSubmit}
      />
    </div>
  );
};

export default TownSearch;
