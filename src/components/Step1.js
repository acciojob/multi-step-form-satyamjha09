import React from "react";

const Step1 = ({ formData, handleChange, nextStep }) => {
  return (
    <div id="step1" className="form-container">
      <h2>Step 1: User Info</h2>
      <input
        id="first_name"
        className="input-field"
        type="text"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleChange}
      />
      <button className="button button-next" onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step1;
