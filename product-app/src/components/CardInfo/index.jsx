import styles from './styles.module.scss'
import backgroundImg from '../../assets/background.jpg'

export function CardInfo() {

const basketQuantity = () => {
  console.log("В корзину")
}

  return (
      <div className={styles.CardInfoWr}>
        <div className={styles.CardWr}>
          <div className={styles.imgBorder}>
              <div className={styles.imgWr}>
                  {/* <img src={backgroundImg} /> Используем картинку как "img"*/}
                  <img style={{ backgroundImage: 'url(' + backgroundImg + ')'}} /*Используем картинку как "backgroundImage" *//>
                </div>
            </div>
            <div className={styles.textBorder}>
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
              <button type="button" onClick={basketQuantity} className={styles.btn}>
                  <span>
                    <i className="fa-solid fa-basket-shopping" />
                    В корзину
                  </span>
                </button>
              </div>
            </div>
        </div>
        <div className={styles.descriptionWr}>
          <div className={styles.descriptionBorder}>
            Описание товара            
          </div>
        </div>     
    </div>
  )
}    