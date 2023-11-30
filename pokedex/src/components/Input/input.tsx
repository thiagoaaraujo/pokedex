import styles from './input.module.css';
import { useState, useEffect } from 'react';
import { getRandomPokemon } from '../../services/htttp.config';

export default function InputPage() {

    const [pokemon, setPokemon] = useState<any>()
    const [input, setInput] = useState<any>()
    const [resp, setResp] = useState<string | null>(null)

    useEffect(() => {
        getPokemon()
    }, [])


    function getPokemon() {
        getRandomPokemon().then(setPokemon)
        setResp(null)
    } 

    function checkPokemon() {
        if (input?.toLowerCase() === pokemon?.name) {
            setResp('Parabéns você acertou!')
        } else{
            setResp('Que pena...')
        }
    }


    return (
        <>
            <div className={styles['container']}>
                <div className={styles['container-image']} style={{filter: `brightness(${resp ? '100' : '0'}%)`}}>
                    <h1>{resp ? `É o ${pokemon?.name[0].toUpperCase() + pokemon?.name.substring(1)}` : ''}</h1>
                    <img src={pokemon?.sprite} className={styles['image']} alt='Pokemon'/>
                    <h1>{resp ?? ''}</h1>
                </div>
                <div className={styles['container-input']}>
                    <h2 className={styles['title']}>Quem é esse pokémon?</h2>
                    <input className={styles['input']} onChange={(e) => setInput(e.target.value)} type="text" />
                    <button className={styles['button']} onClick={() => checkPokemon()} type="submit">Enviar</button>
                    <button className={styles['buttonReset']} onClick={() => getPokemon()}  type="submit">Reiniciar</button>
                </div>
            </div>
        </>
    )
}