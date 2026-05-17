import React from 'react';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Competencies from './components/Competencies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Summary />
      <Competencies />
      <Contact />
      
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: 'auto' }}>
        <p>© {new Date().getFullYear()} Thiirupate Nayak Gugulothu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
