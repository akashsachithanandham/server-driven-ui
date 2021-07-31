import performActions from "./performActions";

const handleInteractions = (props) => {
  const { interaction_props, element_type } = props;
  const { actions = [], events = [] } = interaction_props;


  actions.forEach(item => {
    const { element, data, type } = item;

    switch (element) {
      case element_type:
        performActions({ type, data, element_type });
        break;

      default:
        break;
    }
  })

  events.forEach(item => {
    const { type, data, element } = item;
    switch (element) {
      case element_type:
        performActions({ type, data, element_type });
        break;

      default:
        break;
    }
  })
}

export default handleInteractions;