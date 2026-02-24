import styles from './home.module.css'
import Botao from '../reutilizaveis/botao'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className={styles.fundo}>
            <div className={styles.conteudo}>
                <h2 className={styles.titulo}>COMECE SUA JORNADA SONORA!</h2>
                <p className={styles.paragrafo}>SoundMind é mais do que um jogo — é um exercício mental que aguça sua audição, memória e reflexos. <br/> Toque, ouça e descubra se você consegue identificar os sons certos no tempo certo. <br/> Está pronto para o desafio?</p>
                <Link to='/jogar'>
                    <Botao text='jogar'/>
                </Link>
            </div>
        </div>
    )
}

export default Home