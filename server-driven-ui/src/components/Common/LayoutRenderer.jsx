import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import RenderElement from './RenderElement';
import { section_type } from '../../constants/misc';

const LayoutRenderer = props => {
  const { data, sections } = props;

  const { type, section_details } = data;

  switch (type) {
    case section_type.multi_section:
      return (
        <Fragment>
          {
            section_details.map((item, index) => {
              const { section_id } = item;
              return (
                <RenderElement
                  key={`${index}+${section_id}`}
                  sections={sections}
                  section_id={section_id}
                />
              )
            })
          }
        </Fragment>
      )

    case section_type.single_section:
      return (
        <RenderElement
          sections={sections}
          section_id={section_details.section_id}
        />
      )

    default:
      break;
  }
}

LayoutRenderer.propTypes = {
  data: PropTypes.object,
  sections: PropTypes.array
}

export default LayoutRenderer;
