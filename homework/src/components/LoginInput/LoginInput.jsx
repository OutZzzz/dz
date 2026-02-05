import './LoginInput.css'

function LoginInput({value, onChange, placeholder}) {
  
  return (
    <input className='input-login' type="text" placeholder={placeholder} value={value} onChange={onChange}/>
  )
}

export default LoginInput