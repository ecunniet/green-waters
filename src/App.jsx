import './App.scss';
import ExternalStateExample from "./components/ExternalStateExample/ExternalStateExample";
import Sidebar from "./components/Sidebar/Sidebar";
import Location from './components/Location/Location';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <ExternalStateExample></ExternalStateExample>
      <Location></Location>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
