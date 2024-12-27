import Movie from "./Movie";
import PageinateIndicator from "./PaginateIndicator";

function FeatureMovie() {
  return (
    <div className="relative text-white">
      <Movie/>
      <PageinateIndicator />
    </div>
  );
}
export default FeatureMovie;
