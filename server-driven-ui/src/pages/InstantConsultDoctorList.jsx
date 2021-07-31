import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

import Navigation from '../components/Navigation';
import Body from '../components/Body';
import Footer from '../components/Footer';
import DoctorCard from '../components/DoctorCard';

const InstantConsultDoctorList = props => {
  const { layout, sections } = props.res || {};

  const {
    nav,
    body,
    footer
  } = layout || {};

  return (
    <Fragment>
      <Navigation data={nav} sections={sections} />
      <Body data={body} sections={sections} />
      <Footer data={footer} sections={sections} />
      {/* <DoctorCard /> */}
    </Fragment>
  )
}

InstantConsultDoctorList.propTypes = {

}

export default InstantConsultDoctorList;
