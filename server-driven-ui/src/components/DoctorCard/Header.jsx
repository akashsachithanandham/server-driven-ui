import React from 'react';

import getMarkUp from '../../helpers/getMarkUp';
import { assets_urls } from '../../constants/misc';

const Header = props => {
  const { handleClick, content } = props;
  const {
    title,
    subtitle,
    header_line_1,
    header_line_2
  } = content;

  return (
    <div className='u-d-flex u-al-center' onClick={handleClick} >

      {/* Doctor Profile Image */}
      <div style={{ width: "30%" }}>
        <img src={assets_urls.default_doctor_img} width="100%" alt="Doctor ProfileImage"></img>
      </div>

      {/* Doctor Info */}
      <div style={{ width: "60%", paddingLeft: '10px' }}>
        <p className='title'>{title}</p>
        <p>{subtitle}</p>
        <p dangerouslySetInnerHTML={getMarkUp(header_line_1)} />
        <p dangerouslySetInnerHTML={getMarkUp(header_line_2)} />
      </div>

      {/* Right navigation */}
      <div style={{ width: "10%", textAlign: 'center' }}>
        <img src={assets_urls.right_icon} height='20px' width='20px' alt="right icon" />
      </div>

    </div>
  )
}

export default Header;
