import React from "react";

const Step3 = ({ formData, prevStep }) => {
  return (
    <div id="step3" className="form-container">
      <h2>Step 3: Summary</h2>
      <p><strong>Name:</strong> {formData.first_name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <button className="button button-prev" onClick={prevStep}>Back</button>
      <button className="button button-submit">Submit</button>
    </div>
  );
};

export default Step3;
