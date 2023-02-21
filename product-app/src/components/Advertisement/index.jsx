/* eslint-disable spaced-comment */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable prefer-template */
import styles from './styles.module.scss'
import backgroundImg from '../../assets/background.jpg'

export function Advertisement() {
  return (
    <div className={styles.advertisementWr}>
      <div className={styles.WrLeftCard} style={{ backgroundImage: 'url(' + backgroundImg + ')' }} /*Используем картинку как "backgroundImage" */>
        <h3 className={styles.textLeftCard}>Большой рекламный слоган</h3>
      </div>
      <div className={styles.advertisementWrRight}>
        <div className={styles.WrRightUpCard} style={{ backgroundImage: 'url(' + backgroundImg + ')' }} /*Используем картинку как "backgroundImage" */>
          <h3 className={styles.textRightUpCard}>Большой рекламный слоган</h3>
        </div>
        <div className={styles.advertisementWrRightDown}>
          <div className={styles.WrRightDownLeftCard} style={{ backgroundImage: 'url(' + backgroundImg + ')' }} /*Используем картинку как "backgroundImage" */>
            <h3 className={styles.textRightDownLeftCard}>Большой рекламный слоган</h3>
          </div>
          <div className={styles.WrRightDownRightCard} style={{ backgroundImage: 'url(' + backgroundImg + ')' }} /*Используем картинку как "backgroundImage" */>
            <h3 className={styles.textRightDownRightCard}>Большой рекламный слоган</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
