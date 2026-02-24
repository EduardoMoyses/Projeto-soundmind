import styles from './header.module.css';
import Navbar from './navbar';

function Header() {
    return (
        <header className={styles.titulo}>
            <h1>SoundMind: Desafie sua Mente com Sons</h1>
            <p className={styles.paragrafo}>treine seu cérebro de forma divertida! Escute, reconheça e acerte os sons certos neste desafio que mistura memória, audição e agilidade.</p>
            <Navbar />
        </header>
    )
}

export default Header