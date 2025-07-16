/** biome-ignore-all lint/performance/noImgElement: ignore */
import logo from '../../assets/logo.png'
import restart from '../../assets/restart.svg'

import styles from './styles.module.css'

export function Header() {
  return (
    <div className={styles.container}>
      <img alt="Logo" src={logo} />

      <header>
        <span>
          <strong>5</strong> de 10 tentativas
        </span>

        <button type="button">
          <img alt="Ícone de reiniciar" src={restart} />
        </button>
      </header>
    </div>
  )
}
