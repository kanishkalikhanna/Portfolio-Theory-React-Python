import React from 'react';
import Button from 'react-bootstrap/Button';

const StockList = (props) => {
  const displayStockStyle = {margin: "5%", padding: "3%"}
  return (
    <div>
        { props.stockList.map((data, index) => {
            if (data && index < 10) {
                return (
                    <div key={(data, index)} style = {displayStockStyle}>
                        <span>
                            {data.description}
                        </span>
                        <span style={{float: 'right'}}> 
                            <Button variant = 'success' onClick={(e) => props.handleAddingStock(data)}>  +  </Button>
                        </span>
                    </div>	
                )	
            }
            return null
        })}
    </div>
  );
}

export default StockList