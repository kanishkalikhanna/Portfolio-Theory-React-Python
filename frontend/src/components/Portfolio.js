import React from 'react';
import Button from 'react-bootstrap/Button';

const Portfolio = ({portfolioStocks=[]}) => {
  return (
    <div>
        <h1>Portfolio</h1>
        { portfolioStocks.map((data, index) => {
            if (data) {
                return (
                    <div key={(data, index)}>
                        <h2>{data.ticker}</h2>
                    </div>	
                )	
            }
            return null
        })}
        <Button>
            Calculate Minimum Variance Portfolio
        </Button>
    </div>
  );
}

export default Portfolio