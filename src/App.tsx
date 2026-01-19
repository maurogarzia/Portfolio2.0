import style from './App.module.css'
import AsidePrincipal from './layout/AsidePrincipal/AsidePrincipal'
import FileAside from './layout/FileAside/FileAside'
import FileHeader from './layout/FileHeader/FileHeader'
import HeaderPrincipal from './layout/HeaderPrincipal/HeaderPrincipal'
import { viewStore } from './store/view.store'
import About from './views/About/About'
import Contact from './views/Contact/Contact'
import Home from './views/Home/Home'
import Projects from './views/Projects/Projects'
import Skills from './views/Skills/skills'



function App() {
  
  const {view} = viewStore()

  return (
    <>
      <HeaderPrincipal/>
      <div className={style.containerPrincipal}>
        <AsidePrincipal/>
        <div className={style.containerContent}>
          <FileHeader/>
          <div className={style.subContent}>
            <FileAside/>
            {view === 'home' && <Home/>}
            {view === 'contact' && <Contact/>}
            {view === 'aboutMe' && <About/>}
            {view === 'projects' && <Projects/>}
            {view === 'skills' && <Skills/>}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
