import styles from './LoginInput.module.css'

function LoginInput({value, onChange, placeholder}) {
  
  return (
    <input className={styles['input-login']} type="text" placeholder={placeholder} value={value} onChange={onChange}/>
  )
}

export default LoginInput