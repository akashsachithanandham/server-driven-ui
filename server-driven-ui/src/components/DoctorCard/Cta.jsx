import React from 'react'

const Cta = props => {
  const { handleClick, content } = props;
  const { primary_cta_text } = content || {};

  return (
    <div className='doctor-card-cta-wrapper'>
      <button
        className='cta primary'
        onClick={handleClick}
      >
        {primary_cta_text}
      </button>
    </div>
  )
}

export default Cta;

