import React from 'react';
import Button from 'react-bootstrap/Button';
import { PaginatedList } from 'react-paginated-list';

const StockList = (props) => {
  const displayStockStyle = {margin: "5%", padding: "3%"}
  return (
        <div>
            <PaginatedList
                list={props.stockList}
                itemsPerPage={5}
                renderList={(list) => (
                    <div>
                    {
                        list.map((data, index) => {
                        return (
                        <div key={(data, index)} style = {displayStockStyle}>
                            <span>
                                {data.description}
                            </span>
                            <span style={{float: 'right'}}> 
                                <Button variant = 'success' onClick={(e) => props.handleAddingStock(data)}>  +  </Button>
                            </span>
                        </div>	
                        )

                    })}

                    </div>
                )}
            />
        </div>
  );
}

export default StockList


/*

    <div>
        <PagenatedList
            list={props.stockList}
            itemsPerPage={10}
            renderList={(list) => (
                <div>
                {
                    list.map((data, index) => {
                    return (
                    <div key={(data, index)} style = {displayStockStyle}>
                        <span>
                            {data.description}
                        </span>
                        <span style={{float: 'right'}}> 
                            <Button variant = 'success' onClick={(e) => props.handleAddingStock(data)}>  +  </Button>
                        </span>
                    </div>	
                    )

                })}

                </div>
            )}
        />
    </div>
*/