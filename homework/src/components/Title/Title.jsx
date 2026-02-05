import styles from './Title.module.css'

function Title({title}) {
  
  return (
    <h1 className={styles['header-title']}>{title}</h1>
  )
}

export default Title