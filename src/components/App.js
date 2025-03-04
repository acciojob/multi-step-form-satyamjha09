import React, { useState } from "react";
import Step from "./Step";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  });

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <div>
      {currentStep === 1 && (
        <div id="step1">
          <input id="first_name" value={formData.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} />
          <input id="last_name" value={formData.last_name} onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} />
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {currentStep === 2 && (
        <div id="step2">
          <input id="model" value={formData.model} onChange={(e) => setFormData({ ...formData, model: e.target.value })} />
          <input id="car_price" value={formData.car_price} onChange={(e) => setFormData({ ...formData, car_price: e.target.value })} />
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {currentStep === 3 && (
        <div id="step3">
          <input id="card_info" value={formData.card_info} onChange={(e) => setFormData({ ...formData, card_info: e.target.value })} />
          <input id="expiry_date" value={formData.expiry_date} onChange={(e) => setFormData({ ...formData, expiry_date: e.target.value })} />
          <button onClick={prevStep}>Previous</button>
          <button>Submit</button>
        </div>
      )}
    </div>
  );
}

export default MultiStepForm;
