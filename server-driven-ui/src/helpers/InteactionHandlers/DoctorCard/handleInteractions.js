import formatDoctorCardPelPayload from "../../pel/FormatDoctorCardPELPayload";
import performActions from "../../performActions";

const handleInteractions = (props) => {
  const { interaction_props, element_type, interaction_type = '' } = props;
  const { actions = [], events = [] } = interaction_props;

  actions.forEach(item => {
    const { element, data, type } = item;
    if (element === element_type) {
      performActions({ type, data });
    }
  })

  events.forEach(item => {
    const { type, data, element } = item;
    if (element === element_type) {

      const payload = {
        data, 
        interaction_type,
        element_type
      };

      const pel_payload = formatDoctorCardPelPayload(payload);
      performActions({ type, data: pel_payload });
    }
  })
}

export default handleInteractions;
