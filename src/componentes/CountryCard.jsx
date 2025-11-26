function CountryCard({ country }) {
    return (
        <div className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm country-card">

                <img
                    src={country.flags.png}
                    alt={`Bandera de ${country.name.common}`}
                    className="card-img-top country-img"
                />
                <div className="card-body">
                    <h5 className="card-title">{country.name.common}</h5>
                    <p><strong> capital:</strong> {country.capital?.[0] || "sin capital"}</p>
                    <p><strong>poblacion:</strong>{country.population.toLocaleString()}</p>
                    <p><strong>region:</strong> {country.region}</p>
                    <p><strong>subregion:</strong>{country.subregion}</p>

                </div>
            </div>
        </div>
    );
}
export default CountryCard;
