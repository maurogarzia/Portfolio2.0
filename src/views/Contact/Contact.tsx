import style from './Contact.module.css'

export function Contact() {

  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER
  const email = import.meta.env.VITE_EMAIL
  const github = import.meta.env.VITE_GITHUB
  const linkedin = import.meta.env.VITE_LINKEDIN

  const message = 'Hola, estoy interesado en contratar servicios!'
  const subject = 'Consulta de servicio'

  const encodeMessage = encodeURIComponent(message)
  const encodeBody = encodeURIComponent(subject)


  return (
    <div className={style.containerPrincipal}>
      <div className={style.paragraph}>
        <p className={style.title}>Contacto</p>
        <p>Puedes contactarme en las siguientes redes: </p>

        <div className={style.items}>
          <ul>
            <li>
              <a className={style.item} href={`${linkedin}`} target='_blank'>
                <i className="fab fa-linkedin"></i>
                <p>Linkedin</p>
              </a>
            </li>

            <li>
              <a className={style.item} href={`http://wa.me/${phoneNumber}?text=${encodeMessage}`} target="_blank">
                <i className="fab fa-whatsapp" ></i>
                <p>Whatsapp</p>
              </a>
            </li>

            <li>
              <a className={style.item} href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeBody}&body=${encodeMessage}`} target="_blank">
                <span className="material-symbols-outlined">mail</span>
                <p>Email</p>
              </a>
            </li>

            <li>
              <a className={style.item} href={`${github}`} target="_blank">
                <i className="fab fa-github"></i>
                <p>GitHub</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact