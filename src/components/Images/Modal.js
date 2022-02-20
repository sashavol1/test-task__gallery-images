import React from 'react';

const Modal = ({image, closeModal}) => {
    return (
        <div> 
            <div className='modal__wrapper'>
                <div className='modal'>
                    <a 
                        className='modal__close' 
                        onClick={() => closeModal(null)}
                    >
                        close
                    </a>
                    <img src={image} />
                </div>
            </div>
        </div>
    );
};

export default Modal;