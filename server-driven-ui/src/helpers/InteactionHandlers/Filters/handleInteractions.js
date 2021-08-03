import performActions from "../../performActions";
import performModalActions from "../../performModalActions";

const handleInteractions = (props) => {
  const { interaction_props, element_type, behaviour, openModal, closeModal, cta_clicked } = props;
  const { actions = [], events = [] } = interaction_props;
    console.log("props:",props);
  actions.forEach(item => {
    const { element, data, type } = item;
    if (element === element_type) {
        let action_payload = {
            type:type,
            data:data,
            openModal,
            closeModal,
            behaviour,
            cta_clicked
        }
      performModalActions(action_payload);
    }
  })

  events.forEach(item => {
    const { type, data, element } = item;

    if (element === element_type) {
      performActions({ type, data });
    }
  })
}

export default handleInteractions;
