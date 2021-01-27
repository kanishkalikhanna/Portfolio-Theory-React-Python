import React from 'react';
import {useState} from 'react'
import { Form, Button} from "react-bootstrap";
import axios from 'axios';
import PortfolioAttributes from './PortfolioAttributes'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/components.css';

const Portfolio = (props) => {

    const [optimalPortfolioAttributes, setOptimalPortfolioAttributes] = useState([]);
    const [portfolioType, setPortfolioType] = useState("mvp")
    const [shortSalesPossible, setShortSalesPossible] = useState("no")

    function calculateOptimalPortfolio (e, type) {
        e.preventDefault()
        props.setCalculated(false)
        setOptimalPortfolioAttributes([])
        
        type === "mvp" ? setPortfolioType("Minimum Variance") : setPortfolioType("Optimal Risky")

        axios.post('http://localhost:5000', props.portfolioStocks, { params: {type, shortSalesPossible}})
        .then(res => 
            {
                props.setCalculated(true)
                setOptimalPortfolioAttributes(res.data)
            }
        );
    }

    function handleChangeCheckBox(e) {
        e.target.checked ? setShortSalesPossible("yes") : setShortSalesPossible("no")
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
            <br></br>
            <h6> Short Sales Allowed </h6>
            <Form.Check 
                type="checkbox" 
                className = "CheckBox" 
                onChange = {e => handleChangeCheckBox(e)}
            />
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
                </div>
            }
            {
                props.calculated && 
                <div className = "PortfolioAttributes">
                    <PortfolioAttributes 
                        optimalPortfolioAttributes = {optimalPortfolioAttributes} 
                        portfolioType = {portfolioType} 
                    />
                </div>
            }
        </div>
    );
}

export default Portfolio