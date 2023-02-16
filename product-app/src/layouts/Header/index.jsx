import { Link, useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import telephone from '../../assets/telephone-handle-silhouette_icon-icons.com_73380.svg'
import cart from '../../assets/basket_96252.svg'
import profile from '../../assets/4092564-about-mobile-ui-profile-ui-user-website_114033.svg'
import { useState } from 'react'
import { Modal } from '../Modal'
import { FormRegistration } from '../FormRegistration'
import { FormAuthorization } from '../FormAuthorization'


export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const user = localStorage.getItem('user')

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
          +7(999)-99-99-99
        </div>
        <div className={styles.containerLogo}>Логотип</div>
        {/* {user ? ( */}
          <div className={styles.containerProfile}>
          <img src={profile} onClick={() => navigate('/user')} className={styles.img} alt='Профиль' />
          <img src={cart} className={styles.img} alt='Корзина' />
        </div>
        {/* ) : ( */}
          <button type="button" className={styles.btn} onClick={() => openModal()}>Войти</button>
        {/* )} */}
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeHendler={closeModal}>
        {user ?
          <FormAuthorization closeModal={closeModal} />
        :
          <FormRegistration closeModal={closeModal} />
        }
        {/* <FormRegistration closeModal={closeModal} /> */}
        {/* <FormAuthorization closeModal={closeModal} /> */}
      </Modal>
    </>
  )
}