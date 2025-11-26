import { useState } from "react";
import SearchBar from "../componentes/SearchBar";
import RegionButtons from "../componentes/RegionButtons";
import CountryList from "../componentes/CountryList";

function Explorador() {
    const [search, setSearch] = useState("");
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    // para buscar por nombre
    const searchByName = async () => {
        if (!search.trim()) return;

        setLoading(true);
        setErrorMsg("");
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${search}`);
            if (!res.ok) throw new Error("No se encontro el país");

            const data = await res.json();
            setCountries(data);
        } catch (error) {
            setErrorMsg("No se encontro el nombre del pais buscado.:");
        }

        setLoading(false);
    };

    //para buscar por región

    const searchByRegion = async (region) => {
        setLoading(true);
        setErrorMsg("");

        try {
            const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
            const data = await res.json();
            setCountries(data);

        } catch (error) {
            setCountries([]);
            setErrorMsg("error en la busqueda por región:");
        }

        setLoading(false);
    };

    return (
        <div className="container py-4">
            {/*Titulo*/}
            <h1 className="text-center mb-4"> Explorador de países</h1>
            {/*Barra de busqueda*/}



            <SearchBar
                search={search}
                setSearch={setSearch}
                searchByName={searchByName}
            />
            {/*Botones por region*/}
            <RegionButtons searchByRegion={searchByRegion} />

            {/*Mensajes*/}

            {loading && <p className="text-primary">Cargando</p>}
            {errorMsg && <p className="text-danger">{errorMsg}</p>}

            {/*Listado de paises*/}

            <CountryList countries={countries} />

        </div>
    );
}
export default Explorador;