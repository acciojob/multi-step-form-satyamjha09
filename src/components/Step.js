import React from 'react'

const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
  return (
    <div className="p-6 border rounded shadow-lg max-w-md mx-auto">
    {step === 1 && (
      <>
        <h2 className="text-xl font-bold mb-4">Step 1: Personal Info</h2>
        <input type="text" id="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
        <input type="text" id="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
        <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
      </>
    )}
    {step === 2 && (
      <>
        <h2 className="text-xl font-bold mb-4">Step 2: Car Details</h2>
        <input type="text" id="model" placeholder="Car Model" value={formData.model} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
        <input type="number" id="car_price" placeholder="Car Price" value={formData.car_price} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
        <div className="flex justify-between">
          <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded">Previous</button>
          <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
        </div>
      </>
    )}
    {step === 3 && (
      <>
        <h2 className="text-xl font-bold mb-4">Step 3: Payment Info</h2>
        <input type="text" id="card_info" placeholder="Card Info" value={formData.card_info} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
        <input type="text" id="expiry_date" placeholder="Expiry Date" value={formData.expiry_date} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
        <div className="flex justify-between">
          <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded">Previous</button>
          <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
        </div>
      </>
    )}
  </div>
  )
}

export default Step