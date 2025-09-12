# Arogyam Frontend

This is the frontend for the Arogyam Ayurvedic Telehealth Platform, built with React.js and styled-components.

## Features

- **Glassmorphism Design**: Modern UI with glass-like transparency effects
- **Responsive Layout**: Works on all device sizes
- **Ayurvedic Theme**: Custom styling reflecting Ayurvedic principles
- **Multi-page Application**: Complete routing for all sections
- **Interactive Components**: Dynamic forms and user interfaces

## Project Structure

```
src/
├── assets/           # Images and SVG files
├── components/       # Reusable UI components
├── pages/            # Page components
└── App.js           # Main application component
```

## Pages

1. **Home** - Main landing page with hero section and features
2. **About** - Information about Arogyam and Ayurveda
3. **Services** - List of Ayurvedic services offered
4. **Herbs** - Information about Ayurvedic herbs and remedies
5. **Blog** - Health and wellness articles
6. **Contact** - Contact form and information
7. **Login/Register** - User authentication
8. **Dashboard** - User dashboard with appointments
9. **Appointment Booking** - Multi-step booking process

## Design Elements

- **Glassmorphism Effects**: Using CSS backdrop-filter for frosted glass appearance
- **Rounded Buttons**: Consistent button styling with hover effects
- **Ayurvedic Color Palette**: Green tones representing nature and wellness
- **Typography**: Playfair Display for headings, clean sans-serif for body text

## Installation

```bash
cd Frontend
npm install
```

## Environment Setup

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Edit the `.env` file and fill in your values

## Running the Application

```bash
cd Frontend
npm start
```

The application will be available at http://localhost:3000

## Building for Production

```bash
cd Frontend
npm run build
```

This will create a `build/` directory with the production-ready files.

## Technologies Used

- React.js
- React Router
- Styled Components
- CSS3 (Glassmorphism effects)
- JavaScript ES6+