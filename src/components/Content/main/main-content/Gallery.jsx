import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: props.header,
            link: props.link,
        };
    }
    render () {
        return (
            <section className="gallery" id="gallery">
                <h2 className="gallery__title">{this.state.header}</h2>
                <ul className="gallery__list">
                    <li className="gallery__item">
                        <img src='../../../img/gallery1.png' alt=""></img>
                    </li>
                    <li className="gallery__item">
                        <img src='../../../img/gallery2.png' alt=""></img>
                    </li>
                    <li className="gallery__item">
                        <img src='../../../img/gallery3.png' alt=""></img>
                    </li>
                    <li className="gallery__item">
                        <img src='../../../img/gallery4.png' alt=""></img>
                    </li>
                    <li className="gallery__item">
                        <img src='../../../img/gallery5.png' alt=""></img>
                    </li>
                    <li className="gallery__item">
                        <img src='../../../img/gallery6.png' alt=""></img>
                    </li>
                </ul>
                <Link to={this.state.link} className="gallery__btn btn" href="">Перейти к галерее</Link>
            </section>
        );
    }
}

Gallery.propTypes = {
    header: PropTypes.string,
    link: PropTypes.string,
};

export default Gallery;