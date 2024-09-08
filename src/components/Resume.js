import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import './Resume.css';

function Resume() {
  const [isEyeBlinking, setIsEyeBlinking] = useState(false);

  const handleResumeClick = () => {
    window.open('https://resume-2024.tiiny.site', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="resume-container">
      <div className="resume-card">
        <div className="card-content">
          <div className="text-content">
            <span className="year">2024 CV</span>
            <span className="title">RESUME</span>
          </div>
          <div className="icons">
          <div className="icon-wrapper" onClick={handleResumeClick} title="View Resume">
              <ExternalLink size={24} />
            </div>
            <div 
              className="icon-wrapper" 
              onMouseEnter={() => setIsEyeBlinking(true)}
              onMouseLeave={() => setIsEyeBlinking(false)}
            >
              <Eye size={24} onClick={ handleResumeClick} className={isEyeBlinking ? 'blink' : ''} />
            </div>
          </div>
        </div>
      </div>
      {/* <style jsx>{`

      `}</style> */}
    </div>
  );
}

export default Resume;