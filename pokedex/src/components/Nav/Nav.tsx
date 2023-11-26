import React from 'react';
import styles from './Nav.module.css';
import logo from '../../assets/logoPokemon.png';
import { Link } from 'react-router-dom';
import * as data from './links.json';

const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
    label: string;
    href: string;
};

const Links: React.FC<{links: Link[]}> = ({links}) => {
    return (
        <>
            <div className={styles['links-container']}>
                {links.map((link: Link) => {
                    return (
                        <div key={link.href} className={styles['link']}>
                            <Link to={link.href}>{link.label}</Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

const Nav: React.FC<{}> = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles['logo-container']}>
                <img src={logo} />
            </div>
            <Links links={links} />
        </nav>
    )
}

export default Nav;