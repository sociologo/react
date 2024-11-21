
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

**App.jsx**

```JavaScript
function App() {
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>SOCIOLAB</h1>
        <p>
            Bienvenido a la pagina oficial de sociolab!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
```

## Reglas

Un componente de React debe seguir las siguientes reglas:

1 El nombre de la funcion debe comenzar con una mayuscula

2 La funcion debe retornar un contenido renderizable, esto es, contenido que react pueda desplegar en el navegador.

## 43 Contenido dinamico en una web

![image](https://github.com/user-attachments/assets/bae63692-bffe-42ca-9fb2-ebea39f3f166)

La función Math.random() en JavaScript devuelve un número de coma flotante pseudo-aleatorio comprendido en el rango de 0 (incluido) a 1 (excluido). Esto significa que el valor devuelto puede ser 0, pero siempre será menor que 1.

## 44 45 Props

En React, los props (abreviatura de “properties”) son una forma de pasar datos de un componente a otro. Los props permiten que los componentes sean reutilizables y dinámicos, ya que puedes cambiar su comportamiento y apariencia según los datos que les pases.

Los props se utilizan para pasar datos desde un componente padre a un componente hijo. Esto permite que el componente hijo acceda a esos datos y los utilice para renderizar contenido dinámico. Los props son inmutables, lo que significa que un componente no puede cambiar sus propios props. Esto asegura que los datos fluyan en una sola dirección, de arriba hacia abajo, lo que se conoce como “flujo de datos unidireccional”.

Los props poseeen una sintaxis similar a HTML. Por ejemplo:

```JavaScript
function App() {
  return <Greeting name="Max" />;
}

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

Ejemplo de Uso de Props

Supongamos que tienes un componente Greeting que necesita mostrar un mensaje de saludo personalizado:

```JavaScript
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

Puedes pasarle un prop name desde el componente padre App:

```JavaScript
function App() {
  return <Greeting name="Max" />;
}
```

En este ejemplo:

El componente Greeting recibe un prop llamado name.

Dentro del componente Greeting, puedes acceder a props.name para mostrar el nombre pasado desde el componente App.

Ventajas de Usar Props

- Reutilización: Los componentes pueden ser reutilizados con diferentes datos, lo que reduce la duplicación de código.
- Modularidad: Facilitan la creación de componentes modulares y mantenibles.
- Claridad: Ayudan a mantener un flujo de datos claro y predecible en la aplicación.

Analicemos el siguiente componente:

```Javascript
function CoreConcept(props){
   return (
      <li>
         <img src="..." alt="..." />
         <h3>TITLE</h3>
         <p>DESCRIPTION</p>
      </li>
   );
}
```

- 1 Definición de la función: CoreConcept es una función de componente en React. Los componentes de función son una forma de definir componentes en React utilizando funciones de JavaScript.

- 2 Parámetro props: La función recibe un parámetro llamado props, que es un objeto que contiene todas las propiedades que se pasan al componente desde su padre.

- 3 JSX: Dentro de la función, se retorna un bloque de JSX (JavaScript XML). JSX es una extensión de la sintaxis de JavaScript que permite escribir HTML dentro de JavaScript.

- 4 Elemento <li>: El componente retorna un elemento de lista (<li>), que es un elemento HTML utilizado para representar un ítem en una lista.

- 5 Elemento <img>: Dentro del <li>, hay una etiqueta de imagen (<img>). Los atributos src y alt están presentes pero no tienen valores específicos en este ejemplo. src define la ruta de la imagen y alt proporciona un texto alternativo para la imagen.

- 6 Elemento <h3>: Después de la imagen, hay un encabezado de nivel 3 (<h3>), que contiene el texto “TITLE”. En una implementación real, este texto probablemente sería dinámico, basado en props.

- 7 Elemento <p>: Finalmente, hay un párrafo (<p>) con el texto “DESCRIPTION”. Al igual que el título, este texto también sería dinámico en una implementación real.

Este componente es bastante básico y sirve como plantilla para un ítem de lista que incluye una imagen, un título y una descripción. En una aplicación real, podrías pasar props para personalizar el src de la imagen, el alt de la imagen, el título y la descripción.




**Los props son fundamentales en React porque permiten que los componentes sean flexibles y reutilizables. Al pasar datos a través de props, puedes crear componentes genéricos que se adapten a diferentes situaciones y datos.**


