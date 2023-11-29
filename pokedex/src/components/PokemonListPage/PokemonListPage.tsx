import React, { useState, useEffect } from "react";
import styles from './PokemonListPage.module.css';
import placeHolder from '../../assets/13.png';
import { getPokemons } from "../../services/services";

export default function PokemonListPage() {

    useEffect(() => {
        listPokemons()
    }, [])

    const [pokemon, setPokemon] = useState<any>()

    const listPokemons = async () => {
        const response = await getPokemons();
        setPokemon(response)
    }

    return (
        <>
            <div className={styles['container']}>
                {pokemon?.map((item: any) =>
                    <div className={styles['container-image']} >
                        <img src={placeHolder} className={styles['image']} alt='Pokemon' />
                        <div className={styles['text-container']}>
                            <h1>Nome: {item.name}</h1>
                            <h1>Gênero: {item.gender}</h1>
                            <h1>Tipo: {item.types}</h1>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
