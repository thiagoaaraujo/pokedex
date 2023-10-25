import React from 'react';
import styles from './Nav.module.css';
import logo from '../../assets/logoPokemon.png';



const Nav: React.FC<{}> = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles['logo-container']}>
                <img src = { logo } />
            </div>
        </nav>
    )
}

export default Nav