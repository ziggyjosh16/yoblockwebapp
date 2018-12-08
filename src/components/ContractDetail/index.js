import React, { Component } from 'react'
import './ContractDetail.css'
import contracts from '../../mock/contracts'

export default class ContractDetail extends Component {
  render () {
    const { location } = this.props
    let i = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    const contract = contracts.find(c => { return c.id.toString() === i })
    const { creator, area, contributors, target, raised, description } = contract
    return (
      <div className='contract-detail'>
        <h1>{area}</h1><br />
        <h2>Creator:{creator}</h2><br />
        Raised <b>{raised}</b> of <b>{target}</b> Ether<br />
        from <b>{contributors}</b> contributors<br />
        {description}<br />
        <button>contribute</button>
      </div>
    )
  }
}
