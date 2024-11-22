
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

## 49 La propiedad especial "children" y composicion de componentes

### children

En React, children es una prop especial que permite a los componentes anidar otros componentes o elementos dentro de ellos. Básicamente, children representa el contenido que se encuentra entre las etiquetas de apertura y cierre de un componente.

Por ejemplo, si tienes un componente **Card **y lo usas de esta manera:

```JavaScript
<Card>
  <h2>Título</h2>
  <p>Este es el contenido de la tarjeta.</p>
</Card>
```

El contenido 
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

### Composición de componentes

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

### Ejemplo:
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

***

Volviendo a nuestro proyecto:

Crearemos un nuevo componente llamado **TabButton.jsx** en la carpeta de **componentes**






















