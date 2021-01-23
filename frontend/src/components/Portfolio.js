import React from 'react';
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import MVP from './MVP'; 
import {Redirect} from 'react-router-dom';

const Portfolio = ({props, portfolioStocks=[]}) => {

    const [calculatedMVP, setcalculatedMVP] = useState(false);
    const [MVPStockProportions, setMVPStockProportions] = useState([]);
    function calculateMVP (e) {
        e.preventDefault()
        axios.post('http://localhost:5000/mvp', portfolioStocks)
        .then(res => 
            {
                setcalculatedMVP(true)
                setMVPStockProportions(res.data)
            }

        );
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
            <Button onClick = {calculateMVP} >
            Calculate Minimum Variance Portfolio
            </Button>
        }
        {
            calculatedMVP && <MVP MVPStockProportions = {MVPStockProportions} />
        }

    </div>
    );
}

export default Portfolio