import React from 'react'
import './Account.scss'

export default function Account() {
  const handleClick = () =>{ 
    console.log("click")
  }
  return (
    <div className='account'>
      <h2 className='account__header'>Connect with your wearables:</h2>
      <button className='account__btn' onClick={handleClick}>Link to fitbit</button>
    </div>
  )
}
