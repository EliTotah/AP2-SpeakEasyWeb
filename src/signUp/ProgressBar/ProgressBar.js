import './ProgressBar.css';

function ProgressBar({ currentStep, totalSteps }) {
  const steps = [
    { label: "Name", icon: "1" },
    { label: "Contact", icon: "2" },
    { label: "Gender", icon: "3" },
    { label: "Submit", icon: "4" },
  ];

  return (
    <div className="progressBar">
      {steps.map((step, index) => (
        <div className={`step ${index < currentStep ? "completed" : ""} ${index === currentStep ? "active" : ""}`} key={step.label}>
          <p className={index <= currentStep ? "active" : ""}>{step.label}</p>
          <div className={`bullet ${index <= currentStep ? "active" : ""}`}>
            <span>{step.icon}</span>
          </div>
          <div className={`check ${index === currentStep ? "active" : ""}`}>
            <i className="fas fa-check"></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
