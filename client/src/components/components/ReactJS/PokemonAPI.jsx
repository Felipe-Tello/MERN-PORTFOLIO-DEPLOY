import { useState } from "react";

const PokemonAPI = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const consultaAPI = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${897}&offset=${0}`)
            .then(response => response.json())
            .then(data => {
                setPokemonList(data.results);
        });
    };

    return (
        <div>
            <div className="Title">
                <h2>API de Pokémon <a target="_blank" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/2-%20ReactJS/4-%20APIs/2-%20Pokemon%20Fetch/client"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>Crea un proyecto React que simplemente tenga un botón con el texto "Fetch Pokemon". Cuando se hace clic en esto, genera los nombres de todos los 807 Pokémon utilizando la <a href="https://pokeapi.co/">API de Pokémon</a> y la API Fetch de Javascript.</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div className="Core no-code">
                <div style={{display:"flex", flexDirection:"column" , width:"40%", border:"2px solid black", padding:"5%"}}>
                    <button className="btn btn-success" style={{marginBottom:"5%"}} onClick={consultaAPI}>Fetch Pokemon</button>
                    <div style={{maxHeight:"30vh", overflow: "auto"}}>
                        <ul>
                            {pokemonList.map((pokemon, index) => {
                                return <li key={index}>{pokemon.name}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crea un botón para buscar el Pokémon</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Salida de los nombres de todos los 807 Pokémon</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
};

export default PokemonAPI;