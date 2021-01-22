import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import StockList from './StockList';
import {STOCK_DATA} from '../data'

const SearchStocks = (props) => {
  const [input, setInput] = useState('');
  const [stockListDefault, setstockListDefault] = useState();
  const [stockList, setstockList] = useState();

  useEffect( () => {
      setstockListDefault(STOCK_DATA)
    },[]);

  const updateInput = async (input) => {
     const filtered = stockListDefault.filter(stock => {
      return stock.description.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setstockList(filtered);
  }
	
  return (
        <div>
            <h1>Select Stocks from the S&P 500</h1>
            <SearchBar 
                input={input} 
                onChange={updateInput}
            />
            <StockList stockList={stockList}/>
        </div>
   );
}

export default SearchStocks