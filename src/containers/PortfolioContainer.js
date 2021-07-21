import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolioStocks.map((stock,idx) => <Stock key={idx} stock={stock} handleRemoveClick={this.props.handleRemoveClick}/>)
          }
      </div>
    );
  }
}

export default PortfolioContainer;
