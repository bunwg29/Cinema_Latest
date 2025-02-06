function ActorInfo({ id, name, character, profilePath }) {
  return (
    <div className="rounded-lg border border-slate-300 bg-black shadow-sm">
      <img
        className="rounded-lg"
        src={
          profilePath
            ? `https://image.tmdb.org/t/p/w276_and_h350_face${profilePath}`
            : "/ActorNoImage.svg"
        }
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        <p>18 Episodes</p>
      </div>
    </div>
  );
}
export default ActorInfo;
