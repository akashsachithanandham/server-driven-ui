import React, {useState} from 'react';
import handleInteractions from '../../helpers/InteactionHandlers/Filters/handleInteractions';
import Modal from 'react-modal'
export const FilterComponent = (props) => {
    const [isopen, setIsopen] = useState(false);
    const [whichCta, setWhichCta] = useState(null);
    
    const openModal = (cta,e) =>{
        console.log("clicked cta ", cta);
        
        setIsopen(true);
        setWhichCta(cta);
    }
    const closeModal = (e) => {
       
        setIsopen(false);
        setWhichCta(null);
    }
    let {content, interaction_props} = props;

    const firstCtaClickHandler = (interaction_props, behaviour, e) => {
        const interaction_payload = {
            openModal,
            closeModal,
            cta_clicked: 1,
            interaction_props,
            behaviour: behaviour,
            element_type: 'first_cta',
            interaction_type: 'interacted'
          }
        handleInteractions(interaction_payload);
    }
    const secondCtaClickHandler = (interaction_props, behaviour, e) => {
        const interaction_payload = {
            openModal,
            closeModal,
            cta_clicked: 2,
            interaction_props,
            behaviour: behaviour,
            element_type: 'second_cta',
            interaction_type: 'interacted'
          }
        handleInteractions(interaction_payload);
      }
      const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height: '50%',
          width: '50%'
        },
      };
   
    return (
        <div>
            <div className="filterCTAs">
            <div className="filterCTA">
              
               <button onClick={(e) => firstCtaClickHandler(interaction_props,"open",e)}>
                    {content.first_cta_text}
                    </button>
            </div>
            <div className="filterCTA">
               <button onClick={(e) => secondCtaClickHandler(interaction_props,"open",e)}>
                    {content.second_cta_text}</button>
            </div>
            </div>
            
            <Modal
            isOpen={isopen}
            onRequestClose={firstCtaClickHandler.bind(null, interaction_props,"close")}
            style={customStyles}
            contentLabel="Example Modal"
            >
                <h2>Hello</h2>
        <button className="modalClose" onClick={firstCtaClickHandler.bind(null, interaction_props,"close")}>close</button>
        <div>I am a modal</div>
            </Modal>
        </div>
    )
}
export default FilterComponent