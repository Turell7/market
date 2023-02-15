import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import telephone from '../../assets/telephone-handle-silhouette_icon-icons.com_73380.svg'
import cart from '../../assets/basket_96252.svg'
import profile from '../../assets/4092564-about-mobile-ui-profile-ui-user-website_114033.svg'
import { useState } from 'react'
import { Modal } from '../ModalRegistration'
import { FormRegistration } from '../FormRegistration'


export function Header() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const user = localStorage.getItem('user')

  return (
    <div className={styles.containerHeader}>
      <div className={styles.containerColor}>
        Блок с городом и ссылками
        <ul className={styles.containerWr}>
          <li><Link className={styles.Link} to='/contacts'>Контакты</Link></li>
          <li><Link className={styles.Link} to='/about'>О компании</Link></li>
          <li><Link className={styles.Link} to='/help'>Помощь</Link></li>
        </ul>
      </div>
      <div className={styles.containerHeaderProfile}>
        <div className={styles.containerPhone}>
          <img className={styles.imgPhone} src={telephone} alt='Телефон'/>
          +7(999)-99-99-99
        </div>
        <div className={styles.containerLogo}>Логотип</div>
        {user ? (
          <div className={styles.containerProfile}>
          <img src={profile} className={styles.imgPhone} alt='Профиль' />
          <img src={cart} className={styles.imgPhone} alt='Корзина' />
        </div>
        ) : (
          <button type="button" className={styles.btn} onClick={() => openModal()}>Регистрация</button>
        )}
        </div>
        <Modal isOpen={isModalOpen} closeHendler={closeModal}>
          <FormRegistration closeModal={closeModal} />
          </Modal>
      </div>
  )
}