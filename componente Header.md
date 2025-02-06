
Al componente Header se le dan estilos en el archivo **index.css**

**Header.jsx**

```javascript
const Header = ({title, image, children}) => {
  return (
    <header className="header">
        <div className="header__container">
            <div className="header__container-bg">
                <img src={image} alt="Header Background Image" />
            </div>
            <div className="header__content">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
    </header>
  )
}

export default Header
```

**index.css**

```css
.header {
    margin-top: 5rem;
    height: 20rem;
    overflow: hidden;
    border-bottom: 2px solid var(--color-gray-400);
}

.header__container {
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    place-items: center;
    background: black;    
}

.header__container-bg {
    position: absolute;
    width: 100%;
}

.header__container-bg img {
    opacity: 0.5;
}

.header__content {
    position: relative;
    width: 44%;
    margin: 0 auto;
    text-align: center;
    color: var(--color-gray-100);
}

.header__content h2 {
    margin-bottom: 1rem;
}

.header__content p {
    color: rgba(255, 255, 255, 0.7)
}
```

**About.jsx**

```javascript
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maiores doloribus, eligendi incidunt modi rerum debitis consequatur molestias?
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
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
```

```css
.about__section-image {
    border-radius: 50%;
    overflow: hidden;
    transform: skew(15deg);
    transition: var(--transition);
}

.about__section-image:nth-child(2) {
    transform: skew(-15deg);
}

.about__section-image:hover {
    transform: skew(0);
}

.about__section-content h1 {
    margin-bottom: 2rem;
}

.about__section-content p {
    margin-bottom: 1rem;
}



.about__story-container, .about__mission-container {
    display: grid;
    grid-template-columns: 40% 50%;
    gap: 10%;
}

.about__vision-container {
    display: grid;
    grid-template-columns: 50% 40%;
    gap: 10%;
}




/* MEDIA QUERIES (medium screens) */
@media screen and (max-width: 1024px) {
    .about__section-image {
        width: 60%;
    }

    .about__section-content h1 {
        margin-bottom: 1.2rem;
    }

    .about__story-container, .about__vision-container, .about__mission-container {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .about__vision .about__section-image {
        grid-row: 1;
    }
}




/* MEDIA QUERIES (small screens) */
@media screen and (max-width: 600px) {
.about__section-image {
    width: 80%;
    margin-inline: auto;
}

.about__story-container, .about__vision-container, .about__mission-container {
    gap: 2rem;
}

}
```
