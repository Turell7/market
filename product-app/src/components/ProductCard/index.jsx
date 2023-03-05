/* eslint-disable no-mixed-operators */
/* eslint-disable prefer-template */
/* eslint-disable spaced-comment */
/* eslint-disable jsx-a11y/alt-text */
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addFavorite } from '../../redux/slices/favoriteSlice/favorteSlice'
import { getToken } from '../../tools/utils'
import styles from './styles.module.scss'
//import backgroundImg from '../../assets/background.jpg'

export function ProductCard({
  id, image, name, price, discount,
}) {
  const navigate = useNavigate()
  const cardInfo = () => navigate(`/card/${id}`)
  const token = getToken()
  const dispatch = useDispatch()

  const favorite = useSelector((store) => store.favorites.items)
  const isLike = favorite.find((el) => el.id === id)

  const likesClickFn = (Event) => {
    Event.stopPropagation()
    Event.preventDefault()
    if (isLike) {
      dispatch(addFavorite({ id }))
      toast.success('Товар удалён из избранного')
    } else {
      dispatch(addFavorite({ id }))
      toast.success('Товар добавлен в избранное')
    }
  }

  const discountImgFn = () => {
    if (discount > 0) {
      return (
        <div className={styles.discount}>
          -
          {discount}
          %
        </div>
      )
    }
    return null
  }

  const discountPriceFn = () => price - (price / 100 * discount)

  return (
    <div className={styles.productCardWr}>
      <div className={styles.CardWr}>
        <div className={styles.imgWr} role="presentation" onClick={cardInfo}>
          {/* <img src={backgroundImg} /> Используем картинку как "img"*/}
          <img style={{ backgroundImage: 'url(' + image + ')' }} /*Используем картинку как "backgroundImage" *//>
          {discountImgFn()}
          {token && (
          <span className={styles.favorites} role="presentation" onClick={likesClickFn}>
            <span className={(isLike) ? styles.favoritesTrue : styles.favoritesFalse}><i className="fas fa-star" /></span>
            <span className={styles.starWr}><i className="fa-regular fa-star" /></span>
          </span>
          )}
        </div>
        <div className={styles.textWr}>
          <p>{name}</p>
          <p className={styles.rating}>
            <span className={styles.starTrue}><i className="fa-solid fa-star" /></span>
            <span className={styles.starTrue}><i className="fa-solid fa-star" /></span>
            <span className={styles.starTrue}><i className="fa-solid fa-star" /></span>
            <span className={styles.starTrue}><i className="fa-solid fa-star" /></span>
            <span className={styles.starTrue}><i className="fas fa-star" /></span>
          </p>
          <p>
            {discount > 0 ? discountPriceFn() : price}
            p.
          </p>
        </div>
      </div>
    </div>
  )
}
