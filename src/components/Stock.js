import React from 'react'

const Stock = ({stock, handleAddClick, handleRemoveClick}) => (
  <div onClick={handleRemoveClick}>
    <div className="card" onClick={handleAddClick}>
      <div className="card-body">
        <h5 className="card-title">{
            stock.name
          }</h5>
        <p className="card-text">{
            `${stock.ticker}: ${stock.price}`
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
