import React from 'react';
import handleInteractions from '../../helpers/InteactionHandlers/Filters/handleInteractions';

export const FilterComponent = (props) => {
    let {content, interaction_props} = props;

    const firstCtaClickHandler = (interaction_props, e) => {
        const element_type = 'first_cta';
        handleInteractions({ interaction_props, element_type });
    }
    const secondCtaClickHandler = (interaction_props, e) => {
        const element_type = 'second_cta';
        handleInteractions({ interaction_props, element_type });
      }
    
    return (
        <div>
            <div className="filterCTAs">
            <div className="filterCTA">
                <button onClick={firstCtaClickHandler.bind(null, interaction_props)}>
                    {content.first_cta_text}
                    </button>
            </div>
            <div className="filterCTA">
                <button onClick={secondCtaClickHandler.bind(null, interaction_props)}>
                    {content.second_cta_text}</button>
            </div>
            </div>
        </div>
    )
}
export default FilterComponent