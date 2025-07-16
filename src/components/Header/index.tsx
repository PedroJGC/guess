/** biome-ignore-all lint/performance/noImgElement: ignore */
import logo from '../../assets/logo.png'
import restart from '../../assets/restart.svg'

import styles from './styles.module.css'

type Props = {
  current: number
  max: number
  onRestart: () => void
}

export function Header({ current, max, onRestart }: Props) {
  return (
    <div className={styles.container}>
      <img alt="Logo" src={logo} />

      <header>
        <span>
          <strong>{current}</strong> de {max} tentativas
        </span>

        <button onClick={onRestart} type="button">
          <img alt="Ícone de reiniciar" src={restart} />
        </button>
      </header>
    </div>
  )
}
