import React from 'react';

class Gallery extends React.Component {
    render () {
        return (
            <section className="gallery" id="gallery">
                <h2 className="gallery__title">Галлерея кафе</h2>
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
                <a className="gallery__btn btn" href="">Перейти к галерее</a>
            </section>
        );
    }
}

export default Gallery;