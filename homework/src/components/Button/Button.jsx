import styles from './Button.module.css'

function Button({text, onClick}) {
  
  return (
    <button className={styles['search-button-text']} onClick={onClick}>{text}</button>
  )
}

export default Button