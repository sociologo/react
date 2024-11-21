
# Componentes

En React, un componente es una pieza reutilizable y autónoma de código que define una parte de la interfaz de usuario. Los componentes son los bloques de construcción fundamentales de una aplicación React. 

## Caracteristicas

- Reutilizable y Autónomo: Un componente es una unidad de código que puede ser reutilizada en diferentes partes de una aplicación o incluso en diferentes proyectos. Cada componente es autónomo, lo que significa que maneja su propio estado y lógica.

- Declarativo: React adopta un enfoque declarativo para construir interfaces de usuario. En lugar de manipular el DOM directamente, describes cómo debería verse la interfaz de usuario en función del estado de la aplicación, y React se encarga de actualizar el DOM para que coincida con esta descripción.

- Jerarquía de Componentes: Los componentes pueden ser pequeños, como un botón, o grandes, como una página completa. Puedes combinar componentes pequeños para formar componentes más grandes, creando una jerarquía de componentes que define la estructura de la interfaz de usuario.

## Tipos de Componentes

- Componentes Funcionales: Son funciones de JavaScript que aceptan props (propiedades) como argumento y devuelven elementos de React. Son más simples y se utilizan comúnmente con hooks para manejar el estado y los efectos secundarios.

```JavaScript
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

- Componentes de Clase: Son clases de JavaScript que extienden React.Component y tienen un método render que devuelve elementos de React. Aunque siguen siendo válidos, los componentes funcionales son más comunes en las aplicaciones modernas de React.

```JavaScript
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

## Ejemplo

Ejemplo simple de un componente funcional en React:

```JavaScript
function WelcomeMessage({ name }) {
  return <h1>Welcome, {name}!</h1>;
}

// Uso del componente
<WelcomeMessage name="Max" />
```

En este ejemplo:

WelcomeMessage es un componente funcional que acepta una prop name.

El componente devuelve un elemento h1 que muestra un mensaje de bienvenida utilizando la prop name.

## Ventajas de Usar Componentes

- Reutilización: Puedes reutilizar componentes en diferentes partes de tu aplicación, lo que reduce la duplicación de código.

- Mantenimiento: Los componentes autónomos y bien definidos facilitan el mantenimiento y la actualización del código.

- Composición: Puedes combinar componentes pequeños para crear interfaces de usuario complejas de manera modular y organizada.

En resumen, los componentes en React te permiten construir interfaces de usuario de manera eficiente y organizada, aprovechando la reutilización y la modularidad del código.

# Nuestro primer componente

```JavaScript
function Header() {

   const description = reactDescriptions[genRandomInt(2)];

   return (
      <header>
         <img src={reactImg} alt="Stylized atom" />
         <h1>
            React Essentials
         </h1>
         <p>
            {description} Fundamental React concepts you will need for almost any app you are going to build!
         </p>
      </header>
   );
}
```

![image](https://github.com/user-attachments/assets/699b69b9-a6b5-4620-bb6c-ae2831a0a510)

## Reglas

Un componente de React debe seguir las siguientes reglas:

1 El nombre de la funcion debe comenzar con una mayuscula

2 La funcion debe retornar un contenido renderizable, esto es, contenido que react pueda desplegar en el navegador.

## 43 Contenido dinamico en una web

![image](https://github.com/user-attachments/assets/bae63692-bffe-42ca-9fb2-ebea39f3f166)

La función Math.random() en JavaScript devuelve un número de coma flotante pseudo-aleatorio comprendido en el rango de 0 (incluido) a 1 (excluido). Esto significa que el valor devuelto puede ser 0, pero siempre será menor que 1.

## 44 45 Props

### Intro

En React, los props (abreviatura de “properties”) son una forma de pasar datos de un componente a otro. Los props permiten que los componentes sean reutilizables y dinámicos, ya que puedes cambiar su comportamiento y apariencia según los datos que les pases.

Los props se utilizan para pasar datos desde un componente padre a un componente hijo. Esto permite que el componente hijo acceda a esos datos y los utilice para renderizar contenido dinámico. Los props son inmutables, lo que significa que un componente no puede cambiar sus propios props. Esto asegura que los datos fluyan en una sola dirección, de arriba hacia abajo, lo que se conoce como “flujo de datos unidireccional”.

Los props poseeen una sintaxis similar a HTML. 

Ventajas de Usar Props

- Reutilización: Los componentes pueden ser reutilizados con diferentes datos, lo que reduce la duplicación de código.
- Modularidad: Facilitan la creación de componentes modulares y mantenibles.
- Claridad: Ayudan a mantener un flujo de datos claro y predecible en la aplicación.

**Los props son fundamentales en React porque permiten que los componentes sean flexibles y reutilizables. Al pasar datos a través de props, puedes crear componentes genéricos que se adapten a diferentes situaciones y datos.**

### Ejemplo: Analicemos el siguiente componente:

El archivo **App.jsx** define dos componentes principales: **CoreConcept** y **App**. El componente **CoreConcept** es un componente funcional que recibe props (propiedades) como parámetros y los utiliza para renderizar un ítem de lista (`<li>`) con una imagen, un título y una descripción. Este componente es reutilizable y se puede personalizar pasando diferentes valores de props.

El componente **App** es el componente principal de la aplicación. Dentro de este componente, se estructura la página con un encabezado (`<Header />`), una sección principal (`<main>`) y una subsección específica para los **Core Concepts**. En esta subsección, se utiliza una lista (`<ul>`) para mostrar varios componentes **CoreConcept**, cada uno con diferentes datos provenientes de un array llamado **CORE_CONCEPTS**.

El archivo data.js define y exporta el array **CORE_CONCEPTS**, que contiene objetos con información sobre conceptos clave de React. Cada objeto incluye una imagen, un título y una descripción. Estas propiedades se importan y utilizan en el componente **App** para renderizar dinámicamente los componentes CoreConcept.

En resumen, estos códigos juntos crean una estructura de aplicación React que muestra una lista de conceptos clave, cada uno con su propia imagen, título y descripción, utilizando componentes reutilizables y datos dinámicos.

**App.jsx**

```Javascript
function CoreConcept({image, title, description}){
   return (
      <li>
         <img src = {image} alt = {title} />
         <h3>{title}</h3>
         <p>{description}</p>
      </li>
   );
}

function App() {
   return (
      <div>
         <Header />
         <main>
            <section id = 'core-concepts'>
               <h2>
                  Core Concepts
               </h2>
                  <ul>
                     <CoreConcept                  
                        title = {CORE_CONCEPTS[0].title}
                        description = {CORE_CONCEPTS[0].description} 
                        image = {CORE_CONCEPTS[0].image}                
                     />
                     <CoreConcept {...CORE_CONCEPTS[1]}/>
                     <CoreConcept {...CORE_CONCEPTS[2]}/>
                     <CoreConcept {...CORE_CONCEPTS[3]}/>                   
                  </ul>              
            </section>
            <h2>Time to get started!</h2>
         </main>
      </div>
   );
}
```

**data.js**

```Javascript
import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
   {
      image: componentsImg,
      title: 'Components',
      description:
         'The core UI building block - compose the user interface by combining multiple components.',
   },
   {
      image: jsxImg,
      title: 'JSX',
      description:
         'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
   },
   {
      image: propsImg,
      title: 'Props',
      description:
         'Make components configurable (and therefore reusable) by passing input data to them.',
   },
   {
      image: stateImg,
      title: 'State',
      description:
         'React-managed data which, when changed, causes the component to re-render & the UI to update.',
   },
];
```










