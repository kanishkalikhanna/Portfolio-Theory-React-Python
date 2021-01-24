import React from 'react';

const MVP = ({MVPStockProportions=[]}) => {
  return (
      <div>
        { MVPStockProportions.length > 0 &&

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
        }
      </div>
  );
}

export default MVP