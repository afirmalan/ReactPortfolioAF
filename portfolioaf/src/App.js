import Navbar from './components/Navbar'; 
import { CssBaseline } from '@mui/material';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <>
    <About/>
    <CssBaseline/> 
    <Navbar />
    <Portfolio/>
    <Contact/>
    </>
  );
}

export default App;
