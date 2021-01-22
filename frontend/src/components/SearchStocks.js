import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import StockList from './StockList';
import {STOCK_DATA} from '../data'
import Button from 'react-bootstrap/Button';

const SearchStocks = (props) => {
  const [input, setInput] = useState('');
  const [stockListDefault, setstockListDefault] = useState(STOCK_DATA);
  const [stockList, setstockList] = useState([]);

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
            {stockList.length === 1 &&
                <div>
                    <Button color = "green" variant="success" className="btn-primary">
                        Add {stockList[0].ticker} To Portfolio
                    </Button>
                </div>
            }
        </div>
   );
}

export default SearchStocks