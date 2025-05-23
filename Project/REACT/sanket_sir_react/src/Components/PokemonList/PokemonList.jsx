import { useEffect, useState } from "react"
import axios from 'axios';
import Pokemon from "../Pokemon/Pokemon";

function PokemonList(){
    // const [x,setX] = useState(0);
    // useEffect(()=>{
    //     console.log('effect called')
    // },[x])

   
    // const[y,setY] = useState(0);

    // return(
    //     <>
    //     x:{x} <button onClick={()=>setX(x+1)}>Inc</button>
    //     y:{y} <button onClick={()=>setY(y-1)}>Dec</button>

    //     </>
    // )


    const [PokemonList,setPokemonList] = useState([]);
    const[isLoading,setIsLoading] = useState(true);

    const[nextUrl,setNextUrl] = useState('');
    const[prevUrl,setPrevUrl] = useState('');

    const [POKEDEX_URL,setPokedex_url] = useState('https://pokeapi.co/api/v2/pokemon')


    async function downloadPokemons(){
        setIsLoading(true)
        const response = await axios.get(POKEDEX_URL) // this downloads the result of 20 pokemons
        console.log(response.data)
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
        const pokemonResults = response.data.results; // we get the array of pokemons from result 
        // iterating over the array of pokemons, and using their url, to create array of promises.
        const pokemonResultPromise = pokemonResults.map((pokemon)=> axios.get(pokemon.url));
        // passing that promise array to axios.all
        const pokemonData = await axios.all(pokemonResultPromise); // array of 20 pokemon detailed data
        console.log(pokemonData);
        // Now iterate the data of each pokemon, and extract id, name,image and types 
        const res = pokemonData.map((pokeData)=>{
            const pokemon =  pokeData.data;
            return {
                id:pokemon.id,
                name:pokemon.name,
                image:pokemon.sprites.other.dream_world.front_default,
                types:pokemon.types
            }
        })
        console.log(res);
        setPokemonList(res);
        setIsLoading(false)
    }





    useEffect(()=>{
        downloadPokemons();
    },[POKEDEX_URL])

    // useeffect ka matlab jab jab pokedex_url render hoga tab tab downloadpokemons() function execute hoga.

    return(
        <>
        <h1 className="items-center">pokemon list</h1>
        {(isLoading)?'Loading':
        PokemonList.map((p) => <Pokemon name = {p.name} image = {p.image} key = {p.id}/>)
        }

        <div className="m-0 text-center px-1">
            <button className="cursor-pointer ml-1" disabled={prevUrl == null} onClick={()=>setPokedex_url(prevUrl)} >Previous</button>
            {'  '}
            <button className="cursor-pointer" disabled = {nextUrl == null}  onClick={()=>setPokedex_url(nextUrl)}>Next</button>
        </div>
        </>
    )






}

export default PokemonList;