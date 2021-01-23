import React from 'react';
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import MVP from './MVP'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = ({props, portfolioStocks=[]}) => {

    const [calculatedMVP, setcalculatedMVP] = useState(false);
    const [MVPStockProportions, setMVPStockProportions] = useState([]);
    const MVPStyle = {marginTop: "7%"}
    const ButtonStyle = {marginTop: "5%", fontSize: "large"}
    const portfolioStockStyle = {margin: "3%", padding: "3%", background: "#ADFF2F", color: "black"}

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
        <h4>S&P 500 Stock Portfolio</h4>
        { portfolioStocks.map((data, index) => {
            if (data) {
                return (
                    <div key={(data, index)} style = {portfolioStockStyle}>
                        <h5>{data.ticker}</h5>
                    </div>	
                )	
            }
            return null
        })}
        {
            portfolioStocks.length > 0 &&
            <Button onClick = {calculateMVP} style = {ButtonStyle} >
                Calculate Minimum <br></br>Variance Portfolio
            </Button>
        }
        {
            calculatedMVP && 
            <div style = {MVPStyle}>
                <MVP MVPStockProportions = {MVPStockProportions} />
            </div>
        }

    </div>
    );
}

export default Portfolio