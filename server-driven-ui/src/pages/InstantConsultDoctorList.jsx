import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

import LayoutRenderer from '../components/Common/LayoutRenderer';
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

      {/* Nav  */}
      <LayoutRenderer data={nav} sections={sections} />

      {/* Body */}
      <LayoutRenderer data={body} sections={sections} />

      {/* Footer */}
      <LayoutRenderer data={footer} sections={sections} />

      {/* Since there is no data to render footer hence hard-coding it  */}
      <Footer />

    </Fragment>
  )
}

InstantConsultDoctorList.propTypes = {
  res: PropTypes.object
}

export default InstantConsultDoctorList;
