import { useQuery } from '@tanstack/react-query'
import { api } from '../../../Api'
import styles from './styles.module.scss'

export const CATEGORY = ['CATEGORY']

export function TopNav() {
  const { data } = useQuery({
    queryKey: CATEGORY,
    queryFn: () => api.getProductsCategory(),
  })

  return (
    <div className={styles.containerCategoty}>
      <div className={styles.container}>
        {data?.data.map((el) => (
          <div key={el.id}>{el.name}</div>
        ))}
      </div>
    </div>
  )
}
