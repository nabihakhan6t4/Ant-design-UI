
import './App.css';
import BasicExample from './component/Cards.jsx';
import NavScrollExample from './component/Header.jsx';
import HeroSection from './component/Hero.jsx';
import  BasicExample2  from  './component/Cards2.jsx'
import TripSection from './component/Trip.jsx'
import AppFooter from './component/Footer.jsx'
function App() {
  return (
    <>
  <div>
  <NavScrollExample/>
  <HeroSection/>
  <BasicExample/>
  <BasicExample2/>
  <TripSection/>
  <AppFooter/>
  </div>
    </>
  );
}

export default App;
