01-starting-project-sociolab: a borrar\
Proyecto inicial: a borrar\
Proyecto inicial 1: a borrar\
proyecto udemy 1: a borrar\
proyecto-egator-ejer-2: a borrar\

# REACT

**proyecto-egator-ejer-1**: es un proyecto construido de cero siguiendo las instrucciones del manual **proyecto-egator-ejer-1.md**. 

A modo de ejercicio se construyen proyectos siguiendo la misma nomenclatura: **proyecto-egator-ejer-n**


C:\Users\chris\Documentos\GitHub
---
Proyecto Udemy:\
C:\Users\chris> cd / \
C:\> cd \Users\chris\Documentos\GitHub\react\proyecto udemy 1 \
C:\Users\chris\Documentos\GitHub\react\proyecto udemy 1> npm install \
C:\Users\chris\Documentos\GitHub\react\proyecto udemy 1> npm run dev

---
Proyecto Egator:\
C:\Users\chris> cd / \
C:\> cd \Users\chris\Documentos\GitHub\react\proyecto-egator-ejer-1
C:\Users\chris\Documentos\GitHub\react\proyecto-egator-ejer-1> npm install \
C:\Users\chris\Documentos\GitHub\react\proyecto-egator-ejer-1> npm start


## https://react.new/

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
