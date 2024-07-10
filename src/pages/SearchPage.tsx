import { useSearchRestaurants } from "@/api/RestaurantApi";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
};

const SearchPage = () => {
  const { city } = useParams();
  const [serachState, setSearchState] = useState<SearchState>({
    searchQuery: "",
  });
  const { results, isLoading } = useSearchRestaurants(serachState, city);

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
    }));
  };

  if (isLoading) {
    <LoadingSpinner />;
  }

  if (!results?.data || !city) {
    return <span>No results found</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 px-6">
      <div id="cuisines-list">insert cuisines here :)</div>
      <div id="main-content" className="space-y-4">
        <SearchBar
          searchQuery={serachState.searchQuery}
          onSubmit={setSearchQuery}
          placeHolder="Search by cuisine or Hotel Name"
          onReset={resetSearch}
        />
        <SearchResultInfo total={results.pagination.total} city={city} />
        {results.data.map((restaurant, index) => (
          <SearchResultCard restaurant={restaurant} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
