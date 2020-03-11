import React, { useState } from "react";





const PokeApi = props => {
    const [pokelist, setPokeList] = useState([])
    const GrabPokemon = e => {
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964")
                        .then(response => response.json())
                        .then(response => {
                            console.log(response.count);
                            setPokeList(response.results);
                        })
                        .catch(err=>{
                            console.log(err);
                        });
    }
    return (
        <div>
            <button onClick={GrabPokemon}>Fetch Pokemon</button>
            {pokelist.map((item, i) =>
            <p key={i}>{item.name}</p>
            )}
        </div>
    )
}
export default PokeApi;