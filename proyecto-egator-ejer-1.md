
Script de arranque:

```bash
C:\Users\chris> cd 
C:> cd \Users\chris\Documentos\GitHub\react\proyecto-egator-ejer-2 
C:\Users\chris\Documentos\GitHub\react\proyecto-egator-ejer-1> npm install 
C:\Users\chris\Documentos\GitHub\react\proyecto-egator-ejer-1> npm start
```

# Índice

* [1 Levantando el cimiento de la aplicación](#1-Levantando-el-cimiento-de-la-aplicación)
* [2 La barra de navegación entre páginas](#2-La-barra-de-navegación-entre-páginas)
* [3 La página principal](#3-La-página-principal)
  * [31 Sección Programs](#31-Sección-Programs)
  * [32 Sección Values](#32-Sección-Values)
  * [33 Sección FAQs](#33-Sección-FAQs)
* [4 Páginas](#4-Páginas)
   
## 1 Levantando el cimiento de la aplicación

1 En la terminal de vsc, instalados dentro de la carpeta donde desarrollaremos nuestro proyecto, creamos el proyecto base:

```shell
npx create-react-app ./ 
npm install react-icons 
npm install react-router-dom 
npm install web-vitals
```

2 Borramos todo dentro de las carpetas **public** y **src**.

3 Creamos el archivo **index.html** en la carpeta **public**.

Con la combinación de teclas **"doc"+tab** creamos automáticamente el siguiente trozo de código en **index.html**:

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

4 Creamos y cargamos con contenido la carpeta **images** en la carpeta **src**.

5 En la carpeta **src** creamos las siguientes otras tres carpetas:

- components
- pages
- UI

6 En la carpeta **src** creamos el archivo **index.js** con el siguiente contenido:

```javascript
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App/>)
```

7 En la carpeta **src** creamos el archivo **index.css**.

8 En la carpeta **src** creamos el archivo **App.jsx**:

y con **rafce** + enter:

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

9 Dentro de la carpeta **pages** creada dentro de la carpeta **src** construímos carpetas para cada una de las páginas de nuestra aplicación y dentro de cada una de ellas un jsx con un css (por el momento dejemos los css vacíos). Toma como ejemplo About.jsx cuya estructura debe ser semejante en todas las carpetas:

- about\
- ___About.jsx\
- ___about.css\
- contact\
- gallery\
- home\
- notFound\
- plans\
- trainers

![image](https://github.com/user-attachments/assets/9e12d339-51d2-416d-8116-24d88b86dde9)

Es importante nombrar los componentes siempre con mayúsculas.

**About.jsx**

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

## 2 La barra de navegación entre páginas

10 Importamos todos nuestros componentes a **App.jsx**:

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

11 Creamos el componente **Navbar.jsx** y su asociado **Navbar.css** dentro de la carpeta **components**, asociándole el contenido de **data.js** que importamos dentro de la carpeta **src**, desestructurando sus elementos. Agregamos un botón. El código asociará a cada elemento componente de la barra de navegación una ruta url.

**Navbar.jsx**

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

> Comentario: recorremos un arreglo llamado "links" que contiene objetos con dos propiedades: "name" y "path". Durante el recorrido, estás generando elementos de una lista no ordenada (como una lista de navegación). Para cada objeto en el arreglo, estás creando un nuevo elemento de la lista que incluye un enlace asociado al valor de la propiedad "path" y muestra el texto de la propiedad "name".

```javascript
{
  links.map(({name, path}, index) => {
      return (
          <li>
              <NavLink to={path}>{name}</NavLink>
          </li>
      )
  })
}
```

```javascript
export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]
```

12 Envolvemos nuestra **App.jsx** con el tag BrouserRouter e importamos en ella nuestro componente Navbar:

**App.jsx**

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

13 Le damos estilos al **index.css**:

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

/*display: block;: Cambia el comportamiento del elemento img para que
se comporte como un elemento de bloque en lugar de uno en línea (que
es su comportamiento por defecto). Esto significa que el elemento
ocupará todo el ancho disponible y comenzará en una nueva línea.

object-fit: cover;: Este estilo controla cómo se ajusta el contenido
de la imagen dentro de su contenedor. Con el valor cover, la imagen
se escala para llenar completamente su contenedor mientras mantiene
su proporción de aspecto original. Esto significa que partes de la
imagen pueden recortarse si no encajan perfectamente en las
dimensiones del contenedor.

width: 100%;: Establece que la imagen ocupe el 100% del ancho del
contenedor padre. Esto garantiza que la imagen se ajuste siempre al
ancho disponible.*/

img {
   display: block;
   object-fit: cover;
   width: 100%;
}
```

14 Llevamos el link de los estilos de fuentes al archivo **index.html**:

```html
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>React website</title>
       <!-- GOOGLE FONT (montserrat) -->
       <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">    
</head>
<body>
   <div id="root">
   </div>
</body>
</html>
```

15 Le damos estilos al archivo **navbar.css**:

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

/*Este fragmento de código CSS utiliza una media query para aplicar estilos
específicos a dispositivos con un ancho de pantalla de 1024 píxeles o menos.
Lo hacemos para darle un efecto de despliegue animado del menu al navegador
de páginas cuando la pantalla se haga más pequeña:*/

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

/*este fragmento de CSS asegura que tanto el elemento con la clase
active-nav como su pseudo-elemento ::after no se muestren en la página.
Este tipo de regla es útil, por ejemplo, en menús de navegación
dinámicos donde se desea ocultar ciertos elementos bajo condiciones
específicas.*/

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

Este código CSS crea una animación fluida y dinámica para elementos de
una lista `li` dentro de `.nav__links`. 

- Estilos generales para `.nav__links li`

`height`: 4rem; y width: 100%;: Cada elemento de lista tiene una altura de
4 rems y ocupa el 100% del ancho de su contenedor.

`box-shadow`: -2rem 2rem 5rem rgba(0, 0, 0, 0.5);: Agrega una sombra al
elemento para darle profundidad, simulando un efecto tridimensional.

animation: navAnimation 600ms ease forwards;: Aplica una animación
personalizada llamada navAnimation que dura 600 milisegundos, con una
transición suave gracias a ease. La propiedad forwards asegura que el
estilo final de la animación se mantenga después de que esta termine.

transform: rotateX(90deg);: Inicialmente, cada elemento se rota 90 grados
en el eje X, haciéndolo invisible desde esa perspectiva.

opacity: 0;: Los elementos empiezan completamente transparentes.

transform-origin: top;: Establece que la rotación ocurra desde la parte
superior de cada elemento.

- Animaciones secuenciales con nth-child

Las reglas para nth-child asignan un retraso (animation-delay) distinto
para cada elemento de la lista. Esto significa que las animaciones de
los elementos se reproducen en secuencia:

El segundo elemento se anima con un retraso de 200 ms.

El tercero, con 400 ms, y así sucesivamente.

Esto crea un efecto escalonado, perfecto para menús desplegables o
transiciones elegantes.

- Definición de la animación @keyframes navAnimation

to { transform: rotateX(0); opacity: 1; }: Esta regla define el estado
final de la animación:
Los elementos terminan sin rotación (rotateX(0)).
La opacidad se establece en 1, haciendo que los elementos sean
completamente visibles.
```
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

```

16 Agregamos la prop isActive al tag `<NavLink>` del componente **Navbar.jsx**:

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

17 Queremos darle una animacion a la barra del componente **Navbar.jsx**, por lo que usamos el hook **useState** en **Navbar.jsx** agregando un operador ternario al tag `<nav__links>` (no olvidar agregarle una key al tag `<li>` que lo envuelve) y dándole funcionalidad al boton `onClick` con la etiqueta `<nav__toggle-btn>`. Agregamos una lógica para cambiar el botón una vez que se presiona en la barra de navegación asociada al componente Navbar, para ello importamos el icono `MdOutlineClose` y le agregamos una lógica al contenido del tag `<button>`.

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

**Navbar.jsx**

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



18 Queremos que al elegir una página de la barra de navegador (en pantallas medianas y pequeñas), ésta se cierre automáticamente como también que se cierre cuando hacemos click sobre el logo.

para ello agregamos la función:

```javascript
onClick={() => setIsNavShowing(prev => !prev)}
```

tanto al tag `<Button>` como al tag `<NavLink>`

y

agregamos 

```javascript
onClick={() => setIsNavShowing(false)}
```

al tag Link del logo

**Navbar.jsx**

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

## 3 La página principal

20 Trabajaremos en nuestra página principal. Para ello construímos un componente **MainHeader.jsx** dentro de la carpeta **components** (lo importamos al componente **Home.jsx**) cuyo css será **home.css** 

**MainHeader.jsx**

```javascript
import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
   return (
      <header className="main__header">
         <div className="container main__header-container">
            <div className="main__header-left">
               <h4>
                  #100DaysOfWorkOut
               </h4>
               <h1>
                  Join The Legends Of The Fitness World
               </h1>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam excepturi similique eius optio. Dolorum, quaerat.
               </p>
               <Link to="/plans" className='btn lg'>
                  Get Started
               </Link>
            </div>
            <div className="main__header-right">
               <div className="main__header-circle">  
               </div>
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

**Home.jsx**

```javascript
import MainHeader from "../../components/MainHeader"
import './home.css'

const home = () => {
   return (
      <div>
         <MainHeader/>
      </div>
   )
}

export default home
```

21 En el componente **App.jsx** eliminemos los elementos envueltos por el tag `<BrowserRouter>` dejando solo el componente `<Navbar />`. Creamos estos elementos ahora con la ayuda de los tags <Routes> y <Route>.

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
         <Routes>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='gallery' element={<Gallery/>}/>
            <Route path='plans' element={<Plans/>}/>
            <Route path='trainers' element={<Trainers/>}/>
            <Route path='*' element={<NotFound/>}/>
         </Routes>
      </BrowserRouter>
   )
 }

export default App
```

22 Comenzamos a darle estilos a **MainHeader.jsx** en **home.css**: 

```css
/* width: 100vw;
Define el ancho del elemento como el 100% del viewport width 
(ancho de la ventana gráfica del navegador).
Garantiza que el elemento ocupe todo el ancho visible del navegador.

height: calc(100vh - 3rem);
Establece la altura del elemento utilizando la función calc().
La altura es igual al 100% del viewport height (alto de la ventana 
gráfica del navegador) menos 3 rem (donde 1 rem equivale 
aproximadamente al tamaño de la fuente base del documento, por 
lo general 16 píxeles). Esto crea un efecto donde el elemento 
casi ocupa toda la altura 
de la pantalla, pero deja un margen de 3 rem.

display: grid;
Convierte el elemento en un contenedor de cuadrícula (grid 
container). Esto es útil para centrar contenido y organizar elementos hijos 
dentro del contenedor.

place-items: center;
Centra tanto horizontal como verticalmente los elementos hijos 
del grid dentro de este contenedor.
Es una forma concisa de establecer align-items: center; y 
justify-items: center; al mismo tiempo.

margin-top: 3rem;
Agrega un margen superior de 3 rem al contenedor, separándolo del 
elemento superior en el flujo del documento. */

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

![image](https://github.com/user-attachments/assets/7e6a587f-427b-49d6-bb6d-c24f347b0be5)

23 Le damos formato al botón de la página de inicio: "Get Started"

Para ello vamos a editar en el archivo **index.css** y agregamos:

```css
/* Some code...*/

/* 1 color: var(--color-gray-100);
Define el color del texto del botón.

2 width: fit-content;
El ancho del botón se ajusta automáticamente al tamaño de su contenido (el 
texto o los elementos dentro del botón). Hace que el botón sea tan ancho 
como sea necesario, sin excederse.

3 margin: 0 auto;
Aplica un margen superior e inferior de 0 y centra horizontalmente el botón 
usando el margen automático (auto). Esto solo funciona si el elemento 
tiene un contexto de bloque o está dentro 
de un contenedor con un ancho definido.

4 padding: 0.9rem 2rem;
Define el espacio interno del botón.
0.9rem establece el espacio arriba y abajo (vertical).
2rem establece el espacio a la izquierda y derecha (horizontal).
Este valor asegura que el botón tenga un tamaño cómodo y se vea bien 
proporcionado.

5 background: var(--color-primary);
Establece el color de fondo del botón, utilizando otra variable CSS 
(var(--color-primary)), posiblemente un color principal definido en la 
paleta del proyecto.

6 border-radius: 1.5rem;
Hace que las esquinas del botón sean redondeadas.
Un valor de 1.5rem significa que las esquinas tendrán una curva significativa, 
dándole un diseño más moderno y estilizado.

7 transition: var(--transition);
Establece un efecto de transición suave para cualquier cambio visual en el 
botón, como cambios de color al pasar el mouse o al hacer clic.
Usa una variable CSS (var(--transition) */

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

![image](https://github.com/user-attachments/assets/065495ab-2769-48d5-8fe2-a78775b7c664)

## 31 Sección Programs

24 Creamos el componente **Programs.jsx** dentro de la carpeta **components**:

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
                              <span>
                                 {icon}
                              </span>
                              <h4>
                                 {title}
                              </h4>
                              <small>
                                 {info}
                              </small>
                              <Link to={path} className="btn sm">
                                 Learn More <AiFillCaretRight/>
                              </Link>
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
import MainHeader from "../../components/MainHeader"
import './home.css'
import Programs from '../../components/Programs'

const home = () => {
   return (
      <div>
         <MainHeader/>
         <Programs/>
      </div>
   )
}

export default home
```

25 Dentro del componente **Programs.jsx** tenemos otros dos componentes. Uno llamado **SectionHead.jsx** que construimos dentro de la carpeta **components**:

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

26 Y otro llamado **Card.jsx** que construimos dentro de la carpeta **UI**:

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

`<article>`: Un elemento HTML que se utiliza para representar contenido independiente que tiene su propio significado. En este caso, se usa para representar una tarjeta o Card.

`className={card ${className}}`: Aplica las clases CSS al elemento article. Combina la clase card con cualquier clase adicional que se pase a través de la prop className. Por ejemplo, si className tiene el valor highlight, el className resultante será card highlight.

27 Ahora a los componentes **SectionHead** y **Card** le damos estilos dentro del archivo **index.css**:

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

28 Ahora a la seccion **programs** le damos formato en **home.css**

```css
.programs {
   margin-top: 4rem;
}

.programs__wrapper {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 3rem;
   margin-top: 4rem;
}

.programs__program a {
   margin-top: 2.5rem;
   display: flex;
   align-items: center;
   justify-content: center;
}

.programs__program:hover a {
   background: var(--color-secondary);
   color: var(--color-gray-600);
}
```

## 32 Sección Values

29 Creamos el componente **Values.jsx** dentro de la carpeta **components**

```javascript
import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'

const Values = () => {
   return (
      <section className='values'>
         <div className="container values__container">
            <div className="values__left">
               <div className="values__image">
                  <img src={Image} alt="Values Image" />
               </div>
            </div>
            <div className="values__right">
               <SectionHead icon={<GiCutDiamond/>} title="Values"/>
               <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quidem aperiam sapiente?
               </p>
               <div className="values__wrapper">
                  {
                     values.map(({id, icon, title, desc}) => {
                        return <Card key={id} className="values__value">
                           <span>{icon}</span>
                           <h4>{title}</h4>
                           <small>{desc}</small>
                        </Card>
                     })
                  }
               </div>
            </div>
         </div>
      </section>
   )
}

export default Values
```

> El siguiente formato de Card y return no se debe modificar:

```javascript
return <Card key={id} className="values__value">
   <span>{icon}</span>
   <h4>{title}</h4>
   <small>{desc}</small>
</Card>
```

30 Integramos el componente **Values.jsx** dentro del componente **Home.jsx**

```javascript
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Values from '../../components/Values'

import './home.css'
const Home = () => {
   return (
      <>
      <MainHeader/>
      <Programs/>
      <Values/>
      </>
   )
}

export default Home
```

31 Le damos formato al componente **Values.jsx** en el archivo **home.css**

```css
.values__container {
    display: grid;
    grid-template-columns: 38% 50%;
    gap: 12%;
}

.values__image {
    filter: saturate(0.25);
    transition: var(--transition);
}

.values__image:hover {
    filter: saturate(1);
}

.values__right > p {
    margin: 1.5rem 0 5rem;
}

.values__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3.4rem 2.4rem;
}

.card.values__value {
    padding-top: 3.5rem;
    text-align: left;
    position: relative;
}

.card.values__value span {
    position: absolute;
    top: -1.5rem;
}
```

## 33 Sección FAQs

32 Creamos el componente **FAQs.jsx** dentro de la carpeta **components**

```javascript
import SectionHead from './SectionHead'
import {FaQuestion} from 'react-icons/fa'
import {faqs} from '../data'
import FAQ from './FAQ'

const FAQs = () => {
   return (
      <section className="faqs">
         <div className="container faqs__container">
               <SectionHead icon={<FaQuestion/>} title="FAQs" />
               <div className="faqs__wrapper">
                  {
                     faqs.map(({id, question, answer}) => {
                           return <FAQ key={id} question={question} answer={answer}/>
                     })
                  }
               </div>
         </div>
      </section>
   )
}

export default FAQs
```

33 Integramos el componente **FAQs.jsx** dentro del componente **Home.jsx**

```javascript
import FAQs from '../../components/FAQs'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Values from '../../components/Values'

import './home.css'
const Home = () => {
   return (
      <>
      <MainHeader/>
      <Programs/>
      <Values/>
      <FAQs/>
      </>
   )
}

export default Home
```


---
---
<br>
<br>
<br>

**Aca voy 11 de Marzo**

<br>
<br>
<br>
---
---





33 Construímos un componente **FAQ.jsx** en la carpeta **components**

```javascript
import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

const FAQ = ({question, answer}) => {
    const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    <article className="faq" onClick={() => setIsAnswerShowing(prev => !prev)}>
        <div>
            <h4>{question}</h4>
            <button className="faq__icon">
                {
                    isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
                }
            </button>
        </div>
        {isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQ
```

34 Le damos formato en el archivo **home.css**:

```css
/* ===================== FAQs ===================== */
.faqs__wrapper {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem 5rem;
    align-items: flex-start;
}

.faq {
    background: var(--color-gray-500);
    padding: 2rem;
    border-radius: 1rem;
    cursor: pointer;
}

.faq div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.faq__icon {
    background: transparent;
    color: var(--color-gray-100);
    font-size: 1.5rem;
}

.faq p {
    margin-top: 1.5rem;
}
```

## 34 Sección Testimonials

35 Creamos el componente **Testimonials.jsx** dentro de la carpeta **components**

```javascript
import { useState } from "react"
import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import Card from "../UI/Card"
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import { testimonials } from "../data"

const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index];


    const prevTestimonialHandler = () => {
        setIndex(prev => prev - 1);

        if(index <= 0) {
            setIndex(testimonials.length - 1);
        }
    }

    const nextTestimonialHandler = () => {
        setIndex(prev => prev + 1);

        if(index >= testimonials.length - 1) {
            setIndex(0);
        }
    }

  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" className="testimonials__head"/>
            <Card className="testimonial">
                <div className="testimonial__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className="testimonial__quote">{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className="testimonial__title">{job}</small>
            </Card>
            <div className="testimonials__btn-container">
                <button className="testimonials__btn" onClick={prevTestimonialHandler}>
                   <IoIosArrowDropleftCircle/>
                </button>
                <button className="testimonials__btn"  onClick={nextTestimonialHandler}>
                   <IoIosArrowDroprightCircle/>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
```

36 Integramos el componente **Testimonials.jsx** dentro del componente **Home.jsx**

```javascript
import FAQs from '../../components/FAQs'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import Testimonials from '../../components/Testimonials'

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

37 Le damos formato en el archivo **home.css**:

```css
/* ===================== TESTIMONIALS ===================== */
.testimonials {
    width: 50rem;
    margin-inline: auto;
}

.testimonials__head {
    justify-content: center;
}

.card.testimonial {
    position: relative;
    text-align: left;
    margin-top: 5rem;
}

.testimonial__avatar {
    width: 4rem;
    height: 4rem;
    border-radius: 1.5rem;
    border: 2px solid transparent;
    overflow: hidden;
    position: absolute;
    top: -2rem;
    left: calc(50% - 2rem);
    box-shadow: 0 1.5rem 2rem rgba(26, 26, 54, 0.4);
    transition: var(--transition);
}

.testimonial:hover .testimonial__avatar {
    border-radius: 50%;
    border-color: var(--color-gray-400);
}

.testimonial__quote {
    font-style: italic;
    margin: 1rem 0 2rem;
}

.card small.testimonial__title {
    margin-top: 0.3rem;
}

.testimonials__btn-container {
    width: fit-content;
    margin: 2.5rem auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.testimonials__btn {
background: transparent;
cursor: pointer;
}

.testimonials__btn svg {
    fill: var(--color-primary);
    font-size: 1.8rem;
    width: 3rem;
    height: 3rem;
}
```

## 35 Sección Footer

38 Creamos el componente **Footer.jsx** dentro de la carpeta **components**

```javascript
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui tenetur harum pariatur! Iusto animi cupiditate, provident dolore porro eum obcaecati.
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com/" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://facebook.com/" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
                    <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href="https://instagram.com/" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 EGATOR TUTORIALS &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer
```

39 Integramos el componente **Footer.jsx** dentro del componente **Home.jsx**

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

40 Le damos formato en el archivo **home.css**:

```css
/* ===================== FOOTER ===================== */
footer {
    background: var(--color-primary);
    margin-top: 7rem;
    padding-top: 7rem;
    font-size: 0.9rem;
    color: var(--color-gray-100);
}

.footer__container {
    display: grid;
    grid-template-columns: 26rem 1fr 1fr 1fr;
    gap: 6rem;
}

.footer__container article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7rem;
}

.footer__container article p {
    margin-top: 0.5rem;
}

.footer__container article h4 {
    margin-bottom: 0.6rem;
    font-size: 1rem;
}

.footer__socials {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
}

.footer__socials a {
    background: var(--color-gray-100);
    padding: 0.7rem;
    border: 1px solid transparent;
    border-radius: 0.6rem;
    transition: var(--transition);
}

.footer__socials a svg {
    color: var(--color-gray-600);
}

.footer__socials a:hover {
    border-color: var(--color-gray-100);
    background: transparent;
}

.footer__copyright {
    color: var(--color-gray-100);
    text-align: center;
    padding: 1.5rem 0;
    border-top: 2px solid var(--color-primary-variant);
    margin-top: 5rem;
}
```

41 Estilos para la visualizacion de nuestra pagina en tablets y moviles.

Esta configuración la hacemos en nuestro archivo **index.css**:

```css
/* MEDIA QUERIES (medium screens) */
@media screen and (max-width: 1024px) {
   .container {
       width: var(--container-width-md);
   }

   h1 {
       font-size: 2rem;
   }

   h2 {
       font-size: 1.6rem;
   }

   section {
           /* this margin was added outside tutorial */

       margin-top: 8rem;
   }

   .header__content {
       width: 76%;
   }
}

/* MEDIA QUERIES (small screens) */
@media screen and (max-width: 600px) {
   h1 {
       font-size: 2.2rem;
       line-height: 1.3;
   }

   section {
       margin-top: 7rem;
   }

   .header {
           /* the code below was added outside tutorial */
       max-height: 15rem;
   }

   .header__content {
       width: var(--container-width-md);
       padding: 3rem 0;
   }

   .header__content p {
       font-size: 0.85rem;
   }
}
```

42 Estilos para la visualizacion de nuestra pagina en tablets y moviles en **home.css**.

```css
/* MEDIA QUERIES (medium screens) */
@media screen and (max-width: 1024px) {
/* MAIN HEADER */
.main__header {
    height: fit-content;
    padding: 12rem 0;
}

.main__header-container {
    gap: 0;
}

.main__header-circle {
    width: 16rem;
    height: 16rem;
}

/* PROGRAMS */
.programs__wrapper {
    grid-template-columns: 1fr 1fr;
}

/* VALUES */
.values__container {
    grid-template-columns: 1fr;
    justify-content: center;
    gap: 4rem;
}

.values__wrapper {
    gap: 4rem 3rem;
}

.values__image {
    display: none;
}

/* FAQs */
.faqs__wrapper {
    grid-template-columns: 1fr;
}

/* TESTIMONIALS */
.testimonials {
    width: 75%;
}

/* FOOTER */
.footer__container {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
}
}


/* MEDIA QUERIES (medium screens) */
@media screen and (max-width: 600px) {
/* MAIN HEADER */
.main__header {
    margin-top: 0;
    padding: 12rem 0 0;
    height: 100vh;
}

.main__header-image, .main__header-circle {
    display: none;
}

.main__header-container {
    grid-template-columns: 1fr;
}

/* PROGRAMS */
    .programs__wrapper {
        grid-template-columns: 1fr;
        gap: 2rem;
        margin-top: 3rem;
    }

    .programs__program {
        width: 84%;
        margin: 0 auto;
    }

/* VALUES */
.values__wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
}

.card.values__value {
    width: 84%;
    margin-inline: auto;
}

/* FAQs */
.faqs__wrapper {
    gap: 1rem;
    margin-top: 3rem;
}

/* TESTIMONIALS */
.testimonials {
    width: 100%;
}

/* FOOTER */
footer {
    margin-top: 7rem;
}

.footer__container {
    grid-template-columns: 1fr;
    gap: 3rem;
}

.footer__container article {
    align-items: center;
}

.footer__container article p {
    text-align: center;
}
}
```

---
# 4 Páginas

## Pagina About

43 Creamos el componente **Header.jsx** en la carpeta **components**:

```javascript
const Header = ({title, image, children}) => {
  return (
    <header className="header">
        <div className="header__container">
            <div className="header__container-bg">
                <img src={image} alt="Header Background Image" />
            </div>
            <div className="header__content">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
    </header>
  )
}

export default Header
```

44 Desarrollamos el componente **About.jsx**:

```javascript
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maiores doloribus, eligendi incidunt modi rerum debitis consequatur molestias?
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit ad neque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates natus.
          </p>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam harum corrupti quas voluptate, perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?
          </p>
          <p>
          Perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?
          </p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit ad neque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates natus.
          </p>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam harum corrupti quas voluptate, perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit ad neque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates natus.
          </p>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam harum corrupti quas voluptate, perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?
          </p>
          <p>
          Perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
```

45 Le damos formato en al componente header en el archivo **index.css**:

```css
.header {
    margin-top: 5rem;
    height: 20rem;
    overflow: hidden;
    border-bottom: 2px solid var(--color-gray-400);
}

.header__container {
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    place-items: center;
    background: black;    
}

.header__container-bg {
    position: absolute;
    width: 100%;
}

.header__container-bg img {
    opacity: 0.5;
}

.header__content {
    position: relative;
    width: 44%;
    margin: 0 auto;
    text-align: center;
    color: var(--color-gray-100);
}

.header__content h2 {
    margin-bottom: 1rem;
}

.header__content p {
    color: rgba(255, 255, 255, 0.7)
}

/* MEDIA QUERIES (medium screens) */
@media screen and (max-width: 1024px) {
    .container {
        width: var(--container-width-md);
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.6rem;
    }

    section {
            /* this margin was added outside tutorial */

        margin-top: 8rem;
    }

    .header__content {
        width: 76%;
    }
}

/* MEDIA QUERIES (small screens) */
@media screen and (max-width: 600px) {
    h1 {
        font-size: 2.2rem;
        line-height: 1.3;
    }

    section {
        margin-top: 7rem;
    }

    .header {
            /* the code below was added outside tutorial */
        max-height: 15rem;
    }

    .header__content {
        width: var(--container-width-md);
        padding: 3rem 0;
    }

    .header__content p {
        font-size: 0.85rem;
    }
}
```

46 Agregamos el componente **Footer** a **App.jsx**

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
import Footer from './components/Footer'


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

export default App
```

47 Le damos formato al componente **About.jsx** en **About.css**

```css

/*
1 border-radius: 50%;: Aplica un radio de borde del 50%,
lo que convierte la imagen en una forma circular si es
cuadrada, o en una elipse si es rectangular.

2 overflow: hidden;: Oculta cualquier contenido que se
desborde más allá de los límites del elemento. Esto es
útil para asegurar que la imagen mantenga su forma
redondeada y no muestre partes que sobresalgan.

3 transform: skew(15deg);: Aplica una transformación de
inclinación (skew) de 15 grados a la imagen, lo que la
hace parecer inclinada en el eje horizontal.

4 transition: var(--transition);: Aplica una transición
suave a las propiedades especificadas. var(--transition)
es una variable CSS que debe estar definida en otro
lugar de tu hoja de estilos y que probablemente
especifica la duración y el tipo de transición a utilizar.
*/

.about__section-image {
   border-radius: 50%;
   overflow: hidden;
   transform: skew(15deg);
   transition: var(--transition);
}

/*
Esta regla CSS aplica un estilo específico al segundo hijo
de un elemento padre con la clase about__section-image.

1 .about__section-image:nth-child(2): Esta parte del selector
CSS selecciona el segundo elemento hijo dentro de un
contenedor padre que tiene la clase about__section-image.
La pseudoclase :nth-child(2) especifica que el estilo se
aplicará únicamente al segundo hijo.

2 transform: skew(-15deg);: Esta propiedad CSS aplica una
transformación de inclinación (skew) de -15 grados al
elemento seleccionado. Esto hace que el segundo hijo dentro
del contenedor con la clase about__section-image se incline
15 grados en sentido contrario al eje horizontal.
*/

.about__section-image:nth-child(2) {
   transform: skew(-15deg);
}

.about__section-image:hover {
   transform: skew(0);
}

.about__section-content h1 {
   margin-bottom: 2rem;
}

.about__section-content p {
   margin-bottom: 1rem;
}

.about__story-container, .about__mission-container {
   display: grid;
   grid-template-columns: 40% 50%;
   gap: 10%;
}

/*
1 display: grid;: Esto establece el contenedor como un
contenedor de cuadrícula (grid). Un contenedor de cuadrícula
permite organizar elementos hijos en una cuadrícula,
proporcionando un control preciso sobre el diseño y la
colocación de los elementos.

2 grid-template-columns: 50% 40%;: Define la estructura de
las columnas dentro del contenedor de cuadrícula. En este
caso, se especifican dos columnas: la primera columna ocupará
el 50% del ancho del contenedor, y la segunda columna ocupará
el 40% del ancho del contenedor. Esto deja un 10% de espacio,
que se distribuye por la propiedad gap.

3 gap: 10%;: Establece un espacio (gap) del 10% entre las
columnas de la cuadrícula. Este espacio se aplica entre todos
los elementos de la cuadrícula, tanto horizontal como verticalmente.
*/

.about__vision-container {
   display: grid;
   grid-template-columns: 50% 40%;
   gap: 10%;
}

/* MEDIA QUERIES (medium screens) */
@media screen and (max-width: 1024px) {
   .about__section-image {
       width: 60%;
   }

/*
Este bloque de código CSS aplica un estilo a los elementos <h1> que
están dentro de un contenedor con la clase about__section-content.

1 .about__section-content h1: Este selector CSS selecciona todos los
elementos <h1> que son hijos de un elemento con la clase
about__section-content. En otras palabras, aplica estilos a todos
los títulos <h1> dentro de ese contenedor específico.

2 margin-bottom: 1.2rem;: Esta propiedad CSS establece el margen
inferior del elemento <h1> en 1.2rem. El valor 1.2rem se basa en el
tamaño de la fuente raíz del documento. Un rem (root em) es una
unidad relativa de medida en CSS que corresponde al tamaño de la
fuente de la raíz del documento (generalmente, el tamaño de la fuente <html>).
*/

   .about__section-content h1 {
       margin-bottom: 1.2rem;
   }

   .about__story-container, .about__vision-container, .about__mission-container {
       grid-template-columns: 1fr;
       gap: 3rem;
   }

   .about__vision .about__section-image {
       grid-row: 1;
   }
}

/* MEDIA QUERIES (small screens) */
@media screen and (max-width: 600px) {
.about__section-image {
   width: 80%;
   margin-inline: auto;
}

.about__story-container, .about__vision-container, .about__mission-container {
   gap: 2rem;
}

}
```

## Pagina Contact

48 Desarrollamos el componente **Contact.jsx** dentro de la carpeta **components**:

```html
1 <section className="contact">: Este elemento <section> actúa como un
contenedor para la sección de contacto y tiene la clase contact.

2 <div className="container contact__container">: Este <div> contiene
otra clase contact__container, que probablemente se utiliza para aplicar
estilos específicos a este contenedor de contacto dentro de la sección.

3 <div className="contact__wrapper">: Este <div> agrupa los enlaces de
contacto y tiene la clase contact__wrapper, que podría usarse para
aplicar estilos de diseño a estos elementos.
```

```python
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
    Fruga itaque ducimus, ad amet praesentium suscipit sit, assumenda nihil officia totam, animi culpa nobis nemo natus doloremque?
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:support@egattor.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http://m.me/ernest_achiever" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+123456789" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
```

49 Le damos estilos al componente **Contact.jsx** en el archivo **contact.css**

```css
.contact__container {
    display: grid;
    place-items: center;
}

.contact__wrapper {
    width: fit-content;
    display: flex;
    gap: 2rem;
}

.contact__wrapper a {
    background: var(--color-primary);
    font-size: 2rem;
    border: 2px solid transparent;
    transition: var(--transition);
    padding: 2rem;
    border-radius: 1.5rem;
}

.contact__wrapper a:hover {
    background: transparent;
    border-color: var(--color-gray-100);
}


/* MEDIA QUERIES (small screens) */
@media screen and (max-width: 600px) {
    .contact__wrapper {
        gap: 1.5rem;
    }

    .contact__wrapper a {
        padding: 1rem;
        font-size: 1.2rem;
        border-radius: 1rem;
    }
}
```

## Pagina Gallery

50 Desarrollamos el componente **Gallery.jsx** dentro de la carpeta **components**:

El código define una función de componente de React llamada Gallery. Dentro de esta 
función, se crea una variable galleryLength que tiene el valor 15, lo que indica la 
longitud de la galería, es decir, cuántas imágenes habrá. Luego, se declara un arreglo 
vacío llamado images que almacenará las rutas de las imágenes.

El bucle for se utiliza para iterar desde 1 hasta el valor de galleryLength (en este 
caso, 15). En cada iteración, la función require se usa para importar una imagen 
desde una ruta específica (../../images/gallery${i}.jpg), donde ${i} se sustituye por 
el valor actual del iterador, creando rutas como ../../images/gallery1.jpg, ../../images/gallery2.jpg, y así sucesivamente, hasta ../../images/gallery15.jpg. 
Cada imagen importada se agrega al arreglo images mediante el método push.

El propósito de este código es generar dinámicamente un arreglo de 15 imágenes que 
se pueden utilizar posteriormente en el componente Gallery para mostrar una galería 
de imágenes.

```javascript
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'


const Gallery = () => {
  const galleryLength = 15;
  const images = []

  for(let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }


  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
      Quisquam id tenetur adipisci nesciunt ipsum amet in quibusdam, architecto nostrum nobis, est, deserunt odio illum perspiciatis.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery
```

51 Le damos estilos al componente **Gallery.jsx** en el archivo **Gallery.css**.

```css
.gallery__container {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
}

.gallery__container article {
   border: 1rem solid transparent;
   transition: var(--transition);
}

.gallery__container article:hover {
   border-color: var(--color-gray-500);
}

/* MEDIA QUERIES (medium screens) */
@media screen and (max-width: 1024px) {
   .gallery__container {
       grid-template-columns: 1fr 1fr;
       gap: 2rem;
   }

   .gallery__container article {
       border: 0;
   }
}

/* MEDIA QUERIES (small screens) */
@media screen and (max-width: 600px) {
   .gallery__container {
       grid-template-columns: 1fr;
       gap: 1rem;
   }
}
```

## Pagina NotFound

52 Desarrollamos el componente **NotFound.jsx** dentro de la carpeta **components**:

```javascript
import {Link} from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Page Not Found</h2>
        <Link to="/" className='btn'>Go Back Home</Link>
      </div>
    </section>
  )
}

export default NotFound
```

53 Le damos estilos al componente **NotFound.jsx** en el archivo **NotFound.css**.

```css
.notfound__container {
    text-align: center;
    padding-top: 8rem;
}

.notfound__container .btn {
    margin-top: 2rem;
    display: inline-block;
}
```

## Pagina Plans

54 Desarrollamos el componente **Plans.jsx** dentro de la carpeta **components**:

```javascript
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import Card from '../../UI/Card'
import {plans} from '../../data'
import './plans.css'

const Plans = () => {
  return (
    <>
    <Header title="Membership Plans" image={HeaderImage}>
    Assumenda perspiciatis asperiores deserunt quisquam, sit iusto consectetur vero similique aliquam.
    </Header>
    <section className="plans">
      <div className="container plans__container">
        {
          plans.map(({id, name, desc, price, features}) => {
            return <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1><h2>/mo</h2>
              <h4>Features</h4>
              {
                features.map(({feature, available}, index) => {
                  return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                })
              }
              <button className='btn lg'>Choose Plan</button>
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans
```

55 Le damos estilos al componente **Plans.jsx** en el archivo **Plans.css**.

```css
.plans__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
}

.plan h3 {
    margin-bottom: 0.8rem;
}

.plan small {
    margin-bottom: 2rem;
}

.plan h1 {
    color: var(--color-primary-variant);
    display: inline;
}

.plan h2 {
    display: inline;
    color: var(--color-gray-400);
}

.plan h4 {
    margin-top: 2rem;
}

.plan p {
    margin-top: 1rem;
    color: var(--color-gray-100)
}

.plan p.disabled {
    color: var(--color-gray-400);
}

.plan button {
    margin-top: 3rem;
    cursor: pointer;
}
```

## Pagina Trainers

56 Desarrollamos el componente **Trainers.jsx** dentro de la carpeta **components**:

```javascript
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import Trainer from '../../components/Trainer'
import './trainers.css'

const Trainers = () => {
  return (
    <>
    <Header title="Our Trainers" image={HeaderImage}>
    Facilis, iusto numquam unde laboriosam expedita qui exercitationem? Dicta vero accusantium est aut molestiae fugit doloremque suscipit quod.
    </Header>
    <section className="trainers">
      <div className="container trainers__container">
        {
          trainers.map(({id, image, name, job, socials}) => {
            return <Trainer key={id} image={image} name={name} job={job} socials={
              [
                {icon: <BsInstagram/>, link: socials[0]},
                {icon: <AiOutlineTwitter/>, link: socials[1]},
                {icon: <FaFacebookF/>, link: socials[2]},
                {icon: <FaLinkedinIn/>, link: socials[3]}
              ]
            }/>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers
```

55 Le damos estilos al componente **Trainers.jsx** en el archivo **Trainers.css**.

```css
.trainers__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
}

.card.trainer {
    padding: 1rem;
}

.trainer__img {
    border-radius: 0 2rem;
    overflow: hidden;
}

.trainer h3 {
    margin-top: 2rem;
}

.trainer p {
    margin-top: 0.5rem;
}

.trainer__socials {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
}

.trainer__socials a {
    font-size: 0.7rem;
    background: var(--color-gray-600);
    padding: 0.8rem;
    border-radius: 0.7rem;
    transition: var(--transition);
}

.trainer:hover a {
    background: var(--color-gray-500)
}

/* MEDIA QUERIES (medium screens) */
@media screen and (max-width: 1024px) {
    .trainers__container {
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;
    }
}

/* MEDIA QUERIES (small screens) */
@media screen and (max-width: 600px) {
    .trainers__container {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .card.trainer {
        width: 90%;
        margin-inline: auto;
    }
}
```

56 Construyamos el componente **Trainer.jsx** que guardaremos en la carpeta **components**.

```javascript
import Card from '../UI/Card'

const Trainer = ({image, name, job, socials}) => {
  return (
    <Card className="trainer">
        <div className="trainer__img">
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="trainer__socials">
            {
                socials.map(({icon, link}, index) => {
                    return <a key={index} href={link} target="_blank" rel='noreffer noopener'>{icon}</a>
                })
            }
        </div>
    </Card>
  )
}

export default Trainer
```

57 El siguiente trozo de codigo en **index.css** nos entrega textura a nuestro background:

```css
/* GENERAL STYLES */
body {
   font-family: 'Montserrat', sans-serif;
   color: var(--color-gray-200);
   line-height: 1.7;
   overflow-x: hidden;
   background: var(--color-gray-600) url('./images/bg_texture.png');
}
```




