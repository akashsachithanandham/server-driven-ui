import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

import Navigation from '../components/Navigation';
import Body from '../components/Body';
import Footer from '../components/Footer';

const InstantConsultDoctorList = props => {
  const { res } = props;
  const { layout, sections } = res || {};

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
    </Fragment>
  )
}

InstantConsultDoctorList.propTypes = {
  res: PropTypes.object
}

export default InstantConsultDoctorList;
