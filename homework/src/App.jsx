import './App.css'
import Button from './components/Button/Button';
import SearchInput from './components/SearchInput/SearchInput';
import Paragraph from './components/Paragraph/Paragraph';
import Title from './components/Title/Title'
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';


const INITIAL_DATA = [
  {
    id: 1,
    tag: 324,
    img: '/m1.png',
    title: 'Black Widow'
  },
  {
    id: 2,
    tag: 124,
    img: '/m2.png',
    title: 'Shang Chi'
  },
  {
    id: 3,
    tag: 235,
    img: '/m3.png',
    title: 'Loki'
  },
  {
    id: 4,
    tag: 123,
    img: '/m4.png',
    title: 'How I Met Your Mother'
  },
  {
    id: 5,
    tag: 8125,
    img: '/m5.png',
    title: 'Money Heist'
  },
  {
    id: 6,
    tag: 123,
    img: '/m6.png',
    title: 'Friends'
  },
  {
    id: 7,
    tag: 1287,
    img: '/m7.png',
    title: 'The Big Bang Theory'
  },
  {
    id: 8,
    tag: 456,
    img: '/m8.png',
    title: 'Two And a Half Men'
  },
]

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
    <div className='search-container'>
      <div className='search-text'>
        <Title title={title}/>
        <Paragraph text={text}/>
      </div>
      <div className='search-input-wrapper'>
        <SearchInput placeholder={mainPlaceholderText}/>
        <Button text={buttonText} onClick={clickEvent}/>
      </div>
    </div>
    <CardList items={INITIAL_DATA}/>
    </>
  )
}

export default App
