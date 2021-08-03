import React from 'react'

const Cta = props => {
  const { handleClick, content } = props;
  const { primary_cta_text } = content || {};

  return (
    <div className='cta'>
      <button
        className='consult-cta'
        onClick={handleClick}
      >
        {primary_cta_text}
      </button>
    </div>
  )
}

export default Cta;

