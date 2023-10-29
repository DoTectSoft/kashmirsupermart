import React from 'react';
import "./Testimonials.css";
import testimonialImage1 from "../../../assets/testimonialImage1.svg";
import testimonialImage2 from "../../../assets/testimonialImage2.svg";
import testimonialImage3 from "../../../assets/testimonialImage3.svg";
import testimonialQuoteImage from "../../../assets/testimonialQuoteImage.svg";
import testimonialStarRating from "../../../assets/testimonialStarRating.svg";


const testimonials = [
    {   
        id: 1,
        text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        image: {testimonialImage1},
        name: "Robert Fox",
        type: "Customer"
    },
    {
        id: 2,
        text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        image: {testimonialImage2},
        name: "Dianne Russell",
        type: "Customer"
    },
    {
        id: 3,
        text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
        image: {testimonialImage3},
        name: "Eleanor Pena",
        type: "Customer"
    }
]

function Testimonials() {
  return (
    <div className="testimonials">
        <div className='testimonialHeading'>
            <h2>Client Testimonials</h2>
        </div>
        <div className='testimonialContainer'>
            {testimonials.map(item => 
                <div className="testimonialCard" key={item.id}>
                    <img src={testimonialQuoteImage} alt="testimonialQuoteImage" />
                    <p>{item.text}</p>
                    <div className="testimonialWriterDetails">
                        <div className="testimonialWriterImageNameTypeContainer">
                            <div className='testimonialWriterImage'>
                                <img src={testimonialImage1} alt={`${item.name}${item.id}`} />
                            </div>
                            <div className='testimonialWriterName'>
                                <h5>{item.name}</h5>
                                <p>{item.type}</p>
                            </div>
                        </div>
                        <div className='starRating'>
                            <img src={testimonialStarRating} alt="star1" />
                            <img src={testimonialStarRating} alt="star2" />
                            <img src={testimonialStarRating} alt="star3" />
                            <img src={testimonialStarRating} alt="star4" />
                            <img src={testimonialStarRating} alt="star5" />
                        </div>
                    </div>
                </div>
                )}

        </div>
    </div>
  )
}

export default Testimonials