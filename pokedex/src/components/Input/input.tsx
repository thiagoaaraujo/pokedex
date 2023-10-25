import styles from './input.module.css'

export default function InputPage() {
    return(
        <>
            <h2 className={styles['title']}>Pokémon</h2>
            <input className={styles['input']} type="text" />
            <button className={styles['button']} type="submit">Enviar</button>
        </>
    )
}