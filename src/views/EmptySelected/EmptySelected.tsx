import style from './EmptySelected.module.css'

function EmptySelected() {
    return (
        <div className={style.containerPrincipal}>
            <p>Abrí un archivo desde el explorador</p>
        </div>
    )
}

export default EmptySelected