import { selectStore, type ICardSelected } from '../../store/select.store'
import { viewStore } from '../../store/view.store'
import style from './FileAside.module.css'

function FileAside() {

    const {setView} = viewStore()
    const {createCard, cardsOpen} = selectStore()

    const handleOpen = (name: string, span: string, color: string) => {
    const exist = cardsOpen.find(card => card.name === name)

    if (!exist) {
        const newCard: ICardSelected = { name, span, color }
        createCard(newCard)
    }

    setView(name)
}

    return (
        <div className={style.containerPrincipal}>
            <p className={style.file} onClick={() => handleOpen('home', 'home', 'orange')}>
                <span className="material-symbols-outlined" style={{'color' : 'orange'}}>home</span>
                home.tsx
            </p>
            <p className={style.file} onClick={() => handleOpen('aboutMe', 'person', 'skyblue')}>
                <span className="material-symbols-outlined" style={{'color' : 'skyblue'}}>person</span>
                about-me.tsx
            </p>
            <p className={style.file} onClick={() => handleOpen('projects','folder_copy', 'violet')}>
                <span className="material-symbols-outlined" style={{'color' : 'violet'}}>folder_copy</span>
                projects.tsx
            </p>
            <p className={style.file} onClick={() => handleOpen('contact', 'email', 'red')}>
                <span className="material-symbols-outlined" style={{'color' : 'red'}}>mail</span>
                contact.tsx
            </p>
            <p className={style.file} onClick={() => handleOpen('skills', 'bolt', 'yellow')}>
                <span className="material-symbols-outlined" style={{'color' : 'yellow'}}>bolt</span>
                skills.tsx
            </p>
        </div>
    )
}

export default FileAside