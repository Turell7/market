/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './styles.module.css'
import telephone from '../../assets/telephone-handle-silhouette_icon-icons.com_73380.svg'
import cart from '../../assets/basket_96252.svg'
import profile from '../../assets/4092564-about-mobile-ui-profile-ui-user-website_114033.svg'
import { Modal } from '../Modal'
import { FormRegistration } from '../FormRegistration'
import { FormAuthorization } from '../FormAuthorization'
import { clearUser } from '../../redux/slices/userSlices/userSlices'
import { getToken } from '../../tools/utils'

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [auth, setAuth] = useState(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = getToken()

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const remove = () => {
    dispatch(clearUser())
    localStorage.clear()
    navigate('/')
    setAuth((prev) => !prev)
  }

  return (
    <>
      <div className={styles.containerColor}>
        Блок с городом и ссылками
        <ul className={styles.containerWr}>
          <li><Link className={styles.Link} to="/contacts">Контакты</Link></li>
          <li><Link className={styles.Link} to="/about">О компании</Link></li>
          <li><Link className={styles.Link} to="/help">Помощь</Link></li>
        </ul>
      </div>
      <div className={styles.containerHeader}>
        <div className={styles.containerHeaderProfile}>
          <div className={styles.containerPhone}>
            <img className={styles.imgPhone} src={telephone} alt="Телефон" />
            +7 (999) 99 99 99
          </div>
          <Link className={styles.containerLogo} to="/">
            <i className="fa-brands fa-fort-awesome" />
            The Best Brand House
          </Link>
          {token ? (
            <div className={styles.containerProfile}>
              <img src={profile} onClick={() => navigate('/user')} className={styles.img} alt="Профиль" />
              <span>
                <i
                  className="fa-regular fa-star"
                  onClick={() => navigate('/favorites')}
                />
              </span>
              <img
                src={cart}
                className={styles.img}
                onClick={() => navigate('/cart')}
                alt="Корзина"
              />
              <button className={styles.btn} onClick={() => remove()} type="button">Выйти</button>
            </div>
          ) : (
            <button type="button" className={styles.btn} onClick={() => openModal()}>
              {auth ? 'Войти' : 'Зарегистрироваться'}
            </button>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeHendler={closeModal}>
        {auth ? <FormAuthorization closeModal={closeModal} change={setAuth} />
          : <FormRegistration closeModal={closeModal} change={setAuth} />}
      </Modal>
    </>
  )
}
