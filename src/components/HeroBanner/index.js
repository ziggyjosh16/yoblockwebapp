import React from 'react'
import musicLogo from '../../media/musical-note.svg'
import contractLogo from '../../media/signing-the-contract.svg'
import crowdfundLogo from '../../media/crowdfunding.svg'
import './HeroBanner.css'

export default () => {
  return (
    <div className='hero-main'>
      <div>
        <img src={musicLogo} alt='' />
        Connecting support directly to the artist.
      </div>
      <div>
        <img src={contractLogo} alt='' />
        Smart Contracts.
      </div>
      <div>
        <img src={crowdfundLogo} alt='' />
        Crowdfunding made easy.
      </div>
    </div>
  )
}
