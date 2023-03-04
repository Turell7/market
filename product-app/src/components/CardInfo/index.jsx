/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
/* eslint-disable no-mixed-operators */
/* eslint-disable consistent-return */
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { api } from '../../../Api'
import styles from './styles.module.scss'
import { Loader } from '../Loader/Loader'
import { addItem } from '../../redux/slices/cartSlice/cartSlice'
import { addFavorite } from '../../redux/slices/favoriteSlice/favorteSlice'
import { getToken } from '../../tools/utils'

const PRODUCTS_BYID_QUERY_KEY = ['PRODUCTS_BYID_QUERY_KEY']

export function CardInfo() {
  const { id } = useParams()
  const token = getToken()
  const dispatch = useDispatch()

  const obj = { id: Number(id) }
  const favorite = useSelector((store) => store.favorites.items)
  const isLike = favorite.find((el) => el.id === Number(id))

  const addProductRedux = () => {
    dispatch(addItem({ id }))
    toast.success('Товар добавлен в корзину')
  }

  const favoritesFn = () => {
    if (isLike) {
      dispatch(addFavorite(obj))
      toast.success('Товар удалён из избранного')
    } else {
      dispatch(addFavorite(obj))
      toast.success('Товар добавлен в избранное')
    }
  }

  const { data, isLoading, isFetching } = useQuery({
    queryKey: PRODUCTS_BYID_QUERY_KEY,
    queryFn: () => api.getProductById(id),
  })

  const discountImgFn = () => {
    if (data.data.discount > 0) {
      return (
        <div className={styles.discount}>
          -
          {data.data.discount}
          %
        </div>
      )
    }
  }

  const discountPriceFn = () => data.data.price - (data.data.price / 100 * data.data.discount)

  return (
    <div className={styles.CardInfoWr}>
      {(isLoading || isFetching)
        ? <Loader />
        :
        (
          <>
            <div className={styles.CardWr}>
              <div className={styles.imgBorder}>
                <div className={styles.imgWr}>
                  <img style={{ backgroundImage: 'url(' + data.data.image + ')' }} />
                  {discountImgFn()}
                </div>
              </div>
              <div className={styles.textBorder}>
                <div className={styles.textWr}>
                  {token && (
                  <p className={styles.favorites}>
                    <button
                      type="button"
                      onClick={favoritesFn}
                      className={styles.favoritesBtn}
                    >
                      <span className={isLike ? styles.favoritesTrue : styles.favoritesFalse}><i className="fas fa-star" /></span>
                      <span className={styles.starWr}><i className="fa-regular fa-star" /></span>
                    </button>
                  </p>
                  )}
                  <p>{data.data.name}</p>
                  {!token && (
                  <span className={styles.star}>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </span>
                  )}
                  <p>
                    {data.data.discount > 0 ? discountPriceFn() : data.data.price}
                    p.
                  </p>
                  {token && (
                  <button type="button" onClick={() => addProductRedux(id)} className={styles.btn}>
                    <span>
                      <i
                        className="fa-solid fa-basket-shopping"
                      />
                      В корзину
                    </span>
                  </button>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.descriptionWr}>
              <div className={styles.descriptionBorder}>
                {data.data.description}
              </div>
            </div>
          </>
        )}
    </div>
  )
}
