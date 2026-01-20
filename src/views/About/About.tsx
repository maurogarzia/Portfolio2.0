import type React from 'react'
import style from './About.module.css'

function About() {
    return (
        <div className={style.containerPrincipal}>
            <div className={style.paragraph}>
                <p className={style.title} style={{ '--title-color': '#2eef9eaa' } as React.CSSProperties}>Formación</p>
                
                <div className={style.info}>
                    <ul>
                        <li>Tecnicatura Superior en Programación - UTN</li>
                        <li>Desarrollo web full Stack</li>
                        <li>Backend: Node.js, Express, Mongoose / Springboot</li>
                        <li>Frontend: React + Typescript + Vite / Next.js</li>
                    </ul>
                </div>
            </div>

            <div className={style.paragraph}>
                <p className={style.title} style={{ '--title-color': '#436aeeaa' } as React.CSSProperties}>Experiencia</p>

                <div className={style.info}>
                    <p>Desarrollador Full Stack</p>
                    <p>Experiencia profesional: próximamente</p>
                    <p>Proyectos propios, proyectos en conjunto y trabajos académicos</p>
                </div>
            </div>

            <div className={style.paragraph}>
                <p className={style.title} style={{ '--title-color': '#722576fa' } as React.CSSProperties}>Intereses</p>

                <div className={style.info}>
                    <p>Frontend, patrones de diseño, arquitectura de software y aprendizaje continuo</p>
                </div>
            </div>

            <div className={style.paragraph}>
                <p>Si queres conocer mas sobre mi experiencia y formación:</p>
                <br />
                <a className={style.button}
                    href='/Curriculum_Mauro_Garzia.pdf'
                    download='Curriculum_Mauro_Garzia.pdf'
                >
                    Descargar CV
                </a>
            </div>

        </div>
    )
}

export default About