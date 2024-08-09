
export default function Weather({ search, setSearch, handleSearch }) {
    return (
        <div className="search-engine">
            <input type="text" placeholder="Enter City Name" name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handleSearch}>
                Search Weather
            </button>
        </div>
    )
}