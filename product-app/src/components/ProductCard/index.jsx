import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
//import backgroundImg from '../../assets/background.jpg'


export function ProductCard({id, image, name, price, discount}) {

  const navigate = useNavigate() 
  const cardInfo = () => navigate(`/card/${id}`) // Функция по клику совершает (navigate) на страницу карточки

//console.log({id, image, name, price, discount});

  const discountImgFn = () => {
    if (discount > 0) {
      return <div className={styles.discount}>-{discount}%</div>
    } else {
      return
    }
  }

  return (
      <div className={styles.productCardWr}>
        <div className={styles.CardWr}>
              <div className={styles.imgWr} role="presentation" onClick={cardInfo}>
                  {/* <img src={backgroundImg} /> Используем картинку как "img"*/}
                  <img style={{ backgroundImage: 'url(' + image + ')'}} /*Используем картинку как "backgroundImage" *//>
                  {discountImgFn()}                  
                </div>
              <div className={styles.textWr}>
                <p>{name}</p>
                <p className={styles.rating}>
                  <span className={styles.starTrue}><i className="fa-solid fa-star" /></span>
                  <span className={styles.starTrue}><i className="fa-solid fa-star" /></span>
                  <span className={styles.starTrue}><i className="fa-solid fa-star" /></span>
                  <span className={styles.starTrue}><i className="fa-solid fa-star" /></span>
                  <span className={styles.starTrue}><i className="fas fa-star"></i></span>
                </p>
                <p>{price}p.</p>
              </div>
        </div>     
    </div>
  )
}    