import SearchForm from "./SearchForm"

function SearchPage() {
  return (
    <div className="container flex-col">
      <p className="font-bold text-2xl">Search</p>
      <div className="flex">
        <div className="flex-1">
          <SearchForm/>
        </div>
        <div className="flex-[3]">
          Result
        </div>
      </div>
    </div>
  )
}
export default SearchPage