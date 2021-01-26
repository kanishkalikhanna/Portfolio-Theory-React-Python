import React from 'react';
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import PortfolioProportions from './PortfolioProportions'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/components.css';

const Portfolio = (props) => {

    const [optimalPortfolioProportions, setoptimalPortfolioProportions] = useState([]);
    const [portfolioType, setPortfolioType] = useState("")

    function calculateOptimalPortfolio (e, type) {
        e.preventDefault()
        props.setCalculated(false)
        setoptimalPortfolioProportions([])
        
        type === "mvp" ? setPortfolioType("Minimum Variance") : setPortfolioType("Optimal Risky")

        axios.post('http://localhost:5000', props.portfolioStocks, { params: {type}})
        .then(res => 
            {
                props.setCalculated(true)
                setoptimalPortfolioProportions(res.data)
            }
        );
    }

    return (
    <div>
        <h4>S&P 500 Stock Portfolio</h4>
        <br></br>
        { props.portfolioStocks.map((data, index) => {
            if (data) {
                return (
                    <div key={(data, index)} className = "PortfolioStock">
                        <span className = "DeleteButton"> 
                            <Button  variant="danger" onClick={(e) => props.handleDeletingStock(data)}>  -  </Button>
                        </span>
                        <span>
                            <h5>{data.ticker}</h5>
                        </span>
                    </div>	
                )	
            }
            return null
        })}
        {
            props.portfolioStocks.length > 0 &&
            <div>
                <Button onClick = {(e) => calculateOptimalPortfolio(e, "mvp")} className = "Button" >
                    Calculate Minimum <br></br>Variance Portfolio
                </Button>
                <br></br>
                <Button onClick = {(e) => calculateOptimalPortfolio(e, "orp")} className = "Button" >
                    Calculate Optimal <br></br>Risky Portfolio
                </Button>

                {/* Add option to allow for short sales */}

            </div>
        }
        
        {
            props.calculated && 
            <div className = "PortfolioProportions">
                <PortfolioProportions optimalPortfolioProportions = {optimalPortfolioProportions} portfolioType = {portfolioType} />
            </div>
        }
    </div>
    );
}

export default Portfolio