import React, { useState } from 'react'; 
import Step from './Step';

function App() {


  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="App">
      <Step
        currentStep={currentStep}
        formData={formData}
        handleChange={handleChange}
        onNext={nextStep}
        onPrev={prevStep}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;