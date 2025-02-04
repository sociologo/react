Este componente muestra una lista de testimonios que el usuario puede navegar usando botones de flecha. Cada testimonio incluye una imagen, una cita, el nombre y el trabajo de la persona que dio el testimonio. El componente utiliza estado para manejar qué testimonio se muestra actualmente y funciones para cambiar entre ellos.

```javascript
import { useState } from "react"
import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import Card from "../UI/Card"
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import { testimonials } from "../data"






const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index];


    const prevTestimonialHandler = () => {
        setIndex(prev => prev - 1);

        if(index <= 0) {
            setIndex(testimonials.length - 1);
        }

    }

    const nextTestimonialHandler = () => {
        setIndex(prev => prev + 1);

        if(index >= testimonials.length - 1) {
            setIndex(0);
        }
    }


  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" className="testimonials__head"/>
            <Card className="testimonial">
                <div className="testimonial__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className="testimonial__quote">{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className="testimonial__title">{job}</small>
            </Card>
            <div className="testimonials__btn-container">
                <button className="testimonials__btn" onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle/></button>
                <button className="testimonials__btn"  onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
```
