# REACT

## Lo que queda en este repositorio.

1 *01-starting-project-sociolab*: Colores y formatos para mi pagina Sociolab.\
2 *proyecto-egator-ejer-1.md*: Es el estudio que llevo paso a paso en un primer ejercicio del proyecto egator.
3 proyecto-egator: Es el proyecto original de egator.

## Lo que se va de este repositorio.

1 componente Footer.md\
2 componente Header.md\
3 componente Testimonios.md\
4 react-website-1\
5 react-website-1 (1).zip

6 00-starting-js-proj: proyectos originales de react udemy para pruebas 
7 01-starting-project-sociolab: proyectos originales de react udemy para pruebas
8 01-starting-project: proyectos originales de react udemy para pruebas

## https://react.new/

Cuando importas un proyecto, lo primero que debes hacer por única vez es instalar todas las librerías necesarias con: 

```bash
PS C:\Users\chris\OneDrive\Documentos\GitHub\react\01-starting-project> npm install 
```

Luego, para levantar el proyecto:

```bash
cd \Users\chris\OneDrive\Documentos\GitHub\react\01-starting-project
\Users\chris\OneDrive\Documentos\GitHub\react\01-starting-project> npm run dev
```

Tengo vinculada mi cuenta GitHub a la cuenta codesandbox.

React es una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario (UI). Se utiliza principalmente para desarrollar aplicaciones web de una sola página (SPA) y aplicaciones móviles. React permite a los desarrolladores crear componentes reutilizables que gestionan su propio estado, lo que facilita la construcción de interfaces de usuario complejas y dinámicas.

## Para ubuntu:

agrega en package.json:\

  "scripts": {\
    "start": "react-scripts start",\
    "build": "react-scripts build",\
    "test": "react-scripts test",\
    "eject": "react-scripts eject",\
    **"dev": "react-scripts start"**\
  },

  luego en la terminal:

  npm install

  y luego

  npm start

## Diferencias entre React y JavaScript

- Propósito:\
JavaScript: Es un lenguaje de programación que se utiliza para crear contenido dinámico en sitios web. Permite manipular el DOM (Document Object Model), manejar eventos, validar formularios, y mucho más.\
React: Es una biblioteca específica de JavaScript que se centra en la construcción de interfaces de usuario. Facilita la creación de componentes UI reutilizables y la gestión del estado de la aplicación.

- Uso:\
JavaScript: Se puede usar directamente en el navegador para añadir interactividad a las páginas web. Es fundamental para el desarrollo web y se utiliza en combinación con HTML y CSS.\
React: Se utiliza para construir aplicaciones web más estructuradas y mantenibles. React abstrae la manipulación del DOM y proporciona una forma más eficiente de actualizar la UI en respuesta a los cambios de datos.

- Sintaxis:\
JavaScript: Utiliza una sintaxis estándar que puede ser ejecutada por cualquier navegador web.\
React: Utiliza JSX (JavaScript XML), una extensión de sintaxis que permite escribir HTML dentro de JavaScript. JSX facilita la creación de componentes React al combinar la lógica de renderizado con la estructura de la UI.

- **Componentes**:\
JavaScript: **No tiene un sistema de componentes** incorporado. Los desarrolladores deben crear y gestionar manualmente la estructura y el estado de la UI.\
React: Introduce el concepto de **componentes**, que son bloques de construcción reutilizables de la UI. Cada **componente** puede tener su propio estado y lógica de renderizado.

- Actualización del DOM:\
JavaScript: Las actualizaciones del DOM pueden ser costosas y complejas, especialmente en aplicaciones grandes.\
React: Utiliza un “Virtual DOM” para optimizar las actualizaciones. React compara el Virtual DOM con el DOM real y aplica solo los cambios necesarios, lo que mejora el rendimiento.
