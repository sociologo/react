
import { CORE_CONCEPTS } from './data.js';
 
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

import {useState} from 'react';

import { EXAMPLES } from './data.js';

function App() {

   const [selectedTopic, setSelectedTopic]= useState();

   function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
   }

   let tabContent = <p> Por favor selecciona un tema. </p>

   if (selectedTopic) {

      tabContent = 

      <div id = "tab-content">
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

   }

   return (
      <div>
         <Header/>
         <main>

            <section id ="core-concepts">
               <h2> Conceptos centrales</h2>
               <ul>
                  {CORE_CONCEPTS.map((conceptItem) => (
                     <CoreConcept key = {conceptItem.title} {...conceptItem} />
                  ))}
{/*                   <CoreConcept 
                  title = {CORE_CONCEPTS[0].title}
                  description = {CORE_CONCEPTS[0].description}
                  image = {CORE_CONCEPTS[0].image}
                  />
                  <CoreConcept {...CORE_CONCEPTS[1]}/>
                  <CoreConcept {...CORE_CONCEPTS[2]}/>
                  <CoreConcept {...CORE_CONCEPTS[3]}/> */}
               </ul>
            </section>
            <section id ="examples">
               <h2> Ejemplos</h2>
               <menu>
                  <TabButton isSelected = {selectedTopic === 'Desigualdad'} onSelect={() => handleSelect('Desigualdad')}> Desigualdad </TabButton>
                  <TabButton isSelected = {selectedTopic === 'Pobreza'} onSelect={() => handleSelect('Pobreza')}> Pobreza </TabButton>
                  <TabButton isSelected = {selectedTopic === 'Gentrificacion'} onSelect={() => handleSelect('Gentrificacion')}> Gentrificación </TabButton>
                  <TabButton isSelected = {selectedTopic === 'Exclusion_social'} onSelect={() => handleSelect('Exclusion_social')}> Exclusión social </TabButton>

               </menu>

               {tabContent}

            </section>
            <h2>Con la ayuda de herramientas estadísticas desarrolladas con el lenguaje R podemos hacer una medición muy precisa de las dinámicas en como se reparten los recursos dentro de una sociedad. Para ello, hacemos uso de censos y encuestas como la Casen.</h2>
         </main>
      </div>
   );
}

export default App;
