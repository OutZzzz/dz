import './Button.css'

function Button({text, onClick}) {
  
  return (
    <button className='search-button-text' onClick={onClick}>{text}</button>
  )
}

export default Button