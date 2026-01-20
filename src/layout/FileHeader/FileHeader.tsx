import { selectStore } from '../../store/select.store'
import CardHeader from './components/CardHeader/CardHeader'
import style from './FileHeader.module.css'

function FileHeader() {

    const {cardsOpen} = selectStore()

    return (
        <div className={style.containerPrincipal}>
            <p>Explorer</p>
            <div className={style.tabs}>
                {cardsOpen.map(card => 
                    <CardHeader name={card.name} span={card.span} color={card.color}/>
                )}
            </div>
        </div>
    )
}

export default FileHeader