import { Letter } from '../Letter'
import styles from './style.module.css'

export function LettersUsed() {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras utilizadas</h5>

      <div>
        <Letter color="correct" size="small" value="R" />
        <Letter color="wrong" size="small" value="X" />
      </div>
    </div>
  )
}
