import React from 'react';
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import MVP from './MVP'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = (props) => {

    const [calculatedMVP, setcalculatedMVP] = useState(false);
    const [MVPStockProportions, setMVPStockProportions] = useState([]);
    const MVPStyle = {marginTop: "7%"}
    const ButtonStyle = {marginTop: "12%",}
    const portfolioStockStyle = {margin: "3%", padding: "3%", color: "black"}

    function calculateMVP (e) {
        e.preventDefault()
        setMVPStockProportions([])
        axios.post('http://localhost:5000/mvp', props.portfolioStocks)
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