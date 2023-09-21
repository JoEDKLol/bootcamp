import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Academics from './component/Academics';
import Technicaskills1 from './component/Technicaskills1';
import Technicaskills2 from './component/Technicaskills2';
import Technicaskills3 from './component/Technicaskills3';
import Projects from './component/Projects';
import Achievements from './component/Achievements';
import Contactme from './component/Contactme';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container-fluid mt-0">
        <Home/>
        <Academics/>
        <div  className="" style={{width: "100%", float: "left"}} >
            <hr className="my-2"/>
            <p className="fw-bold pt-3 mb-1 fs-5" style={{textAlign:"left"}}>Technical skills</p>
            <Technicaskills1/>
            <Technicaskills2/>
            <Technicaskills3/>
        </div>
        <Projects/>
        <Achievements/>
        <Contactme/>
      </div>
    </div>
  );
}

export default App;
