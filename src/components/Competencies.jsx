import React from 'react';
import './Competencies.css';
import { FaShieldAlt, FaSearch, FaTools, FaChartLine, FaFileAlt } from 'react-icons/fa';

const competencyData = [
  {
    title: "Fraud Detection",
    icon: <FaShieldAlt />,
    skills: ["ATO", "PTO", "ID Theft", "First-Party Fraud", "Cookie Theft", "Session Hijacking", "Transaction Monitoring"]
  },
  {
    title: "Investigation Techniques",
    icon: <FaSearch />,
    skills: ["360-Degree Reviews", "Behavioral Pattern Analysis", "Signal Tracking (IP, Device, OS)", "Root Cause Analysis (RCA)"]
  },
  {
    title: "Tools & Analytics",
    icon: <FaTools />,
    skills: ["SQL (Query Design, Trend Analysis)", "Excel (Pivot Tables, VLOOKUP, Dashboards)", "Spreadsheet Automation", "LLM AI Validation"]
  },
  {
    title: "Risk Mitigation",
    icon: <FaChartLine />,
    skills: ["Manual Action Suspension", "Policy Adjudication", "Client Advisory", "SAR Support", "Control Enhancement"]
  },
  {
    title: "Reporting & Doc",
    icon: <FaFileAlt />,
    skills: ["MI KI Reporting", "Fraud Pattern Documentation", "Stakeholder Communication", "Process Improvement"]
  }
];

const Competencies = () => {
  return (
    <section className="competencies container animate-fade-in delay-400">
      <div className="section-header">
        <h2 className="section-title text-gradient">Core Competencies</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="competencies-grid">
        {competencyData.map((comp, index) => (
          <div className="competency-card glass-panel" key={index}>
            <div className="card-icon">{comp.icon}</div>
            <h3 className="card-title">{comp.title}</h3>
            <ul className="card-skills">
              {comp.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Competencies;
