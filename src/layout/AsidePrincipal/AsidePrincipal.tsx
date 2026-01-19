import style from './AsidePrincipal.module.css'

function AsidePrincipal() {
    return (
        <div className={style.containerPrincipal}>
            <span className="material-symbols-outlined">file_copy</span>
            <span className="material-symbols-outlined">search</span>
            <span className="material-symbols-outlined">folder</span>
        </div>
    )
}

export default AsidePrincipal