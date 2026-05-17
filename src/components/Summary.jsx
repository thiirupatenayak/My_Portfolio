import React from 'react';
import './Summary.css';

const Summary = () => {
  return (
    <section className="summary container animate-fade-in delay-300">
      <div className="section-header">
        <h2 className="section-title text-gradient">Professional Summary</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="summary-content glass-panel">
        <p>
          <strong>Fraud Detection and Investigations Specialist</strong> with over <strong>3.5 years of experience</strong> in Regulatory Risk and Compliance. I excel at breaking down complex training methods for corporate training and adult learning to ensure effective training development and delivery.
        </p>
        <p>
          I specialize in 360-degree reviews for <strong>ATO, ID Theft, and First-Party Fraud</strong> in GCP. Driven by curiosity and a learning mindset, I analyze complex training materials and simplify them, integrating AI into training processes. I have a proven track record in conducting end-to-end training sessions through various methodologies.
        </p>
        <p>
          I also excel in performing <strong>root cause analysis (RCA)</strong> and providing actionable client recommendations that mitigate risk and drive commercial value in fast-paced environments.
        </p>
      </div>
    </section>
  );
};

export default Summary;
