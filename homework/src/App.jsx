import './App.css'
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';
import Title from './components/Title/Title'

function App() {
  const title = "Поиск";
  const text = "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.";
  const buttonText = "Искать";
  return (
    <>
    <div>
      <Title title={title}/>
      <Paragraph text={text}/>
    </div>
    <Button text={buttonText}/>
    </>
  )
}

export default App
