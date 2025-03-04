import React from "react";

const Step = ({ step, formData, setFormData }) => {
  return (
    <div id={`step${step}`}>
      {step === 1 && (
        <>
          <label>First Name:</label>
          <input id="first_name" value={formData.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} />
          <label>Last Name:</label>
          <input id="last_name" value={formData.last_name} onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} />
        </>
      )}
      {step === 2 && (
        <>
          <label>Car Model:</label>
          <input id="model" value={formData.model} onChange={(e) => setFormData({ ...formData, model: e.target.value })} />
          <label>Car Price:</label>
          <input id="car_price" value={formData.car_price} onChange={(e) => setFormData({ ...formData, car_price: e.target.value })} />
        </>
      )}
      {step === 3 && (
        <>
          <label>Card Info:</label>
          <input id="card_info" value={formData.card_info} onChange={(e) => setFormData({ ...formData, card_info: e.target.value })} />
          <label>Expiry Date:</label>
          <input id="expiry_date" value={formData.expiry_date} onChange={(e) => setFormData({ ...formData, expiry_date: e.target.value })} />
        </>
      )}
    </div>
  );
};

export default Step;
