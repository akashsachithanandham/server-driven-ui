import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import Cta from './Cta';
import GeneralInfo from './GeneralInfo';
import Header from './Header';

import handleInteractions from '../../helpers/InteactionHandlers/DoctorCard/handleInteractions';

const DoctorCard = props => {
  const { content, view_props, interaction_props, id = '' } = props;
  const {
    title,
    subtitle,
    header_line_1,
    header_line_2,
    body_line_1,
    body_line_2,
    body_line_3,
    primary_cta_text
  } = content;

  let is_card_viewed = false;

  const primaryCtaClickHandler = (interaction_props, e) => {
    const interaction_payload = {
      interaction_props,
      element_type: 'primary_cta',
      interaction_type: 'interacted'
    }

    handleInteractions(interaction_payload);
  }

  const headerSectionClickHandler = (interaction_props) => {
    const interaction_payload = {
      interaction_props,
      element_type: 'header',
      interaction_type: 'interacted'
    }

    handleInteractions(interaction_payload);
  }

  const handleCardViewEvent = (isVisible) => {
    if (isVisible && !is_card_viewed) {
      is_card_viewed = true;

      const view_payload = {
        interaction_props: view_props,
        element_type: 'card_1',
        interaction_type: 'Viewed'
      }

      console.warn(id, 'View event triggered');
      handleInteractions(view_payload);
      return;
    }

    return;
  }

  const sensor_props = {
    onChange: handleCardViewEvent,
    minTopValue: 200,
    delayedCall: true,
    partialVisibility: true,
    intervalCheck: false,
    scrollCheck: true
  }

  const header_props = {
    title: title,
    subtitle: subtitle,
    header_line_1: header_line_1,
    header_line_2: header_line_2
  }

  const general_info_props = {
    body_line_1: body_line_1,
    body_line_2: body_line_2,
    body_line_3: body_line_3
  }

  const cta_props = {
    primary_cta_text: primary_cta_text
  }

  return (
    <VisibilitySensor {...sensor_props}>
      <div className='doctor-card-wrapper'>

        <Header
          content={header_props}
          handleClick={headerSectionClickHandler.bind(null, interaction_props)}
        />
        <hr className='doctor-card-general-info__separator' />

        <GeneralInfo content={general_info_props} />

        <Cta
          content={cta_props}
          handleClick={primaryCtaClickHandler.bind(null, interaction_props)}
        />

      </div>
    </VisibilitySensor>
  )
}

export default DoctorCard;
