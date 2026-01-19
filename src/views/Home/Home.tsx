import style from './Home.module.css'
// Importa Prism + tema ESM
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vsDark } from 'react-syntax-highlighter/dist/esm/styles/prism';



function Home() {

    const data = `const data = {
        Nombre: "Mauro",
        Titulo: "Técnico Superior en Programación",
        Ubicacion: "Mendoza, Argentina",
        Disponibilidad: true
    }`

    return (
        <div className={style.containerPrincipal}>
            <div className={style.personalData}>
                <img src="" alt="" />
                <SyntaxHighlighter language="javascript" style={vsDark} showLineNumbers>
                    {data}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default Home