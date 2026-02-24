import styles from './botao.module.css'

function Botao({text, onClick}) {
    return <button className={styles.botao} onClick={onClick}>{text}</button>
}

export default Botao