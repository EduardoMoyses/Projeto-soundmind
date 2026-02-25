import Botao from "../reutilizaveis/botao"
import { fases } from "./fases"
import { useRef, useState, useEffect } from "react"
import styles from './jogar.module.css'

function Jogar() {

    const [faseAtual, setfaseAtual] = useState(0)
    const [gameOver, setGameOver] = useState(false);
    const [gameLost, setGameLost] = useState(false);
    const fase = fases[faseAtual]
    const [isPlaying, setisPlaying] = useState(false)
    const audioRef = useRef(null)

    useEffect(() => {
    if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
        audioRef.current.load()
        setisPlaying(false)
        }
    }, [faseAtual])


    function togglePlay() {
        if(isPlaying) {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
        } else {
            audioRef.current.play()
        }
        setisPlaying(prev => !prev)
    }

    function verificarResposta(opcao) {
        if(opcao === fase.respostacerta) {
            if(faseAtual < fases.length -1) {
                setfaseAtual(prev => prev + 1)
            } else {
                setGameOver(true)
            } 
        } else {
                setGameLost(true)
            }

    }

    function jogarDeNovo() {
        setfaseAtual(0)
        setGameLost(false)
        setGameOver(false)
    }

    if (gameOver) {
        return <h2>Parabéns! Você completou todas as fases!</h2>;
    }

    if (gameLost) {
        return (
            <div className={styles.layout}>
                <h2>Você perdeu! Tente novamente.</h2>
                <Botao onClick={jogarDeNovo} text='Tente Novamente'/>
            </div>
        )
    }

    return (
        <div className={styles.layout}>
            <audio ref={audioRef} key={fase.som}>
  <source src={fase.som} type="audio/mpeg" />
</audio>
            <div onClick={togglePlay}>

            {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi       bi-pause-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
                </svg>) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                </svg>
            )}
            </div>

            <div className={styles.botoes}>
                {fase.opcoes.map((opcao, index,) => (
                    <Botao key={index} text={opcao} onClick={() => verificarResposta(opcao)} />
                ))}
            </div>
        </div>
    )
}

export default Jogar