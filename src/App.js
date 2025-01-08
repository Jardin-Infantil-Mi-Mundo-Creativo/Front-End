import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Aspirantes from './pages/Aspirantes/Aspirantes';
import Servicios from './pages/Servicios/Servicios';
import Estudiantes from './pages/Estudiantes/Estudiantes';
import Nosotros from './pages/Nosotros/Nosotros';
import Galeria from './pages/galeria/galeria';

function App() {
  return (
    <div className='app-container'>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/servicios" element={<Servicios/>}/>
          <Route path="/aspirantes" element={<Aspirantes/>}/>
          <Route path="/galeria" element={<Galeria/>}/>
          <Route path="/estudiantes" element={<Estudiantes/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
