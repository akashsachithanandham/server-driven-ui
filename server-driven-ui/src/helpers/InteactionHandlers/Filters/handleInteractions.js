import performActions from "../../performActions";

const handleInteractions = (props) => {
  const { interaction_props, element_type } = props;
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
      performActions({ type, data });
    }
  })
}

export default handleInteractions;
