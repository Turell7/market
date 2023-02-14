import { Advertisement } from '../../components/Advertisement/Advertisement'
import { Catalog } from '../Catalog/Catalog'
import styles from './styles.module.scss'

export function Home() {

  return (
    <>
      <div className={styles.homeWr}>
        <div className={styles.advertisementWr}>
          <Advertisement />
        </div>
        <div className={styles.catalogWr}>
          <Catalog />
        </div>
    </div>
    </>
  )
}