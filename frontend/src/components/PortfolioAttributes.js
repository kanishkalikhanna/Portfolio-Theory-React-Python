import React from 'react';

const PortfolioAttributes = (props) => {
  return (
      <div>
        { props.optimalPortfolioAttributes.length > 0 &&

            <div>
                <h4> {props.portfolioType}<br></br>Portfolio Proportions</h4>
                { props.optimalPortfolioAttributes.map((data, index) => {
                    if (data) {
                        return (
                            <div key={(data, index)}>
                                {
                                    data.attribute === "Expected Return" &&
                                    <div>
                                        <br></br>
                                        <h4>Performance Statistics</h4>
                                    </div>
                                }
                                <p>{data.attribute} : {data.value}</p>
                            </div>	
                        )	
                    }
                    return null
                })}
            </div>
        }
      </div>
  );
}

export default PortfolioAttributes