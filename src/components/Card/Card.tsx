import style from './Card.module.css'

interface ICard {
    name: string
}

function Card({name} : ICard) {
    return (
        <div className={style.card}>
            {name}
        </div>
    )
}

export default Card