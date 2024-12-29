import CircularProgressBar from "./CircularProgressBar";

function MovieCard({ title, releaseDate, poster, point, mediaType }) {
  return (
    <div className="rounded-lg border border-slate-800 relative">
      {
        mediaType === 'tv' && (
          <p className="absolute right-1 top-1 bg-black text-white p-1 texg-sm rounded shadow-md font-bold">TV Show</p>
        )
      }
      <img
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/w500${poster}`}
      />
      <div className="relative -top-[1.5vw] px-4">
        <CircularProgressBar percent={Math.round(point * 10)} strokeColor={ point >= 7 ? 'green' : point >= 5 ? 'orange' : 'red'}/>
        <p className="mt-2 font-bold">{title}</p>
        <p className="text-slate-300">{releaseDate}</p>
      </div>
    </div>
  );
}
export default MovieCard;
