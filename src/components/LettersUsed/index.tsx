import { Letter } from '../Letter'
import styles from './style.module.css'

export type LettersUsedProps = {
  value: string
  correct: boolean
}

type Props = {
  data: LettersUsedProps[]
}

export function LettersUsed({ data }: Props) {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras utilizadas</h5>

      <div>
        {data.map(({ value, correct }) => (
          <Letter
            color={correct ? 'correct' : 'wrong'}
            key={value}
            size="small"
            value={value}
          />
        ))}
      </div>
    </div>
  )
}
