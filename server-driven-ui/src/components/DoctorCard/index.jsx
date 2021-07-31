import React from 'react';
import { assets_urls } from '../../constants/misc';
import handleInteractions from '../../helpers/handleInteractions';

const DoctorCard = props => {

  const { content, view_props, interaction_props } = props;

  const {
    title,
    subtitle,
    header_line_1,
    header_line_2,
    // header_line_2_icon,
    body_line_1,
    // body_line_1_icon,
    body_line_2,
    // body_line_2_icon,
    body_line_3,
    // body_line_3_icon,
    primary_cta_text
  } = content;

  const button_style = {
    border: 'none',
    color: 'white',
    background: 'purple',
    padding: "8px 20px",
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '12px'
  }

  const getMarkUp = (content) => {
    return { __html: content };
  }

  const primaryCtaClickHandler = (interaction_props, e) => {
    const element_type = 'primary_cta';
    handleInteractions({ interaction_props, element_type });
  }

  const headerSectionClickHandler = (interaction_props) => {
    const element_type = 'header';
    handleInteractions({ interaction_props, element_type });
  }

  return (
    <div className='doctor-card-wrapper'>

      {/* Doctor header */}
      <div className='doctor-card-header'
        style={{ display: 'flex', alignItems: 'center' }}
        onClick={headerSectionClickHandler.bind(null, interaction_props)}
      >

        <div style={{ width: "30%" }}>
          <img src={assets_urls.default_doctor_img} width="100%" alt="Doctor ProfileImage"></img>
        </div>

        <div style={{ width: "60%", paddingLeft: '10px' }}>
          <p>{title}</p>
          <p>{subtitle} </p>
          <p dangerouslySetInnerHTML={getMarkUp(header_line_1)} />
          <p>{header_line_2}</p>
        </div>

        <div style={{ width: "10%", textAlign: 'center' }}>
          <img src={assets_urls.right_icon} height='20px' width='20px' alt="right icon" />
        </div>

      </div>

      {/* General Info */}
      <div style={{ margin: '20px 0px' }}>
        <p dangerouslySetInnerHTML={getMarkUp(body_line_1)} />
        <p>{body_line_2}</p>
        <p>{body_line_3}</p>
      </div>

      {/* CTA's */}
      <div>
        <button
          style={button_style}
          onClick={primaryCtaClickHandler.bind(null, interaction_props)}
        >
          {primary_cta_text}
        </button>
      </div>
    </div>
  )
}

export default DoctorCard;
