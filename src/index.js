const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>JDSec-Academy</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #000;
          color: #fff;
        }

        header {
          background: linear-gradient(to right, #0a1b4f, #020617);
          padding: 20px;
          text-align: center;
          font-size: 28px;
          font-weight: bold;
          color: #4ea8ff;
          border-bottom: 1px solid #1e3a8a;
          letter-spacing: 1px;
        }

        footer {
          background: linear-gradient(to bottom, #0a1b4f, #000);
          padding: 30px 20px;
          text-align: center;
          border-top: 1px solid #1e3a8a;
          margin-top: 50px;
          color: #ccc;
          font-size: 14px;
        }

        .container {
          max-width: 900px;
          margin: 60px auto;
          padding: 20px;
          text-align: center;
        }

        h1 {
          font-size: 42px;
          color: #4ea8ff;
          margin-bottom: 20px;
        }

        p {
          font-size: 20px;
          color: #ddd;
          line-height: 1.6;
        }

        .contact-section {
          margin-top: 50px;
          padding: 25px;
          background: rgba(30, 58, 138, 0.15);
          border-radius: 12px;
          display: inline-block;
          text-align: left;
        }

        .contact-section h2 {
          color: #4ea8ff;
          font-size: 24px;
          margin-bottom: 15px;
          text-align: center;
        }

        .contact-section a {
          color: #4ea8ff;
          text-decoration: none;
        }

        .contact-item {
          margin: 8px 0;
          font-size: 16px;
        }

        .contact-item strong {
          color: #fff;
        }

        .contact-item span {
          color: #ccc;
        }

        .social-icons {
          margin-top: 20px;
          text-align: center;
        }

        .social-icons a {
          display: inline-block;
          margin: 0 10px;
          text-decoration: none;
          color: #4ea8ff;
          font-size: 22px;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .social-icons a:hover {
          color: #66b3ff;
          transform: scale(1.2);
        }

        .footer-links {
          margin-top: 10px;
        }

        .footer-links a {
          color: #4ea8ff;
          margin: 0 8px;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: #66b3ff;
        }
      </style>
    </head>
    <body>

      <header>
        JDSec-Academy
      </header>

      <div class="container">
        <h1>Welcome to JDSec-Academy</h1>
        <p>
          Your journey to mastering cybersecurity starts here.<br>
          Learn, practice, and implement a fully matured, enterprise-level
          <strong style="color:#4ea8ff;">DevSecOps Pipeline</strong>
          with real-world, hands-on projects designed by industry experts.
        </p>

        <div class="contact-section">
          <h2>Contact Information</h2>
          <div class="contact-item">
            <strong>Phone:</strong> <span><a href="tel:+919945654640">+91 99456 54640</a></span>
          </div>
          <div class="contact-item">
            <strong>WhatsApp:</strong> <span><a href="https://wa.me/919945654640" target="_blank">Chat on WhatsApp</a></span>
          </div>
          <div class="contact-item">
            <strong>Email:</strong> <span><a href="mailto:help@jdsecacademy.com">help@jdsecacademy.com</a></span>
          </div>
          <div class="contact-item">
            <strong>Website:</strong> <span><a href="https://jdsecacademy.com" target="_blank">www.jdsecacademy.com</a></span>
          </div>

          <div class="social-icons">
            <a href="https://facebook.com/jdsecacademy" target="_blank" aria-label="Facebook">🌐</a>
            <a href="https://instagram.com/jdsecacademy" target="_blank" aria-label="Instagram">📸</a>
            <a href="https://twitter.com/jdsecacademy" target="_blank" aria-label="Twitter">🐦</a>
            <a href="https://linkedin.com/company/jdsecacademy" target="_blank" aria-label="LinkedIn">💼</a>
          </div>
        </div>
      </div>

      <footer>
        © ${new Date().getFullYear()} JDSec-Academy — All Rights Reserved.
        <div class="footer-links">
          <a href="/terms">Terms & Conditions</a> |
          <a href="/privacy">Privacy Policy</a>
        </div>
      </footer>

    </body>
    </html>
  `);
});

server.listen(8080, () => {
  console.log("✅ Server running on http://localhost:8080");
});
