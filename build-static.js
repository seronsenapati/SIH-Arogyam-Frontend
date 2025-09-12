const fs = require('fs');
const path = require('path');

// Create build directory
const buildDir = path.join(__dirname, 'dist');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir);
}

// Copy public assets
const publicDir = path.join(__dirname, 'public');
const publicFiles = fs.readdirSync(publicDir);
publicFiles.forEach(file => {
  if (file !== 'index.html') {
    fs.copyFileSync(
      path.join(publicDir, file),
      path.join(buildDir, file)
    );
  }
});

// Copy src assets
const srcAssetsDir = path.join(__dirname, 'src', 'assets');
const srcAssetsFiles = fs.readdirSync(srcAssetsDir);
srcAssetsFiles.forEach(file => {
  fs.copyFileSync(
    path.join(srcAssetsDir, file),
    path.join(buildDir, file)
  );
});

// Create a simple static HTML file with all CSS inlined
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Arogyam - Ayurvedic Telehealth Platform" />
    <title>Arogyam - Ayurvedic Telehealth</title>
    <style>
      /* Reset CSS */
      *, *::before, *::after {
        box-sizing: border-box;
      }
      
      * {
        margin: 0;
      }
      
      html, body {
        height: 100%;
      }
      
      body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
      }
      
      img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
      }
      
      input, button, textarea, select {
        font: inherit;
      }
      
      p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
      }
      
      #root, #__next {
        isolation: isolate;
      }
      
      /* Glassmorphism effect variables */
      :root {
        --glass-bg: rgba(255, 255, 255, 0.15);
        --glass-border: rgba(255, 255, 255, 0.2);
        --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        --primary-green: #4CAF50;
        --light-green: #E8F5E9;
        --dark-green: #388E3C;
        --accent-gold: #FFD700;
        --text-dark: #212121;
        --text-light: #FFFFFF;
      }
      
      /* Glassmorphism effect class */
      .glassmorphism {
        background: var(--glass-bg);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid var(--glass-border);
        box-shadow: var(--glass-shadow);
        border-radius: 20px;
      }
      
      /* Rounded buttons */
      .rounded-button {
        border-radius: 50px;
        padding: 12px 24px;
        border: none;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      
      .rounded-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      
      .rounded-button:active {
        transform: translateY(0);
      }
      
      .rounded-button.primary {
        background: linear-gradient(135deg, var(--primary-green), var(--dark-green));
        color: var(--text-light);
      }
      
      .rounded-button.secondary {
        background: var(--light-green);
        color: var(--dark-green);
      }
      
      .rounded-button.accent {
        background: linear-gradient(135deg, var(--accent-gold), #FFA000);
        color: var(--text-dark);
      }
      
      .small {
        padding: 8px 16px;
        font-size: 0.9rem;
      }
      
      /* Main styles */
      body {
        font-family: 'Poppins', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: linear-gradient(135deg, #E8F5E9, #C8E6C9);
        background-size: 400% 400%;
        animation: gradientBG 15s ease infinite;
        min-height: 100vh;
        padding: 20px;
      }
      
      @keyframes gradientBG {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
      }
      
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 40px;
        margin: 20px;
        position: sticky;
        top: 0;
        z-index: 100;
      }
      
      .logo-container {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .logo-image {
        height: 40px;
        width: 40px;
      }
      
      .brand-name {
        font-family: 'Playfair Display', serif;
        font-size: 28px;
        font-weight: 700;
        color: var(--dark-green);
        margin: 0;
      }
      
      nav {
        display: flex;
        gap: 30px;
      }
      
      .nav-link {
        text-decoration: none;
        color: var(--text-dark);
        font-weight: 500;
        font-size: 16px;
        transition: color 0.3s ease;
      }
      
      .nav-link:hover {
        color: var(--primary-green);
      }
      
      .auth-buttons {
        display: flex;
        gap: 15px;
      }
      
      .hero-section {
        background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('./hero-bg.svg');
        background-size: cover;
        background-position: center;
        height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        margin-bottom: 40px;
      }
      
      .hero-content {
        text-align: center;
        max-width: 800px;
        padding: 20px;
      }
      
      .hero-title {
        font-family: 'Playfair Display', serif;
        font-size: 3.5rem;
        font-weight: 700;
        color: var(--text-light);
        margin-bottom: 20px;
        line-height: 1.2;
      }
      
      .hero-subtitle {
        font-size: 1.5rem;
        color: var(--text-light);
        margin-bottom: 30px;
        line-height: 1.6;
      }
      
      .features-section {
        margin-bottom: 60px;
      }
      
      .section-title {
        font-family: 'Playfair Display', serif;
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 40px;
        color: var(--dark-green);
      }
      
      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
      }
      
      .feature-card {
        padding: 30px;
        text-align: center;
        transition: transform 0.3s ease;
      }
      
      .feature-card:hover {
        transform: translateY(-10px);
      }
      
      .feature-icon {
        font-size: 3rem;
        margin-bottom: 20px;
      }
      
      .feature-title {
        font-size: 1.5rem;
        margin-bottom: 15px;
        color: var(--dark-green);
      }
      
      .feature-description {
        font-size: 1rem;
        line-height: 1.6;
        color: var(--text-dark);
      }
      
      footer {
        margin: 20px;
        padding: 30px 40px;
      }
      
      .footer-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 30px;
        margin-bottom: 30px;
      }
      
      .footer-section {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      
      .footer-logo {
        font-family: 'Playfair Display', serif;
        font-size: 24px;
        font-weight: 700;
        color: var(--dark-green);
        margin: 0;
      }
      
      .footer-text {
        font-size: 14px;
        line-height: 1.6;
        color: var(--text-dark);
        margin: 0;
      }
      
      .footer-title {
        font-size: 18px;
        font-weight: 600;
        color: var(--dark-green);
        margin: 0 0 10px 0;
      }
      
      .footer-link {
        text-decoration: none;
        color: var(--text-dark);
        font-size: 14px;
        transition: color 0.3s ease;
      }
      
      .footer-link:hover {
        color: var(--primary-green);
      }
      
      .contact-info p {
        margin: 5px 0;
        font-size: 14px;
        color: var(--text-dark);
      }
      
      .footer-bottom {
        border-top: 1px solid var(--glass-border);
        padding-top: 20px;
        text-align: center;
      }
      
      .footer-bottom p {
        margin: 0;
        font-size: 14px;
        color: var(--text-dark);
      }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div id="root">
      <div class="container">
        <header class="glassmorphism">
          <div class="logo-container">
            <img src="./logo.svg" alt="Arogyam Logo" class="logo-image" />
            <h1 class="brand-name">Arogyam</h1>
          </div>
          <nav>
            <a href="/" class="nav-link">Home</a>
            <a href="/about" class="nav-link">About</a>
            <a href="/services" class="nav-link">Services</a>
            <a href="/herbs" class="nav-link">Herbs</a>
            <a href="/blog" class="nav-link">Blog</a>
            <a href="/contact" class="nav-link">Contact</a>
          </nav>
          <div class="auth-buttons">
            <button class="rounded-button secondary">
              <a href="/login" style="text-decoration: none; color: inherit;">Login</a>
            </button>
            <button class="rounded-button primary">
              <a href="/register" style="text-decoration: none; color: inherit;">Register</a>
            </button>
          </div>
        </header>
        
        <section class="hero-section">
          <div class="hero-content">
            <h1 class="hero-title">Experience the Power of Ayurveda</h1>
            <p class="hero-subtitle">
              Connect with certified Ayurvedic practitioners for personalized health solutions
            </p>
            <button class="rounded-button primary">
              <a href="/appointments" style="text-decoration: none; color: inherit; font-weight: 600;">Book Consultation</a>
            </button>
          </div>
        </section>
        
        <section class="features-section">
          <h2 class="section-title">Our Services</h2>
          <div class="features-grid">
            <div class="feature-card glassmorphism">
              <div class="feature-icon">🌿</div>
              <h3 class="feature-title">Expert Consultation</h3>
              <p class="feature-description">
                Connect with certified Ayurvedic doctors for personalized health advice
              </p>
            </div>
            
            <div class="feature-card glassmorphism">
              <div class="feature-icon">💊</div>
              <h3 class="feature-title">Herbal Remedies</h3>
              <p class="feature-description">
                Get authentic Ayurvedic medicines and supplements delivered to your doorstep
              </p>
            </div>
            
            <div class="feature-card glassmorphism">
              <div class="feature-icon">🧘</div>
              <h3 class="feature-title">Yoga & Meditation</h3>
              <p class="feature-description">
                Learn traditional yoga and meditation techniques for holistic wellness
              </p>
            </div>
          </div>
        </section>
        
        <footer class="glassmorphism">
          <div class="footer-content">
            <div class="footer-section">
              <h2 class="footer-logo">Arogyam</h2>
              <p class="footer-text">
                Bringing the ancient wisdom of Ayurveda to modern healthcare through technology.
              </p>
            </div>
            
            <div class="footer-section">
              <h3 class="footer-title">Quick Links</h3>
              <a href="/" class="footer-link">Home</a>
              <a href="/about" class="footer-link">About Us</a>
              <a href="/services" class="footer-link">Services</a>
              <a href="/herbs" class="footer-link">Ayurvedic Herbs</a>
              <a href="/blog" class="footer-link">Blog</a>
              <a href="/contact" class="footer-link">Contact</a>
            </div>
            
            <div class="footer-section">
              <h3 class="footer-title">Services</h3>
              <a href="/services" class="footer-link">Consultation</a>
              <a href="/services" class="footer-link">Herbal Remedies</a>
              <a href="/services" class="footer-link">Diet Plans</a>
              <a href="/services" class="footer-link">Yoga Therapy</a>
            </div>
            
            <div class="footer-section">
              <h3 class="footer-title">Contact Us</h3>
              <div class="contact-info">
                <p>Email: info@arogyam.com</p>
                <p>Phone: +91 9876543210</p>
                <p>Address: Ayurveda Health Center, Bangalore, India</p>
              </div>
            </div>
          </div>
          
          <div class="footer-bottom">
            <p>&copy; 2025 Arogyam. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(buildDir, 'index.html'), indexHtml);

console.log('Static build created successfully in the "dist" directory!');
console.log('You can deploy the contents of the "dist" folder to any static hosting service.');