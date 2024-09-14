import './App.css';
import { Profile } from './components/Profile';
import { Nav } from './components/Nav';
import { Signup } from './components/Signup';
import { ReactComponent as logoSVG } from './images/TikTok_logo.svg'

function App() {
  return (
    <div>
      <Nav logoSVG={logoSVG}/>
      <Signup />
    </div>
  );
}

export default App;
