import React from 'react';
import {useState} from 'react'
import { Form, Button} from "react-bootstrap";
import axios from 'axios';
import PortfolioProportions from './PortfolioProportions'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/components.css';

const Portfolio = (props) => {

    const [optimalPortfolioProportions, setOptimalPortfolioProportions] = useState([]);
    const [portfolioType, setPortfolioType] = useState("mvp")
    const [shortSalesPossible, setShortSalesPossible] = useState("no")

    function calculateOptimalPortfolio (e, type) {
        e.preventDefault()
        props.setCalculated(false)
        setOptimalPortfolioProportions([])
        
        type === "mvp" ? setPortfolioType("Minimum Variance") : setPortfolioType("Optimal Risky")

        axios.post('http://localhost:5000', props.portfolioStocks, { params: {type, shortSalesPossible}})
        .then(res => 
            {
                props.setCalculated(true)
                setOptimalPortfolioProportions(res.data)
            }
        );
    }

    function handleChangeCheckBox(e) {
        console.log(e)
        shortSalesPossible === "no" ? setShortSalesPossible("yes") : setShortSalesPossible("no")
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
                    <Button onClick = {(e) => calculateOptimalPortfolio(e, "mvp")} className = "MVPButton" >
                        Calculate Minimum <br></br>Variance Portfolio
                    </Button>
                    <br></br>
                    <Button onClick = {(e) => calculateOptimalPortfolio(e, "orp")} className = "ORPButton" >
                        Calculate Optimal <br></br>Risky Portfolio
                    </Button>

                    <h6> Short Sales Allowed </h6>
                    <Form.Check 
                        type="checkbox" 
                        className = "CheckBox" 
                        onChange = {handleChangeCheckBox}
                    />
                </div>
            }
            
            {
                props.calculated && 
                <div className = "PortfolioProportions">
                    <PortfolioProportions 
                        optimalPortfolioProportions = {optimalPortfolioProportions} 
                        portfolioType = {portfolioType} 
                    />
                </div>
            }
        </div>
    );
}

export default Portfolio