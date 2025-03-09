import React from "react";

function Step({ step, formData, onChange, onNext, onPrevious, onSubmit }) {
  return (
    <div>
      {/* Step 1 */}
      <div id="step1" style={{ display: step === 1 ? "block" : "none" }}>
        <h2>Step 1: Personal Information</h2>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"  // ✅ Use name instead of id
            value={formData.first_name}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"  // ✅ Use name instead of id
            value={formData.last_name}
            onChange={onChange}
          />
        </label>
        <br />
        <button type="button" onClick={onNext}>Next</button>
      </div>

      {/* Step 2 */}
      <div id="step2" style={{ display: step === 2 ? "block" : "none" }}>
        <h2>Step 2: Car Information</h2>
        <label>
          Car Model:
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Car Price:
          <input
            type="text"
            name="car_price"
            value={formData.car_price}
            onChange={onChange}
          />
        </label>
        <br />
        <button type="button" onClick={onPrevious}>Previous</button>
        <button type="button" onClick={onNext}>Next</button>
      </div>

      {/* Step 3 */}
      <div id="step3" style={{ display: step === 3 ? "block" : "none" }}>
        <h2>Step 3: Payment Information</h2>
        <label>
          Card Information:
          <input
            type="text"
            name="card_info"
            value={formData.card_info}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Expiry Date:
          <input
            type="text"
            name="expiry_date" 
            value={formData.expiry_date}
            onChange={onChange}
          />
        </label>
        <br />
        <button type="button" onClick={onPrevious}>Previous</button>
        <button type="button" onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Step;
