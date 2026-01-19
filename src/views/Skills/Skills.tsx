import ListCards from './components/ListCards/ListCards'
import style from './Skills.module.css'

function Skills() {

  const frontend = ['React', 'Next.js', 'Typescript', 'Javascript', 'HTML5', 'CSS3', 'Vite', 'Responsive Design']
  const backend = ['Springboot', 'Node.js', 'Mongoose', 'Express', 'Java', 'Typescript', 'MySQL', 'PostgreSQL', 'MongoDB', 'API REST', 'Supabase']
  const tools = ['Git & GitHub', 'Postman', 'Vercel', 'Render']

  return (
    <div className={style.containerPrincipal}>
      <div className={style.paragraph}>
        <p className={style.title}>Frontend</p>
          <ListCards cards={frontend}/>
      </div>

      <div className={style.paragraph}>
        <p className={style.title}>Backend</p>
          <ListCards cards={backend}/>
      </div>

      <div className={style.paragraph}>
        <p className={style.title}>Herramientas</p>
        <ListCards cards={tools}/>
      </div>
    </div>
  )
}

export default Skills