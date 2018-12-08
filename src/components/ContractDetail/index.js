import React, { Component } from 'react'
import contracts from '../../mock/contracts'
import { Circle } from 'rc-progress'
import './ContractDetail.css'

export default class ContractDetail extends Component {
  render () {
    const { location } = this.props
    let i = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    const contract = contracts.find(c => { return c.id.toString() === i })
    const { creator, area, contributors, target, raised, description } = contract
    return (
      <div className='contract-detail'>
        <div className='contract-detail-main'>
          <h1>{area}</h1><br />
          <h2>Creator: {creator}</h2><br />
          {description}<br />
          <button>contribute</button>
        </div>
        <div className='contract-detail-sidebar'>
          <Circle className='progress-circle'
            percent={((raised / target) * 100).toString()}
            strokeWidth='8'
            trailWidth='5'
            strokeColor='#4717f6'
            trailColor='#e7dfdd' />
          <span>
            Raised <b>{raised}</b> of <b>{target}</b>
            {' '} Ether from <b>{contributors}</b> contributors
          </span>
          <div className='button'>Contribute</div>
          <div className='button'>Share</div>
          <div className='recent-donations'>
            Recent Donations:
            {
              Array.from(Array(10)).map(
                i => <Contribution key={i} target={target} />)
            }
          </div>

        </div>
      </div>
    )
  }
}

const Contribution = (target) => {
  console.log(target)
  let amount = Math.random() * (parseInt(target.target) / 2)
  return(
    <div>
      <b>{amount}</b> Ether
       Anonymous
    </div>
  )
}
