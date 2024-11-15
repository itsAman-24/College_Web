import { useState } from "react";
import "./Form.css";
import white_arrow from "../../../assets/white-arrow.png";

const Form = () => {

  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6761a767-487d-459b-8cb5-a92997f69285");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>Your name</label>
        <input type="text" name="name" placeholder="Enter your name" required />
        <label>Phone number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your mobile number"
          required
        />
        <label>Write your message here</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Enter your message"
          required
        ></textarea>
        <button type="submit" className="btn dark-btn">
          Submit now <img src={white_arrow} alt="" />
        </button>
      </form>
      <span>{result}</span>
    </>
  )
};

export default Form;
