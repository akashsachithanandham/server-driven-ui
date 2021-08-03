import React from 'react'

const GeneralInfo = props => {

  const { general_info_props } = props;
  const {
    body_line_1,
    body_line_2,
    body_line_3
  } = general_info_props || {};

  return (
    <div className='general-info'>
      {body_line_1 && <p>{body_line_1}</p>}
      {body_line_2 && <p>{body_line_2}</p>}
      {body_line_3 && <p>{body_line_3}</p>}
    </div>
  )
}

export default GeneralInfo
