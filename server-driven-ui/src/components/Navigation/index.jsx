import React from 'react'
import handleInteractions from '../../helpers/InteactionHandlers/Navigation/handleInteractions';

const Navigation = props => {
  const { title = 'Choose Doctor', interaction_props, view_props } = props;

  const handleBackCtaClick = () => {
    const element_type = 'back_cta';
    handleInteractions({ interaction_props, element_type });
  }

  return (
    <div className='navigation'>
      <p
        className='back-cta'
        onClick={handleBackCtaClick.bind(null, interaction_props)}>
        ←
      </p>
      <div className='title'>{title}</div>
    </div>
  )
}

export default Navigation
