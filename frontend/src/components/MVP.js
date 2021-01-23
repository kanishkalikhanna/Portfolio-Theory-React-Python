import React from 'react';

const MVP = ({MVPStockProportions=[]}) => {
  return (
    <div>
        <h2>MVP Proportions</h2>
        { MVPStockProportions.map((data, index) => {
            if (data) {
                return (
                    <div key={(data, index)}>
                        <h2>{data.ticker} : {data.proportion}</h2>
                    </div>	
                )	
            }
            return null
        })}
    </div>
  );
}

export default MVP