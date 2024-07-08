import { useSearchRestaurants } from "@/api/RestaurantApi";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  const { results, isLoading } = useSearchRestaurants(city);

  if (isLoading) {
    <LoadingSpinner />;
  }

  if (!results?.data || !city) {
    return <span>No results found</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list">insert cuisines here :)</div>
      <div id="main-content" className="">
        <SearchResultInfo total={results.pagination.total} city={city} />
      </div>
    </div>
  );
};

export default SearchPage;