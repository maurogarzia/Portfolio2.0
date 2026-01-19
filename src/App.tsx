import style from './App.module.css'
import AsidePrincipal from './layout/AsidePrincipal/AsidePrincipal'
import FileAside from './layout/FileAside/FileAside'
import FileHeader from './layout/FileHeader/FileHeader'
import HeaderPrincipal from './layout/HeaderPrincipal/HeaderPrincipal'
import Home from './views/Home/Home'


function App() {
  

  return (
    <>
      <HeaderPrincipal/>
      <div className={style.containerPrincipal}>
        <AsidePrincipal/>
        <div className={style.containerContent}>
          <FileHeader/>
          <div className={style.subContent}>
            <FileAside/>
            <Home/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
