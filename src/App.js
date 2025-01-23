import "./App.css";
import LeftSide from "./Components/leftSide";
import MiddleSide from "./Components/middleSide";
import RightSide from "./Components/rightSide";
import instaLogo from './assets/instaicon.png';



function App() {
  return (
    <div className="App">

      <div className="mobileView">
        <img className='instaLogo1' src={instaLogo} alt="Logo" />
      </div>
      
      <div className="desktopView">
        <div className="leftSide">
          <LeftSide />
        </div>
        <div className="middleSide">
          <MiddleSide />
        </div>
        <div className="RightSide">
          <RightSide />
        </div>
      </div>

    </div>
  );
}

export default App;
