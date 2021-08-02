import React from 'react'
import performActions from '../../helpers/performActions';

const Navigation = props => {
  const { title = 'Choose Doctor', interaction_props, view_props } = props;

  const handleBackCtaClick = () => {
    console.log("Handle back cta click");
    const { actions = [], events = [] } = interaction_props;

    const arr = actions.concat(events);

    arr.forEach(item => {
      const { data, type, element } = item;
      if (element === 'back_cta') {
        switch (type) {
          case 'redirect':
            performActions({ type, data });
            break;
          case 'pel':
            performActions({ type, data });
            break;
        }
      }
    })

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
