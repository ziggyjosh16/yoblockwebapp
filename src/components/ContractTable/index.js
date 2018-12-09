import React, { Component } from 'react'
import { Circle } from 'rc-progress'
import contracts from '../../mock/contracts'
import './ContractTable.css'

export default class ContractTable extends Component {
  render () {
    let path = this.props.location.pathname
    const filteredContracts = contracts.filter(c => c.category === path.substring(path.lastIndexOf('/') + 1))
    return (
      <div className='table-main'>
        <h1 className='header'>Featured Contracts</h1>
        {filteredContracts && filteredContracts.length > 0
          ? <div className='table'>
            { filteredContracts.map((c, i) => Card(c, i)) }
          </div>
          : 'There are no contracts currently in this category'
        }
      </div>
    )
  }
}

const Card = (c) => {
  const { id, creator, category, target, raised, contributors } = c
  return (
    <a className='contract-card-link' key={id} href={`\\contract\\${id}`} >
      <div className='contract-card'>
        <Circle className='progress-circle'
          percent={((raised / target) * 100).toString()}
          strokeWidth='8'
          trailWidth='5'
          strokeColor='#4717f6'
          trailColor='#0e0b16' />
        <div className='card-description'>
          <h4>Category: {category}</h4>
          {creator}<br />
          <h5>Contributors: {contributors}</h5>
        </div>
      </div>
    </a>
  )
}
