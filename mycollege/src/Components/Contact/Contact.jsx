import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import Form from "./Form/Form";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact-col">
          <h3>
            Send us a message <img src={msg_icon} alt="" />
          </h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul>
            <li>
              <img src={mail_icon} alt="" />
              demopandey0@gmail.com
            </li>
            <li>
              <img src={phone_icon} alt="" />
              12345678
            </li>
            <li>
              <img src={location_icon} alt="" />
              Chandigarh, Punjab
            </li>
          </ul>
        </div>
        <div className="form-section">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Contact;
