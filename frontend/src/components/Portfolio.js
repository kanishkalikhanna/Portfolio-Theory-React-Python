import React from 'react';

const Portfolio = ({PortfolioStocks=[]}) => {
  return (
    <div>
        <h1>Portfolio</h1>
        { PortfolioStocks.map((data, index) => {
            if (data) {
                return (
                    <div key={data}>
                        <h2>{data.description}</h2>
                    </div>	
                )	
            }
        })}
    </div>
  );
}

export default Portfolio