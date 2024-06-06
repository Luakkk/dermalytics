"use client"; // Add this directive at the top

import React from 'react';const HowItWorks = () => (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <img src="/upload-photo-icon.png" alt="Upload Photo" />
          <p>Upload a Photo</p>
        </div>
        <div className="step">
          <img src="/skin-analysis-icon.png" alt="Skin Analysis" />
          <p>Get a Skin Analysis</p>
        </div>
        <div className="step">
          <img src="/recommendations-icon.png" alt="Recommendations" />
          <p>Receive Personalized Recommendations</p>
        </div>
        <div className="step">
          <img src="/progress-tracking-icon.png" alt="Track Progress" />
          <p>Track Your Progress</p>
        </div>
      </div>
      <style jsx>{`
        .how-it-works {
          padding: 60px 20px;
        }
        .steps {
          display: flex;
          gap: 20px;
          justify-content: center;
        }
        .step {
          text-align: center;
        }
      `}</style>
    </section>
  );
  
  export default HowItWorks;
  