import React from 'react'
import handleInteractions from '../../helpers/InteactionHandlers/Navigation/handleInteractions';

const Navigation = props => {
  const { content, interaction_props } = props;
  const { title = 'Consult Doctor' } = content || {};

  const handleBackCtaClick = () => {
    
    const interaction_payload = {
      interaction_props,
      element_type: 'back_cta',
      interaction_type: 'interacted'
    }

    handleInteractions(interaction_payload);
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
