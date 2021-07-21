import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStocks(this.props)
        }
      </div>
    );
  }

  sortArray = (arr, itemChecked) => {
    const newArr = [...arr]
    if (itemChecked === 'Alphabetically') {
      return newArr.sort((a,b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      })
    }
    else if (itemChecked === 'Price') {
      return newArr.sort((a,b) => a.price - b.price)
    }
  }

  renderStocks = ({filteredStocksArr,stocksArr,itemChecked, handleAddClick}) => {
    const stocks = stocksArr.filter(stock => stock.type === 'Tech').map(stock=> <Stock key={stock.id} stock={stock} handleAddClick={handleAddClick}/>)
    const filteredStocks = filteredStocksArr.map(stock => <Stock key={stock.id} stock={stock} handleAddClick={handleAddClick}/>)
    if (itemChecked === '') {
      return filteredStocksArr.length === 0 ? stocks : filteredStocks
    }
    else {
      if (filteredStocksArr.length === 0) {
        return this.sortArray(stocksArr,itemChecked).filter(stock => stock.type === 'Tech').map(stock=> <Stock key={stock.id} stock={stock} handleAddClick={handleAddClick}/>)
      }
      else {
        return this.sortArray(filteredStocksArr,itemChecked).map(stock=> <Stock key={stock.id} stock={stock} handleAddClick={handleAddClick}/>)
      }
    }
  }

}

export default StockContainer;
