import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'


const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#AprendeR</h4>
          <h1>Especialistas en Estimación de Áreas Pequeñas en Chile</h1>
          <p>
            Mediante estadísticas desarrolladas en R, llevamos la potencia de los Censos a las encuestas Casen.
          </p>
          <Link to="/plans" className='btn lg'>Qué es la metodología SAE?</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader