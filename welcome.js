<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to SlopBlocker.ai</title>
  <link rel="stylesheet" href="welcome.css">
</head>
<body>
  <div class="welcome-container">
    <div class="welcome-card">
      <div class="welcome-icon"></div>
      <h1 class="welcome-title">Welcome to SlopBlocker.ai</h1>
      <p class="welcome-subtitle">Your AI-powered productivity guardian</p>

      <div class="loading-section">
        <div class="loading-animation">
          <div class="loading-spinner"></div>
        </div>
        <p class="loading-text">Setting up AI models...</p>
        <p class="loading-info">This takes about <strong>1 minute</strong> on first load. Feel free to navigate off this page!</p>
      </div>

      <div class="features-section">
        <h2>What You Get:</h2>
        <ul class="features-list">
          <li>
            <span class="feature-icon">🎯</span>
            <span>AI-powered content detection</span>
          </li>
          <li>
            <span class="feature-icon">⏸️</span>
            <span>Customizable blocking rules</span>
          </li>
          <li>
            <span class="feature-icon">📊</span>
            <span>Track your productivity stats</span>
          </li>
          <li>
            <span class="feature-icon">🌙</span>
            <span>Dark mode support</span>
          </li>
          <li>
            <span class="feature-icon">⚡</span>
            <span>Focus mode for extra strictness</span>
          </li>
        </ul>
      </div>

      <div class="info-section">
        <h3>How It Works:</h3>
        <p>SlopBlocker.ai uses machine learning to analyze YouTube videos and automatically blocks unproductive content based on your preferences. You can also create custom blacklists for channels and keywords.</p>
      </div>

      <button class="continue-btn" id="continueBtn">Get Started</button>

      <p class="note-text">You can access this welcome page anytime from the extension's options.</p>
    </div>
  </div>

  <script src="welcome.js"></script>
</body>
</html>
