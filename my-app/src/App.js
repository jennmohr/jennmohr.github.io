import './App.css';
import { useState } from "react";
import { Link } from "react-router-dom"; 
import SixersJenn from "./sixers-jenn.png";
import EaglesJenn from "./eagles-jenn.png";
import PhilliesJenn from "./phillies-jenn.png";
import SixersActive from "./76ers-active.png";
import SixersInactive from "./76ers-inactive.png";
import EaglesActive from "./Eagles-active.png";
import EaglesInactive from "./Eagles-inactive.png";
import PhilliesActive from "./Phillies-active.png";
import PhilliesInactive from "./Phillies-inactive.png";

function App() {
  const [sixersImage, setSixersImage] = useState(SixersActive);
  const [eaglesImage, setEaglesImage] = useState(EaglesInactive);
  const [philliesImage, setPhilliesImage] = useState(PhilliesInactive);
  const [currentTeam, setCurrentTeam] = useState('Sixers');

  function sixersTime(){
    setSixersImage(SixersActive);
    setEaglesImage(EaglesInactive);
    setPhilliesImage(PhilliesInactive);
    setCurrentTeam('Sixers');
  }

  function eaglesTime(){
    setSixersImage(SixersInactive);
    setEaglesImage(EaglesActive);
    setPhilliesImage(PhilliesInactive);
    setCurrentTeam('Eagles');
  }

  function philliesTime(){
    setSixersImage(SixersInactive);
    setEaglesImage(EaglesInactive);
    setPhilliesImage(PhilliesActive);
    setCurrentTeam('Phillies');
  }

  const getApp = () => {
    switch (currentTeam) {
      case 'Sixers': return 'AppSixers';
      case 'Eagles': return 'AppEagles';
      case 'Phillies': return 'AppPhillies';
      default: return;
   }
  }

  const getAppHeader = () => {
    switch (currentTeam) {
      case 'Sixers': return 'App-header-Sixers';
      case 'Eagles': return 'App-header-Eagles';
      case 'Phillies': return 'App-header-Phillies';
      default: return;
   }
  }

  const getImportant = () => {
    switch (currentTeam) {
      case 'Sixers': return 'importantSixers';
      case 'Eagles': return 'importantEagles';
      case 'Phillies': return 'importantPhillies';
      default: return;
   }
  }

  const getImage = () => {
    switch (currentTeam) {
      case 'Sixers': return SixersJenn;
      case 'Eagles': return EaglesJenn;
      case 'Phillies': return PhilliesJenn;
      default: return;
   }
  }

  return (
    <div className={getApp()}>
      <ul>
        <li><a onClick={() => sixersTime()}><img src={sixersImage}/></a></li>
        <li><a onClick={() => eaglesTime()}><img src={eaglesImage}/></a></li>
        <li><a onClick={() => philliesTime()}><img src={philliesImage}/></a></li>
      </ul>
      <header className={getAppHeader()}>
        <p className='headline'>
          <span className={getImportant()}>Hello, I'm Jenn!</span>
        </p>
        <p>
          I'm a software engineer from <span className={getImportant()}>Philadelphia, PA</span>. I thrive in front-end development, but strive to become as well-rounded as possible.
        </p>
        <p>
          I currently work as a <span className={getImportant()}>Consultant at Pariveda Solutions</span>.
        </p>
      </header>
      <header className={getAppHeader()}> 
        <img src={getImage()}/>
      </header>
    </div>
  );
}

export default App;
