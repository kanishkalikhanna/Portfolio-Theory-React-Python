import './App.css';
import SearchStocks from './components/SearchStocks';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
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
          <Navbar />
          <Route path="/" exact component={SearchStocks} />
          <Route path="/portfolio" component={Portfolio} />
          {/* <Route path="/mvp" component={CreateExercise} />
          <Route path="/orp" component={CreateUser} />    */}
        </div>
    </Router>
  );
}

export default App;
