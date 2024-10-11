// import logo from './logo.svg';
import './App.css';
// import Sayali from './Components/SayaliCard'
import Header from './Components/Header';
import Home from './Components/Home';
import Services from './Components/Services';
import Skills from './Components/Skills';
 import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume';
import Contact from "./Components/Contact"



function App() {
  return (
    <div >
        {/* <Sayali/> */}
      <Header/>
      <Home/>
      <Services/> 
      <Skills/>
      <Portfolio/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;
