import './App.css';
import Cube from './image/image.jpg';
import Etherium from './image/icon-ethereum.svg';
import Clock from './image/icon-clock.svg';
import Avatar from './image/image-avatar.png';

function App() {
  return (
    <div className="App">
      <div className='Cube'>
        <img src={Cube} alt="img" />
      </div>
      <div className='text-div'>
        <p className='Equilibrium-index'>Equilibrium #3429</p>
        <p className='Our-Equilibrium'>Our Equilibrium collection promotes <br /> balance and calm</p>
      </div>
      <div className='Conteiner'>
        <div className='Etherium-div'>
          <img className='Etherium-logo' src={Etherium} alt="img"/>
          <p className='etherium'>0.41ETH</p>
        </div>
        <div className='Clock-div'>
          <img className='Clock' src={Clock} alt="img" />
          <p className='time'>3 days left</p>
        </div>
      </div>
      <div className='line'></div>
      <div className='Avatar-and-creation-div'>
        <img className='avatar' src={Avatar} alt="img" />
        <p className='creation-of-julies'><span className='span'>Creation of</span> Jules Wyvern</p>
      </div>
    </div>
  );
}

export default App;
