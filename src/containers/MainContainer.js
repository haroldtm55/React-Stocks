import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      stocksArr: [],
      filteredStocksArr: [],
      searchBar: {
        itemChecked: ''
      },
      portfolioStocks: []
    }
  }
  componentDidMount() {
    this.fetchStocks()
  }

  render() {
    return (
      <div>
        <SearchBar 
          handleSortChange={this.handleSortChange} 
          handleFilterChange={this.handleFilterChange}
          searchBar={this.state.searchBar}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer 
                stocksArr={this.state.stocksArr} 
                filteredStocksArr={this.state.filteredStocksArr}
                itemChecked={this.state.searchBar.itemChecked}
                handleAddClick={this.handleAddClick}
                />

            </div>
            <div className="col-4">

              <PortfolioContainer 
              portfolioStocks={this.state.portfolioStocks} 
              handleRemoveClick={this.handleRemoveClick}
              />
            </div>
          </div>
      </div>
    );
  }

  fetchStocks = () => {
    fetch('http://localhost:3000/stocks')
      .then(resp => resp.json())
      .then(stocks => {
        this.setState({
          stocksArr: stocks
        })
      })
  }

  handleSortChange = e => {
    this.setState({
      searchBar: {
        itemChecked: e.target.value
      }
    })
  }

  handleFilterChange = e => {
    this.setState({
      filteredStocksArr: this.state.stocksArr.filter(stock=>stock.type===e.target.value)
    })
  }
  
  handleAddClick = (e,id) => {
    const portfolioStocksCopy = [...this.state.portfolioStocks]
    portfolioStocksCopy.push(this.state.stocksArr.find(stock => stock.id === id))
    const portfolioUniqueStocks = [...portfolioStocksCopy].filter((stock,index,array)=>array.indexOf(stock)===index)
    this.setState({
        portfolioStocks: portfolioUniqueStocks 
    })
  }

  handleRemoveClick = (e,id) => {
    let portfolioStocksCopy = [...this.state.portfolioStocks]
    this.setState({
      portfolioStocks: portfolioStocksCopy.filter(stock => stock.id !== id)
    })
  }
}

export default MainContainer;