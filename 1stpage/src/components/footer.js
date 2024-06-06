import Link from 'next/link';

const Footer = () => (
  <footer>
    <div className="footer-links">
      <Link href="/public">Home</Link>
      <Link href="/privacy">Privacy Policy</Link>
      <Link href="/terms">Terms of Service</Link>
      <Link href="/help">Help Center</Link>
    </div>
    <div className="social-media">
      <a href="https://facebook.com">Facebook</a>
      <a href="https://instagram.com">Instagram</a>
      <a href="https://twitter.com">Twitter</a>
    </div>
    <div className="newsletter">
      <input type="email" placeholder="Your Email" />
      <button>Subscribe</button>
    </div>
    <style jsx>{`
      footer {
        padding: 20px;
        background: #333;
        color: #fff;
        display: flex;
        justify-content: space-between;
      }
      .footer-links, .social-media {
        display: flex;
        gap: 20px;
      }
    `}</style>
  </footer>
);

export default Footer;
