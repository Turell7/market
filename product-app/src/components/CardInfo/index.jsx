import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { api } from '../../../Api'
import styles from './styles.module.scss'
//import backgroundImg from '../../assets/background.jpg'
import { Loader } from '../Loader/Loader'

const PRODUCTS_BYID_QUERY_KEY = ['PRODUCTS_BYID_QUERY_KEY']

export function CardInfo() {

  const { id } = useParams()

  const {data, status, isError, isLoading, isFetching} = useQuery({
    queryKey: PRODUCTS_BYID_QUERY_KEY,
    queryFn: () => api.getProductById(id),
  })
  
  
 //console.log(data, status, isError, isLoading, isFetching)

 //image, name, price, discount, description

 const discountImgFn = () => {
  if (data.data.discount > 0) {
    return <div className={styles.discount}>-{data.data.discount}%</div>
  } else {
    return
  }
}

const basketQuantity = () => {
  console.log("В корзину")
}

  return (
      <div className={styles.CardInfoWr}>
        {(isLoading || isFetching) ? 
        <Loader /> : 
        <>
        <div className={styles.CardWr}>
          <div className={styles.imgBorder}>
              <div className={styles.imgWr}>
                  {/* <img src={backgroundImg} /> Используем картинку как "img"*/}
                  <img style={{ backgroundImage: 'url(' + data.data.image + ')'}} /*Используем картинку как "backgroundImage" *//>
                  {discountImgFn()} 
                </div>
            </div>
            <div className={styles.textBorder}>
              <div className={styles.textWr}>
                <p>{data.data.name}</p>
                <p className={styles.rating}>
                  <span className={styles.starTrue}><i className="fa-solid fa-star" /></span>
                  <span className={styles.starTrue}><i className="fa-solid fa-star" /></span>
                  <span className={styles.starTrue}><i className="fa-solid fa-star" /></span>
                  <span className={styles.starTrue}><i className="fa-solid fa-star" /></span>
                  <span className={styles.starTrue}><i className="fas fa-star"></i></span>
                </p>
                <p>{data.data.price}p.</p>
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
            {data.data.description}          
          </div>
        </div>
        </>}             
    </div>
  )
}    