import React, { Component } from 'react'
import mockContributions from '../../mock/mockContributions'
import './ProfilePage.css'

export default class ProfilePage extends Component {
  render () {
    return (
      <div className='profile-main'>
        <div>
          <h2>Profile</h2>
        </div>
        <div className='contribution-table'>
          <h3>Your Contributions</h3>
          <ContributionTable contributions={mockContributions} />
        </div>
        <div>
          <h3>Recommended Artists</h3>
        </div>
      </div>
    )
  }
}

const ContributionTable = (props) => {
  const { contributions } = props
  return (
    <table className='purpleHorizon'>
      <thead>
        <tr>
          <th>Artist</th>
          <th>Goal Amount</th>
          <th>Contributed (ETH)</th>
        </tr>
      </thead>
      <tbody>
        { contributions.map(c =>
          <tr key={c.id}>
            <td>{c.artist}</td>
            <td>{c.goal}</td>
            <td>{c.contributed}</td>
          </tr>
        )
        }
      </tbody>
    </table>
  )
}
