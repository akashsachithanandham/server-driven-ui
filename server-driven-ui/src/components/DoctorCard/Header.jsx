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
    <div className='doctor-card-header u-d-flex u-al-center' onClick={handleClick} >

      <div className='profile-img'>
        <img src={assets_urls.default_doctor_img} width="100%" alt="Doctor ProfileImage"></img>
      </div>

      <div className='info'>
        <p className='title'>{title}</p>
        <p>{subtitle}</p>
        <p dangerouslySetInnerHTML={getMarkUp(header_line_1)} />
        <p dangerouslySetInnerHTML={getMarkUp(header_line_2)} />
      </div>

      <div className='icon'>
        <img src={assets_urls.right_icon} alt="right icon" />
      </div>

    </div>
  )
}

export default Header;
