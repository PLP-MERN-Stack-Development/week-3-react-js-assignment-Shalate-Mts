import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import APIData from './components/APIData';

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 ${darkMode ? 'dark' : ''}`}>
      {/* Replaced header with Navbar component */}
      <Navbar 
        darkMode={darkMode} 
        onDarkModeToggle={() => setDarkMode(!darkMode)} 
      />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Preserved counter demo */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 mb-8">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg mb-4">
              Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR
            </p>
            
            <div className="flex items-center gap-4 my-4">
              <Button
                variant="danger"
                onClick={() => setCount((count) => count - 1)}
              >
                -
              </Button>
              <span className="text-xl font-bold">{count}</span>
              <Button
                variant="success"
                onClick={() => setCount((count) => count + 1)}
              >
                +
              </Button>
            </div>
          </div>
        </div>

        {/* Added TaskManager component */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 mb-8">
          <TaskManager />
        </div>
        
        {/* Enhanced API data section */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
          <APIData />
        </div>
      </main>

      {/* Replaced footer with Footer component */}
      <Footer />
    </div>
  );
}

export default App;