import React from "react";
import styles from './PokemonListPage.module.css';
import placeHolder from '../../assets/13.png';

export default function PokemonListPage() {

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['container-image']} >
                    <div className={styles['image-container']}>
                        <img src={placeHolder} className={styles['image']} alt='Pokemon' />
                    </div>
                    <div className={styles['text-container']}>
                        <h1>Nome: </h1>
                        <h1>Gênero: </h1>
                        <h1>Tipo: </h1>
                        <h1>Elemento: </h1>
                        <h1>Habilidade: </h1>
                    </div>
                </div>
            </div>
        </>
    )
}
