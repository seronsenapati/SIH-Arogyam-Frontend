# Arogyam - Ayurveda Healthcare Platform

A comprehensive healthcare platform built with modern web technologies, providing Ayurvedic consultation services, patient management, and doctor scheduling.

## Features

- Patient registration and authentication
- Doctor and consultant dashboards
- Dosha consultation and diagnosis
- Appointment scheduling system
- Patient recovery tracking
- Responsive design with Tailwind CSS
- Component-based architecture with React

## Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- Radix UI Components
- Lucide React Icons
- Vite (Build tool)
- React Router DOM

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd SIH-Arogyam-Frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:3000

### Building for Production

To create a production build:
```bash
npm run build
```

The build files will be output to the `dist` directory.

### Previewing Production Build

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
SIH-Arogyam-Frontend/
├── src/                 
│   ├── components/      
│   │   ├── ui/          # Reusable UI components
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Project dependencies and scripts
```

## Key Components

### Authentication & Registration
- LoginPage.jsx
- SignupPage.jsx
- RegistrationPage.jsx
- PatientAuthPage.jsx
- DoctorAuthPage.jsx
- ConsultantAuthPage.jsx

### Dashboards
- PatientDashboard.jsx
- DoctorDashboard.jsx
- ConsultantDashboard.jsx

### User Management
- PatientAccount.jsx
- DoctorAccount.jsx

### Healthcare Features
- ConsultDoshaPage.jsx
- DiagnosisPage.jsx
- AppointmentScheduler.jsx
- PatientRecoveryGraph.jsx

### General Pages
- HomePage.jsx
- AboutUsPage.jsx
- BlogPage.jsx
- ContactUsPage.jsx

## Backend Integration

The frontend is configured to connect to the backend at https://sih-arogyam-backend.onrender.com with proper proxy settings in vite.config.js.

## Deployment

The frontend can be deployed to any static hosting service. The build process creates optimized assets in the `dist` directory.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License.