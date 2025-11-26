import CountryCard from "./CountryCard";

function CountryList({ countries }) {
    return (
        <div className="row" >
            {countries.length > 0 ?(
             countries.map((c) => <CountryCard key={c.cca3} country={c} />)
            ):(
                <p>No se encontraron paises </p>
            )}
                </div>
    );
}
export default CountryList;