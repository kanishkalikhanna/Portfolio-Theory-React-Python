import './App.css';
import SearchStocks from './components/SearchStocks';
import MVP from './components/MVP';
import { BrowserRouter as Router, Route} from "react-router-dom";


/**
 * 
 * On the frontend keep it simple, search for stocks on S&P 500, add them to list 
 * and then send them to backend to evaluate MVP or ORP ... 
 * 
 */

function App() {
  return (
    <Router>
        <div className="App">
          <Route path="/" exact component={SearchStocks} />
          <Route path="/mvp" exact component={MVP} />
        </div>
    </Router>
  );
}

export default App;
