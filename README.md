# PLP Task Manager

![Task Manager Screenshot](./screenshot.png) <!-- Add your screenshot here -->

A responsive task management application built with React, Tailwind CSS, and Vite that demonstrates modern frontend development practices.

## Features

✅ **Task Management**  
- Add, edit, and delete tasks  
- Mark tasks as complete/incomplete  
- Filter tasks (All/Active/Completed)  
- Persistent storage using localStorage  

✅ **API Integration**  
- Fetch and display todos from JSONPlaceholder  
- Search and pagination functionality  
- Loading and error states  

✅ **UI Components**  
- Custom Button component with 5 variants  
- Responsive Card layouts  
- Dark/Light mode toggle  
- Animated transitions  

✅ **Technical Implementation**  
- React hooks (useState, useEffect, useContext)  
- Custom hooks (useLocalStorage)  
- PropTypes validation  
- Tailwind CSS for utility-first styling  
- Vite for fast development  

## Installation

1. Clone the repository:
git clone https://github.com/shalatemtshweni/week-3-react-js-assignment.git
2. Install dependencies
npm install
3. Start development server
npm run dev

## Project structure
src/
├── components/
│   ├── Button.jsx       # Reusable button component
│   ├── Card.jsx         # Content container
│   ├── Navbar.jsx       # Navigation with dark mode toggle
│   ├── Footer.jsx       # App footer
│   ├── TaskManager.jsx  # Core task functionality
│   └── APIData.jsx      # API integration
├── App.jsx              # Main application
└── main.jsx             # Entry point

## Dependencies
  - React 18
  - Tailwind CSS 3
  - React Router 6
  - PropTypes
  - Vite

## Development Scripts
 - npm run dev - Start development server
 - npm run build - Create production build
 - npm run lint - Run ESLint
 - npm run preview - Preview production build

## Customization
- Edit these files to customize:

    -tailwind.config.js - Colors, fonts, breakpoints
    - src/index.css - Additional global styles
    - src/components/Button.jsx - Button variants

Deployment
- Deployed on Netlify 

## Assignment Checklist
- Project Setup (Vite + Tailwind)
- Component Architecture
- State Management & Hooks

## API Integration

Styling with Tailwind CSS

## License
© SA Mtshweni 2025