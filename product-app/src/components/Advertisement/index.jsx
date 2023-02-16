
import { AdvertisementCard } from '../AdvertisementCard'
import styles from './styles.module.scss'

export function Advertisement() {

  return (
      <div className={styles.advertisementWr}>
        <div className={styles.advertisementWrLeftCard}>
            <AdvertisementCard />
        </div>
        <div className={styles.advertisementWrRight}>
            <div className={styles.advertisementWrRightUpCard}>
            <AdvertisementCard />
            </div>
            <div className={styles.advertisementWrRightDown}>
                <div className={styles.advertisementWrRightDownLeftCard}>
                <AdvertisementCard />
                </div>
                <div className={styles.advertisementWrRightDownRightCard}>
                <AdvertisementCard /> 
                </div>            
            </div>            
        </div>
    </div>
  )
}