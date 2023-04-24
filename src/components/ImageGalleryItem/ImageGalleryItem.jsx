import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
    
    render() {
        const {webImage, largeImage, tags, openModal} = this.props;
        return (
            <li className={css.ImageGalleryItem} 
                onClick={() => { 
                    openModal({largeImage: largeImage, tags: tags});
                    }}
                    >
                <img src={webImage} alt={tags} />
            </li>
        );
    }
}

ImageGalleryItem.propTypes = {
    webImage: PropTypes.string,
    largeImage: PropTypes.string,
    tags: PropTypes.string,
    openModal: PropTypes.func,
};