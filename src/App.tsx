import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import './css/main.css';

export default function App() {
  return (
    <div className="main-container">
      <header className="left-container">
        <LeftContainer />
      </header>
      <main className="right-container">
        <RightContainer />
      </main>
    </div>
  )
}
