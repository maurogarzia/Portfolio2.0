
import { selectStore } from '../../../../store/select.store'
import { viewStore } from '../../../../store/view.store'
import style from './CardHeader.module.css'

interface ICardHeader{
    name: string,
    span: string,
    color: string
}

function CardHeader({name, span, color} : ICardHeader) {

    const {view,setView} = viewStore()
    const {deleteCard} = selectStore()

    const isActive = view === name

    return (
        <div onClick={() => setView(name)} className={style.containerPrincipal} style={{'backgroundColor': isActive ? '#4d4a4a' : 'transparent'}}>
            <div className={style.item}>
                <span className="material-symbols-outlined" style={{'color': `${color}`}}>{span}</span>
                <p>{name}</p>
            </div>
            <span className="material-symbols-outlined" onClick={() => deleteCard(name)}>close</span>
        </div>
    )
}

export default CardHeader