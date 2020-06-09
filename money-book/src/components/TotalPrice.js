import React from 'react'
import PropTypes from 'prop-types'
const TotalPrice = ( { income, outcome } ) => (
  <div className="row">
    <div className="col">
      <h5 className="income" style={{padding: '20px'}}>收入：<span>{income}</span></h5>
    </div>
    <div className="col">
      <h5 className="outcome" style={{padding: '20px'}}>支出：<span>{outcome}</span></h5>
    </div>
  </div>
)

TotalPrice.propTypes = {
  income: PropTypes.number.isRequired,
  outcome: PropTypes.number.isRequired,
}
export default TotalPrice