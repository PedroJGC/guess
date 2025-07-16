/** biome-ignore-all lint/performance/noImgElement: ignore */

import tipIcon from '../../assets/tip.svg'
import styles from './styles.module.css'

type Props = {
  tip: string
}

export function Tip({ tip }: Props) {
  return (
    <div className={styles.tip}>
      <img alt="Ícone de dica" src={tipIcon} />

      <div>
        <h3>Dica</h3>
        <p>{tip}</p>
      </div>
    </div>
  )
}
