import React from 'react';
import Button from 'react-bootstrap/Button';
import { PaginatedList } from 'react-paginated-list';
import '../css/components.css';

const StockList = (props) => {
  
  return (
        <div>
            <PaginatedList
                list={props.stockList}
                itemsPerPage={8}
                renderList={(list) => (
                    <div>
                    {
                        list.map((data, index) => {
                        return (
                            <div key={(data, index)} className = "DisplayStock">
                                <span>
                                    {data.description}
                                </span>
                                <span className = "AddButton"> 
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