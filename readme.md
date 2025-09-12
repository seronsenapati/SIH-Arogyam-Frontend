# Ayurveda Website Design - JavaScript Version

This is the complete JavaScript/JSX conversion of the original TypeScript/TSX frontend for the Ayurveda Website Design.

## Features

- Complete conversion from TypeScript/TSX to JavaScript/JSX
- All original functionality preserved
- Connection to backend at https://sih-arogyam-backend.onrender.com
- Google signup removed as requested
- Login and registration fixed and optimized for the backend
- Responsive design with Tailwind CSS
- All 24 components converted

## Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- Radix UI Components
- Lucide React Icons
- Vite (Build tool)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd frontend-js-complete
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
frontend-js-complete/
├── public/              # Static assets
├── src/                 # Source code
│   ├── components/      # React components
│   │   ├── ui/          # Radix UI components
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Project dependencies and scripts
```

## Key Components Converted

1. App.jsx (main application component)
2. Navigation.jsx
3. PatientNavigation.jsx
4. HomePage.jsx
5. RegistrationPage.jsx
6. PatientAuthPage.jsx
7. And 18 other components...

## Backend Integration

The frontend is configured to connect to the backend at https://sih-arogyam-backend.onrender.com with proper proxy settings in vite.config.js.

## Authentication

- Google signup has been removed as requested
- Login and registration forms are properly connected to the backend API
- User state is managed with React hooks and localStorage

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