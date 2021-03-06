import performRedirection from "./performRedirection";
import pushPel from "./pushPel";

const performActions = ({ type, data }) => {
  switch (type) {
    case 'redirect':
      performRedirection(data);
      break;

    case 'pel':
      pushPel({ data });
      break;

    default:
      break;
  }

  return;
}

export default performActions;