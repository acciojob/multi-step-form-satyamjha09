
import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const App = () => {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData , [e.target.id]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev -1);

  const handleSubmit = () => {
    console.log("Form Submitted", formData);
  }

  return (
    <div>
        <Step
        step={step}
        formData={formData}
        handleChange={handleChange}
        nextStep={nextStep}
        prevStep={prevStep}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default App
