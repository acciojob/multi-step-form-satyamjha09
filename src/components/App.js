import React, { useState } from "react";
import Step from "./Step";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div>
      {step === 1 && <Step step={1} formData={formData} setFormData={setFormData} />}
      {step === 2 && <Step step={2} formData={formData} setFormData={setFormData} />}
      {step === 3 && <Step step={3} formData={formData} setFormData={setFormData} />}
      
      {step > 1 && <button onClick={prevStep}>Previous</button>}
      {step < 3 ? <button onClick={nextStep}>Next</button> : <button type="submit">Submit</button>}
    </div>
  );
};

export default MultiStepForm;
