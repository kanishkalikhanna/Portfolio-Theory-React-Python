import React from 'react';

const StockList = ({stockList=[]}) => {
  return (
    <div>
        { stockList.map((data, index) => {
            if (data && index < 25) {
                return (
                    <div key={(data, index)}>
                        <p>{data.description}</p>
                    </div>	
                )	
            }
            return null
        })}
    </div>
  );
}

export default StockList