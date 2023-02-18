import { Link, useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import telephone from '../../assets/telephone-handle-silhouette_icon-icons.com_73380.svg'
import cart from '../../assets/basket_96252.svg'
import profile from '../../assets/4092564-about-mobile-ui-profile-ui-user-website_114033.svg'
import { Modal } from '../Modal'
import { FormRegistration } from '../FormRegistration'
import { FormAuthorization } from '../FormAuthorization'
import { useSelector } from 'react-redux'
import { useState } from 'react'


export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [auth, setAuth] = useState(true)
  const navigate = useNavigate()

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const remove = () => {
    localStorage.clear()
    setAuth((prev) => !prev)
  }

  const userToken = localStorage.getItem('USER_KEY')

  return (
    <>
      <div className={styles.containerColor}>
        Блок с городом и ссылками
        <ul className={styles.containerWr}>
          <li><Link className={styles.Link} to='/contacts'>Контакты</Link></li>
          <li><Link className={styles.Link} to='/about'>О компании</Link></li>
          <li><Link className={styles.Link} to='/help'>Помощь</Link></li>
        </ul>
      </div>
      <div className={styles.containerHeader}>
      <div className={styles.containerHeaderProfile}>
        <div className={styles.containerPhone}>
          <img className={styles.imgPhone} src={telephone} alt='Телефон'/>
          +7 (999) 99 99 99
        </div>
        <div className={styles.containerLogo}>The Best Brand House</div>
        {userToken? ( 
          <div className={styles.containerProfile}>
          <img src={profile} onClick={() => navigate('/user')} className={styles.img} alt='Профиль' />
          <img src={cart} className={styles.img} alt='Корзина' />
          <button className={styles.btn} onClick={() => remove()} type="button">Выйти</button>
        </div>
        ) : (
          <button type="button" className={styles.btn} onClick={() => openModal()}>
            {auth ? "Войти" : "Зарегистрироваться"}
          </button>
        )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeHendler={closeModal}>
        {auth ?
          <FormAuthorization closeModal={closeModal} change={setAuth} />
        :
          <FormRegistration closeModal={closeModal} change={setAuth} />
        }
      </Modal>
    </>
  )
}