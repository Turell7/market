import { createPortal } from "react-dom"
import styles from './styles.module.scss'

export function Modal({ isOpen, children }) {
  if (!isOpen) return null

  return createPortal(
    <div className={styles.conteinerRoot}>
      {children}
    </div>,
    document.getElementById('modal-root'),
  )
}