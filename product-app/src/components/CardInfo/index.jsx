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
import { useDispatch } from 'react-redux'
import { api } from '../../../Api'
import styles from './styles.module.scss'
import { Loader } from '../Loader/Loader'
import { addItem } from '../../redux/slices/cartSlice/cartSlice'

const PRODUCTS_BYID_QUERY_KEY = ['PRODUCTS_BYID_QUERY_KEY']

export function CardInfo() {
  const dispatch = useDispatch()

  const addProductRedux = (id) => {
    console.log(id)
    dispatch(addItem({ id }))
  }

  const { id } = useParams()

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
                  <p className={styles.favorites}>
                    <button type="button" onClick={favoritesFn} className={styles.favoritesBtn}>
                      <i className="fas fa-star" />
                      Добавить в избранное
                      <i className="fas fa-star" />
                    </button>

                  </p>
                  <p>{data.data.name}</p>
                  <p>
                    {data.data.discount > 0 ? discountPriceFn() : data.data.price}
                    p.
                  </p>
                  <button type="button" onClick={() => addProductRedux(data.data.id)} className={styles.btn}>
                    <span>
                      <i
                        className="fa-solid fa-basket-shopping"
                      />
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
          </>
        )}
    </div>
  )
}
