import React, { useState } from 'react';
import SearchBar from './SearchBar';
import StockList from './StockList';
import {STOCK_DATA} from '../data/data'
import Portfolio from './Portfolio';
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/components.css';

const Main = () => {
  
  const [input, setInput] = useState('');
  const [calculated, setCalculated] = useState(false)
  const [stockListDefault, setStockListDefault] = useState(STOCK_DATA);
  const [stockList, setStockList] = useState([]);
  const [portfolioStocks, setPortfolioStocks] = useState([]);

  const updateInput = async (input) => {
     
    const filtered = stockListDefault.filter(stock => {
      return stock.description.toLowerCase().includes(input.toLowerCase())
     })

     setInput(input);
     setStockList(filtered);
  }

  function handleAddingStock(data) {

    setCalculated(false)

    let updatedStockListDefault = stockListDefault.filter((item) => {return item.ticker !== data.ticker});
    setStockListDefault(updatedStockListDefault);

    let updatedStockList = stockList.filter((item) => {return item.ticker !== data.ticker});
    setStockList(updatedStockList)

    let updatedPortfolio = [ ...portfolioStocks, data]; 
    setPortfolioStocks(updatedPortfolio)

    setInput('')
  }

  function handleDeletingStock(data) {

    setCalculated(false)

    let updatedStockListDefault =  [ ...stockListDefault, data]
    updatedStockListDefault.sort((a, b) => (a.description > b.description) ? 1 : -1)
    setStockListDefault(updatedStockListDefault);

    setStockList(updatedStockListDefault);

    let updatedPortfolio = portfolioStocks.filter((item) => {return item.ticker !== data.ticker});
    setPortfolioStocks(updatedPortfolio)

    setInput('')
  }


  function createRandomPortfolio() {
    
    setCalculated(false)

    const portfolioSize = 5
    const shuffledStocks = STOCK_DATA.sort(() => 0.5 - Math.random());
    const stockDataSize = STOCK_DATA.length
    const randomPortfolio = shuffledStocks.slice(0, portfolioSize);

    setPortfolioStocks(randomPortfolio)

    let updatedStockListDefault = shuffledStocks.slice(portfolioSize, stockDataSize)
    updatedStockListDefault.sort((a, b) => (a.description > b.description) ? 1 : -1)

    setStockListDefault(updatedStockListDefault)
    setStockList(updatedStockListDefault)
    setInput('')

  }
	
  return (
      <div>
        <br></br>
        <h2>Search or add stocks to your portfolio</h2>

        <Button onClick = {createRandomPortfolio} className = "RandomPortfolioButton" variant="info">
            Random <br></br> Portfolio
        </Button>

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