import ListCards from '../../components/ListCards/ListCards'
import style from './Projects.module.css'

function Projects() {

  const interactiveCard = ['React', 'Vite', 'Typescript', 'Frame Motion', 'Vercel', 'Material Symbols']
  const weatherApp = ['React', 'Vite', 'OpenWeatherApi', 'TypeScript', 'Material Symbols', 'Vercel']
  const todoFood = ['Next.js', 'Zustand', 'PostgreSQL', 'Supabase', 'Springboot', 'Jwt', 'Java', 'Vercel', 'Render', 'Typescript', 'SweetAlert2']
  const dashboardFinance = ['React', 'Vite', 'Zustand', 'Typescript', 'SweetAlert2', 'Recharts ', 'MongoDB', 'Express', 'Mongoose', 'OAuth 2.0']
  const studentsAgenda = ['React', 'Vite', 'Typescript', 'Zustand', 'React Router']
  const dashboardFinanceMovil = ['React Native', 'Expo', 'Typescript', 'Zustand', 'React Native Chart Kit', 'Expo Fyle System', 'Expo Print', 'Expo Sharing', 'Localstorage']

  return (
    <div className={style.containerPrincipal}>
      <div className={style.paragraph}>
        <p className={style.title}>Tarjeta Interactiva</p>
        <p>Tarjeta de presentación interactiva diseñada para mostrar el perfil de un programador web de manera dinámica y profesional</p>
        <ListCards cards={interactiveCard}/>

        <div className={style.icons}>
          <a className={style.code} href="https://github.com/maurogarzia/tarjetaPresentacion" target='blank'>
            <i className="fab fa-github"></i>
            <p className={style.code}>Código</p>
          </a>

          <a className={style.view} href="https://tarjeta-presentacion-pntv.vercel.app/" target='blank'>
            <span className="material-symbols-outlined">visibility</span>
            <p className={style.view}>Ver</p>
          </a>
        </div>
      </div>

      <div className={style.paragraph}>
        <p className={style.title}>WeatherApp</p>
        <p>Página del clima para conocer el clima en cada ciudad en ese momento</p>
        <ListCards cards={weatherApp}/>

        <div className={style.icons}>
          <a className={style.code} href="https://github.com/maurogarzia/WeatherApp" target='blank'>
            <i className="fab fa-github"></i>
            <p className={style.code}>Código</p>
          </a>

          <a className={style.view} href="http://weather-app-ivory-nine-68.vercel.app" target='blank'>
            <span className="material-symbols-outlined">visibility</span>
            <p className={style.view}>Ver</p>
          </a>
        </div>
      </div>

      <div className={style.paragraph}>
        <p className={style.title}>TodoFood</p>
        <p>Página para hamburgueseria de tipo E-commerce</p>
        <ListCards cards={todoFood}/>

        <div className={style.icons}>
          <a className={style.code} href="https://github.com/maurogarzia/FrontEndTodoFood" target='blank'>
            <i className="fab fa-github"></i>
            <p className={style.code}>Código</p>
          </a>

          <a className={style.view} href="https://front-end-todo-food-with-next-js.vercel.app/" target='blank'>
            <span className="material-symbols-outlined">visibility</span>
            <p className={style.view}>Ver</p>
          </a>
        </div>
      </div>

      <div className={style.paragraph}>
        <p className={style.title}>Dashboard de Finzanzas</p>
        <p>Página para gestionar la contabilidad y llevar los movimientos financieros, ordenando los movimientos de cada mes. Permite agruparlos por fecha, ingresos, gastos y descargar los resumenes.</p>
        <ListCards cards={dashboardFinance}/>

        <div className={style.icons}>
          <a className={style.code} href="https://github.com/maurogarzia/financeDashboard" target='blank'>
            <i className="fab fa-github"></i>
            <p className={style.code}>Código</p>
          </a>

          <a className={style.view} href="https://finance-dashboard-ten-ruby.vercel.app/" target='blank'>
            <span className="material-symbols-outlined">visibility</span>
            <p className={style.view}>Ver</p>
          </a>
        </div>
      </div>

      <div className={style.paragraph}>
        <p className={style.title}>Dashboard de Finzanzas (App Móvil)</p>
        <p>App móvil para gestionar la contabilidad y llevar los movimientos financieros, ordenando los movimientos de cada mes. Permite agruparlos por fecha, ingresos, gastos y descargar los resumenes.</p>
        <ListCards cards={dashboardFinanceMovil}/>

        <div className={style.icons}>
          <a className={style.code} href="https://github.com/maurogarzia/AppFinanzas" target='blank'>
            <i className="fab fa-github"></i>
            <p className={style.code}>Código</p>
          </a>
        </div>
      </div>

      <div className={style.paragraph}>
        <p className={style.title}>Agenda de estudiantes</p>
        <p>Página para gestionar y organizar el horario de los alumnos de una maestra particular</p>
        <ListCards cards={studentsAgenda}/>

        <div className={style.icons}>
          <a className={style.code} href="https://github.com/maurogarzia/StudentAgenda" target='blank'>
            <i className="fab fa-github"></i>
            <p className={style.code}>Código</p>
          </a>

          <a className={style.view} href="https://student-agenda-dusky.vercel.app/" target='blank'>
            <span className="material-symbols-outlined">visibility</span>
            <p className={style.view}>Ver</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects