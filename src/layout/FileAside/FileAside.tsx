import style from './FileAside.module.css'

function FileAside() {
    return (
        <div className={style.containerPrincipal}>
            <p className={style.file}>
                <span className="material-symbols-outlined" style={{'color' : 'orange'}}>home</span>
                home.tsx
            </p>
            <p className={style.file}>
                <span className="material-symbols-outlined" style={{'color' : 'skyblue'}}>person</span>
                about-me.tsx
            </p>
            <p className={style.file}>
                <span className="material-symbols-outlined" style={{'color' : 'violet'}}>folder_copy</span>
                projects.tsx
            </p>
            <p className={style.file}>
                <span className="material-symbols-outlined" style={{'color' : 'red'}}>mail</span>
                contact.tsx
            </p>
            <p className={style.file}>
                <span className="material-symbols-outlined" style={{'color' : 'yellow'}}>bolt</span>
                skills.tsx
            </p>
        </div>
    )
}

export default FileAside