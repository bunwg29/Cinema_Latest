import { faMagnifyingGlass, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div>
      <header className="flex h-14 items-center justify-between bg-slate-950 px-8 text-white">
        <div className="flex items-center gap-4">
          <img src="./netflix.png" alt="netflix" className="w-16 sm:w-28" />
          <a href="#">Phim</a>
          <a href="#">Truyền hình</a>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </div>
      </header>
      <div className="relative text-white">
        <img
          src="https://starlight.vn/Areas/Admin/Content/Fileuploads/images/Tintuc/inside-2.jpg"
          alt=""
          className="aspect-video w-full brightness-50"
        />
        <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
          <p className="mb-2 font-bold sm:text-[2vw]">Inside Out 2</p>
          <div>
            <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
              PG13
            </p>
            <p className="text-[1.2vw]">2024-06-11</p>
          </div>
          <div>
            <div className="mt-4 hidden text-[1.2vw] sm:block">
              <p className="mb-2 font-bold">Overview</p>
              <p>
                Teenager Riley&apos;s mind headquarters is undergoing a sudden
                demolition to make room for something entirely unexpected: new
                Emotions! Joy, Sadness, Anger, Fear and Disgust, who&apos;ve
                long been running a successful operation by all accounts,
                aren&apos;t sure how to feel when Anxiety shows up. And it looks
                like she&apos;s not alone.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <button className="text-10 mr-2 rounded bg-white px-4 py-2 text-black lg:text-lg">
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </button>
            <button className="text-10 rounded bg-slate-300/35 px-4 py-2 lg:text-lg">
              View Detail
            </button>
          </div>
        </div>

        <div className="absolute bottom-[10%] right-8">
          <ul className="flex gap-1">
            <li className="h-1 w-6 cursor-pointer bg-slate-100"></li>
            <li className="h-1 w-6 cursor-pointer bg-slate-600"></li>
            <li className="h-1 w-6 cursor-pointer bg-slate-600"></li>
            <li className="h-1 w-6 cursor-pointer bg-slate-600"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
