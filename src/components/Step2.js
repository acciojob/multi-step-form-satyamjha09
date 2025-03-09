import React from "react";

const Step2 = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div id="step2" className="form-container">
      <h2>Step 2: Contact Info</h2>
      <input
        id="email"
        className="input-field"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <button className="button button-prev" onClick={prevStep}>Back</button>
      <button className="button button-next" onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step2;
