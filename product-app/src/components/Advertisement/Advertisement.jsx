import styles from './styles.module.scss'

export function Advertisement() {

  return (
      <div className={styles.advertisementWr}>
        <div>
            Left
        </div>
        <div className={styles.advertisementWrRight}>
            <div>
            RightUp
            </div>
            <div className={styles.advertisementWrRightDown}>
                <div>
                RightDownLeft
                </div>
                <div className={styles.advertisementWrRightDownRight}>
                  RightDownRight  
                </div>            
            </div>            
        </div>
    </div>
  )
}