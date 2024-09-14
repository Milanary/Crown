import React from "react";
import '../Styles/ComponentStyles/Testimony.css'
import Face1 from '../Images/face1.jpg';
import Face2 from '../Images/face2.jpeg';
import Face3 from '../Images/face3.jpeg';

const Testimonials = [
  {
    name: "Devon Lane",
    title: "Account Assistant",
    quote: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
    imageUrl:Face1
  },
  {
    name: "Marvin McKinney",
    title: "Project Manager",
    quote: "Rareblocks makes it super easy to see which kinds of tweets perform best for whatever metric I'm optimizing for.",
    imageUrl:Face2
  },
  {
    name: "Bessie Cooper",
    title: "President of Sales",
    quote: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
    imageUrl:Face3
  },
];

const Testimony = () => {
  return (
    <section className="testimonials container">
      <h2>Student stories of <span style={{color:'#ad274e'}}>Crown Institute</span></h2>
      <div className="testimonial-grid">
        {Testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.quote}"</p>
            <div className="author">
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="author-img"
              />
              <div className="author-details">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimony;