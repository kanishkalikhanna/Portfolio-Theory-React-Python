import React from 'react';

const StockList = ({stockList=[]}) => {
  return (
    <div>
        { stockList.map((data, index) => {
            if (data && index < 30) {
                return (
                    <div key={data}>
                        <h2>{data.description}</h2>
                    </div>	
                )	
            }
            return null
        })}
    </div>
  );
}

export default StockList