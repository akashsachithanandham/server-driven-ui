import React, { useState } from 'react';
import handleInteractions from '../../helpers/InteactionHandlers/Filters/handleInteractions';
import Modal from 'react-modal'
export const FilterComponent = (props) => {
    const [isopen, setIsopen] = useState(false);
    const [whichCta, setWhichCta] = useState("first");

    const openModal = (cta, e) => {
        console.log("clicked cta ", cta);

        setIsopen(true);
        setWhichCta(cta);
    }
    const closeModal = (e) => {

        setIsopen(false);
        setWhichCta(null);
    }
    let { content, interaction_props } = props;

    const ctaClickHandler = (payload, e) => {
        let cta_clicked = 1;
        if (payload.element_type === "first_cta") {
            cta_clicked = 1;
        }
        else if (payload.element_type === "second_cta") {
            cta_clicked = 2;
        }
        let interaction_props = payload.interaction_props
        const interaction_payload = {
            openModal,
            closeModal,
            cta_clicked: cta_clicked,
            interaction_props,
            behaviour: payload.behaviour,
            element_type: payload.element_type,
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
    const handleClose = (interaction_props) => {
        let request_from = "first_cta"
        if (whichCta === 1) {
            request_from = "first_cta"
        }
        else if (whichCta === 2) {
            request_from = "second_cta"
        }
        ctaClickHandler({interaction_props:interaction_props, behaviour: "close", element_type:request_from})
    }

    return (
        <div>
            <div className="filterCTAs">
                <div className="filterCTA">

                    <button onClick={(e) => ctaClickHandler({interaction_props:interaction_props,behaviour: "open",element_type: "first_cta"}, e)}>
                        {content.first_cta_text}
                    </button>
                </div>
                <div className="filterCTA">
                    <button onClick={(e) => ctaClickHandler({interaction_props:interaction_props,behaviour: "open",element_type: "second_cta"}, e)}>
                        {content.second_cta_text}</button>
                </div>
            </div>

            <Modal
                isOpen={isopen}
                onRequestClose={(e) => handleClose(interaction_props, e)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>Hello</h2>
                <button className="modalClose" onClick={(e) => handleClose(interaction_props, e)}>close</button>
                <div>{whichCta} CTA</div>
            </Modal>
        </div>
    )
}
export default FilterComponent