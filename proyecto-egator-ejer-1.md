1 En la terminal de vsc, instalados dentro de la carpeta donde desarrollaremos nuestro proyecto, ejecutamos:

```shell
npm create-react-app ./ 
npm install react-icons 
npm install react-router-dom 
npm install web-vitals
```

2 Borramos todo dentro de las carpetas public y src.

3 Creamos el archivo index.html en la carpeta public.
Con la combinación de teclas **"doc"+tab** creamos automáticamente el siguiente trozo de código:

```html
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>React website</title>
</head>
<body>
   <div id="root">
   </div>
</body>
</html>
```

4 Llevamos images a la carpeta src

5 en la carpeta src creamos las siguientes otras cuatro carpetas:

components\
images\
pages\
UI

6 en la carpeta src creamos el archivo index.js:

```javascript
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App/>)
```

7 en la carpeta src creamos el archivo index.css:

8 en la carpeta src creamos el archivo App.jsx:

y con "rafce" enter:

```javascript
import React from 'react'

const App = () => {
  return (
    <div>
      App
    </div>
  )
}

export default App
```

9 dentro de la carpeta pages creamos carpetas para cada una de las paginas de nuestra aplicacion web y dentro de cada una de ellas un jsx  un css:

about
contact
gallery
home
notFound
plans
trainers

Es importante siempre nombrar los componentes siempre con mayusculas.

---About.jsx---
```javascript
import './about.css'

const about = () => {
  return (
    <div>
      About
    </div>
  )
}

export default about
```
---

10 Importamos todas nuestras pages a App.jsx

```javascript
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'
import Gallery from './pages/gallery/Gallery.jsx'
import Home from './pages/home/Home.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import Plans from './pages/plans/Plans.jsx'
import Trainers from './pages/trainers/Trainers.jsx'

import React from 'react'

const App = () => {
   return (
      <div>
         <About />
         <Contact />
         <Gallery />
         <Home />
         <NotFound />
         <Plans />
         <Trainers />
      </div>
   )
}

export default App
```

11 Creamos el componente **Navbar.jsx** y su asociado **Navbar.css** dentro de la carpeta **components**, asociandole en contenido de **data.js** que importamos dentro de la carpeta **src**, desestructurando sus elementos. Agregamos un boton que solo sera visible en tablets y telefonos celulares.

---**Navbar.jsx**
```javascript
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data'
import { FaBars } from "react-icons/fa";
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo'>
                <img src={Logo} alt="Nav Logo" />
            </Link>
            <ul className='nav__links'>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li>
                                <NavLink to={path}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav__toggle-btn">
               <FaBars/>
            </button>
        </div>
    </nav>
  )
}

export default Navbar
```

12 Envolvemos nuestra **App.jsx** con el tag BrouserRouter e importamos en ella nuestro componente Navbar:

---**App.jsx**
```javascript
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'
import Gallery from './pages/gallery/Gallery.jsx'
import Home from './pages/home/Home.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import Plans from './pages/plans/Plans.jsx'
import Trainers from './pages/trainers/Trainers.jsx'

import Navbar from './components/Navbar'

import React from 'react'

const App = () => {
   return (
      <BrowserRouter>
      <Navbar/>
         <About />
         <Contact />
         <Gallery />
         <Home />
         <NotFound />
         <Plans />
         <Trainers />
      </BrowserRouter>
   )
}

export default App
```

13 Le damos estilos al index.css

```css
*, *::before, *::after {
   margin: 0;
   padding: 0;
   border: 0;
   outline: 0;
   list-style: none;
   text-decoration: none;
   box-sizing: border-box;
}

:root {
   /* --primary-hue: 20;
   --gray-hue: 280; */

   --primary-hue: 210;
   --gray-hue: 240;
   --color-primary: hsl(var(--primary-hue), 100%, 50%);
   --color-primary-variant: hsl(var(--primary-hue), 100%, 65%);
   --color-secondary: #ffb116;
   --color-gray-100: hsl(var(--gray-hue), 47%, 94%);
   --color-gray-200: hsl(var(--gray-hue), 26%, 75%);
   --color-gray-300: hsl(var(--gray-hue), 24%, 64%);
   --color-gray-400: hsl(var(--gray-hue), 16%, 41%);
   --color-gray-500: hsl(var(--gray-hue), 44%, 25%);
   --color-gray-600: hsl(var(--gray-hue), 48%, 15%);

   --container-width-lg: 80%;
   --container-width-md: 90%;

   --transition: all 500ms ease;
}


/* GENERAL STYLES */
body {
   font-family: 'Montserrat', sans-serif;
   color: var(--color-gray-200);
   line-height: 1.7;
   overflow-x: hidden;
   background: var(--color-gray-600) url('./images/bg_texture.png');
}

.container {
   width: var(--container-width-lg);
   max-width: 1920px;
   margin-inline: auto;
}

h1, h2, h3, h4, h5 {
   line-height: 1.2;
   color: var(--color-gray-100);
}

h1 {
   font-size: 3rem;
}

h2 {
   font-size: 2rem;
}

a {
   color: var(--color-gray-100);
}

img {
   display: block;
   object-fit: cover;
   width: 100%;
}
```

14 Llevamos el link de los estilos de fuentes al archivo index.html:

```html
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>React website</title>
       <!-- GOOGLE FONT (montserrat) -->
       <link href="https://fonts.googleapis.com/css2?               family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
   <div id="root">
   </div>
</body>
</html>
```

15 Le damos estilos al archivo navbar.css:

```css
nav {
   height: 5rem;
   width: 100vw;
   background: var(--color-primary);
   display: grid;
   place-items: center;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 99;
}

/* only shows on medium and small screens */
.nav__toggle-btn {
   display: none;
}

.nav__container {
   height: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: relative;
}

.logo {
   width: 7rem;
   display: block;
}

.nav__links {
   display: flex;
   gap: 3.5rem;
   align-items: center;
   /* this 100% height was added outside tutorial */
   height: 100%;
}

.nav__links li {
   /* this code below was added outside tutorial */
   height: 100%;
}

.nav__links a {
   transition: var(--transition);
   /* This 100% height was added outside tutorial */
   height: 100%;
   display: flex;
   align-items: center;
}

.nav__links a:hover {
   color: var(--color-secondary);
}

.active-nav {
   position: relative;
}

.active-nav::after {
   content: '';
   display: block;
   width: 1.2rem;
   height: 1.2rem;
   background: var(--color-primary);
   position: absolute;
   left: calc(50% - 0.6rem);
   transform: rotate(45deg);
   /* the code below was added outside tutorial */
   bottom: -0.5rem;
}

/* MEDIA QUERIES (medium and small screens) */
@media screen and (max-width: 1024px) {
   .nav__toggle-btn {
       display: inline-block;
       background: transparent;
       font-size: 1.8rem;
       cursor: pointer;
   }

   .nav__toggle-btn svg {
       color: var(--color-gray-100);
   }

   .nav__links {
       position: absolute;
       top: 100%;
       right: 0;
       flex-direction: column;
       gap: 0;
       perspective: 400px;
   }

   .active-nav, .active-nav::after {
       display: none;
   }

   .nav__links li {
       height: 4rem;
       width: 100%;
       box-shadow: -2rem 2rem 5rem rgba(0, 0, 0, 0.5);
       animation: navAnimation 600ms ease forwards;
       transform: rotateX(90deg);
       opacity: 0;
       transform-origin: top;
   }

   .nav__links li:nth-child(2) {
       animation-delay: 200ms;
   }

   .nav__links li:nth-child(3) {
       animation-delay: 400ms;
   }

   .nav__links li:nth-child(4) {
       animation-delay: 600ms;
   }

   .nav__links li:nth-child(5) {
       animation-delay: 800ms;
   }

   .nav__links li:nth-child(6) {
       animation-delay: 1s;
   }

   .nav__links li:nth-child(7) {
       animation-delay: 1.2s;
   }

   @keyframes navAnimation {
       to {
           transform: rotateX(0);
           opacity: 1;
       }
   }

   .nav__links li a {
       background-color: var(--color-primary);
       height: 100%;
       width: 100%;
       display: flex;
       align-items: center;
       padding: 1rem 5rem 1rem 3rem;
   }

   .show__nav {
       display: flex;
   }

   .hide__nav {
       display: none;
   }
}
```

16 Agregamos la prop isActive al tag <NavLink> del componente Navbar.jsx:

```javascript
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data'
import { FaBars } from "react-icons/fa";
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo'>
                <img src={Logo} alt="Nav Logo" />
            </Link>
            <ul className='nav__links'>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' :                                     ''}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav__toggle-btn">
               <FaBars/>
            </button>
        </div>
    </nav>
  )
}

export default Navbar
```

17 Queremos darle una animacion a la barra del componente Navbar.jsx, por lo que usamos el hook **useState** en Navbar.jsx agregando un operador ternario al tag <nav__links> (no olvidar agregarle una key al tag <li> que lo envuelve) y dandole funcionalidad a una funcion onClick al boton con la etiqueta <nav__toggle-btn>. Agregamos una logica para cambiar el boton una vez que se presiona en la barra de navegación asociada al componente Navbar: para ello importamos el icono MdOutlineClose y le agregamos una logica al contenido del tag <button>

```javascript
import { useState } from 'react'
const [isNavShowing, setIsNavShowing] = useState(false);
<ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__Nav'}`}>
```

que esta asociado en el navbar.css a .show__nav:

```javascript
   .show__nav {
       display: flex;
   }
```

```javascript
   .hide__nav {
       display: none;
   }
```

---Navbar.jsx

```javascript
import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data'
import { FaBars } from "react-icons/fa";
import './navbar.css'
import {MdOutlineClose} from 'react-icons/md'

const Navbar = () => {
   const [isNavShowing, setIsNavShowing] = useState(false);

  return (
      <nav>
         <div className="container nav__container">
               <Link to="/" className='logo'>
                  <img src={Logo} alt="Nav Logo" />
               </Link>
               <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                  {
                     links.map(({name, path}, index) => {
                           return (
                              <li key={index}>
                                 <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>{name}</NavLink>
                              </li>
                           )
                     })
                  }
               </ul>
               <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
                {
                    isNavShowing ? <MdOutlineClose/> : <FaBars/>
                }
               </button>
         </div>
      </nav>
  )
}

export default Navbar
```

18 El codigo que permite se ejecute la animacion de despliegue del menu en formatos de pantalla peque;os se encuentra en el siguiente fragmento: 

```css
 .nav__links li {
       height: 4rem;
       width: 100%;
       box-shadow: -2rem 2rem 5rem rgba(0, 0, 0, 0.5);
       animation: navAnimation 600ms ease forwards;
       transform: rotateX(90deg);
       opacity: 0;
       transform-origin: top;
   }

   .nav__links li:nth-child(2) {
       animation-delay: 200ms;
   }

   .nav__links li:nth-child(3) {
       animation-delay: 400ms;
   }

   .nav__links li:nth-child(4) {
       animation-delay: 600ms;
   }

   .nav__links li:nth-child(5) {
       animation-delay: 800ms;
   }

   .nav__links li:nth-child(6) {
       animation-delay: 1s;
   }

   .nav__links li:nth-child(7) {
       animation-delay: 1.2s;
   }

   @keyframes navAnimation {
       to {
           transform: rotateX(0);
           opacity: 1;
       }
   }
```
Notese la perspectiva que le entregamos al siguiente elemento:

```css
   .nav__links {
       position: absolute;
       top: 100%;
       right: 0;
       flex-direction: column;
       gap: 0;
       perspective: 400px;
   }
```

19 Queremos que al elegir una pagina de la barra de navegador (en pantallas medianas y pequeñas), ésta se cierre automaticamente como tambien que se cierre cuando hacemos click sobre el logo.

para ello agregamos la funcion:\
onClick={() => setIsNavShowing(prev => !prev)}\
tanto al tag <Button> como al tag <NavLink>

y

agregamos \
onClick={() => setIsNavShowing(false)}\
al tag Link del logo

```javascript
import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data'
import { FaBars } from "react-icons/fa";
import {MdOutlineClose} from 'react-icons/md'
import './navbar.css'

const Navbar = () => {
   const [isNavShowing, setIsNavShowing] = useState(false);

  return (
      <nav>
         <div className="container nav__container">
               <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                  <img src={Logo} alt="Nav Logo" />
               </Link>
               <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                  {
                     links.map(({name, path}, index) => {
                           return (
                              <li key={index}>
                                 <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                              </li>
                           )
                     })
                  }
               </ul>
               <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
               {
                    isNavShowing ? <MdOutlineClose/> : <FaBars/>
                }
               </button>
         </div>
      </nav>
  )
}

export default Navbar
```

20 Trabajaremos en la cabecera de nuestra pagina, que estara ubicado bajo la barra de navegación Navbar. Para ello construimos un componente **MainHeader.jsx** dentro de la carpeta **components** (lo importamos dentro del componente **Home.jsx**) cuyo css será **home.css** 

```javascript
import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'


const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam excepturi similique eius optio. Dolorum, quaerat.
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
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
```

```javascript
import MainHeader from "../../components/MainHeader"
import './home.css'

const home = () => {
   return (
      <div>
         <MainHeader />
      </div>
   )
}

export default home
```

21 en el componente App.jsx eliminemos los elementos envueltos por el tag <BrowserRouter> dejando solo el componente <Navbar />. Creamos estos elementos ahora con la ayuda de los tags <Routes> y <Route>.

```javascript
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='plans' element={<Plans/>}/>
        <Route path='trainers' element={<Trainers/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
```

22 Comenzamos a darle estilos a **MainHeader.jsx** en **home.css**: 

```css
.main__header {
    width: 100vw;
    height: calc(100vh - 3rem);
    display: grid;
    place-items: center;
    margin-top: 3rem;
}

.main__header-container {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;
    gap: 6rem;
}

.main__header-left {
    margin-top: -3rem;
}

.main__header-left h4 {
    margin-bottom: 1rem;
    color: var(--color-secondary);
    font-weight: 400;
}

.main__header-left p {
    margin: 1rem 0 3.5rem;
    font-size: 1.1rem;
}

.main__header-right {
    display: grid;
    place-items: center;
    position: relative;
}

.main__header-circle {
    width: 25rem;
    height: 25rem;
    background: linear-gradient(75deg, var(--color-secondary), transparent);
    border-radius: 50%;
    position: absolute;
    filter: blur(15px);
    transition: var(--transition);
}

.main__header-image {
    position: relative;
}

.main__header-right:hover .main__header-circle {
   filter: blur(15px);
}
```

23 Le damos formato al boton de la pagina de inicio: "Get Started"

Para ello vamos a editar en el archivo **index.css** y agregamos:

```css
.btn {
    color: var(--color-gray-100);
    width: fit-content;
    margin: 0 auto;
    padding: 0.9rem 2rem;
    background: var(--color-primary);
    border-radius: 1.5rem;
    transition: var(--transition);
}

.btn:hover {
    background: var(--color-secondary);
    color: var(--color-gray-600);
}

.btn.lg {
    padding: 1.2rem 3rem;
    border-radius: 2rem;
    font-size: 1.1rem;
}

.btn.sm {
    padding: 0.4rem 1.2rem;
    font-size: 0.9rem;
}

.btn.sm:hover {
    background: var(--color-gray-100);
}
```

24 Trabajaremos sobre la seccion **programs**

Creamos el componente **Programs.jsx** dentro de la carpeta **components**:

```javascript
import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import {programs} from '../data'
import Card from '../UI/Card'
import {Link} from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'


const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs__container">
            <SectionHead icon={<FaCrown/>} title="Programs"/>
        <div className="programs__wrapper">
            {
                programs.map(({id, icon, title, info, path}) => {
                    return (
                        <Card className="programs__program" key={id}>
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{info}</small>
                            <Link to={path} className="btn sm">Learn More <AiFillCaretRight/></Link>
                        </Card>
                    )
                })
            }
        </div>
        </div>
    </section>
  )
}

export default Programs
```

Y lo agregamos al componente **Home.jsx**:

```javascript
import FAQs from '../../components/FAQs'
import Footer from '../../components/Footer'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Values from '../../components/Values'

import './home.css'
const Home = () => {
  return (
    <>
    <MainHeader/>
    <Programs/>
    <Values/>
    <FAQs/>
    <Testimonials/>
    </>
  )
}

export default Home
```

25 Dentro del componente **Programs.jsx** tenemos otros dos componentes. Uno llamado **SectionHead** que construimos dentro de la carpeta **components**:

```javascript
const SectionHead = ({icon, title, className}) => {
  return (
    <div className={`section__head ${className}`}>
        <span>{icon}</span>
        <h2>{title}</h2>
    </div>
  )
}

export default SectionHead
```

Y otro llamado **Card** que construimos dentro de la carpeta **UI**:

```javascript
const Card = ({className, children}) => {
  return (
    <article className={`card ${className}`}>
        {children}
    </article>
  )
}

export default Card
```

const Card: Define una constante llamada Card, que es una función de componente funcional en React.

({ className, children }): Utiliza la desestructuración de objetos para acceder a las propiedades className y children que se pasan al componente Card. Esto significa que el componente Card espera recibir estos dos props.

return: Devuelve un elemento JSX que representa el contenido que se renderizará en la interfaz de usuario.

<article>: Un elemento HTML que se utiliza para representar contenido independiente que tiene su propio significado. En este caso, se usa para representar una tarjeta o Card.

className={card ${className}}: Aplica las clases CSS al elemento article. Combina la clase card con cualquier clase adicional que se pase a través de la prop className. Por ejemplo, si className tiene el valor highlight, el className resultante será card highlight.

{children}: Es un placeholder que representa cualquier contenido anidado dentro del componente Card. children es una prop especial en React que permite pasar elementos secundarios al componente.

export default Card: Exporta el componente Card como la exportación predeterminada del módulo, lo que permite que este componente se importe en otros archivos.

26 Ahora a los componentes **SectionHead** y **Card** le damos estilos dentro del archivo **index.css**:

```css
section {
    margin-top: 10rem;
}

.section__head {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.section__head span {
    background: var(--color-gray-500);
    padding: 0.8rem;
    border-radius: 1rem;
    color: var(--color-secondary);
    font-size: 1.5rem;
}

.card {
    background: var(--color-gray-500);
    border: 2px solid transparent;
    text-align: center;
    padding: 3rem 2rem;
    border-radius: 0 3rem 0 3rem;
    transition: var(--transition);
}

.card:hover {
    background: transparent;
    border-color: var(--color-gray-400);
    cursor: default;
}

.card span {
    width: 3rem;
    height: 3rem;
    background: var(--color-primary);
    color: var(--color-gray-100);
    font-size: 1.5rem;
    padding: 0.8rem;
    display: grid;
    place-items: center;
    margin-bottom: 1.5rem;
    margin-inline: auto;
    border-radius: 1rem;
    transition: var(--transition);
}

.card:hover span {
    background: var(--color-secondary);
    color: var(--color-gray-600);
}

.card small {
    margin-top: 1rem;
    display: block;
    font-weight: 300;
}
```



1 46'





