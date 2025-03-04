import React from 'react';

const Step = ({ currentStep, formData, handleChange, onNext, onPrev, onSubmit }) => {
  const renderInputs = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div>
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                value={formData.first_name || ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                value={formData.last_name || ''}
                onChange={handleChange}
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div>
              <label htmlFor="model">Car Model</label>
              <input
                type="text"
                id="model"
                value={formData.model || ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="car_price">Car Price</label>
              <input
                type="number"
                id="car_price"
                value={formData.car_price || ''}
                onChange={handleChange}
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div>
              <label htmlFor="card_info">Card Information</label>
              <input
                type="text"
                id="card_info"
                value={formData.card_info || ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="expiry_date">Expiry Date</label>
              <input
                type="month"
                id="expiry_date"
                value={formData.expiry_date || ''}
                onChange={handleChange}
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="step-form">
      <div className="step-header">Step {currentStep}</div>
      <div className="form-inputs">{renderInputs()}</div>
      <div className="form-actions">
        {currentStep !== 1 && (
          <button type="button" onClick={onPrev}>
            Previous
          </button>
        )}
        {currentStep !== 3 ? (
          <button type="button" onClick={onNext}>
            Next
          </button>
        ) : (
          <button type="button" onClick={onSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Step;