import './App.css';
import SearchStocks from './components/SearchStocks';

/**
 * 
 * On the frontend keep it simple, search for stocks on S&P 500, add them to list 
 * and then send them to backend to evaluate MVP or ORP ... 
 * 
 */

function App() {
  return (
    <div className="App">
        <SearchStocks/>
    </div>
  );
}

export default App;
