import React from 'react';

const BottomSheetModal = props => {

  return (
    <div className='bottom-sheet-modal-wrapper'>

      <div className='bottom-sheet-modal-wrapper__content'>

        <div className='bottom-sheet-modal-header'>
          
        </div>

        <div className='bottom-sheet-modal-body'>
          {props.children}
        </div>

      </div>
    </div>
  )
}

export default BottomSheetModal;
