import style from './ListCards.module.css'

interface IListCrads {
    cards: string[]
}

function ListCards({cards} : IListCrads) {
    return (
        <div className={style.containerCards}>
            {cards.map(card => (
                <div className={style.card}>
                    {card}
                </div>
            ))}
        </div>
    )
}

export default ListCards