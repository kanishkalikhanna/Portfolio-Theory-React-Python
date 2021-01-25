import React from 'react';
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import PortfolioProportions from './PortfolioProportions'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = (props) => {

    const [optimalPortfolioProportions, setoptimalPortfolioProportions] = useState([]);
    const [portfolioType, setPortfolioType] = useState("")
    const portfolioProportionsStyle = {marginTop: "7%"}
    const ButtonStyle = {marginTop: "12%",}
    const portfolioStockStyle = {margin: "3%", padding: "3%", color: "black"}

    function calculateOptimalPortfolio (e, type) {
        e.preventDefault()
        props.setCalculated(false)
        setoptimalPortfolioProportions([])
        
        type === "mvp" ? setPortfolioType("Minimum Variance") : setPortfolioType("Optimal Risky")

        axios.post('http://localhost:5000/' + type, props.portfolioStocks)
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
                    <div key={(data, index)} style = {portfolioStockStyle}>
                        <span style={{float: 'right'}}> 
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
                <Button onClick = {(e) => calculateOptimalPortfolio(e, "mvp")} style = {ButtonStyle} >
                    Calculate Minimum <br></br>Variance Portfolio
                </Button>
                <br></br>
                <Button onClick = {(e) => calculateOptimalPortfolio(e, "orp")} style = {ButtonStyle} >
                    Calculate Optimal <br></br>Risky Portfolio
                </Button>
            </div>
        }
        
        {
            props.calculated && 
            <div style = {portfolioProportionsStyle}>
                <PortfolioProportions optimalPortfolioProportions = {optimalPortfolioProportions} portfolioType = {portfolioType} />
            </div>
        }
    </div>
    );
}

export default Portfolio