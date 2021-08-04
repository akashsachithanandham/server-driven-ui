import React from 'react'

const GeneralInfo = props => {

  const { content } = props;
  const {
    body_line_1,
    body_line_2,
    body_line_3
  } = content || {};

  return (
    <div className='doctor-card-general-info'>
      {body_line_1 && <p>{body_line_1}</p>}
      {body_line_2 && <p>{body_line_2}</p>}
      {body_line_3 && <p>{body_line_3}</p>}
    </div>
  )
}

export default GeneralInfo
