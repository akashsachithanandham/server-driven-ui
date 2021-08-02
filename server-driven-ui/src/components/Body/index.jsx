import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { section_type } from '../../constants/misc';
import RenderElement from '../Common/RenderElement';
import DoctorComponent  from './DoctorComponent';
import FilterComponent from '../Filters';

const Body = props => {
  const { data, sections } = props;

  let filter_section = sections.find((section)=>{
    if(section.id === "filters"){
      return section;
    }
  })
  return(
    <div>
      <FilterComponent data= {data} sections = {filter_section} />

      <DoctorComponent data= {data} sections={sections}/>
    </div>
  );
  
  
  
}

Body.propTypes = {
  data: PropTypes.object,
  sections: PropTypes.array
}

export default Body
