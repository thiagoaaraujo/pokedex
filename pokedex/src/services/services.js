import axios from "axios"


const api = axios.create({
    baseURL: 'https://znt4lirma7.execute-api.us-east-2.amazonaws.com/prod',

})

const getPokemons = async () => {
    const response = await api.get('/pokemon')
    return response.data
}

const createPokemon = async (name, type, gender, sprite, spriteBase64) => {

    const body = { name, type, gender, sprite, spriteBase64 }

    const response = await api.post('/pokemon', body, {
        headers: {

            "content-type": "application/octet-stream"


        }
    })
    return response.data
}

export { getPokemons, createPokemon }