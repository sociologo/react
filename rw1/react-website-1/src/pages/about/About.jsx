import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'



const About = () => {
  return (
    <>
    <Header title="Sobre nosotros" image={HeaderImage}>
    La pandemia de Covid en Chile nos conmovió profundamente en cuanto nos hizo conocer con meridiana claridad la condición de precariedad en la que cientos de miles de chilenos sobrevivían.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h2>Historia de Sociolab</h2>
          <p>
          
En el corazón de Santiago, Chile, nació Sociolab, una organización dedicada a la investigación 
y el análisis social. Fundada por un grupo de sociólogos y programadores apasionados, Sociolab 
se propuso abordar uno de los problemas más persistentes y complejos de la sociedad chilena: la 
desigualdad y la pobreza.
         </p>


         <h2>Proyectos Destacados</h2>

         <h3>Mapa de la Desigualdad:</h3> 
         
         Un proyecto emblemático de Sociolab que visualiza la distribución de la pobreza y la desigualdad en Chile a través de mapas interactivos. Este proyecto ha sido fundamental para identificar áreas críticas y orientar la intervención de políticas públicas.

         <h3>Informe Anual de Pobreza:</h3> 
         
         Un informe exhaustivo que analiza las tendencias y cambios en la pobreza y la desigualdad en Chile. Este informe es una herramienta clave para investigadores, formuladores de políticas y organizaciones no gubernamentales.

         <h3>Plataforma de Datos Abiertos:</h3> 
         
         Sociolab ha desarrollado una plataforma en línea que permite a los usuarios acceder y explorar los datos del censo y la CASEN. Esta plataforma fomenta la transparencia y el acceso a la información, empoderando a la sociedad civil y a los investigadores.

         <h2>Impacto</h2>

Desde su fundación, Sociolab ha tenido un impacto significativo en la comprensión y abordaje de la desigualdad y la pobreza en Chile. Sus investigaciones y proyectos han sido utilizados por gobiernos, organizaciones no gubernamentales y académicos para diseñar y evaluar políticas públicas más efectivas.

         <h2>Futuro</h2>

Sociolab continúa innovando y expandiendo sus horizontes. Con planes para colaborar con instituciones internacionales y desarrollar nuevas herramientas de análisis, Sociolab está comprometido a seguir siendo un líder en la lucha contra la desigualdad y la pobreza.

Sociolab no solo es una organización de investigación, sino un faro de esperanza y cambio para un Chile más justo y equitativo.
    
          <h1>Misión y Visión</h1>
La misión de Sociolab es utilizar la metodología SAE (Small Area Estimation) del censo sobre la CASEN (Encuesta de Caracterización Socioeconómica Nacional) para proporcionar datos precisos y detallados sobre la distribución de la pobreza y la desigualdad en Chile. La visión de Sociolab es convertirse en un referente en el análisis social y contribuir a la formulación de políticas públicas más efectivas y equitativas.

          <p>Metodología
Sociolab emplea la metodología SAE para analizar los datos del censo y la CASEN, permitiendo estimaciones precisas a nivel de pequeñas áreas geográficas. Esta metodología combina técnicas estadísticas avanzadas con el poder de los datos del censo, proporcionando una visión detallada y granular de la realidad socioeconómica del país.
</p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit ad neque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates natus.
          </p>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam harum corrupti quas voluptate, perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>


    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit ad neque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates natus.
          </p>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam harum corrupti quas voluptate, perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?
          </p>
          <p>
          Perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About