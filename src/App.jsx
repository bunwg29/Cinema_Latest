import Header from "./components/Header";
import FeatureMovie from "./components/FeatureMovies";
import MediaList from "./components/MediaList";
import { TOP_RATED_TABS, TRENDING_TABS } from "./libs/constants";

function App() {
  return (
    <div>
      <Header />
      <FeatureMovie />
      <MediaList title="Trending" tabs={TRENDING_TABS}/>
      <MediaList title="Top Rated" tabs={TOP_RATED_TABS}/>
    </div>
  );
}

export default App;
