import React, { useState } from 'react';
import SearchBar from './SearchBar';
import StockList from './StockList';
import {STOCK_DATA} from '../data/data'
import Portfolio from './Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/components.css';

const Main = () => {
  
  const [input, setInput] = useState('');
  const [calculated, setCalculated] = useState(false)
  const [stockListDefault, setstockListDefault] = useState(STOCK_DATA);
  const [stockList, setstockList] = useState([]);
  const [portfolioStocks, setPortfolioStocks] = useState([]);

  const updateInput = async (input) => {
     
    const filtered = stockListDefault.filter(stock => {
      return stock.description.toLowerCase().includes(input.toLowerCase())
     })

     setInput(input);
     setstockList(filtered);
  }

  function handleAddingStock(data) {

    setCalculated(false)

    let updatedStockListDefault = stockListDefault.filter((item) => {return item.ticker !== data.ticker});
    setstockListDefault(updatedStockListDefault);

    let updatedStockList = stockList.filter((item) => {return item.ticker !== data.ticker});
    setstockList(updatedStockList)

    let updatedPortfolio = [ ...portfolioStocks, data]; 
    setPortfolioStocks(updatedPortfolio)

    setInput('')
  }


  function handleDeletingStock(data) {

    setCalculated(false)

    let updatedStockListDefault =  [ ...stockListDefault, data]
    updatedStockListDefault.sort((a, b) => (a.description > b.description) ? 1 : -1)
    setstockListDefault(updatedStockListDefault);

    setstockList(updatedStockListDefault);

    let updatedPortfolio = portfolioStocks.filter((item) => {return item.ticker !== data.ticker});
    setPortfolioStocks(updatedPortfolio)

    setInput('')
  }
	
  return (
      <div>
        <br></br>
        <h2>Search or add stocks to your portfolio</h2>
        <div className = "SideBySideRender">
            <div className = "SearchAndDisplayStocks">
                <SearchBar
                    input={input} 
                    onChange={updateInput}
                />
                <StockList 
                    stockList={stockList} 
                    handleAddingStock = {handleAddingStock}
                    calculated = {calculated}
                />
            </div>
            <div className = "Portfolio">
                <Portfolio 
                    portfolioStocks = {portfolioStocks} 
                    handleDeletingStock = {handleDeletingStock} 
                    calculated = {calculated}
                    setCalculated = {setCalculated}
                />
            </div>

        </div>
      </div>
   );
}

export default Main