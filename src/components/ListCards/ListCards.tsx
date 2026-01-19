import Card from '../Card/Card'
import style from './ListCards.module.css'

interface IListCrads {
    cards: string[]
}

function ListCards({cards} : IListCrads) {
    return (
        <div className={style.containerCards}>
            {cards.map(card => (
                <Card name={card}/>
            ))}
        </div>
    )
}

export default ListCards