import React from 'react';

class GalleryModal extends React.Component {
    render() {
        if (this.props.isOpen === false) {
            return null;
        }

        return(
            <div isOpen={this.props.isOpen} className='modal-overlay' onClick={this.props.onClick} name={this.props.name}>
                <div className='modal-body'>
                    <a className='modal-close' href='#' onClick={this.props.onClick}><span className='fa fa-times'></span></a>
                    <img src={this.props.src} />
                </div>
            </div>
        );
    };
}

export default GalleryModal;
