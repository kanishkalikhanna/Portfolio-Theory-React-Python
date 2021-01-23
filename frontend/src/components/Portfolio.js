import React from 'react';
import Button from 'react-bootstrap/Button';

const Portfolio = ({portfolioStocks=[]}) => {

    function calculateMVP (e) {
        e.preventDefault()
        console.log("Will send request to backend to calculate mvp")
    }

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
        {
            portfolioStocks.length > 0 &&
            <Button onClick = {calculateMVP}>
            Calculate Minimum Variance Portfolio
            </Button>
        }

    </div>
    );
}

export default Portfolio