import { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import TestimonailUser from "./TestimonialUser.jsx/TestimonailUser";

const Testimonials = () => {
    const slide = useRef();
    let translateX = 0;


    function handleForwardSlide () {
        if(translateX > -50) {
            translateX -= 25
        }
        slide.current.style.transform = `translateX(${translateX}%)`;
    }

    function handleBackwardSlide () {
        if(translateX < 0) {
            translateX += 25
        }
        slide.current.style.transform = `translateX(${translateX}%)`;

    }



  return (
    <div className="testimonials" id="testimonial">
      <img src={next_icon} alt="" className="next-btn" onClick={handleForwardSlide}/>
      <img src={back_icon} alt="" className="back-btn" onClick={handleBackwardSlide}/>
      <div className="slider">
        <ul ref={slide}>
          <TestimonailUser
            img={user_1}
            name='Andrew Johns'
            company='Microsoft, USA'
            description="Choosing to pursue my degree at Edusity was one of the best decisions
            I've ever made. The supportive community, state-of-the-art facilities,
            and commitment to academic excellence have truly exceeded my
            expectations."

          />
          <TestimonailUser
            img={user_2}
            name='Preetam Kumar'
            company='Microsoft, USA'
            description="Choosing to pursue my degree at Edusity was one of the best decisions
            I've ever made. The supportive community, state-of-the-art facilities,
            and commitment to academic excellence have truly exceeded my
            expectations."

          />
          <TestimonailUser
            img={user_3}
            name='Kalie'
            company='Google, London'
            description="Choosing to pursue my degree at Edusity was one of the best decisions
            I've ever made. The supportive community, state-of-the-art facilities,
            and commitment to academic excellence have truly exceeded my
            expectations."

          />
          <TestimonailUser
            img={user_4}
            name='Sam curran'
            company='Acenture, USA'
            description="Choosing to pursue my degree at Edusity was one of the best decisions
            I've ever made. The supportive community, state-of-the-art facilities,
            and commitment to academic excellence have truly exceeded my
            expectations."

          />
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
