import React from 'react'
import PropTypes from 'prop-types'
import Navigation from '../components/Navigation';
import Body from '../components/Body';
import Footer from '../components/Footer';

const InstantConsultDoctorList = props => {
  const { layout } = props.res || {};

  const {
    nav,
    body,
    footer
  } = layout || {};

  return (
    <div>
        <Navigation data={nav} />
        <Body data={body} />
        <Footer data={footer} />
    </div>
  )
}

InstantConsultDoctorList.propTypes = {
  
}

export default InstantConsultDoctorList;
