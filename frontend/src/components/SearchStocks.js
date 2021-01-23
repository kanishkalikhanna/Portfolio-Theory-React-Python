import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import StockList from './StockList';
import {STOCK_DATA} from '../data'
import Button from 'react-bootstrap/Button';
import Portfolio from './Portfolio';

const SearchStocks = (props) => {
  const [input, setInput] = useState('');
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

  function handleAddingStock(e) {
    
    e.preventDefault();
    
    let updatedStockListDefault = stockListDefault.filter((item) => {return item.ticker !== stockList[0].ticker});
    setstockListDefault(updatedStockListDefault);

    let updatedPortfolio = [ ...portfolioStocks, stockList[0]]; 
    setPortfolioStocks(updatedPortfolio)

    console.log(portfolioStocks)

    setstockList([])
    setInput('')
  }
	
  return (
      <div>
        <h1>Add S&P 500 Stocks to your portfolio</h1>
        <div style = {{display:"flex", flexDirection:"row"}}>
            <div style = {{marginLeft: "15%", marginRight: "10%"}}>
                <br></br>
                <SearchBar
                    input={input} 
                    onChange={updateInput}
                />
                <StockList stockList={stockList}/>
                {stockList.length === 1 &&
                    <div>
                        <Button onClick={handleAddingStock}>
                            Add {stockList[0].ticker} To Portfolio
                        </Button>
                    </div>
                }
            </div>
            <div style = {{marginLeft: "15%"}}>
                <div>
                    <Portfolio portfolioStocks = {portfolioStocks}/>
                </div>
            </div>

        </div>
      </div>
   );
}

export default SearchStocks