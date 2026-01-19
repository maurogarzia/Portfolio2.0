import style from './Home.module.css'
import photo from '../../assets/photo.jpg'

function Home() {

    const data = [
        { key: 'Nombre', value: 'Mauro' },
        { key: 'Título', value: 'Técnico Superior en Programación' },
        { key: 'Ubicación', value: 'Mendoza, Argentina' },
        { key: 'Disponible', value: 'true' }
    ];


    const getColor = (value: any) => {
        if (value === 'true') return 'rgb(183, 2, 183)'
        return '#008000'
    }

    return (
        <div className={style.containerPrincipal}>
            <div className={style.personalData}>
                <div className={style.image}>
                    <img src={photo} alt="" />
                </div>

                <div className={style.data}>
                    {data.map((d, i) => (
                        <div key={i} className={style.item}>
                            <span style={{color: 'rgb(135, 206, 235)'}}>{d.key}:</span>
                            <span style={{color: getColor(d.value)}}>{d.value === 'true' ? d.value : `"${d.value}"`}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={style.containerInfo}>
                <p className={style.title}>Desarrollador Full Stack</p>
                <p className={style.paragraph}>
                    Soy un desarrollador apasionado apasionado programador con experiencia en React, y TypeScript, tengo 22 años
                    me encanta transformar ideas en soluciones digitales eficientes y funcionales, priorizando siempre la calidad
                    del código y la experiencia del usuario.

                </p>
                <p className={style.paragraph}>
                    He trabajado en proyectos personales que incluyen el desarrollo de aplicaciones web interactivas,
                    automatización de procesos e integración de API's robustas. Mi enfoque combina creatividad y análisis
                    para resolver problemas complejos de manera efectiva. 
                </p>
            </div>
        </div>
    )
}

export default Home