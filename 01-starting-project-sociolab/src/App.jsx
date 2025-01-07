
import { CORE_CONCEPTS } from './data.js';
 
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';




function App() {
   return (
      <div>
         <Header/>
         <main>

            <section id ="core-concepts">
               <h2> Conceptos centrales</h2>
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

            <h2>Con la ayuda de herramientas estadísticas desarrolladas con el lenguaje R podemos hacer una medición muy precisa de las dinámicas en como se reparten los recursos dentro de una sociedad. Para ello, hacemos uso de censos y encuestas como la Casen.</h2>
         </main>
      </div>
   );
}

export default App;
