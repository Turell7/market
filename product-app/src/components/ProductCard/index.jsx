import styles from './styles.module.scss'
import backgroundImg from '../../assets/background.jpg'

export function ProductCard() {

  return (
      <div className={styles.productCardWr}>
        <div className={styles.CardWr}>
              <div className={styles.imgWr}>
                  {/* <img src={backgroundImg} /> Используем картинку как "img"*/}
                  <img style={{ backgroundImage: 'url(' + backgroundImg + ')'}} /*Используем картинку как "backgroundImage" *//>
                </div>
              <div className={styles.textWr}>
                <p>Название товара</p>
                <p className={styles.rating}>
                  <span className={styles.starTrue}><i className="fa-solid fa-star" /></span>
                  <span className={styles.starTrue}><i className="fa-solid fa-star" /></span>
                  <span className={styles.starTrue}><i className="fa-solid fa-star" /></span>
                  <span className={styles.starTrue}><i className="fa-solid fa-star" /></span>
                  <span className={styles.starTrue}><i className="fas fa-star"></i></span>
                </p>
                <p>Цена</p>
              </div>
        </div>     
    </div>
  )
}    