import styles from './input.module.css';
import pokemon from '../../assets/13.png';

export default function InputPage() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['container-image']}>
                    <img src={pokemon} className={styles['image']} alt='Pokémon' />
                </div>
                <div className={styles['container-input']}>
                    <h2 className={styles['title']}>Quem é esse pokemon?</h2>
                    <input className={styles['input']} type="text" />
                    <button className={styles['button']} type="submit">Enviar</button>
                </div>
            </div>
        </>
    )
}