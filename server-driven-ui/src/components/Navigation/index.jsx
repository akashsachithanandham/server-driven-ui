import React from 'react'

const Navigation = props => {
  const { title = 'Choose Doctor' } = props;

  return (
    <div className='navigation'>
      <p className='back-cta'>←</p>
      <div className='title'>{title}</div>
    </div>
  )
}

export default Navigation
