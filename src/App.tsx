/** biome-ignore-all lint/correctness/useExhaustiveDependencies: ignore 
    biome-ignore-all lint/suspicious/noArrayIndexKey: ignore 
    biome-ignore-all lint/nursery/noShadow: ignore 
*/
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
  const [score, setScore] = useState(0)
  const [letter, setLetter] = useState('')
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([])
  const [challenge, setChallenge] = useState<Challenge | null>(null)

  const ATTEMPTS_MARGIN = 5

  function handleRestartGame() {
    const isConfirmed = window.confirm('Você tem certeza que deseja reiniciar?')

    if (isConfirmed) {
      startGame()
    }
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]

    setChallenge(randomWord)

    setScore(0)
    setLetter('')
    setLettersUsed([])
  }

  function handleConfirm() {
    if (!challenge) {
      return
    }

    if (!letter.trim()) {
      return alert('Digite uma letra!')
    }

    const value = letter.toUpperCase()
    const exists = lettersUsed.find(
      (used) => used.value.toUpperCase() === value
    )

    if (exists) {
      setLetter('')
      return alert(`Você já utilizou a letra ${value}`)
    }

    const hits = challenge.word
      .toUpperCase()
      .split('')
      .filter((char) => char === value.toUpperCase()).length

    const correct = hits > 0
    const currentScore = score + hits

    setLettersUsed((prevState) => [...prevState, { value, correct }])
    setScore(currentScore)

    setLetter('')
  }

  function endGame(message: string) {
    alert(message)
    startGame()
  }

  useEffect(() => {
    startGame()
  }, [])

  useEffect(() => {
    if (!challenge) {
      return
    }

    setTimeout(() => {
      if (score === challenge.word.length) {
        return endGame('Parabéns, você descobriu a palavra!')
      }

      const attemptLimit = challenge.word.length + ATTEMPTS_MARGIN
      if (lettersUsed.length === attemptLimit) {
        return endGame('Que pena, você usou todas as tentativas!')
      }
    }, 200)
  }, [score, lettersUsed.length])

  if (!challenge) {
    return
  }

  return (
    <div className={styles.container}>
      <main>
        <Header
          current={lettersUsed.length}
          max={challenge.word.length + ATTEMPTS_MARGIN}
          onRestart={handleRestartGame}
        />

        <Tip tip={challenge.tip} />

        <div className={styles.word}>
          {challenge.word.split('').map((letter, index) => {
            const letterUsed = lettersUsed.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase()
            )

            return (
              <Letter
                color={letterUsed?.correct ? 'correct' : 'default'}
                key={index}
                value={letterUsed?.value}
              />
            )
          })}
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input
            autoFocus
            maxLength={1}
            onChange={(e) => setLetter(e.target.value)}
            placeholder="?"
            value={letter}
          />
          <Button onClick={handleConfirm} title="Confirmar" />
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  )
}
