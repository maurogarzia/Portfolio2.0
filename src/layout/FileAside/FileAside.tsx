import style from './FileAside.module.css'

function FileAside() {
    return (
        <div className={style.containerPrincipal}>
            <p>
                home.tsx
            </p>
            <p>
                about-me.tsx
            </p>
            <p>
                projects.tsx
            </p>
            <p>
                contact.tsx
            </p>
            <p>
                skills.tsx
            </p>
        </div>
    )
}

export default FileAside