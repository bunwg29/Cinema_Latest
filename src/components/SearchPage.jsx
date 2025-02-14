import useFetch from "@hooks/useFetch";
import SearchForm from "./SearchForm";
import { useState } from "react";
import RelatedMediaList from "./MediaDetail/RelatedMediaList";

function SearchPage() {
  const [searchFormValues, setSearchFormValues] = useState({
    mediaType: "movie",
    genres: [],
    rating: "All",
  });

  const [minRating, maxRating] =
    searchFormValues.rating === "All" ? [0, 100] : searchFormValues.rating.split(" - ");

  const { data } = useFetch({
    url: `/discover/${searchFormValues.mediaType}?sort_by=popularity.desc&with_genres=${searchFormValues.genres.join(",")}&vote_average.gte=${minRating / 10}&vote_average.lte=${maxRating / 10}`,
  });

  return (
    <div className="container flex-col">
      <p className="text-2xl font-bold">Search</p>
      <div className="flex gap-6">
        <div className="flex-1">
          <SearchForm setSearchFormValues={setSearchFormValues} />
        </div>
        <div className="flex-[3]">
          <RelatedMediaList mediaList={data.results || []} />
        </div>
      </div>
    </div>
  );
}
export default SearchPage;
