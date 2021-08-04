import React from 'react';
import { route_map } from '../constants/misc';
import InstantConsultDoctorList from '../pages/InstantConsultDoctorList';

const Renderer = props => {
  const { res } = props;
  const { id } = res || {};

  switch (id) {
    case route_map.instant_choice_doctor_list:
      return <InstantConsultDoctorList res={res} />
    
    default:
      return <h2>No Route Found</h2>;
  }
}

export default Renderer;
