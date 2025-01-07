const reactDescriptions = ['Estudiamos', 'Analizamos', 'Comprendemos'];
import reactImg from '../assets/react-core-concepts.png';
function genRandomInt(max) {
   return Math.floor(Math.random() * (max + 1));
}


export default function Header() {

   const description = reactDescriptions[genRandomInt(2)];

   return (
      <header>
         <img src = {reactImg} alt = "Stylized atom" />
         <h1>Sociolab Chile</h1>
         <p>
            {description} la desigualdad y la pobreza dentro de las sociedades contemporáneas
         </p>
      </header>
   )
}