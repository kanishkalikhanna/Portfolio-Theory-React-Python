import './css/App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
          <Route path="/" exact component={Main} />
        </div>
    </Router>
  );
}

export default App;
