import axios from 'axios'

export const getRandomPokemon = async () => {
    const randomPokemon = Math.floor(Math.random() * 150) + 1;
    const  resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)

    try{
        const id = resp.data.id
    const types = resp.data.types

        const data = {
            name:resp.data.name,
            id,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            types: types
        }
        return data;
    } catch(err){
        throw err
    }
}