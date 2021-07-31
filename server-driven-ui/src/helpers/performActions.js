import performReactions from "./performRedirection";
import pushPel from "./pushPel";

const performActions = ({ type, data, element_type }) => {
  switch (type) {
    case 'redirect':
      performReactions(data);
      break;

    case 'pel':
      pushPel(data);
      break;

    default:
      break;
  }

  return;
}

export default performActions;