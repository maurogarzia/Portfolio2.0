import ListCards from '../../components/ListCards/ListCards'
import style from './Projects.module.css'

function Projects() {

  const interactiveCard = ['React', 'Vite', 'Git', 'Typescript', 'Frame Motion']

  return (
    <div className={style.containerPrincipal}>
      <div className={style.paragraph}>
        <p className={style.title}>Tarjeta Interactiva</p>
        <p>Tarjeta de presentación interactiva diseñada para mostrar el perfil de un programador web de manera dinámica y profesional</p>
        <ListCards cards={interactiveCard}/>
      </div>

      <div className={style.paragraph}>
        <p className={style.title}>WeatherApp</p>
      </div>

      <div className={style.paragraph}>
        <p className={style.title}>TodoFood</p>
      </div>

      <div className={style.paragraph}>
        <p className={style.title}>Dashboard de Finzanzas</p>
      </div>

      <div className={style.paragraph}>
        <p className={style.title}>Agenda de estudiantes</p>
      </div>
    </div>
  )
}

export default Projects