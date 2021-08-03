
import pushPel from "./pushPel";
import { performModalOpen, performModalClose } from "./performModalFunctionality";

const performActions = (action_payload) => {
  switch (action_payload.type) {
    case 'open_bottom_sheet':
        if(action_payload.behaviour === "open"){
            let payload={
                cta_clicked: action_payload.cta_clicked,
                openModal: action_payload.openModal,
            }
            console.log("action_payload: ",action_payload)
            performModalOpen(payload)
        }
        else{
            let payload={
                closeModal: action_payload.closeModal,
            }
            performModalClose(payload)
        }
     
      break;

    case 'pel':
      pushPel(action_payload.data);
      break;

    default:
      break;
  }

  return;
}

export default performActions;