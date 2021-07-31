import React from 'react';

const DoctorCard = props => {

  const { content } = props;

  const {
    title,
    subtitle,
    header_line_1,
    header_line_2,
    header_line_2_icon,
    body_line_1,
    body_line_1_icon,
    body_line_2,
    body_line_2_icon,
    body_line_3,
    body_line_3_icon,
    primary_cta_text
  } = content;

  const default_doctor_img = 'https://i.pinimg.com/originals/6a/a0/b1/6aa0b1b78947c24abc8a2f2fba3bcf74.png'
  const right_icon = 'https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-5/256/navigate-right-icon.png';

  return (
    <div className='doctor-card-wrapper'>

      {/* Doctor header */}
      <div style={{ display: 'flex', alignItems: 'center' }} >

        <div style={{ width: "30%" }}>
          <img src={default_doctor_img} width="100%" />
        </div>

        <div style={{ width: "50%", paddingLeft: '16px' }}>
          <p>{title}</p>
          <p>{subtitle} </p>
          <p>{header_line_1}</p>
          <p>{header_line_2}</p>
        </div>

        <div style={{ width: "20%", textAlign: 'center' }}>
          <img src={right_icon} height='20px' width='20px' />
        </div>
      </div>

      {/* General Info */}
      <div style={{ margin: '20px 0px' }}>
        <p>{body_line_1}</p>
        <p>{body_line_2}</p>
        <p>{body_line_3}</p>
      </div>

      {/* CTA's */}
      <div>
        <button style={{ border: 'none', color: 'white', background: 'purple', padding: "8px", borderRadius: '4px', fontWeight: 'bold' }}>
          {primary_cta_text}
        </button>
      </div>
    </div>
  )
}

export default DoctorCard;
