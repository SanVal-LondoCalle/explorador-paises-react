function SearchBar({ search, setSearch, searchByName }) {
    return (

        <div className="search-box mb-4">
            <div className="input-group">

                <input
                    type="text"
                    className="form-control search-input"
                    placeholder="ingresa un pais"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn btn-primary search-btn" onClick={searchByName}>
                    Buscar país
                </button>
            </div>
        </div>

    );
}


export default SearchBar;
