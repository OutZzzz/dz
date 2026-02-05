import styles from './CardList.module.css'
import Card from '../Card/Card';

function CardList({ items }) {
    if (items.length === 0) {
        return <p>Фильмы не найдены</p>
    }


    return (
        <div className={styles['main-card-list']}>
        {items.map(el => (
            <Card 
                key={el.id}
                title={el.title}
                tag={el.tag}
                img={el.img}
            />
        ))}
        </div>
    )
}

export default CardList