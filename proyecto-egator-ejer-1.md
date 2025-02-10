1 En la terminal de vsc, instalados dentro de la capeta donde desarrollaremos nuestro proyecto:


npm create-react-app ./ \
npm install react-icons \
npm install react-router-dom \
npm install web-vitals

2 Borramos todo dentro de las carpetas public y src.

3 Creamos el archivo index.html en la carpeta public.
Con "doc"-tab:

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

5 en la carpeta src creamos las siguientes otras tres carpetas:

components
images
pages
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

10 

28' aca voy.

*** 25 minutos

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
       <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
   <div id="root">
   </div>
</body>
</html>
```











