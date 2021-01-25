import React from 'react';

const MVP = (props) => {
  return (
      <div>
        { props.MVPStockProportions.length > 0 &&

            <div>
                <h4>Minimum Variance <br></br>Portfolio Proportion</h4>
                { props.MVPStockProportions.map((data, index) => {
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