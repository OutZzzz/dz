import './App.css'
import Button from './components/Button/Button';
import SearchInput from './components/SearchInput/SearchInput';
import Paragraph from './components/Paragraph/Paragraph';
import Title from './components/Title/Title'
import Header from './components/Header/Header';

function App() {
  const title = "Поиск";
  const text = "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.";
  const buttonText = "Искать";
  const mainPlaceholderText = "Введите название"

  const clickEvent = () => {
    console.log('click')
  } 

  return (
    <>
    <Header/>
    <div>
      <Title title={title}/>
      <Paragraph text={text}/>
    </div>
    <div className='search-wrapper'>
      <SearchInput placeholder={mainPlaceholderText}/>
      <Button text={buttonText} onClick={clickEvent}/>
    </div>
    </>
  )
}

export default App
