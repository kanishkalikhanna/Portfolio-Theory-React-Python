import React from 'react';

const MVP = ({MVPStockProportions=[]}) => {
  return (
    <div>
        <h4>Minimum Variance <br></br> Proportions Portfolio </h4>
        { MVPStockProportions.map((data, index) => {
            if (data) {
                return (
                    <div key={(data, index)}>
                        <p>{data.ticker} : {data.proportion}</p>
                    </div>	
                )	
            }
            return null
        })}
    </div>
  );
}

export default MVP