<p align="center">
  <img src="https://github.com/user-attachments/assets/63b6eaa8-5b80-4f64-9285-705612903b16" alt="image" width="60%">
</p>

# REACT: elementos del framework

## Índice

* [1 Componentes](#1-Componentes)
  * [11 Características](#11-Caracteristicas)
  * [12 Tipos de Componentes](#12-Tipos-de-Componentes)
  * [13 Ejemplo](#13-Ejemplo)
  * [14 Ventajas de Usar Componentes](#14-Ventajas-de-Usar-Componentes)
  * [15 Nuestro primer componente](#15-Nuestro-primer-componente)
  * [16 Reglas](#16-Reglas)
* [Digresion Contenido dinamico en una web](#Digresion-Contenido-dinamico-en-una-web)
* [2 Props](#2-Props)
  * [21 Intro](#21-Intro)
  * [22 Ejemplo](#22-Ejemplo)
* [Digresión Organizando correctamente componentes y css](#Digresión-Organizando-correctamente-componentes-y-css)
  * [21 Componentes](#21-Componentes)
  * [22 CSS](#22-CSS)
* [3 El concepto de children](#3-El-concepto-de-children)
  * [31 Introducción](#31-Introducción)
  * [32 Composición de componentes](#32-Composición-de-componentes)
  * [33 Reacción a eventos](#33-Reacción-a-eventos)
  * [33 Ejemplo de reacción a eventos](#33-Ejemplo-de-reacción-a-eventos)
  * [34 Ejemplo](#34-Ejemplo)
* [4 El concepto de State y Hook](#4-El-concepto-de-State-y-Hook)
  * [41 El problema](#41-El-problema)
  * [42 Reglas de los Hooks](#42-Reglas-de-los-Hooks)
  * [43 Ejemplo Trabajando con State](#43-Ejemplo-Trabajando-con-State)
  * [44 Entregando contenido de un datajs](#44-Entregando-contenido-de-un-datajs)

* [5 Renderización de contenido de forma condicional](#5-Renderización-de-contenido-de-forma-condicional)
  * [51 Utilizando dos operadores ternarios dejando useState vacío](#51-Utilizando-dos-operadores-ternarios-dejando-useState-vacío)
  * [52 Integrando la funcionalidad en un solo operador tenario](#52-Integrando-la-funcionalidad-en-un-solo-operador-tenario)
  * [53 Utilizando el operador y lógico de javascript](#53-Utilizando-el-operador-y-lógico-de-javascript)
  * [54 Utilizando una variable const](#54-Utilizando-una-variable-const)
  * [55 Ejercicio](#55-Ejercicio)

* [6 Entregando estilos en forma condicional](#6-Entregando-estilos-en-forma-condicional)
  * [61 Ejercicio](#61-Ejercicio)

* [7 Generación dinámica de datos de listas. El método map](#7-Generación-dinámica-de-datos-de-listas.-El-método-map)

***

# 1 Componentes

En React, un componente es una pieza reutilizable y autónoma de código que define una parte de la interfaz de usuario. Los componentes son los bloques de construcción fundamentales de una aplicación React. 

## 11 Caracteristicas

- Reutilizable y Autónomo: Un componente es una unidad de código que puede ser reutilizada en diferentes partes de una aplicación o incluso en diferentes proyectos. Cada componente es autónomo, lo que significa que maneja su propio estado y lógica.

- Declarativo: React adopta un enfoque declarativo para construir interfaces de usuario. En lugar de manipular el DOM directamente, describes cómo debería verse la interfaz de usuario en función del estado de la aplicación, y React se encarga de actualizar el DOM para que coincida con esta descripción.

- Jerarquía de Componentes: Los componentes pueden ser pequeños, como un botón, o grandes, como una página completa. Puedes combinar componentes pequeños para formar componentes más grandes, creando una jerarquía de componentes que define la estructura de la interfaz de usuario.

## 12 Tipos de Componentes

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

## 13 Ejemplo

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

## 14 Ventajas de Usar Componentes

- Reutilización: Puedes reutilizar componentes en diferentes partes de tu aplicación, lo que reduce la duplicación de código.

- Mantenimiento: Los componentes autónomos y bien definidos facilitan el mantenimiento y la actualización del código.

- Composición: Puedes combinar componentes pequeños para crear interfaces de usuario complejas de manera modular y organizada.

En resumen, los componentes en React te permiten construir interfaces de usuario de manera eficiente y organizada, aprovechando la reutilización y la modularidad del código.

## 15 Nuestro primer componente

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

## 16 Reglas

Un componente de React debe seguir las siguientes reglas:

1 El nombre de la funcion debe comenzar con una mayuscula

2 La funcion debe retornar un contenido renderizable, esto es, contenido que react pueda desplegar en el navegador.

# Digresion Contenido dinamico en una web

![image](https://github.com/user-attachments/assets/bae63692-bffe-42ca-9fb2-ebea39f3f166)

La función Math.random() en JavaScript devuelve un número de coma flotante pseudo-aleatorio comprendido en el rango de 0 (incluido) a 1 (excluido). Esto significa que el valor devuelto puede ser 0, pero siempre será menor que 1.

# 2 Props

lecciones 44 y 45

## 21 Intro

En React, los props (abreviatura de “properties”) son una forma de pasar datos de un componente a otro. Los props permiten que los componentes sean reutilizables y dinámicos, ya que puedes cambiar su comportamiento y apariencia según los datos que les pases.

Los props se utilizan para pasar datos desde un componente padre a un componente hijo. Esto permite que el componente hijo acceda a esos datos y los utilice para renderizar contenido dinámico. Los props son inmutables, lo que significa que un componente no puede cambiar sus propios props. Esto asegura que los datos fluyan en una sola dirección, de arriba hacia abajo, lo que se conoce como “flujo de datos unidireccional”.

Los props poseeen una sintaxis similar a HTML. 

Ventajas de Usar Props

- Reutilización: Los componentes pueden ser reutilizados con diferentes datos, lo que reduce la duplicación de código.
- Modularidad: Facilitan la creación de componentes modulares y mantenibles.
- Claridad: Ayudan a mantener un flujo de datos claro y predecible en la aplicación.

**Los props son fundamentales en React porque permiten que los componentes sean flexibles y reutilizables. Al pasar datos a través de props, puedes crear componentes genéricos que se adapten a diferentes situaciones y datos.**

## 22 CSS

El archivo **App.jsx** define dos componentes principales: **CoreConcept** y **App**. El componente **CoreConcept** es un componente funcional que recibe props (propiedades) como parámetros y los utiliza para renderizar un ítem de lista (`<li>`) con una imagen, un título y una descripción. Este componente es reutilizable y se puede personalizar pasando diferentes valores de props.

El componente **App** es el componente principal de la aplicación. Dentro de este componente, se estructura la página con un encabezado (`<Header />`), una sección principal (`<main>`) y una subsección específica para los **Core Concepts**. En esta subsección, se utiliza una lista (`<ul>`) para mostrar varios componentes **CoreConcept**, cada uno con diferentes datos provenientes de un array llamado **CORE_CONCEPTS**.

El archivo data.js define y exporta el array **CORE_CONCEPTS**, que contiene objetos con información sobre conceptos clave de React. Cada objeto incluye una imagen, un título y una descripción. Estas propiedades se importan y utilizan en el componente **App** para renderizar dinámicamente los componentes CoreConcept.

En resumen, estos códigos juntos crean una estructura de aplicación React que muestra una lista de conceptos clave, cada uno con su propia imagen, título y descripción, utilizando componentes reutilizables y datos dinámicos.

**App.jsx**

```Javascript
import {CORE_CONCEPTS} from "./data.js";
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

// ... (código omitido)

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

En los componentes CoreConcept1 y CoreConcept2, la diferencia principal radica en cómo se manejan las propiedades (props).

En CoreConcept1, las propiedades se agrupan en un solo objeto llamado props. Dentro del componente, se accede a cada propiedad utilizando la notación de punto, es decir, props.propertyName. Este enfoque puede ser menos intuitivo y más verboso, ya que requiere referirse constantemente al objeto props para acceder a cada propiedad individual.

Por otro lado, en CoreConcept2, las propiedades se **desestructuran** directamente en los parámetros de la función. Esto significa que las propiedades se extraen del objeto props y se pueden usar directamente sin necesidad de prefijos adicionales. Este método es más limpio y conciso, facilitando la lectura y el mantenimiento del código. La desestructuración de props en los parámetros de la función es una práctica recomendada en React, ya que mejora la claridad y la simplicidad del código.

En resumen, mientras que CoreConcept1 utiliza un enfoque más tradicional y explícito para manejar props, CoreConcept2 adopta una técnica más moderna y eficiente mediante la **desestructuración**, lo que resulta en un código más claro y fácil de entender.

```Javascript
function CoreConcept1({props}){
   return (
      <li>
         <img src = {props.image} alt = {props.title} />
         <h3>{props.title}</h3>
         <p>{props.description}</p>
      </li>
   );
}
function CoreConcept2({image, title, description}){
   return (
      <li>
         <img src = {image} alt = {title} />
         <h3>{title}</h3>
         <p>{description}</p>
      </li>
   );
}
```

Se están creando instancias del componente CoreConcept y se están pasando propiedades (props) de dos maneras diferentes.

Primera instancia de CoreConcept: Aquí, las propiedades title, description e image se pasan explícitamente al componente CoreConcept utilizando valores específicos del array CORE_CONCEPTS. Cada propiedad se asigna individualmente a partir del primer objeto en el array (CORE_CONCEPTS[0]).

Siguientes instancias de CoreConcept: En las siguientes tres instancias, se utiliza la sintaxis de desestructuración con el operador de propagación (...). Esto significa que todas las propiedades del objeto correspondiente en el array CORE_CONCEPTS se pasan automáticamente al componente CoreConcept. Por ejemplo, {...CORE_CONCEPTS[1]} pasa todas las propiedades del segundo objeto en el array (CORE_CONCEPTS[1]) al componente CoreConcept.

En resumen, la primera instancia pasa las propiedades de manera explícita y detallada, mientras que las siguientes instancias utilizan la desestructuración para pasar todas las propiedades de los objetos correspondientes de manera más concisa y eficiente. Esto hace que el código sea más limpio y fácil de mantener, especialmente cuando se trabaja con múltiples propiedades.

```Javascript
<CoreConcept                  
  title = {CORE_CONCEPTS[0].title}
  description = {CORE_CONCEPTS[0].description} 
  image = {CORE_CONCEPTS[0].image}                
/>
<CoreConcept {...CORE_CONCEPTS[1]}/>
<CoreConcept {...CORE_CONCEPTS[2]}/>
<CoreConcept {...CORE_CONCEPTS[3]}/>  
```

el proyecto luce asi:

![image](https://github.com/user-attachments/assets/06a6366f-bd76-456a-9cd3-0ef0d1677b3d)

# Digresión Organizando correctamente componentes y css

lecciones 47 y 48

## Componentes

No se recomienda tener todos los componentes de una aplicación React en un mismo archivo por varias razones:

- Mantenimiento y Legibilidad: Tener todos los componentes en un solo archivo puede hacer que el código sea difícil de leer y mantener. Dividir los componentes en archivos separados facilita la navegación y comprensión del código.

- Reutilización: Al separar los componentes en archivos individuales, es más fácil reutilizarlos en diferentes partes de la aplicación o incluso en otros proyectos.

- Modularidad: La modularidad es un principio clave en el desarrollo de software. Al dividir los componentes, cada uno puede ser desarrollado, probado y depurado de manera independiente.

- Colaboración: En equipos de desarrollo, tener componentes separados permite que varios desarrolladores trabajen en diferentes partes de la aplicación simultáneamente sin conflictos.

- Rendimiento: Aunque no es un problema común, tener un archivo muy grande puede afectar el rendimiento del editor de código y las herramientas de desarrollo.

Estructura original de archivos:

![image](https://github.com/user-attachments/assets/ff00d5a2-1148-458c-a36b-87dce9c616b3)

Creamos una carpeta llamada **components** donde iran todos nuestros componentes:

Debemo añadir la declaracion de exportacion **export default** para poder importarla correctamente donde lo necesitemos.

En React, export default se utiliza para exportar un único valor o componente como la exportación predeterminada de un módulo. Esto significa que cuando importas ese módulo, puedes darle cualquier nombre al valor importado sin necesidad de usar llaves.

![image](https://github.com/user-attachments/assets/57b320ad-0a5e-45e4-bbe7-b9671d9baf0c)

![image](https://github.com/user-attachments/assets/b5e02383-c891-4254-a367-67fb6219fe3e)

![image](https://github.com/user-attachments/assets/31a1d1da-d517-48e0-8974-3f113cb845cc)

## CSS

En React, es conveniente organizar tanto los componentes como los archivos CSS en carpetas separadas por varias razones:

Modularidad y Mantenibilidad: Al tener cada componente en su propia carpeta junto con su archivo CSS, se facilita la gestión y el mantenimiento del código. Cada carpeta actúa como un módulo independiente, lo que hace más sencillo localizar y modificar componentes específicos sin afectar otros.

Reutilización: Los componentes bien organizados y encapsulados en sus propias carpetas pueden ser reutilizados en diferentes partes de la aplicación o incluso en otros proyectos. Esto promueve la reutilización de código y reduce la duplicación.

Escalabilidad: A medida que la aplicación crece, tener una estructura de carpetas clara y organizada ayuda a mantener el proyecto manejable. Es más fácil agregar nuevos componentes y estilos sin que el proyecto se vuelva caótico.

Separación de Preocupaciones: Mantener los archivos CSS junto con sus componentes correspondientes asegura que los estilos están directamente relacionados con el componente que afectan. Esto sigue el principio de separación de preocupaciones, donde cada parte del código tiene una responsabilidad específica.

Colaboración en Equipo: En equipos de desarrollo, una estructura de carpetas bien definida facilita la colaboración. Los desarrolladores pueden trabajar en diferentes componentes simultáneamente sin interferir con el trabajo de otros.

Crearemos una carpeta Header dentro de la carpeta components en la que almacenaremos tanto el componente como el css relacionado al header, ajustando las rutas de importacion en **App.jsx**.

![image](https://github.com/user-attachments/assets/5a412976-536a-4ef4-95a5-e61afefe6b3c)
![image](https://github.com/user-attachments/assets/1ae3035f-aeec-4dcd-8c30-89ad6d27f23f)
![image](https://github.com/user-attachments/assets/b89c56ed-46f1-4da5-ab0f-544ef4dbec27)

# 3 El concepto de children
49
## 31 Introducción

Construiremos una sección interactiva, por lo que daremos contenido dinámico a un cuadro de texto después de dar click a su correspondiente botón en un menú como se muestra en la figura:

![image](https://github.com/user-attachments/assets/3d02d38b-4458-4600-85a5-af08f56edb51)

Comenzaremos construyendo el botón y su funcionalidad.

En React, **children** es una **prop** especial que permite a los componentes anidar otros dentro de ellos. En React, la prop **children** es una forma poderosa de componer componentes. Permite que un componente padre pase contenido a sus componentes hijos. Esto es especialmente útil para crear componentes reutilizables y flexibles. Básicamente, **children** representa el contenido que se encuentra entre las etiquetas de apertura y cierre de un componente, contenido que puede ser una compleja estructura html que podemos llamar múltiples veces con tal solo utilizar una sola etiqueta html. 

Observa el componente `TabButton.jsx`

```Javascript
export default function TabButton({children}) {
   return (
      <li>
         <button>
            {children}
         </button>
      </li>
   );
}
```

alternativamente podemos escribir:

```Javascript
export default function TabButton({props}) {
   return (
      <li>
         <button>
            {props.children}
         </button>
      </li>
   );
}
```

- 1 `TabButton` es un componente funcional que recibe `children` como prop.

- 2 Dentro del componente, se retorna un elemento `<li>` que contiene un botón (`<button>`).

- 3 `{children}` se coloca dentro del botón, lo que permite que cualquier contenido pasado como `children` se muestre dentro del botón.

ahora utilizamos el componente `TabButton` en `App.jsx`:

App.jsx
```Javascript
import TabButton from './components/TabButton.jsx';
<section id = "examples">
   <h2>Ejemplos</h2>
   <menu>
      <TabButton>Components</TabButton>           
   </menu>
</section>
```
              
- 1  `TabButton` se utiliza dentro de un elemento `<menu>`.

- 2 El texto `Components` se pasa como `children` al componente `TabButton`, por lo que se mostrará dentro del botón.

`TabButton` es el componente que hemos definido y utilizado en el código. Este componente es flexible y puede envolver cualquier contenido que se le pase como `children`.

**Con `children` estamos ahorrando repetir líneas de código html.**

Existe otra forma de hacer esto y también debes conocerla, la cual tiene sentido si tienes múltiples pequeñas piezas de información que deben ser pasadas a un componente. Añadiendo props extra en vez de solo envolver el contenido con los tags componentes significa mas trabajo.

```Javascript
export default function TabButton({label}) {
   return (
      <li>
         <button>
            {label}
         </button>
      </li>
   );
}
```

App.jsx
```Javascript
import TabButton from './components/TabButton.jsx';
<menu>
  <TabButton label = 'Components'>Components</TabButton>                 
</menu>
```

***

ejercicio de composicion de componentes.

Tu tarea es crear un componente Card reutilizable que tome un nombre como entrada y, además, pueda incluirse en cualquier código JSX.

Utilice el archivo Card.js ya existente para crear el componente Card allí. 

El nombre **prop** debe aparecer como un título dentro del componente Card, el código JSX empaquetado debe aparecer debajo de ese título.

App.js
```Javascript
import Card from './Card';

function App() {
   return (
      <div id="app">
         <h1>Available Experts</h1>
         <Card name="Anthony Blake">
         <p>
            Blake is a professor of Computer Science at the University of
            Illinois.
         </p>
         <p>
            <a href="mailto:blake@example.com">Email Anthony</a>
         </p>
         </Card>

         <Card name="Maria Miles">
         <p>
            Maria is a professor of Computer Science at the University of
            Illinois.
         </p>
         <p>
            <a href="mailto:blake@example.com">Email Maria</a>
         </p>
         </Card>
      </div>
   );
}

export default App;
```

La salida debe verse así:

![image](https://github.com/user-attachments/assets/27b2dc99-2e61-4a81-97ca-7baf88f0bb53)

La respuesta es:

Card.js
```Javascript
// Card.js
import React from 'react';
import './Card.css'; // Asegúrate de tener un archivo CSS para los estilos

const Card = ({ name, children }) => {
   return (
      <div className="card">
         <h2>{name}</h2>
         <div className="card-content">
         {children}
         </div>
      </div>
   );
};

export default Card;
```

***

## 32 Composición de componentes

50

Necesitamos ahora darle poder al click en los botones para que ejecuten la acción de mostrarnos un cuadro dinámico. 

`onClick` es un evento en React que se utiliza para manejar las acciones de clic del usuario en un elemento. Es similar al evento onclick en JavaScript, pero se usa dentro de componentes de React. 

Modificaremos nuestro componente para añadir el prop receptor de eventos **onClick** al elemento button entregandole la funcion onSelect que se declarara dentro de la funcion de componente sin los parentesis pues la necesitamos como valor:

```Javascript
export default function TabButton({children}) {
   return (
      <li>
         <button>
            {children}
         </button>
      </li>
   );
}
```

a:

```Javascript
export default function TabButton({children}) {

   function handleClick() {
      console.log('Hello world');
   }

   return (
      <li>
         <button onClick = {handleClick}>
            {children}
         </button>
      </li>
   );
}
```

Notemos en en JavaScrip podriamos escribir:

```Javascript
document.querySelector('button').addEventListener('click', () => {})
```

No queremos código imperativo como éste, no queremos interactuar con el DOM pues queremos que React lo haga. Es por ello que escribimos código declarativo.

## 33 Pasar funciones como valores a las **props**

51

Hemos dicho de que la función **handleClick** que se declarara dentro de la función de componente irá sin los paréntesis pues la necesitamos como valor. Requeriremos de ésta propiedad pues ahora queremos cambiar el contenido desplegado debajo de la fila de botones para acceder a uno distinto cada vez que se selecciona un botón. 

Para ello necesitamos escuchar los clicks dentro de nuestro componente personalizado **TabButton**, porque debes manejar el evento en el componente que también administra los datos que se deben cambiar.

La pregunta es, cómo le damos poder de acción, capacidad de ejecutar algo a la selección del botón? La respuesta es entregándole una **función como valor** al elemento **onClick** del componente (**handleClick**). Esto lo lograremon ingresando un segundo parámetro **prop** a la función de componente **TabButton** llamado **onSelect**.

Luego pasaremos 'el puntero' **handSelect** a la prop **onSelect**.

La funcion onSelect se activara cuando el boton sea clickeado y es la que le dara vida al componente dinamico.

```Javascript
export default function TabButton({children, onSelect}) {
   return (
      <li>
         <button onClick = {onSelect}>
            {children}
         </button>
      </li>
   );
}
```

La funcion **handSelect()** la definiremos en **App.js**:

App.jsx
```Javascript
import TabButton from './components/TabButton.jsx';

function App() {

   function handSelect() {
      console.log('Hello world');
   }

   return (
      <div>
         <Header />
         <main>

         // codigo aca

            <section id = "examples">
               <h2>Ejemplos</h2>
               <menu>
                  <TabButton onSelect = {handleSelect}>Components</TabButton>
                  <TabButton onSelect = {handleSelect}>JSX</TabButton>
                  <TabButton onSelect = {handleSelect}>Props</TabButton>
                  <TabButton onSelect = {handleSelect}>State</TabButton>               
               </menu>
               // Contenido dinamico
            </section>

         </main>
      </div>
   );
}

export default App;
```
Ahora estamos preparados para cambiar la data en el contenido dinamico.

## 34 Ejemplo de reacción a eventos

Trabajaras sobre el componente "User Login" que ya ha sido preparado por un colega.

El objetivo es actualizar los datos almacenados en el objeto `user` ya existente con algunos datos ficticios una vez que se presiona el botón "Login" en el componente `App`.

Las propiedades email y password en el objeto user deben establecerse con cualquier valor de cadena no vacío. El campo loggedIn debe establecerse en verdadero.

Debe cambiar los valores de email, password y loggedIn cuando se presiona el botón en el componente App.

```JavaScript
export const user = {
   email: '',
   password: '',
   loggedIn: false,
 };
 
 function App() {
   return (
   <div id="app">
      <h1>User Login</h1>
      <p>
         <label>Email</label>
         {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
         <input type="email" />
      </p>

      <p>
         <label>Password</label>
         {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
         <input type="password" />
      </p>

      <p id="actions">
         <button>Login</button>
      </p>
   </div>
   );
}
 
export default App;
```
Respuesta:/
debes ingresar el siguiente codigo debajo de `function App() {`:

```JavaScript
const handleLogin = () => { 
      user.email = 'usuario@ejemplo.com'; 
      user.password = 'contraseña123'; 
      user.loggedIn = true; 
   };
```

y modificar el button así:

```JavaScript
<button onClick={handleLogin}>Login</button>
```

El código quedaria entonces como:
```JavaScript
export const user = {
      email: '',
      password: '',
      loggedIn: false,
};
   
function App() {
  const handleLogin = () => { 
  user.email = 'usuario@ejemplo.com'; 
  user.password = 'contraseña123'; 
  user.loggedIn = true; 
};
  return (
  <div id="app">
     <h1>User Login</h1>
     <p>
        <label>Email</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="email" />
     </p>

     <p>
        <label>Password</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="password" />
     </p>

     <p id="actions">
        <button onClick={handleLogin}>Login</button>
     </p>
  </div>
  );
}
 
export default App;
```

## 35 Pasando argumentos personalizados a funciones de eventos.

52

Ahora, dependiendo sobre qué botón hagamos el click es que queremos que se despliegue el contenido dinámico.

```JavaScript
function handleSelect(selectedButton) {
   console.log(selectedButton);
}
```

```JavaScript
export default function TabButton({children, onSelect}) {
   return (
      <li>
         <button onClick = {onSelect}>
            {children}
         </button>
      </li>
   );
}
```

La función flecha anónima será ahora el valor que se le pasa **como valor** al parametro onSelect del gatillador **onClick**.

La línea de código `() => handleSelect('components')` es una función flecha en JavaScript que se utiliza como un manejador de eventos.

- Función Flecha: `() => handleSelect('components')` es una función flecha que no toma ningún argumento (por eso los paréntesis vacíos ()).

- Llamada a la Función: Dentro de la función flecha, se llama a la función handleSelect con el argumento 'components'.

- Propósito: Esta función flecha se pasa como el manejador de eventos `onClick` para el botón en el componente `TabButton`. **Sólo cuando en el botón se hace click**, la función flecha se ejecuta, llamando a handleSelect('components').

- Efecto: La función handleSelect toma el argumento selectedButton (en este caso, 'components') y lo pasa a `setSelectedTopic`, que actualiza el estado del componente con el nuevo tema seleccionado.

```JavaScript
<menu>
   <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
   <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
   <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
   <TabButton onSelect={() => handleSelect('state')}>State</TabButton>                  
</menu>
```

## 36 Ejemplo Configuración de Manejadores de Eventos

Tu tarea es editar `<button>` en el componente `App` de manera que la función ya definida `handleCreateUser` se llame con un valor para `name`.

Por lo tanto, no debes codificar directamente el valor que se debe asignar a `user.name` en la función `handleCreateUser`, sino que debes pasarlo como un valor para el parámetro `name` cuando ocurra un evento de clic en el `<button>`.

No tienes que preocuparte por ningún valor que pueda ingresarse en el campo `<input>` - está ahí solo con fines decorativos.

```JavaScript
export const user = {
  name: '',
};

function App() {
  function handleCreateUser(name) {
    user.name = name;
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Name</label>
        <input type="text" />
      </p>
      <p id="actions">
        <button>Create User</button>
      </p>
    </div>
  );
}

export default App;
```

Debes reemplazar la siguiente línea:

```JavaScript
<button onClick={() => handleCreateUser('Christian Castro')}>Create User</button>
```

# 4 El concepto de State y Hook

53-54-55

## 41 El problema.

Necesitamos un componente dinamico que cambie cada vez que damos click en la funcion **onSelect** del componente **TabButton**

Hagamos el intento de cargar contenido dinámico declarando una variable dentro de nuestro componente funcional **App**. Declaremos la variable `tabContent` (En React, así como en JavaScript en general, `let` es una palabra clave utilizada para declarar variables que pueden ser reasignadas. A diferencia de var, que tiene un alcance de función, let tiene un alcance de bloque, lo que significa que la variable solo está disponible dentro del bloque en el que se declara (por ejemplo, dentro de un if, for, o cualquier otro bloque de código delimitado por llaves {}).

```JavaScript
function App() {

   let tabContent = 'Selecciona un boton';

   function handleSelect(selectedButton) {
      tabContent = selectedButton;
      console.log(tabContent);
   }
```

lo que en teoria deberia dar contenido dinamico a {tabContent} en:

```JavaScript
<section id = "examples">
   <h2>Ejemplos</h2>
   <menu>
      <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
      <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
      <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
      <TabButton onSelect={() => handleSelect('state')}>State</TabButton>                  
   </menu>
   {tabContent}
</section>
```

Así, cada vez que se selecciona un boton se deberia desplegar correspondientemente 'components', 'jsx', 'props' o 'state', pero el texto será: 'Selecciona un boton' y no cambiará. Sin embargo, si verificas en la consola presionando los diferentes botones (por `console.log(tabContent);`) ver[as que la funcion SI se esta ejecutando.

El problema es que por defecto, los componentes en React solo se ejecutan una sola vez, cuando encuetra por primera vez un componente en el codigo.

> LOS COMPONENTES ENREACT, POR DEFECTO SOLO SE EJECUTAN UNA SOLA VEZ.

El codigo en:

```JavaScript
<section id = "examples">
   <h2>Ejemplos</h2>
   <menu>
      <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
      <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
      <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
      <TabButton onSelect={() => handleSelect('state')}>State</TabButton>                  
   </menu>
   {tabContent}
</section>
```

no se reevalua.

> Para solucionar este problema utilizamos el objeto **state** y su funcion hook: **useState()** y  .

En React, el **state** es un objeto que permite a los componentes mantener y gestionar datos que pueden cambiar a lo largo del tiempo. A diferencia de las props, que son inmutables y se pasan desde componentes padres a hijos, el **state** es mutable y es local a cada componente.

Todas las funciones en React que comienzan con `use` son **Hooks**.

Cuando llamas a **useState**, obtienes dos elementos:

- **Estado Actual**: Este es el valor actual del estado. Puedes usarlo para leer el estado en tu componente.
- **Función para Actualizar el Estado**: Cuando la llamas con un nuevo valor, React vuelve a renderizar el componente con el nuevo estado.

En nuestro ejercicio a la primera la llamaremos **selectedTopic** y a la segunda **setSelectedTopic** las que llamaremos por desestructuración. Con esto resolvemos el requerimiento para que la función handSelect vuelva a ser llamada.

```JavaScript
import {useState} from 'react';
function App() {

   const [selectedTopic, setSelectedTopic] = useState('Selecciona un boton');

   function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
   }
```

```JavaScript
<section id = "examples">
   <h2>Ejemplos</h2>
   <menu>
      <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
      <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
      <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
      <TabButton onSelect={() => handleSelect('state')}>State</TabButton>                  
   </menu>
   {selectedTopic}
</section>
```

useState('Selecciona un boton') es el estado inicial.

## 42 Reglas de los Hooks

1 Llamar hooks solo en el nivel superior: No llames hooks dentro de loops, condiciones o funciones anidadas.

2 Llamar hooks solo desde funciones de React: Usa hooks solo en componentes funcionales o en tus propios hooks personalizados.

## 43 Ejemplo Trabajando con State

Estás trabajando en una parte de una tienda en línea donde se debe mostrar un precio con descuento en la pantalla una vez que el usuario haga clic en un botón.

Tu tarea es agregar un listener de eventos para escuchar los clics en el botón que ya está incluido en el componente App.

Al hacer clic en el botón, el precio debe cambiar de $100 a $75.

Agrega un valor de **state** a la función del componente App existente y asegúrate de que el valor del **state** se actualice tanto al hacer clic en el botón como al mostrarse como parte del código JSX.

```JavaScript
export default function App() {
    return (
        <div>
            <p data-testid="price">$100</p>
            <button>Apply Discount</button>
        </div>
    );
}
```

```JavaScript
import React from 'react';
export default function App() {
    // Inicializar el estado del precio
    const [price, setPrice] = React.useState(100);

    // Función para manejar el clic en el botón
    const handleClick = () => {
        setPrice(75);
    };

    return (
        <div>
            <p data-testid="price">${price}</p>
            <button onClick={handleClick}>Apply Discount</button>
        </div>
    );
}
```

## 44 Entregando contenido de un datajs

Lo que deseamos ahora es entregarle a nuestra página web un contenido dinámico con más sentido. Para ello utilizaremos un archivo **data.js** estructurado de la siguiente manera:

```JavaScript
export const EXAMPLES = {
   components: {
      title: 'Components',
      description: ,
      code: ,
   },
   jsx: {
      title: 'Components',
      description: ,
      code: ,
   },
   props: {
      title: 'Components',
      description: ,
      code: ,
   },
   state: {
      title: 'Components',
      description: ,
      code: ,
   },
};
```

```JavaScript
import {EXAMPLES} from './data.js';

<section id = "examples">
   <h2>Ejemplos</h2>
   <menu>
      <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
      <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
      <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
      <TabButton onSelect={() => handleSelect('state')}>State</TabButton>                  
   </menu>
      <div id = 'tab-content'>
         <h3>
            {EXAMPLES[selectedTopic].title}
         </h3>
         <p>
            {EXAMPLES[selectedTopic].description}
         </p>
         <pre>
            <code>
               {EXAMPLES[selectedTopic].code}
            </code>
         </pre>
      </div>
</section>
```

> Debemos ahora inicializar el estado con un parametro valido. Lo cambiamos a 
> const [selectedTopic, setSelectedTopic] = useState('components');

# 5 Renderización de contenido de forma condicional

Ocurre un problema al iniciar la aplicación. Lo que sucede es que queremos que se despliegue el contenido dinámico sólo y sólo si hemos presionado un botón para aquello. Si no es así, queremos que se despliegue otro contendido o ninguno. Queremos que se despliegue al inicio: 'Por favor, selecciona un item'.

Tenemos varias alternativas:

## 51 Utilizando dos operadores ternarios dejando useState vacío
  
```JavaScript
<div id = 'tab-content'>
   <p>Por favor, selecciona un item</p>
   <h3>
      {EXAMPLES[selectedTopic].title}
   </h3>
   <p>
      {EXAMPLES[selectedTopic].description}
   </p>
   <pre>
      <code>
         {EXAMPLES[selectedTopic].code}
      </code>
   </pre>
</div>
```

- 1 Utilizando dos operadores ternarios dejando useState vacío:

```JavaScript
const [selectedTopic, setSelectedTopic] = useState();

// some code

{!selectedTopic ? <p>Por favor, selecciona un item.</p> : null}
{selectedTopic ? (
  <div id = 'tab-content'>
     <p>Por favor, selecciona un item</p>
     <h3>
        {EXAMPLES[selectedTopic].title}
     </h3>
     <p>
        {EXAMPLES[selectedTopic].description}
     </p>
     <pre>
        <code>
           {EXAMPLES[selectedTopic].code}
        </code>
     </pre>
  </div>
) : null}
```

## 52 Integrando la funcionalidad en un solo operador tenario

```JavaScript
const [selectedTopic, setSelectedTopic] = useState();

// some code

{!selectedTopic ? <p>Por favor, selecciona un item.</p> :
(<div id = 'tab-content'>
     <p>Por favor, selecciona un item</p>
     <h3>
        {EXAMPLES[selectedTopic].title}
     </h3>
     <p>
        {EXAMPLES[selectedTopic].description}
     </p>
     <pre>
        <code>
           {EXAMPLES[selectedTopic].code}
        </code>
     </pre>
  </div>
)}
```

## 53 Utilizando el operador y lógico de javascript
  
Si la expresión a la izquierda del && es true, entonces el elemento a la derecha del && se renderiza. Si la expresión a la izquierda es false, el elemento a la derecha no se renderiza.

```JavaScript
const [selectedTopic, setSelectedTopic] = useState();

// some code

{!selectedTopic && <p>Por favor, selecciona un item.</p>}
{selectedTopic && (
  <div id = 'tab-content'>
     <p>Por favor, selecciona un item</p>
     <h3>
        {EXAMPLES[selectedTopic].title}
     </h3>
     <p>
        {EXAMPLES[selectedTopic].description}
     </p>
     <pre>
        <code>
           {EXAMPLES[selectedTopic].code}
        </code>
     </pre>
  </div>
)}
```  

## 54 Utilizando una variable const 

Recordemos que en react el codigo jsx puede ser usado como variable o constante.

```JavaScript
const [selectedTopic, setSelectedTopic] = useState();

// some code

let tabContent = <p>Por favor, selecciona un item.</p>;
if (selectedTopic) {
  tabContent = (
    <div id = 'tab-content'>
       <p>Por favor, selecciona un item</p>
       <h3>
          {EXAMPLES[selectedTopic].title}
       </h3>
       <p>
          {EXAMPLES[selectedTopic].description}
       </p>
       <pre>
          <code>
             {EXAMPLES[selectedTopic].code}
          </code>
       </pre>
    </div>
);
}

// some code

<section id = "examples">
   <h2>Ejemplos</h2>
   <menu>
      <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
      <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
      <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
      <TabButton onSelect={() => handleSelect('state')}>State</TabButton>                  
   </menu>
   {tabContent}
</section>
```

## 55 Ejercicio

Estás trabajando en una parte de una aplicación web que es responsable de mostrar una advertencia cuando un usuario está a punto de realizar una acción peligrosa.

Por lo tanto, tu tarea es mostrar condicionalmente un cuadro de advertencia una vez que un usuario haya hecho clic en un botón específico. Dentro de ese cuadro de diálogo de advertencia, otro botón permite a los usuarios descartar la advertencia (es decir, eliminar el cuadro de advertencia de la pantalla).

La aplicación finalizada debe mostrar esta interfaz de usuario, si aún no se ha hecho clic en el <button>:
![image](https://github.com/user-attachments/assets/c8da23ef-739a-46ba-8f5f-75514e45a6d5)

Y esta interfaz de usuario, una vez que se hizo clic en el botón:
![image](https://github.com/user-attachments/assets/6ddd080e-01ae-4fad-8a64-40162411b41a)

Una vez que se hizo clic en el botón "Continuar", el cuadro de advertencia debe eliminarse nuevamente:
![image](https://github.com/user-attachments/assets/ff33e1ce-5ff5-4848-ac7c-2a6eb9a788c8)

Para esta tarea, debes reaccionar a los clics en ambos elementos `<button>` que forman parte del código de inicio. El segundo botón, fuera del `<div>` con el `id="alert"`, debe mostrar el `<div id="alert">` (y todo su contenido). El botón dentro de ese `<div>` debe ocultarlo nuevamente (es decir, eliminarlo del DOM).

Depende de usted si desea utilizar una expresión ternaria o almacenar el código JSX que se muestra de manera condicional en una variable.

Importante: en este editor de código de Udemy, puede recibir un error si utiliza useState(). ¡Use React.useState() en su lugar!

```JavaScript
import React from 'react';
// don't change the Component name "App"
export default function App() {
    return (
      <div>
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button>Proceed</button>
        </div>
        <button>Delete</button>
      </div>    
    );
}
```

```JavaScript
import React, { useState } from 'react'; 

export default function App() { 
   const [showAlert, setShowAlert] = useState(false);
   const handleShowAlert = () => { setShowAlert(true);   
   }; 
   const handleHideAlert = () => { 
      setShowAlert(false);
   }; 
      
   return ( 
      <div> 
         {showAlert && ( 
            <div data-testid="alert" id="alert"> 
            <h2>Are you sure?</h2> 
            <p>These changes can't be reverted!</p> 
            <button onClick={handleHideAlert}>Proceed</button> 
            </div> 
            )} 
            <button onClick={handleShowAlert}>Delete</button> 
      </div> 
   ); 
}
```

# 6 Entregando estilos en forma condicional

Queremos entregarle un estilo a cada boton una vez haya sido seleccionado, 

## 61 Ejercicio

Tu tarea es aplicar dinámicamente una clase CSS (activa) al elemento <p>Style me</p> en la aplicación React proporcionada.

La clase debe aplicarse cuando se hace clic en el botón <button> por primera vez.

Así es como debería verse la aplicación terminada ANTES de hacer clic en el botón:

Así es como debería verse DESPUÉS de hacer clic en el botón:

Importante: usa React.useState() en lugar de solo useState(), ya que este último puede causar problemas en este entorno de código de Udemy.

```JavaScript
import React from 'react';

// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <p>Style me!</p>
            <button>Toggle style</button>
        </div>
    );
}
```

```JavaScript
body {
    font-family: sans-serif;
    margin: 0;
    padding: 3rem;
    background-color: #2d2c2c;
    color: #959090;
    text-align: center;
}

.active {
    color: red;
}
```

Solucion:

```JavaScript
import React, { useState } from 'react';

// don't change the Component name "App"
export default function App() {
   // Estado para manejar la clase CSS
   const [isActive, setIsActive] = useState(false);

   // Función para alternar la clase CSS
   const toggleClass = () => {
      setIsActive(!isActive);
   };

   return (
      <div>
         <p className={isActive ? 'active' : ''}>Style me!</p>
         <button onClick={toggleClass}>Toggle style</button>
      </div>
   );
}
```

# 7 Generación dinámica de datos de listas. El método map
































