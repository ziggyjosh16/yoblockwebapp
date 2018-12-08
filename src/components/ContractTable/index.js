import React, { Component } from 'react'
import { Circle } from 'rc-progress'
import { hashCode } from '../../utils/'
import contracts from '../../mock/contracts'
import './ContractTable.css'

export default class ContractTable extends Component {
  render () {
    return (
      <div className='table-main'>
        <h1 className='header'>Featured Contracts</h1>
        {contracts && contracts.length > 0 
          ? <div className='table'>
            { contracts.map((c, i) => Card(c, i)) }
          </div>
          : 'There are no contracts currently in this category'
        }
      </div>
    )
  }
}

const Card = (c) => {
  const { id, creator, area, target, raised, contributors } = c
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
          <h4>Area: {area}</h4>
          {creator}<br />
          <h5>Contributors: {contributors}</h5>
        </div>
      </div>
    </a>
  )
}

