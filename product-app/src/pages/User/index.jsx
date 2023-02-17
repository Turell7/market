import { Link } from "react-router-dom"
import images from '../../assets/456212.png'
import styles from './styles.module.scss'


export function User() {
  return (
    <>
      <div className={styles.containerUser}>
        <div className={styles.userAvatar}>
          <img className={styles.user} src={images} alt='Аватар' />
        </div>
        <div className={styles.aboutUser}>
          <h4>Имя</h4>
          <h4>Фамилия</h4>
          <h4>E-mail</h4>
          <div className={styles.aboutUserBtn}>
            <button className={styles.btn} type='button'>Редатировать профиль</button>
          </div>
        </div>
      </div>
      <Link to='/'>На главную</Link>
    </>
  )
}