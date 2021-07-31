import React from 'react';

const DoctorCard = () => {

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
          <p>Doctor name </p>
          <p>Specialty </p>
          <p>Yrs of Exp</p>
          <p>Rating </p>
        </div>

        <div style={{ width: "20%", textAlign: 'center' }}>
          <img src={right_icon} height='20px' width='20px' />
        </div>
      </div>

      {/* General Info */}
      <div style={{ margin: '20px 0px' }}>
        <p>Languages</p>
        <p>Consultation</p>
        <p>Fee</p>
      </div>

      {/* CTA's */}
      <div>
        <button style={{ border: 'none', color: 'white', background: 'purple', padding: "8px", borderRadius: '4px', fontWeight: 'bold' }}>
          Consult Now
        </button>
      </div>
    </div>
  )
}

export default DoctorCard;
