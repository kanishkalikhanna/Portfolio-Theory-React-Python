import React, { useState } from 'react';
import SearchBar from './SearchBar';
import StockList from './StockList';
import {STOCK_DATA} from '../data'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './Portfolio';

const Main = (props) => {
  
  const [input, setInput] = useState('');
  const [stockListDefault, setstockListDefault] = useState(STOCK_DATA);
  const [stockList, setstockList] = useState([]);
  const [portfolioStocks, setPortfolioStocks] = useState([]);
  const portfolioStyle = {margin: "6%", marginTop: "4%"}
  const searchAndDisplayStocksStyle = {marginLeft: "10%", marginRight: "10%"}
  const sideBySideRenderStyle = {display:"flex", flexDirection:"row"}

  const updateInput = async (input) => {
     
    const filtered = stockListDefault.filter(stock => {
      return stock.description.toLowerCase().includes(input.toLowerCase())
     })

     setInput(input);
     setstockList(filtered);
  }

  function handleAddingStock(data) {
    
    let updatedStockListDefault = stockListDefault.filter((item) => {return item.ticker !== data.ticker});
    setstockListDefault(updatedStockListDefault);

    let updatedPortfolio = [ ...portfolioStocks, data]; 
    setPortfolioStocks(updatedPortfolio)

    let updatedStockList = stockList.filter((item) => {return item.ticker !== data.ticker});

    setstockList(updatedStockList)
    setInput('')
  }


  function handleDeletingStock(data) {
    
    let updatedStockListDefault =  [ ...stockListDefault, data]
    setstockListDefault(updatedStockListDefault);

    let updatedPortfolio = portfolioStocks.filter((item) => {return item.ticker !== data.ticker});
    setPortfolioStocks(updatedPortfolio)
  }
	
  return (
      <div>
        <br></br>
        <h3>Search and add stocks to your portfolio</h3>
        <div style = {sideBySideRenderStyle}>
            <div style = {searchAndDisplayStocksStyle}>
                <SearchBar
                    input={input} 
                    onChange={updateInput}
                />
                <StockList stockList={stockList} handleAddingStock = {handleAddingStock}/>
            </div>
            <div style = {portfolioStyle}>
                <Portfolio portfolioStocks = {portfolioStocks} handleDeletingStock = {handleDeletingStock} />
            </div>

        </div>
      </div>
   );
}

export default Main