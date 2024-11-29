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
  * [32 Composición de componentes definición](#32-Composición-de-componentes-definición)
  * [33 Ejemplo](#33-Ejemplo)
  * [34 Ejemplo de reacción a eventos](#34-Ejemplo-de-reacción-a-eventos)
  * [35 Ejemplo](#35-Ejemplo)
* [4 El concepto de State](#4-El-concepto-de-State)
* [5 El concepto de Hook](#5-El-concepto-de-Hook)
  * [51 Reglas de los Hooks](#51-Reglas-de-los-Hooks)
  * [52 Ejercicio](#52-Ejercicio)
* [6 Botones y contenidos dinámicos](#6-Botones-y-contenidos-dinámicos)
  * [61 El botón](#61-El-botón)
    * [611 App.jsx](#611-App.jsx)
    * [612 TabButton.jsx](#612-TabButton.jsx)
  * [62 Dándole poder al botón](#62-Dándole-poder-al-botón)
    * [621 La función handleSelect](#621-La-función-handleSelect)
* [7 El concepto de state](#7-El-concepto-de-state)
  * [71 useState](#71-useState)
  * [72 Reglas de los hooks en React](#72-Reglas-de-los-hooks-en-React)
  * [73 useState](#73-useState)
  * [74 Desplegar data dinámica de un objeto JavaScript](#74-Desplegar-data-dinámica-de-un-objeto-JavaScript)

 




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

# 15 Nuestro primer componente

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

## Props

lecciones 44 y 45

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

## 47 48 Organizando correctamente componentes y csss.

lecciones 47 y 48

### Componentes

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

### CSS

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

## Introducción

En React, **children** es una **prop** especial que permite a los componentes anidar otros componentes o elementos dentro de ellos. Básicamente, children representa el contenido que se encuentra entre las etiquetas de apertura y cierre de un componente.

Por ejemplo, si tienes un componente **Card** y lo usas de esta manera:

```JavaScript
<Card>
  <h2>Título</h2>
  <p>Este es el contenido de la tarjeta.</p>
</Card>
```

El contenido:

```JavaScript
<h2>Título</h2>
<p>Este es el contenido de la tarjeta.</p> 
```
se pasa al componente **Card** como **children**. Dentro del componente **Card**, puedes acceder a **children** y renderizarlo donde lo necesites:

```JavaScript
const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};
```

Esto permite crear componentes más flexibles y reutilizables, ya que puedes definir el contenido de un componente desde fuera, en lugar de tenerlo fijo dentro del componente.

Es un concepto complejo.

#### 52 Composición de componentes: definicion

En el contexto de React, la composición de componentes es una técnica que permite construir interfaces de usuario complejas a partir de componentes más pequeños y reutilizables. En lugar de crear un único componente grande que haga todo, se divide la funcionalidad en componentes más pequeños y se combinan para formar la interfaz deseada12.

La composición de componentes se basa en el principio de que los componentes pueden contener otros componentes como hijos, lo que permite una estructura jerárquica y modular. Aquí tienes un ejemplo simple:

```JavaScript
// Header.js
const Header = () => {
  return <header><h1>Mi Aplicación</h1></header>;
};

// Footer.js
const Footer = () => {
  return <footer><p>© 2024 Mi Aplicación</p></footer>;
};

// App.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <p>Bienvenido a mi aplicación.</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
```

En este ejemplo, App es el componente principal que compone otros dos componentes (Header y Footer). Esto hace que el código sea más modular y fácil de mantener.

La composición de componentes es preferida sobre la herencia en React porque permite una mayor flexibilidad y reutilización del código. Al usar la composición, puedes crear componentes más específicos y reutilizables que se pueden combinar de diferentes maneras para construir interfaces complejas.

#### 53 Ejemplo:

```JavaScript
// App.js
import React from 'react';
import Card from './Card';

function App() {
  return (
    <div id="app">
      <h1>Available Experts</h1>
      <Card name="Anthony Blake">
        <p>
          Blake is a professor of Computer Science at the University of Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Anthony</a>
        </p>
      </Card>

      <Card name="Maria Miles">
        <p>
          Maria is a professor of Computer Science at the University of Illinois.
        </p>
        <p>
          <a href="mailto:maria@example.com">Email Maria</a>
        </p>
      </Card>
    </div>
  );
}

export default App;
```

El siguiente componente:
```JavaScript
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

Produce una salida de este tipo:

![image](https://github.com/user-attachments/assets/7ecd8f25-df7e-4d07-9085-c6d0d432d356)

#### 54 Ejemplo de reaccion aventos

// Your goal is to change the email, password and loggedIn values when the button in the App component is pressed
// Change them to any values of your choice (except loggedIn => that should be changed to true)
// You DON'T need to fetch the values entered into the <input /> fields
// You'll learn about that later in the course - for the moment, those fields are just there to look good :-)
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

Tu tarea es trabajar en un componente de “Inicio de Sesión de Usuario” que ya ha sido preparado por un colega.

El objetivo es actualizar los datos almacenados en el objeto user existente con algunos datos ficticios una vez que se presione el botón “Login” en el componente App.

Las propiedades email y password en el objeto user deben establecerse en cualquier valor de cadena no vacío de tu elección. El campo loggedIn debe establecerse en true.

Importante: No necesitas obtener los valores ingresados en los campos <input> - puedes simplemente ignorar esos campos por ahora. 


```JavaScript
// user.js
export const user = {
  email: '',
  password: '',
  loggedIn: false,
};

// App.js
import React from 'react';
import { user } from './user';

function App() {
  const handleLogin = () => {
    user.email = 'dummy@example.com';
    user.password = 'dummyPassword';
    user.loggedIn = true;
    console.log('User logged in:', user);
  };

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
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
***

#### 55 Ejemplo

Configuración de Manejadores de Eventos

Tu tarea es editar el `<button>` en el componente App de manera que la función handleCreateUser ya definida se llame con un valor para name.

Por lo tanto, no debes codificar directamente el valor que se debe asignar a user.name en la función handleCreateUser, sino que debes pasarlo como un valor para el parámetro name cuando ocurra un evento de clic en el `<button>`.

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

Debes ingresar la siguiente linea:

```JavaScript
<button onClick={() => handleCreateUser('Christian Castro')}>Create User</button>
```
En el lugar que se indica:

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
        <button onClick={() => handleCreateUser('Christian Castro')}>Create User</button>
      </p>
    </div>
  );
}

export default App;
```
***

# 6 El concepto de State

En React, el **state** es un objeto que permite a los componentes mantener y gestionar datos que pueden cambiar a lo largo del tiempo. A diferencia de las props, que son inmutables y se pasan desde componentes padres a hijos, el **state** es mutable y es local a cada componente.

Características del State en React:

- Local y Encapsulado: El state es local al componente en el que se define. Esto significa que cada componente puede tener su propio estado independiente de otros componentes.

- Dinámico: El state puede cambiar en respuesta a eventos del usuario, solicitudes de red, o cualquier otra interacción. Cuando el state cambia, React vuelve a renderizar el componente para reflejar los nuevos datos.

- Inicialización: El state se inicializa en el constructor de una clase o usando el hook useState en componentes funcionales.

```JavaScript
// En un componente de clase
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
}

// En un componente funcional
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
}
```

Actualización: Para actualizar el state, se utiliza el método setState en componentes de clase o la función setCount (o similar) en componentes funcionales.

```JavaScript
// En un componente de clase
this.setState({ count: this.state.count + 1 });

// En un componente funcional
setCount(count + 1);
```

Ejemplo Práctico

Aquí tienes un ejemplo simple de un componente que utiliza state para contar clics en un botón:

```JavaScript
import React, { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Haz clic aquí
      </button>
    </div>
  );
}

export default Counter;
```

En este ejemplo, el componente Counter tiene un **state** count que se incrementa cada vez que se hace clic en el botón. React vuelve a renderizar el componente cada vez que el estado cambia, mostrando el nuevo valor de count.

# 7 El concepto de Hook

Los hooks en React son una característica introducida en la versión 16.8 que permite usar el **state** y otras funcionalidades de React en componentes funcionales, sin necesidad de escribir componentes de clase. Los hooks simplifican la lógica de los componentes y facilitan la reutilización de código.

Principales Hooks en React

1 useState: Permite agregar estado local a un componente funcional.

```JavaScript
import React, { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Haz clic aquí</button>
    </div>
  );
}
```

2 useEffect: Permite realizar efectos secundarios en componentes funcionales, como suscribirse a datos, realizar solicitudes de red o manipular el DOM.

```JavaScript
import React, { useEffect, useState } from 'react';

function Ejemplo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // El array vacío significa que este efecto se ejecuta solo una vez

  return (
    <div>
      <p>Datos: {data}</p>
    </div>
  );
}
```

3 useContext: Permite acceder a valores de contexto en componentes funcionales.

```JavaScript
import React, { useContext } from 'react';
const MiContexto = React.createContext();

function Componente() {
  const valor = useContext(MiContexto);
  return <div>{valor}</div>;
}
```

#### Reglas de los Hooks

1 Llamar hooks solo en el nivel superior: No llames hooks dentro de loops, condiciones o funciones anidadas.

2 Llamar hooks solo desde funciones de React: Usa hooks solo en componentes funcionales o en tus propios hooks personalizados.

Hooks Personalizados

Puedes crear tus propios hooks para reutilizar lógica de estado entre componentes. Un hook personalizado es simplemente una función de JavaScript cuyo nombre comienza con “use” y que puede llamar a otros hooks.

```JavaScript
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]);

  return data;
}
```

Los hooks han revolucionado la forma de escribir componentes en React, haciendo el código más limpio y fácil de entender.

***

## Ejercicio

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


# 8 Botones y contenidos dinámicos.

***

## El botón

Construiremos una sección interactiva, por lo que daremos contenido dinámico a un cuadro de texto despues de dar click a su correspondiente botón en un menú como se muestra en la figura:

![image](https://github.com/user-attachments/assets/3d02d38b-4458-4600-85a5-af08f56edb51)

El archivo **App.jsx** define una aplicación que organiza y muestra contenido dinámico basado en la selección del usuario. Utiliza componentes reutilizables como **TabButton.jsx** para crear un menú de navegación que permite cambiar entre diferentes temas. La aplicación gestiona el estado para determinar qué contenido mostrar, y renderiza la información correspondiente en función de la selección del usuario. Este diseño modular y flexible facilita la actualización y expansión del contenido de la aplicación.

Veamos el siguiente fragmento de código del archivo App.jsx:

### 81 App.jsx

```Javascript
// some code
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
// some code
```

La `<section>` define una estructura HTML que incluye un menú de botones de pestañas (TabButton) y un área de contenido que muestra información basada en la pestaña seleccionada. Dentro de esta `<section>`, hay un elemento `<menu>` que contiene varios componentes TabButton, cada uno con un **onSelect** que llama a la función handleSelect con diferentes argumentos ('components', 'jsx', 'props', 'state'). Estos botones permiten al usuario seleccionar diferentes temas.

Cuando se selecciona un tema, el contenido correspondiente se muestra en el `<div id="tab-content">`. Este `<div>` contiene un encabezado `<h3>` que muestra el título del ejemplo seleccionado (`{EXAMPLES[selectedTopic].title}`), un párrafo `<p>` que muestra su descripción (`{EXAMPLES[selectedTopic].description}`), y un bloque de código `<pre><code>` que muestra el código del ejemplo (`{EXAMPLES[selectedTopic].code}`). La variable **selectedTopic** determina qué contenido se muestra, y EXAMPLES es un objeto que contiene los datos de los ejemplos.

Necesitamos ahora construir un componente TabButton que despliegue los botones de seleccion y ejerza la accion de despliegue de contenido:

### 82 TabButton.jsx

El componente TabButton es una función que recibe dos props: **children** y **onSelect**. El prop **children** representa el contenido que se pasará entre las etiquetas de apertura y cierre del componente TabButton. El prop **onSelect** es una función que se ejecutará cuando se haga clic en el botón.

El componente TabButton devuelve un elemento de lista (`<li>`) que contiene un botón (`<button>`). El botón tiene un manejador de eventos onClick que se establece en la función onSelect pasada como prop. Esto significa que cuando se hace clic en el botón, se ejecutará la función **onSelect**. El contenido del botón se define mediante el prop children, que permite que **cualquier contenido pasado entre las etiquetas de apertura y cierre del componente TabButton se renderice dentro del botón**. Este diseño hace que el componente sea flexible y reutilizable, permitiendo que diferentes contenidos y funciones de clic se pasen según sea necesario.

El prop children de React se utiliza para pasar contenido dinámico a los componentes TabButton. El prop children permite que el componente TabButton sea flexible y reutilizable, ya que puede mostrar diferentes contenidos y ejecutar diferentes funciones de clic según sea necesario.

Dentro del componente TabButton, el contenido pasado como children se renderiza dentro del botón. Esto significa que el texto "Components", "JSX", "Props" y "State" se mostrará dentro de los botones correspondientes. Cuando se hace clic en un botón, se ejecuta la función onSelect asociada, que en este caso llama a handleSelect con el argumento correspondiente.

```javascript
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

Lo que hemos visto es un tipo de composicion de componentes. (insertar ejercio entre 49 y 50)

***

## Dándole poder al botón

Recordemos que en React escribimos codigo **declarativo** y NO **imperativo** como en  javascript común, por lo que no interactuaremos con el DOM, dejaremos que React se encargue de eso utilizando el prop especial **onClick** sobre la función **onSelect**.

La función `onSelect` es un manejador de eventos que se utiliza para capturar y manejar la selección de elementos en una interfaz de usuario. En el contexto de React, se emplea para gestionar la interacción del usuario con componentes que permiten la selección de opciones, como listas desplegables, menús, tablas, y otros elementos interactivos.

La ventaja de definir estas funciones de manejador de eventos dentro de la función del componente es que de esta manera tienen acceso a las **props** y **states** del componente.

### 83 la función handleSelect()

La función utiliza el hook **useState** para declarar una variable de estado llamada **selectedTopic** y una función para actualizarla llamada **setSelectedTopic**. El valor inicial de **selectedTopic** es **'components'**.

Función manejadora: La función **handleSelect** toma un parámetro **selectedButton**. Dentro de esta función, se llama a **setSelectedTopic** con **selectedButton** como argumento. Esto actualiza el estado **selectedTopic** con el valor de **selectedButton**.

Este código define un estado inicial para **selectedTopic** y proporciona una función **handleSelect** que puede actualizar ese estado cuando se selecciona un nuevo botón o elemento. Esto es útil para manejar la lógica de selección en una interfaz de usuario, permitiendo que el componente reaccione a las interacciones del usuario y actualice en consecuencia su estado .

```javascript
const [selectedTopic, setSelectedTopic] = useState('components');
function handleSelect(selectedButton) {
  setSelectedTopic(selectedButton);
}
```

El fragmento de código App.jsx define un menú que contiene varios botones de pestaña (TabButton). Cada botón de pestaña tiene un manejador de eventos onSelect que se activa cuando el usuario selecciona ese botón. El manejador de eventos onSelect está configurado para llamar a la función handleSelect con un argumento específico que representa el tema seleccionado (por ejemplo, 'components', 'jsx', 'props', 'state').

Cuando un usuario selecciona uno de estos botones de pestaña, la función handleSelect se ejecuta con el argumento correspondiente, actualizando así el estado selectedTopic con el valor del botón seleccionado. Esto permite que la aplicación reaccione a la selección del usuario y actualice la interfaz de usuario en consecuencia, mostrando el contenido relevante para el tema seleccionado.

Este código configura un menú interactivo donde cada botón de pestaña puede cambiar el estado de la aplicación al ser seleccionado, permitiendo una navegación dinámica entre diferentes temas.

```javascript
<menu>
   <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
   <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
   <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
   <TabButton onSelect={() => handleSelect('state')}>State</TabButton>                  
</menu>
```

#### insertar ejercicio entre 51 y 52.

#### insertar ejercicio entre 52 y 53.

### 84 El funcionamiento de los componentes en react.

Por defecto, React solo ejecutará una funcion **componente** UNA SOLA VEZ cuando por primera vez encuentre algo en el codigo. Luego, ninguna de la funciones de ejecutara de nuevo. Es por eso que resulta fundamental comprender en React el concepto de **state**.

# 9 El concepto de state.

En React, el concepto de **state** es fundamental para crear componentes interactivos y dinámicos. El **state** es un objeto que almacena datos que pueden cambiar a lo largo del ciclo de vida de un componente. Estos datos pueden ser cualquier cosa, desde valores simples como números y cadenas, hasta objetos más complejos y arreglos.

Detalles Generales del state en React:

-1 Inicialización: El estado se inicializa en el constructor de un componente de clase o mediante el hook useState en componentes funcionales. Este estado inicial puede ser cualquier valor que necesite el componente para empezar.

-2 Actualización: El estado se puede actualizar mediante la función setState en componentes de clase o la función de actualización proporcionada por useState en componentes funcionales. Cada vez que el estado cambia, React vuelve a renderizar el componente para reflejar los nuevos datos.

-3 Reactividad: La principal ventaja del estado es que permite que los componentes reaccionen a cambios en los datos. Cuando el estado cambia, React actualiza automáticamente la interfaz de usuario para reflejar estos cambios, lo que facilita la creación de aplicaciones interactivas.

-4 Encapsulación: El estado es privado y completamente controlado por el componente en el que se define. Esto significa que otros componentes no pueden modificar directamente el estado de un componente, lo que ayuda a mantener la integridad de los datos y la lógica de la aplicación.

-5 Propagación de Datos: Aunque el estado es privado para cada componente, se puede pasar como propiedades (props) a componentes hijos. Esto permite que los componentes padres controlen el estado y lo compartan con sus hijos de manera controlada.

-6 Ciclo de Vida: En componentes de clase, el estado puede ser manipulado en varios métodos del ciclo de vida, como componentDidMount, componentDidUpdate y componentWillUnmount. En componentes funcionales, los hooks como useEffect permiten manejar efectos secundarios relacionados con el estado.

-7 Optimización: React optimiza las actualizaciones del estado para minimizar el número de renderizaciones y mejorar el rendimiento. Utiliza un algoritmo de reconciliación para determinar los cambios mínimos necesarios en el DOM.

El estado en React es una herramienta poderosa que permite a los desarrolladores crear interfaces de usuario dinámicas y reactivas, manteniendo al mismo tiempo una estructura de datos clara y controlada.

## useState

Todas las funciones que comienzan con use en React son react **Hooks**

## Reglas de los hooks en React

Los hooks en React deben seguir ciertas reglas para funcionar correctamente y evitar errores. Aquí tienes las reglas principales:

- 1 Llamar hooks solo en el nivel superior: No llames hooks dentro de loops, condiciones o funciones anidadas. Deben ser llamados en el nivel superior de tu componente para asegurar que se ejecuten en el mismo orden en cada renderizado.

- 2 Llamar hooks solo desde funciones de React: Usa hooks solo dentro de componentes funcionales de React o desde tus propios hooks personalizados. No los llames desde funciones JavaScript normales.

- 3 Usar el prefijo "use": Todos los hooks deben comenzar con el prefijo "use" (por ejemplo, useState, useEffect). Esto es una convención que ayuda a identificar que una función es un hook y permite a React aplicar las reglas de hooks.

- 4 No usar hooks condicionalmente: Asegúrate de que los hooks se llamen en el mismo orden cada vez que se renderiza un componente. No los llames dentro de bloques condicionales (if, else, switch, etc.).

- 5 Mantener la consistencia en el orden de los hooks: La consistencia en el orden de los hooks es crucial para que React pueda asociar correctamente el estado y los efectos con los componentes.

Estas reglas aseguran que los hooks funcionen de manera predecible y eficiente, permitiendo a React gestionar el estado y los efectos de los componentes de manera correcta.

## useState

`useState` es un hook en React que permite a los componentes funcionales tener un estado interno. Antes de los hooks, solo los componentes de clase podían tener estado. Con `useState`, los componentes funcionales pueden gestionar y actualizar su propio estado.

¿Cómo funciona `useState`?

- 1 Inicialización del Estado: Cuando llamas a `useState`, pasas un valor inicial que se convierte en el estado inicial del componente. Este valor puede ser cualquier tipo de dato: un número, una cadena, un objeto, un arreglo, etc.

- 2 Desestructuración: `useState` devuelve un arreglo con dos elementos:

El primer elemento es el valor actual del estado.

El segundo elemento es una función que se usa para actualizar el estado.

- 3 Actualización del Estado: Para actualizar el estado, llamas a la función de actualización con el nuevo valor del estado. React se encarga de volver a renderizar el componente con el nuevo estado.

Beneficios de `useState`

- 1 Simplicidad: `useState` es fácil de usar y entender, lo que simplifica la gestión del estado en componentes funcionales.

- 2 Encapsulación: El estado es privado para el componente en el que se define, lo que ayuda a mantener la lógica del estado encapsulada y modular.

- 3 Reactividad: Cuando el estado cambia, React vuelve a renderizar el componente automáticamente, asegurando que la interfaz de usuario esté siempre sincronizada con el estado.

Consideraciones

- 1 Inmutabilidad: Es importante tratar el estado como inmutable. En lugar de modificar el estado directamente, siempre debes crear una nueva copia del estado con los cambios deseados.

- 2 Asincronía: Las actualizaciones del estado pueden ser asincrónicas. React puede agrupar varias actualizaciones del estado para optimizar el rendimiento.

En resumen, `useState` es una herramienta poderosa que permite a los componentes funcionales en React gestionar su propio estado de manera sencilla y eficiente.

### insertar ejercicio entre 54 y 55

# Desplegar data dinamica de un objeto JavaScript. 

leccion 55



























































