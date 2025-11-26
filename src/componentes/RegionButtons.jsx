function RegionButtons({ searchByRegion }) {
    const regions = ["Europe", "Asia", "Africa", "Americas", "Oceania"];

    return (
        <div className="region-container mb-4">
            <h4 className="mb-3">Buscar por región</h4>

            <div className="d-flex flex-wrap gap-2">
                {regions.map((reg) => (
                    <button
                        key={reg}
                        className="btn btn-outline-primary"
                        onClick={() => searchByRegion(reg)}
                    >
                        {reg}
                    </button>
                ))}

            </div>

        </div>
    );
}

export default RegionButtons;