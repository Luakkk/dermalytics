
"use client"; // Add this directive at the top

import React from 'react';
const Testimonials = () => (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial-cards">
        <div className="card">
          <p>"BeautyCheck transformed my skincare routine!"</p>
          <p>- Sarah</p>
        </div>
        <div className="card">
          <p>"Finally, advice that actually works for my skin."</p>
          <p>- John</p>
        </div>
        <div className="card">
          <p>"I love seeing my skin’s progress every week."</p>
          <p>- Emma</p>
        </div>
      </div>
      <style jsx>{`
        .testimonials {
          padding: 60px 20px;
        }
        .testimonial-cards {
          display: flex;
          gap: 20px;
          justify-content: center;
        }
        .card {
          padding: 20px;
          background: #fff;
          border: 1px solid #eee;
          text-align: center;
        }
      `}</style>
    </section>
  );
  
  export default Testimonials;
  