import React from 'react';
const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Step 1: User Information</h2>
          <input
            type="text"
            id="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <input
            type="text"
            id="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Step 2: Car Details</h2>
          <input
            type="text"
            id="model"
            placeholder="Car Model"
            value={formData.model}
            onChange={handleChange}
          />
          <input
            type="number"
            id="car_price"
            placeholder="Car Price"
            value={formData.car_price}
            onChange={handleChange}
          />
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Step 3: Payment Details</h2>
          <input
            type="text"
            id="card_info"
            placeholder="Card Information"
            value={formData.card_info}
            onChange={handleChange}
          />
          <input
            type="text"
            id="expiry_date"
            placeholder="Expiry Date"
            value={formData.expiry_date}
            onChange={handleChange}
          />
        </div>
      )}
      <div>
        {step > 1 && <button onClick={prevStep}>Previous</button>}
        {step < 3 && <button onClick={nextStep}>Next</button>}
        {step === 3 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
};

export default Step;