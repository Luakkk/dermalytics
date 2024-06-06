"use client";
import React from 'react';

const Header = () => (
  <header>
    <nav>
      <div className="logo">BeautyCheck</div>
      <ul>
        <li><Link href="/public">Home</Link></li>
        <li><Link href="/features">Features</Link></li>
        <li><Link href="/community">Community</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background: #fff;
      }
      nav ul {
        list-style: none;
        display: flex;
        gap: 20px;
      }
    `}</style>
  </header>
);

export default Header;
