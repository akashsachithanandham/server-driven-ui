import React from 'react'

export const FilterComponent = (props) => {
    console.log(props.data);
    console.log(props.sections);
    let {section} = props.sections;
    let { content } = section;
    return (
        <div>
            <div className="filterCTAs">
            <div className="filterCTA">
                <button>{content.first_cta_text}</button>
            </div>
            <div className="filterCTA">
                <button>{content.second_cta_text}</button>
            </div>
            </div>
        </div>
    )
}
export default FilterComponent