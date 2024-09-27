import { useEffect } from 'react';
import RightSide from './components/RightSide.jsx';
import LeftSide from './components/LeftSide.jsx';
import './App.css';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Considera lo scroll della pagina per avere le coordinate corrette
      const x = e.clientX + window.scrollX; 
      const y = e.clientY + window.scrollY;

      // Imposta la posizione del gradiente direttamente in pixel
      document.documentElement.style.setProperty('--gradient-position-x', `${x}px`);
      document.documentElement.style.setProperty('--gradient-position-y', `${y}px`);
    };

    // Aggiungi l'evento di movimento del mouse
    window.addEventListener('mousemove', handleMouseMove);

    // Rimuovi l'evento al momento dello smontaggio del componente
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="w-3/4 m-auto App">
        <div className="grid grid-cols-2 gap-2">
          <div className="left-side">
            <LeftSide />
          </div>
          <div className="right-side border">
            <RightSide />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
