import { StrictMode, useContext, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DarkModeContextProvider, DarkModeContext } from './context/darkModeContext'

const RootComponent = () => {
  const { darkMode } = useContext(DarkModeContext);


  useEffect(() => {
    document.body.className = darkMode ? "theme-dark" : "theme-light";
  }, [darkMode]);


  return <App />;
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeContextProvider>
      <RootComponent />
    </DarkModeContextProvider>
  </StrictMode>,
)
