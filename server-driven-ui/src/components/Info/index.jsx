import React from 'react';

export const InfoComponent = (props) => {
    let {content} = props;
    return (
        <div className='header-section'>
            <p className="header">{content.title}</p>
            <p className="sub-header">{content.subtitle}</p>
        </div>
    )
}
export default InfoComponent