# REACT: elementos del framework

inicio en **la lección 35** Sección 3

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

* [3 Correcta organización de Componentes y CSS](#3-Correcta-organización-de-Componentes-y-CSS)
  * [31 Componentes](#31-Componentes)
  * [32 CSS](#32-CSS)
    
* [4 El concepto de children](#4-El-concepto-de-children)
  * [41 Introducción](#41-Introducción)
  * [42 Ejercicio de composición de componentes](#42-Ejercicio-de-composición-de-componentes)
  * [43 Composición de componentes](#43-Composición-de-componentes)
  * [44 Pasar funciones como valores a las props](#44-Pasar-funciones-como-valores-a-las-props)
  * [45 Ejemplo de reacción a eventos](#45-Ejemplo-de-reacción-a-eventos)
  * [46 Pasando argumentos personalizados a funciones de eventos](#46-Pasando-argumentos-personalizados-a-funciones-de-eventos)
  * [47 Ejemplo Configuración de Manejadores de Eventos](#47-Ejemplo-Configuración-de-Manejadores-de-Eventos)
    
* [5 El concepto de State y Hook](#4-El-concepto-de-State-y-Hook)
  * [51 El problema](#41-El-problema)
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

* [7 Generación dinámica de datos de listas. El método map](#7-Generación-dinámica-de-datos-de-listas-El-método-map)
  * [71 El metodo map](#71-El-metodo-map)
  * [72 Añadiendo la prop key](#72-Añadiendo-la-prop-key)
  * [73 Ejercicio Contenido de lista dinámica](#73-Ejercicio-Contenido-de-lista-dinámica)
 
    
***

# 1 Componentes

En React, un componente es una pieza reutilizable y autónoma de código que define una parte de la interfaz de usuario. Los componentes son los bloques de construcción fundamentales de una aplicación React. 

Son bloques de codigo pequenos y potencialmente reutilizables. Los elementos relacionados de HTML, JS y CSS se almacenan en archivos todfos juntos, lo que favorece ademas, una separacion de competencias.

## 11 La extension JSX.

Los componentes en React se almacenan como archivos JSX. Los componentes son simplemente funciones JS.

JSX, o JavaScript XML, es una extensión de sintaxis para JavaScript que permite a los desarrolladores escribir código que se asemejan al HTML dentro de un archivo JavaScript. Se utiliza para describir y crar elementos en JS de una manera declarativa. No es soportada por los navegadores, por lo que requiere de un proceso de transformacion tras bambalinas antes de que llegue al navegador.

## 12 Reglas de un JSX

Un componente de React debe seguir las siguientes reglas:

1 El nombre de la funcion debe comenzar con una mayuscula

2 La funcion debe retornar un contenido renderizable, esto es, contenido que react pueda desplegar en el navegador.

## 13 Nuestro primer componente

**En React puedes usar las funciones de componentes como elementos regulares HTML dentro del codigo JSX en forma de etiquetas** Es asi como utilizaremos nuestro primer componente personalizado Header():

App.jsx

```JavaScript
function Header() {
   return (
      <header>
         <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
         <h1>
            React Essentials
         </h1>
         <p>
            Fundamental React concepts you will need for almost any app you are going to build!
         </p>
      </header>
   );
}

function App() {
   return (
      <div>
         <Header />
         <main>
            <h2> Tiem to get started! </h2>
         <main>
      <div>
   );
}

export default App;
```

Una mirada más cercana: componentes y extensiones de archivos

En este punto, ha creado un primer componente personalizado y, por supuesto, también trabajó con el componente de la aplicación.

Por el momento, ambos componentes se almacenan en el archivo App.jsx (aunque esto cambiará más adelante).

`.jsx` es una extensión de archivo que no es compatible con el navegador! Está funcionando porque estás trabajando en un proyecto de React que admite esta extensión especial. Porque esta extensión "le dice" al proceso de compilación subyacente (que se ejecuta detrás de escena cuando se ejecuta el servidor de desarrollo) que un archivo contiene código JSX (que tampoco es compatible con los navegadores).

Es importante comprender que en realidad es sólo el proceso de construcción el que se preocupa por esta extensión.

Y, por lo tanto, también encontrará proyectos de React que no usan .jsx sino solo .js como extensión de archivo. Y en esos archivos .js, también encontrarás código JSX. Porque simplemente depende del proceso de compilación subyacente qué extensión se espera al usar esta sintaxis JSX en un archivo.

Dado que no funciona en el navegador de ninguna manera, no existe una regla estricta al respecto. En su lugar, encontrará proyectos que requieren .jsx (como la configuración de proyecto que usamos en este curso) y encontrará proyectos que también admiten .js (con código JSX dentro).

Estoy enfatizando esto aquí para que no se confunda si encuentra proyectos de React que no usan archivos .jsx.

Además, también encontrará proyectos que requieren la extensión de archivo como parte de la importación de archivos (por ejemplo, importar aplicación desde './App.jsx') y encontrará otros proyectos que no la requieren (es decir, hay , podrías simplemente usar importar aplicación desde './App').

Esto, nuevamente, no tiene nada que ver con el navegador o el "JavaScript estándar"; en cambio, simplemente depende de los requisitos del proceso de creación de código que forma parte de la configuración del proyecto que eligió.

**Ejercicio**

Su tarea es crear un nuevo componente `MainGoal` que genere un párrafo de texto que describa el objetivo principal del curso (por ejemplo, "Mi objetivo principal: aprender React en profundidad y desde cero").

Tendrás que crear este nuevo componente desde cero y luego usarlo dentro del código JSX del componente de la aplicación.

La aplicación terminada podría verse así:

![image](https://github.com/user-attachments/assets/b3ba17ab-8447-4b2c-af6c-8b5cc0819c5f)

(observe el texto "Mi objetivo principal: aprender a reaccionar desde cero" en la parte inferior)

Importante: Para garantizar que las comprobaciones automáticas detecten correctamente su solución, su componente debe llamarse MainGoal y también debe exportarse. Para hacer eso, simplemente agregue la palabra clave export delante de su componente MainGoal.

El componente MainGoal también debe contener el texto "Mi objetivo principal:" (seguido del objetivo principal del curso).

```JavaScript
import React from 'react';

// DEFINE YOUR COMPONENT HERE
// IMPORTANT: Add "export" in front of your component - otherwise the automated tests won't work
// ...

// DO NOT EDIT THE APP COMPONENT NAME OR CONTENT
// Except for outputting your custom component

function App() {
  return (
    <div id="app">
      <h1>Time to Practice!</h1>
      <p>
        Build a <code>&lt;MainGoal&gt;</code> component and insert it below this
        text.
      </p>
      <p>
        Your <code>&lt;MainGoal&gt;</code> component should simply output some
        text that describes your main course goal (e.g., &quot;My main goal:
        Learn React in great detail&quot;).
      </p>
      <p>
        <strong>Important:</strong> You custom component must contain the text
        &quot;My main goal:&quot;
      </p>
      <p>
        <strong>Also important:</strong> For the automatic checks to succeed,
        you <strong>must export</strong> your custom component function! Not as
        a default but simply by adding the <code>export</code> keyword in front
        of your function (e.g., <code>export function YOUR_COMPONENT_NAME</code>
        ).
      </p>
      {/* DON'T CHANGE THE TEXT / CONTENT ABOVE */}
      {/* OUTPUT YOUR COMPONENT HERE */}
    </div>
  );
}

export default App;
```

Respuesta:

```JavaScript
import React from 'react';

// DEFINE YOUR COMPONENT HERE
// IMPORTANT: Add "export" in front of your component - otherwise the automated tests won't work
export function MainGoal() {
  return (
    <p>My main goal: Learn react from the ground up</p>
  );
}

// DO NOT EDIT THE APP COMPONENT NAME OR CONTENT
// Except for outputting your custom component

function App() {
  return (
    <div id="app">
      <h1>Time to Practice!</h1>
      <p>
        Build a <code>&lt;MainGoal&gt;</code> component and insert it below this
        text.
      </p>
      <p>
        Your <code>&lt;MainGoal&gt;</code> component should simply output some
        text that describes your main course goal (e.g., "My main goal: Learn React in great detail").
      </p>
      <p>
        <strong>Important:</strong> You custom component must contain the text
        "My main goal:"
      </p>
      <p>
        <strong>Also important:</strong> For the automatic checks to succeed,
        you <strong>must export</strong> your custom component function! Not as
        a default but simply by adding the <code>export</code> keyword in front
        of your function (e.g., <code>export function YOUR_COMPONENT_NAME</code>
        ).
      </p>
      {/* DON'T CHANGE THE TEXT / CONTENT ABOVE */}
      {/* OUTPUT YOUR COMPONENT HERE */}
      <MainGoal />
    </div>
  );
}

export default App;
```

**La sintaxis especial de llaves nos permite agregar contenido dinamico a una pagina web y configurar dinámicamente atributos HTML y carga de archivos de imagen**

![image](https://github.com/user-attachments/assets/bae63692-bffe-42ca-9fb2-ebea39f3f166)

La función Math.random() en JavaScript devuelve un número de coma flotante pseudo-aleatorio comprendido en el rango de 0 (incluido) a 1 (excluido). Esto significa que el valor devuelto puede ser 0, pero siempre será menor que 1.

**Ejercicio**

falta ingresar el ejercicio de valores dinamicos con {}

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


Ejercicio de codificación 5. Revisar que algo no anda bien:

```javascript
export function CourseGoal({TITLE, DESCRIPTION}) {
  return (
    <li>
      <h2>{TITLE}</h2>
      <p>{DESCRIPTION}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        <CourseGoal 
            TITLE = "Learn React"
            DESCRIPTION = "In-depth"
        />
        <CourseGoal
            TITLE = "algo"
            DESCRIPTION = "algo"
        />
      </ul>
    </div>
  );
}

export default App;
```

# 3 Correcta organización de Componentes y CSS

## 31 Componentes

leccion 47

Idealmente cada componente debe estar en un archivo independiente. No se recomienda tener todos los componentes de una aplicación React en un mismo archivo por varias razones:

- 1 **Mantenimiento y Legibilidad**: Tener todos los componentes en un solo archivo puede hacer que el código sea difícil de leer y mantener. Dividir los componentes en archivos separados facilita la navegación por y la comprensión del código.

- 2 **Reutilización**: Al separar los componentes en archivos individuales, es más fácil reutilizarlos en diferentes partes de la aplicación o incluso en otros proyectos.

- 3 **Modularidad**: La modularidad es un principio clave en el desarrollo de software. Al dividir los componentes, cada uno puede ser desarrollado, probado y depurado de manera independiente.

- 4 **Colaboración**: En equipos de desarrollo, tener componentes separados permite que varios desarrolladores trabajen en diferentes partes de la aplicación simultáneamente sin conflictos.

- 5 **Rendimiento**: Aunque no es un problema común, tener un archivo muy grande puede afectar el rendimiento del editor de código y las herramientas de desarrollo.

Creamos una carpeta llamada **components** en la ruta /src donde irán los componentes **Header.jsx** y **CoreConcepts.jsx**:

**Header.jsx** \
![image](https://github.com/user-attachments/assets/b5e02383-c891-4254-a367-67fb6219fe3e)

Llamamos a nuestro componente así:

![image](https://github.com/user-attachments/assets/9ac3143b-5ed5-427b-86d8-2e83b2968233)


**CoreConcepts.jsx** \
![image](https://github.com/user-attachments/assets/31a1d1da-d517-48e0-8974-3f113cb845cc)

Debemos añadir la declaración de exportacion **export default** para poder importarlos correctamente donde los necesitemos.

## 32 CSS

leccion 48

En React, es conveniente organizar los archivos CSS en carpetas por las mismas razones que lo hacemos con los componentes: 

Crearemos una carpeta Header dentro de la carpeta components en la que almacenaremos tanto el componente como el css relacionado al header, ajustando las rutas de importacion en **App.jsx**.

![image](https://github.com/user-attachments/assets/5a412976-536a-4ef4-95a5-e61afefe6b3c)
![image](https://github.com/user-attachments/assets/1ae3035f-aeec-4dcd-8c30-89ad6d27f23f)
![image](https://github.com/user-attachments/assets/b89c56ed-46f1-4da5-ab0f-544ef4dbec27)

# 4 Composición de componentes y el concepto de children

leccion 48

## 41 Introducción

Construiremos una sección interactiva, por lo que daremos contenido dinámico a un cuadro de texto después de dar click a su correspondiente botón en un menú como se muestra en la figura:

![image](https://github.com/user-attachments/assets/3d02d38b-4458-4600-85a5-af08f56edb51)

Comenzaremos construyendo el botón y su funcionalidad.


En React, **children** es una **prop** especial que permite a los componentes anidar otros dentro de ellos. En React, la prop **children** es una forma poderosa de componer componentes. Permite que un componente padre pase contenido a sus componentes hijos. Esto es especialmente útil para crear componentes reutilizables y flexibles. Básicamente, **children** representa el contenido que se encuentra entre las etiquetas de apertura y cierre de un componente, contenido que puede ser una compleja estructura html que podemos llamar múltiples veces con tal solo utilizar una sola etiqueta html. 

- 1 El componente `TabButton.jsx` (desestructurando):

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

 `TabButton` es un componente funcional que recibe `children` como prop.

- Dentro del componente, se retorna un elemento `<li>` que contiene un botón (`<button>`).

- `{.children}` se coloca dentro del botón, lo que permite que cualquier contenido pasado como `children` se muestre dentro del botón.

- 2 El componente `TabButton` en `App.jsx`:

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
              
- `TabButton` se utiliza dentro de un elemento `<menu>`.

- El texto `Components` se pasa como `children` al componente `TabButton`, por lo que se mostrará dentro del botón.

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

## 42 Ejercicio de composición de componentes.

Tu tarea es crear un componente `Card` reutilizable que tome un `name` como entrada y, además, pueda incluirse en cualquier código JSX.

El prop `name` debe aparecer como un título dentro del componente Card, el código JSX empaquetado debe aparecer debajo de ese título.

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

## 43 El atributo onClick

50

Necesitamos ahora darle poder al click en los botones para que ejecuten la acción de mostrarnos un cuadro dinámico. 

`onClick` es un evento en React que se utiliza para manejar las acciones de clic del usuario en un elemento. Es similar al evento onclick en JavaScript, pero se usa dentro de componentes de React. 

Modificaremos nuestro componente para añadir el prop receptor de eventos **onClick** al elemento button entregándole la función handleClick() que se declarara dentro de la función de componente sin los paréntesis pues la necesitamos como valor:

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

## 44 Pasar funciones como valores a las **props**.

51

Hemos dicho que la función **handleClick** que se declarará dentro de la función de componente irá sin los paréntesis pues la necesitamos como valor. Requeriremos de ésta propiedad pues ahora queremos cambiar el contenido desplegado debajo de la fila de botones para acceder a distintos contenidos cada vez que se seleccionemos distintos botones. 

Para ello necesitamos escuchar los clicks dentro de nuestro componente personalizado **TabButton**, porque debes manejar el evento en el componente que también administra los datos que se deben cambiar.

La pregunta es, cómo le damos poder de acción, capacidad de ejecutar algo a la selección del botón? La respuesta es entregándole una **función como valor** al elemento **onClick** del componente (**handleClick**). Esto lo lograremon ingresando un segundo parámetro **prop** a la función de componente **TabButton** llamado **onSelect**.

Luego pasaremos 'el puntero' **handSelect** a la prop **onSelect**.

La función onSelect se activará cuando el botón sea clickeado y es la que le dará vida al componente dinámico.

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

## 45 Ejemplo de reacción a eventos

Supón un componente que ya ha sido preparado por un colega.

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

![image](https://github.com/user-attachments/assets/5829d312-3cf9-40dc-9c30-108dec3003b4)

Respuesta:

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

## 46 Pasando argumentos personalizados a funciones de eventos.

52

Ahora, dependiendo sobre qué botón hagamos el click es que queremos que se despliegue el contenido dinámico. Para ello establecemos cuatro strings que identifiquen a cada uno de los botones components, jsx, props y state.

La función flecha anónima será ahora el valor que se le pasa **como valor** al parámetro onSelect del gatillador **onClick**.

La línea de código `() => handleSelect('components')` es una función flecha en JavaScript que se utiliza como un manejador de eventos. No toma ningún argumento (por eso los paréntesis vacíos ()).

- Llamada a la Función: Dentro de la función flecha, se llama a la función handleSelect con el argumento 'components'.

- Propósito: Esta función flecha se pasa como el manejador de eventos `onClick` para el botón en el componente `TabButton`. **Sólo cuando en el botón se hace click**, la función flecha se ejecuta, llamando a handleSelect('components').

- Efecto: La función handleSelect toma el argumento selectedButton (por ejemplo, 'components') y lo pasa a `setSelectedTopic`, que actualiza el estado del componente con el nuevo tema seleccionado.

```JavaScript
<menu>
   <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
   <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
   <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
   <TabButton onSelect={() => handleSelect('state')}>State</TabButton>                  
</menu>
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

```JavaScript
function handleSelect(selectedButton) {
   console.log(selectedButton);
}
```

## 47 Ejemplo Configuración de Manejadores de Eventos

Tu tarea es editar `<button>` en el componente `App` de manera que la función ya definida `handleCreateUser` se llame con un valor para `name`.

Por lo tanto, no debes codificar directamente el valor que se debe asignar a `user.name` en la función `handleCreateUser`, sino que debes pasarlo como un valor para el parámetro `name` cuando ocurra un evento de clic en el `<button>`.

No tienes que preocuparte por ningún valor que pueda ingresarse en el campo `<input>` - está ahí solo con fines decorativos.

![image](https://github.com/user-attachments/assets/a69447d9-266c-4af9-8fb9-248bd7d4093f)


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

# 5 El concepto de State y Hook

53-54-55

## 51 El problema.

Necesitamos un componente dinámico que cambie cada vez que damos click en la funcion **onSelect** del componente **TabButton**

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

Así, cada vez que se selecciona un botón se deberia desplegar correspondientemente 'components', 'jsx', 'props' o 'state', pero el texto será: 'Selecciona un boton' y no cambiará. Sin embargo, si verificas en la consola presionando los diferentes botones (por `console.log(tabContent);`) verás que la funcion SI se está ejecutando.

El problema es que por defecto, los componentes en React solo se ejecutan una sola vez: **cuando encuentra por primera vez un componente en el código**.

> LOS COMPONENTES EN REACT, POR DEFECTO SOLO SE EJECUTAN UNA SOLA VEZ.

El código en:

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

> Para solucionar este problema utilizamos el objeto **state** y su función hook: **useState()**.

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

/* ... */

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

RespuestaÑ

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
      title: 'JSX',
      description: ,
      code: ,
   },
   props: {
      title: 'Props',
      description: ,
      code: ,
   },
   state: {
      title: 'State',
      description: ,
      code: ,
   },
};
```

```JavaScript
import {EXAMPLES} from './data.js';

/* ... */

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

> Debemos ahora inicializar el estado con un parametro válido. Lo cambiamos a 
> const [selectedTopic, setSelectedTopic] = useState('components');



---
<br>
<br>
<br>
<br>
---
Aca voy comenzando la leccion 56
<br>
<br>
<br>
<br>
---

# 5 Renderización de contenido de forma condicional

Ocurre un problema al iniciar la aplicación. Lo que sucede es que queremos que se despliegue el contenido dinámico sólo y sólo si hemos presionado un botón para aquello. Si no es así, queremos que se despliegue otro contendido o ninguno. 

La siguientes líneas hacen que el programa se caiga:

```javascript
const [selectedTopic, setSelectedTopic] = useState('');
const [selectedTopic, setSelectedTopic] = useState();
```

Queremos que se despliegue al inicio: 'Por favor, selecciona un item'.

Tenemos varias alternativas:

- Codigo original:
  
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

- 2 Integrando la funcionalidad en un solo operador tenario

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

- 3 Utilizando el operador `y` lógico de javascript
  
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

- 4 Utilizando una variable const 

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

Estás trabajando en una parte de una aplicación web que es responsable de mostrar una advertencia cuando un usuario esté a punto de realizar una acción peligrosa.

Por lo tanto, tu tarea es mostrar condicionalmente un cuadro de advertencia una vez que un usuario haya hecho clic en un botón específico. Dentro de ese cuadro de diálogo de advertencia, otro botón permite a los usuarios descartar la advertencia (es decir, eliminar el cuadro de advertencia de la pantalla).

La aplicación finalizada debe mostrar esta interfaz de usuario, si aún no se ha hecho clic en el <button>:

![image](https://github.com/user-attachments/assets/c8da23ef-739a-46ba-8f5f-75514e45a6d5)

Y esta interfaz de usuario, una vez que se hizo clic en el botón:

![image](https://github.com/user-attachments/assets/6ddd080e-01ae-4fad-8a64-40162411b41a)

Una vez que se hizo clic en el botón "Proceed", el cuadro de advertencia debe eliminarse nuevamente:

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

# 7 Generación dinámica de datos de listas El método map

Nos encontramos con unos problemas en el siguiente bloque:

![image](https://github.com/user-attachments/assets/f470c85f-7b7c-4a72-965a-a97170771b3f)

Aparte de estar repitiendo tres veces una línea de código, sucede que si modificamos en algo la estructura de datos de data.js, nuestra página web se rompe. 

```JavaScript
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
```

Sería ideal si el número de elementos **CoreConcepts** pudiese derivarse dinamicamente del numero de elementos del array CORE_CONCEPTS. JSX es capaz de producir un array de elementos html, por lo que podemos transformar el array de elementos del array CORE_CONCEPTS en un array de elementos JSX. Eso lo podemos lograr con la ayuda de la funcion map de JavaScript.

## 71 El metodo map

El método **map()** en JavaScript es una función de los arrays que permite crear un nuevo array con los resultados de aplicar una función a cada uno de los elementos del array original. Es una herramienta muy poderosa y comúnmente utilizada en la programación funcional.

Características del método map()

- 1 No modifica el array original: **map()** crea un nuevo array y no cambia el array sobre el que se llama.

- 2 Función de callback: Toma una función de callback como argumento. Esta función se ejecuta una vez por cada elemento del array.

- 3 Nuevo array: Devuelve un nuevo array con los resultados de aplicar la función de callback a cada elemento del array original.

Recordemos el componente **CoreConcept**:

```JavaScript
export default function CoreConcept({image, title, description}){
   return (
      <li>
         <img src = {image} alt = {title} />
         <h3>{title}</h3>
         <p>{description}</p>
      </li>
   );
}
```

Podemos reemplazar el codigo:

```JavaScript
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
```

Por:

```JavaScript
<section id = 'core-concepts'>
   <h2>
   Core Concepts
   </h2>
   <ul>
      {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept {...conceptItem} />
      ))}                  
   </ul>              
</section>
```

Desglose de la Línea de código: `CORE_CONCEPTS.map((conceptItem) => (...))`

- CORE_CONCEPTS es un array que contiene elementos que deseas renderizar.

- El método map() itera sobre cada elemento del array CORE_CONCEPTS y ejecuta la función de callback* proporcionada para cada elemento.

- conceptItem es el parámetro que representa cada elemento del array CORE_CONCEPTS durante la iteración.

Desglose de la Línea de código: <CoreConcept {...conceptItem} />:

- Dentro de la función de callback, se está retornando un componente de React llamado CoreConcept.

- {...conceptItem} es la sintaxis de "spread"** en JavaScript, que se utiliza para pasar todas las propiedades del objeto conceptItem como props al componente CoreConcept.

Comportamiento

- Iteración y Renderizado: Por cada elemento en el array CORE_CONCEPTS, se crea una instancia del componente CoreConcept con las propiedades del elemento actual (conceptItem) pasadas como props.

- Props Dinámicas: La sintaxis de "spread" ({...conceptItem}) permite que todas las propiedades del objeto conceptItem se pasen al componente CoreConcept de manera dinámica.

* Una función de callback es una función que se pasa como argumento a otra función y se ejecuta después de que la función principal haya completado su tarea. Las funciones de callback son una característica fundamental en JavaScript y se utilizan ampliamente para manejar operaciones asíncronas, como llamadas a APIs, temporizadores y eventos.

** En JavaScript, el operador de propagación, conocido como "spread operator", se representa con tres puntos (...). Se utiliza para expandir elementos de un iterable (como un array o un objeto) en lugares donde se esperan múltiples elementos. Es una herramienta muy útil y versátil en la programación moderna de JavaScript.


## 72 Añadiendo la prop key

Aparece un problema. En la consola al ejecutar este codigo aparece el error: **'cada child en una lista deberia tener una unica prop 'key''**. Le añadimos una:

```JavaScript
<section id = 'core-concepts'>
   <h2>
   Core Concepts
   </h2>
   <ul>
      {CORE_CONCEPTS.map((conceptItem) => (
         <CoreConcept key = {conceptItem.title} {...conceptItem} />
      ))}                  
   </ul>              
</section>
```


## 73 Ejercicio Contenido de lista dinámica

Estás trabajando en una aplicación web de "Lista de tareas pendientes" y tu tarea es generar una lista de elementos de tareas pendientes ficticios de forma dinámica. Para esta tarea, se ha preparado un componente de tareas pendientes, aunque aún debes agregarle algo de código para recibir y generar el texto de la tarea pendiente.

Todo.js
```JavaScript
import React from 'react';

export default function Todo() {
   return <li>...</li>;
}
```

Para ser más precisos: en el componente de la aplicación, debes transformar la matriz DUMMY_TODOS que se te proporciona (¡la cual no debe modificarse!) en una lista de elementos JSX (elementos <Todo> para ser precisos). Cada elemento del componente de tareas pendientes debe recibir y generar el texto de la tarea pendiente a través de una propiedad llamada texto.

```JavaScript
import React from 'react';
import Todo from './Todo'

// don't remove the export keyword here!
export const DUMMY_TODOS = [
   'Learn React',
   'Practice React',
   'Profit!'
];

// don't change the Component name "App"
export default function App() {
}
```

La interfaz de usuario final debería verse así:

![image](https://github.com/user-attachments/assets/ded81425-ee8e-4eb3-84bb-d6a633163ee8)

Respuesta:

```JavaScript
import React from 'react'; 
export default function Todo({ texto }) { 
   return <li>{texto}</li>; 
}
```

```JavaScript
import React from 'react';
import Todo from './Todo';

// don't remove the export keyword here!
export const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];

// don't change the Component name "App"
export default function App() {
  return (
    <ul>
      {DUMMY_TODOS.map((todo, index) => (
        <Todo key={index} texto={todo} />
      ))}
    </ul>
  );
}
```

***
***
***



**60**

**Un proyecto React no necesita obligatoriamente de codigo JSX. Puede ser construido exclusivamente con codigo standard JavaScript.**

JSX se utiliza solo por razones de conveniencia. Es de esta manera que los dos codigos escritos en JSX y lenguaje standart JavaScript que se muestran a continuacion son equivalentes:

```javascript
<div id="content">
   <p>Hola mundo!</p>
</div>
```

```javascript
React.createElement(
   'div',
   {id: 'content'},
   React.createElement(
      'p',
      null,
      'Hello World'
   )
);
```

JSX no es una caracteristica standard, no esta soportado por el navegador, por lo que el codigo JSX no es el que se ve directamente en el navegador. JSX necesita de un **proceso de compilacion** que trabaja tras bambalinas que lo cambia y optimiza para que pueda ser renderizable.

**61**

**Las expresiones JSX deben tener un elemento padre**

En JavaScript no es posible retornar dos valores en una funcion, tampoco en JSX. Se deben agrupar en un solo bloque.

En nuestro codigo tenemos este problema que nos explica el por que estamos utilizando un <div> aparentemente innecesario.

```javascript
   return (
      <div>
         <Header />
         <main>...
         </main>
      </div>
   );
}
```

El `<div>` lo podemos reemplazar con el componente <Fragment>, pero de manera mas moderna simplemente con la etiqueta vacia `<>`:

```javascript
import {useState, Fragment} from 'react';

   return (
      <Fragment>
         <Header />
         <main>...
         </main>
      </Fragment>
   );
}
```

```javascript
   return (
      <>
         <Header />
         <main>...
         </main>
      </>
   );
}
```

**Ejercicio**

Considere el siguiente trozo de codigo React:

```javascript
function Summary({ text }) {
   return null;
}

function App() {
   return (
      <div id="app" data-testid="app">
         <Summary text="Fragments help you avoid unnecessary HTML elements." />
      </div>
   );
}

export default App;
```

Su tarea es editar el componente Summary existente de modo que genere el siguiente contenido:

```javascript
<h1>Resumen</h1>
<p>{texto}</p>
```

Respuesta:

```javascript
function Summary({ text }) {
   return (
      <>
         <h1>Summary</h1>
         <p>{text}</p>
      </>
   );
}

function App() {
   return (
      <div id="app" data-testid="app">
         <Summary text="Fragments help you avoid unnecessary HTML elements." />
      </div>
   );
}

export default App;
```

# Dividir una App entre sus diferentes responsabilidades

63-64-65-66

Observemos que dentro de nuestra aplicación App.js tenemos múltiples reponsabilidades trabajando simultáneamente:

- 1 Despliega los CORE_CONCEPTS y
- 2 Administra los botones responsables del despliegue del contenido dinámico (los ejemplos).
- 3 También tiene la particularidad de cambiar el componente aleatorio del título {description} cada vez que damos click a un botón. Esto ocurre porque estamos utilizando el State **selectedTopic** en el componente **App**.

Queremos tener la capacidad de identificar buenos lugares para nuestros componentes en forma separada. Debemos ser capaces de dividir los componentes con responsabilidades específicas.

Tenemos dos grandes bloques de código en los que podemos separar componentes. El primero, la sección de los core concepts y el de abajo que despliega botones y les entrega funcionalidad dinámica a los ejemplos. Para ello construiremos los nuevos componentes llamados **CoreConcepts.jsx** y **Examples.jsx** respectivamente:

## El componente CoreConcepts.jsx

```JavaScript
import Coreconcepts from './CoreConcepts.jsx';
import {CORE_CONCEPTS} from '../data.js';

export default function CoreConcepts() {
   return (
      <section id = 'core-concepts'>
         <h2>
            Core Concepts
         </h2>
         <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
               <CoreConcept key = {conceptItem.title} {...conceptItem} />
            ))}                    
         </ul>              
      </section>
   );
}
```

En la componente App.jsx obviamente quitamos las lineas:

```JavaScript
import Coreconcepts from './components/CoreConcepts.jsx';
import {CORE_CONCEPTS} from './data.js';
```

y anadimos:

```JavaScript
import CoreConcepts from './components/CoreConcepts.jsx';
```

Reemplazando la sección que hemos quitado con el tag <CoreConcepts />

```JavaScript
   return (
      <>
         <Header />
         <main>
            <Coreconcepts />
            <section id = "examples">
               <h2>Ejemplos</h2>
               <menu>            
```

## El componente Examples.jsx

Haremos algo similar al construir la funcion Examples a la que debemos añadir la funcion handleSelect, el manejo del State:

export default function Examples() {
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
}

# Los props no se reenvían automaticamente

Debido a esto los estilos se pireden.

Añadiremos un componente Section.jsx con el que manipularemos la seccion de ejemplos.

Pero existe un propblema : el atributo id se nos pierde. Debemos usar un patron proxy props (...props), que aseguren que todos los props siguientes no sean anadidos manualmente.

## Los proxy props

Utilizamos el operador spread (...props)

### ejercicio Forwarding Props

Su tarea es trabajar en el componente de `Input` de modo que devuelva un elemento `<textarea>` o un elemento `<input>`, dependiendo de si un prop `richText` sea establecido en `Input` como verdadero o falso.

Es decir, si se usa así:

<Input richText />

el componente `Input` debería representar un `<textarea>`. De lo contrario, debería representar un `<input>`.

Además, el componente de entrada debe reenviar todos los demás accesorios directamente a los elementos `<textarea>` o `<input>` devueltos.

Es decir, debería poder usarse así:

<Input type="text" placeholder="Your name" />

(como se ve en el archivo App.js existente)

La interfaz de usuario final debería verse así:


# Trabajando con multiples slots JSX. Estableciendo tipos de componentes dinamicamente

67

El problema surge aca cuando nos vemos en la necesidad de utilizar multiples children. Para ello necesitamos un nuevo slot, que logramos estableciendo codigo jsx dentro de etiquetas.





# Estableciendo valores de props por defecto

68

La idea es hacer componentes altament reutilizables. 

## Ejercicio Crear componentes flexibles

Tu tarea es crear un componente de botón personalizado y altamente reutilizable que se pueda usar de las siguientes maneras (consulte también el código en el archivo App.js):

**"Filled" mode (default)**:

<Button>Default</Button>

or

<Button mode="filled">Filled</Button>

should yield buttons that looks like this:

**"Outline" mode**:

<Button mode="outline">Outline</Button>

should yield a button that looks like this:

**"Text-only" mode**:

<Button mode="text">Text</Button>
should yield a button that looks like this:

**With Icon**:

<Button Icon={HomeIcon}>Home</Button>
or

<Button Icon={PlusIcon} mode="text">
  Add
</Button>
should yield buttons that look like this:

Sugerencia: Para asegurarse de que el ícono se vuelva visible (si se pasa correctamente al componente y se usa allí), ajuste el componente del ícono en el botón con un <span> que tenga la clase "icono de botón".

¡También envuelve el accesorio infantil con un <span>!

¡Encontrará todos los estilos (clases CSS) necesarios para crear un botón que admita estos diferentes "modos" en el archivo index.css proporcionado!

Todos los botones necesitan una clase CSS de botón y luego, dependiendo de su modo, clases adicionales.

Además, el componente Botón personalizado debe aceptar todos los accesorios estándar que se puedan configurar en el <botón> integrado. Estos accesorios deben reenviarse al elemento <button> predeterminado que se utilizará en el componente Botón personalizado.

Por lo tanto, su tarea es trabajar en el componente Button proporcionado en el archivo Button.js. No agregue varios componentes personalizados, en su lugar trabaje en ese componente proporcionado y asegúrese de que admita todos estos modos y funciones diferentes. También asegúrese de que, si no se establece ningún modo, el modo "lleno" se asume como predeterminado.
















