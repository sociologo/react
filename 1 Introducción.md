# Repaso a JavaScript lecciones 15-34

https://react.new/

Tengo vinculada mi cuenta GitHub a la cuenta codesandbox.

-1 https://codesandbox.io/p/sandbox/javascript-refresher-start-rytt3j

-2 https://codesandbox.io/p/sandbox/react-vs-vanilla-demo-uc08fv

## La etiqueta script.

La etiqueta <script> en HTML se utiliza para incrustar o enlazar scripts de cliente, como JavaScript, dentro de una página web. Nosotros la usaremos para los segundo.
```
<script src="/assets/scripts/app.js"></script>
```
![image](https://github.com/user-attachments/assets/560aa670-e0f5-4eae-91e4-7c8c46434dd4)

![image](https://github.com/user-attachments/assets/de360015-55c1-4480-8518-913c9b9ea24e)

## Sobre la Sintaxis de las Funciones Flecha

Al trabajar con funciones flecha, tienes un par de “atajos de sintaxis” disponibles.

Lo más importante es que debes conocer las siguientes alternativas:

Omitir los paréntesis de la lista de parámetros

Si tu función flecha toma exactamente un parámetro, puedes omitir los paréntesis envolventes.

En lugar de

```JavaScript
(userName) => { ... }
```

puedes escribir

```JavaScript
userName => { ... }
```

Ten en cuenta:

Si tu función no toma parámetros, no debes omitir los paréntesis - () => { ... } es la única forma correcta en ese caso.

Si tu función toma más de un parámetro, tampoco debes omitir los paréntesis - userName, userAge => { ... } sería inválido, 

```JavaScript
((userName, userAge) => { ... }) es correcto.
```

Omitir las llaves del cuerpo de la función

Si tu función flecha no contiene otra lógica más que una declaración de retorno, puedes omitir las llaves y la palabra clave return.

En lugar de

```JavaScript
number => { 
  return number * 3;
}
```

puedes escribir

```JavaScript
number => number * 3;
```

El siguiente código sería inválido:

```JavaScript
number => return number * 3; // inválido porque también se debe omitir la palabra clave return
number => if (number === 2) { return 5 }; // inválido porque las declaraciones if no pueden ser retornadas
```

Caso especial: Solo devolver un objeto

Si optas por la alternativa más corta explicada en el punto 2 y estás tratando de devolver un objeto de JavaScript, podrías terminar con el siguiente código inválido:

```JavaScript
number => { age: number }; // tratando de devolver un objeto
```

Este código sería inválido porque JavaScript trata las llaves como envolventes del cuerpo de la función (no como código que crea un objeto JS).

Para “decirle” a JavaScript que se debe crear (y devolver) un objeto en su lugar, el código debe ajustarse así:

```JavaScript
number => ({ age: number }); // envolviendo el objeto en paréntesis adicionales
```

Al envolver el objeto y sus llaves con un par adicional de paréntesis, JavaScript entiende que las llaves no están allí para definir el cuerpo de la función, sino para crear un objeto. Por lo tanto, ese objeto se devuelve.


## findIndex

La función **findIndex** busca el índice del elemento 'ajedrez' en el array. En este caso, 'ajedrez' está en el índice 1, por lo que index será 1 y se imprimirá 1.

```
const hobbies = ['futbol','ajedrez','bici'];
console.log(hobbies[2]);

hobbies.push('reading');
console.log(hobbies);

const index = hobbies.findIndex((item) => {
    return item === 'ajedrez';
});
console.log(index);
```

```
const index = hobbies.findIndex((item) => item === 'ajedrez');
```

## map

Aquí, la función map se utiliza para crear un nuevo array llamado editedHobbies. La función map aplica la función proporcionada a cada elemento del array hobbies. En este caso, la función toma cada item del array hobbies y le añade un signo de exclamación ('!'). Así, cada elemento del nuevo array editedHobbies será el correspondiente elemento de hobbies con un '!' añadido al final.

```
const editedHobbies = hobbies.map((item) => item + '!');
console.log(editedHobbies)
```

Aquí, la función map se utiliza para crear un nuevo array llamado editedHobbies2. La función map aplica la función proporcionada a cada elemento del array hobbies. En este caso, la función toma cada item del array hobbies y lo transforma en un objeto con una propiedad text cuyo valor es el item. Así, cada elemento del nuevo array editedHobbies2 será un objeto con una propiedad text.
```
const editedHobbies2 = hobbies.map((item) => ({text: item}));
console.log(editedHobbies)
```

## Desestructuración

Es una técnica llamada destructuring assignment (asignación por desestructuración) en JavaScript. Esta técnica permite extraer valores de arrays u objetos y asignarlos a variables de una manera más concisa y legible.
```JavaScript
const userNameData = ['Max', 'Carl'];

const firstName = userNameData[0];
const lastName = userNameData[1];

const [firstName, lastName] = ['Max', 'Carl'];

console.log(firstName);
console.log(lastName);
```

El siguiente código utiliza la asignación por desestructuración para extraer propiedades de un objeto y asignarlas a variables:
```JavaScript
const user = {
  name: 'Max',
  age: 34
};

const name = user.name;
const age = user.age;

const {name: userName, age} = {
  name: 'Max',
  age: 34
};

console.log(userName);
console.log(age);
```

### Desestructuración en listas de parámetros de funciones

La sintaxis de desestructuración explicada en la lección anterior también se puede usar en listas de parámetros de funciones.

Por ejemplo, si una función acepta un parámetro que contendrá un objeto, se puede desestructurar para “extraer” las propiedades del objeto y hacerlas disponibles como variables de ámbito local (es decir, variables disponibles solo dentro del cuerpo de la función).

Aquí tienes un ejemplo:

```JavaScript
function storeOrder(order) {
  localStorage.setItem('id', order.id);
  localStorage.setItem('currency', order.currency);
}
```

En lugar de acceder a las propiedades del pedido mediante la “notación de punto” dentro del cuerpo de la función storeOrder, podrías usar la desestructuración así:

```JavaScript
function storeOrder({id, currency}) { // desestructuración
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}
```

La sintaxis de desestructuración es la misma que se enseñó en la lección anterior, solo que sin crear una constante o variable manualmente.

En su lugar, id y currency se “extraen” del objeto entrante (es decir, el objeto pasado como argumento a storeOrder).

Es muy importante entender que storeOrder sigue aceptando solo un parámetro en este ejemplo. No acepta dos parámetros. En su lugar, es un solo parámetro: un objeto que luego se desestructura internamente.

La función aún se llamaría así:

```JavaScript
storeOrder({id: 5, currency: 'USD', amount: 15.99}); // ¡un argumento/valor!
```

## El operador de propagación (...)

Supongamos que queremos fusionar los arrays cursos y alumno en una nueva llamada mergedCursos:

```JavaScript
const cursos = ['Anatomia','Biologia'];
const newCursos = ['Matematicas'];

// Nos vemos tentados a hacer esto:

const mergedCursos = [cursos, newCursos];
console.log(mergedCursos);

// Pero al hacer ello nos creara un array anidado. Para evitarlo debemos utilizar el operador de propagacion:

const mergedCursos = [...cursos, ...newCursos];
console.log(mergedCursos);
```

Tambien lo utilizamos para objetos:

```JavaScript
const alumno = {
  name: 'Max',
  age: 34
};

const extendedUser = {
  isAdmin: True,
  ...user
}

console.log(extendedUser);
```

## Estructuras de control

### if

```JavaScript
const password = prompt('Your password');

if (password === 'Hello') {
  console.log('Hello works');
} else if (password === 'Hello') {
  console.log('hello works');
} else {
  console.log('Access not granted.');
} 
```


### for

```JavaScript
const hobbies = ['Sports','Cooking'];

for (const hobby of hobbies) {
  console.log(hobby);
}
```

## El DOM

El DOM (Document Object Model) es una interfaz de programación que permite a los scripts (como JavaScript) interactuar con el contenido, la estructura y el estilo de los documentos web. Aquí tienes una descripción más detallada:

¿Qué es el DOM?
Estructura en Árbol: El DOM representa un documento HTML o XML como una estructura en árbol, donde cada nodo del árbol es un objeto que representa una parte del documento. Por ejemplo, un nodo puede representar un elemento HTML, un atributo o un texto.
Acceso y Manipulación: Con el DOM, JavaScript puede acceder y manipular todos los elementos y atributos de un documento HTML. Esto incluye cambiar el contenido de los elementos, modificar sus estilos CSS, agregar o eliminar elementos y atributos, y reaccionar a eventos del usuario.
Eventos: El DOM permite asociar eventos a los elementos del documento. Por ejemplo, puedes hacer que una función JavaScript se ejecute cuando un usuario hace clic en un botón.

En React, el DOM tradicional no es tan relevante debido a la forma en que React maneja la actualización y manipulación de la interfaz de usuario. Aquí te explico por qué:

Virtual DOM
Virtual DOM: React utiliza un concepto llamado Virtual DOM. El Virtual DOM es una representación en memoria del DOM real. Cuando el estado de una aplicación cambia, React primero actualiza el Virtual DOM en lugar del DOM real.
Reconciliación: React compara el Virtual DOM con una copia anterior del mismo (un proceso llamado “reconciliación”) para determinar qué partes del DOM real necesitan ser actualizadas. Esto minimiza las manipulaciones directas del DOM, que son costosas en términos de rendimiento.
Eficiencia: Al actualizar solo las partes del DOM que han cambiado, React mejora significativamente el rendimiento de la aplicación. Las actualizaciones del DOM real pueden ser lentas, pero al usar el Virtual DOM, React puede hacer estas actualizaciones de manera más eficiente.
Declarativo vs. Imperativo
Enfoque Declarativo: React promueve un enfoque declarativo para construir interfaces de usuario. En lugar de manipular el DOM directamente (enfoque imperativo), los desarrolladores describen cómo debería verse la interfaz de usuario en función del estado de la aplicación. React se encarga de actualizar el DOM para que coincida con esta descripción.
Componentes: React organiza la interfaz de usuario en componentes reutilizables. Cada componente puede tener su propio estado y lógica, y React se encarga de renderizar estos componentes y actualizar el DOM según sea necesario.

## Paso de funciones como variables a otras funciones Voy aca

## Funciones dentro de funciones

## Valores por referencia y primitivos






































