import React from 'react'

const Stock = ({stock, handleAddClick, handleRemoveClick, id}) => (
  <div onClick={null}>
    <div className="card" onClick={(e)=>!!handleAddClick ? handleAddClick(e,id) : handleRemoveClick(e,id)}>
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