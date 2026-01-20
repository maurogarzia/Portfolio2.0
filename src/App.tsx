import { useEffect } from 'react'
import style from './App.module.css'
import AsidePrincipal from './layout/AsidePrincipal/AsidePrincipal'
import FileAside from './layout/FileAside/FileAside'
import FileHeader from './layout/FileHeader/FileHeader'
import HeaderPrincipal from './layout/HeaderPrincipal/HeaderPrincipal'
import { viewStore } from './store/view.store'
import About from './views/About/About'
import Contact from './views/Contact/Contact'
import EmptySelected from './views/EmptySelected/EmptySelected'
import Home from './views/Home/Home'
import Projects from './views/Projects/Projects'
import Skills from './views/Skills/Skills'
import { selectStore } from './store/select.store'




function App() {
  
  const {view, setView} = viewStore()
  const {cardsOpen} = selectStore()
  useEffect(() => {
    if (cardsOpen.length < 1) setView('emptySelected')
  },[cardsOpen])

  return (
    <>
      <HeaderPrincipal/>
      <div className={style.containerPrincipal}>
        <AsidePrincipal/>
        <div className={style.containerContent}>
          <FileHeader/>
          <div className={style.subContent}>
            <FileAside/>
            {view === 'emptySelected' && <EmptySelected/>}
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
