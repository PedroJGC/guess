import { useEffect, useState } from 'react'
import styles from './app.module.css'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Letter } from './components/Letter'
import { LettersUsed, type LettersUsedProps } from './components/LettersUsed'
import { Tip } from './components/Tip'
import { type Challenge, WORDS } from './utils/words'

export default function App() {
  const [letter, setLetter] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([])
  const [challenge, setChallenge] = useState<Challenge | null>(null)

  function handleRestartGame() {
    alert('Reiniciar o jogo!')
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]

    setChallenge(randomWord)

    setAttempts(0)
    setLetter('')
  }

  useEffect(() => {
    startGame()
  }, [])

  if (!challenge) {
    return
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />

        <Tip tip="Uma das linguagens de programação mais utilizadas" />

        <div className={styles.word}>
          {challenge.word.split('').map(() => (
            <Letter value="" />
          ))}
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar" />
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  )
}
