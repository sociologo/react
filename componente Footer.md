```javascript
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'




const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui tenetur harum pariatur! Iusto animi cupiditate, provident dolore porro eum obcaecati.
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com/" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://facebook.com/" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
                    <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href="https://instagram.com/" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 EGATOR TUTORIALS &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer
```

en home.css

```css
/* ===================== FOOTER ===================== */
footer {
    background: var(--color-primary);
    margin-top: 7rem;
    padding-top: 7rem;
    font-size: 0.9rem;
    color: var(--color-gray-100);
}

/* 

**footer {**: Esto indica que los estilos que siguen se aplicarán a todos los elementos <footer> en la página.

**background**: var(--color-primary);: Aquí se establece el color de fondo del footer. En lugar de usar un color directamente (como #ffffff o red), se utiliza una variable CSS llamada --color-primary. Esto significa que el color de fondo se define en otra parte del archivo CSS o en un archivo de variables, lo que permite un manejo más consistente y fácil de cambiar los colores en todo el sitio.

**margin-top**: 7rem;: Esto añade un margen superior de 7 rem (unidad relativa al tamaño de la fuente del elemento raíz) al footer. Esto significa que habrá un espacio de 7 rem entre el footer y el elemento que está encima de él.

**padding-top**: 7rem;: Esto añade un relleno superior de 7 rem dentro del footer. El relleno es el espacio entre el contenido del footer y su borde superior. Esto puede ser útil para crear un espacio interno dentro del footer.

**font-size**: 0.9rem;: Esto establece el tamaño de la fuente del texto dentro del footer a 0.9 rem, que es un poco más pequeño que el tamaño de fuente predeterminado.

**color**: var(--color-gray-100);: Aquí se define el color del texto dentro del footer. Al igual que con el fondo, se utiliza una variable CSS llamada --color-gray-100 para definir el color. Esto permite un manejo consistente de los colores en todo el sitio.

**}**: Esto cierra el bloque de estilos para el footer.

*/

.footer__container {
    display: grid;
    grid-template-columns: 26rem 1fr 1fr 1fr;
    gap: 6rem;
}

.footer__container article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7rem;
}

.footer__container article p {
    margin-top: 0.5rem;
}

.footer__container article h4 {
    margin-bottom: 0.6rem;
    font-size: 1rem;
}

.footer__socials {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
}

.footer__socials a {
    background: var(--color-gray-100);
    padding: 0.7rem;
    border: 1px solid transparent;
    border-radius: 0.6rem;
    transition: var(--transition);
}

.footer__socials a svg {
    color: var(--color-gray-600);
}

.footer__socials a:hover {
    border-color: var(--color-gray-100);
    background: transparent;
}

.footer__copyright {
    color: var(--color-gray-100);
    text-align: center;
    padding: 1.5rem 0;
    border-top: 2px solid var(--color-primary-variant);
    margin-top: 5rem;
}
```




