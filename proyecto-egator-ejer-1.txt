1 En la terminal de vsc, instalados dentro de la capeta donde desarrollaremos nuestro proyecto:


npm create-react-app ./
npm install react-icons
npm install react-router-dom
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

---jsx---
```javascript
import './about.css'

const about = () => {
  return (
    <div>
      
    </div>
  )
}

export default about
```
---

10 

28' aca voy.

*** 25 minutos





















