import { useState } from "react";

const Accordion = ({ question, answer, customClass,buttonClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${customClass}`}>
      <button 
      className={`accordion-header ${buttonClass}`} 
      onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span>
          {(() => {
            if (isOpen) return "   ▲"; 
            else return "    >";
          })()}
        </span>
      </button>
      {isOpen && <div className="accordion-content">{answer}</div>}
    </div>
  );
};

export default Accordion;
