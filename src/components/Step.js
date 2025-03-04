import React from 'react'

const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
  return (
    <div className="p-4 border rounded-md shadow-md max-w-md mx-auto">
    {step === 1 && (
      <div>
        <h2 className="text-xl font-bold mb-4">Step 1: Personal Info</h2>
        <input
          id="first_name"
          type="text"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          id="last_name"
          type="text"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
    )}
    {step === 2 && (
      <div>
        <h2 className="text-xl font-bold mb-4">Step 2: Car Details</h2>
        <input
          id="model"
          type="text"
          placeholder="Car Model"
          value={formData.model}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          id="car_price"
          type="number"
          placeholder="Car Price"
          value={formData.car_price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
    )}
    {step === 3 && (
      <div>
        <h2 className="text-xl font-bold mb-4">Step 3: Payment Info</h2>
        <input
          id="card_info"
          type="text"
          placeholder="Card Information"
          value={formData.card_info}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          id="expiry_date"
          type="text"
          placeholder="Expiry Date"
          value={formData.expiry_date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
    )}
    <div className="flex justify-between mt-4">
      {step > 1 && <button onClick={prevStep} className="p-2 bg-gray-300 rounded">Previous</button>}
      {step < 3 && <button onClick={nextStep} className="p-2 bg-blue-500 text-white rounded">Next</button>}
      {step === 3 && <button onClick={handleSubmit} className="p-2 bg-green-500 text-white rounded">Submit</button>}
    </div>
  </div>
  )
}

export default Step