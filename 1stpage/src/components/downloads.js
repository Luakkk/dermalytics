"use client"; // Add this directive at the top

import React from 'react';
const Download = () => (
    <section className="download">
      <h2>Get the App</h2>
      <p>Available on the App Store and Google Play.</p>
      <button>Download Now</button>
      <style jsx>{`
        .download {
          padding: 60px 20px;
          text-align: center;
        }
      `}</style>
    </section>
  );
  
  export default Download;
  