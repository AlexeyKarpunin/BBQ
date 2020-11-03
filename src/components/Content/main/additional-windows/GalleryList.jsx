import React from 'react';

class GalleryList extends React.Component {
    componentDidMount() {
        window.scrollTo(pageXOffset, 0);
        const header = document.querySelector('.header');
        const body = document.querySelector('.body');
        header.classList.add('additional__menu__black__ground');
        body.classList.add('additional__menu__container');
    }

    componentWillUnmount() {
        const header = document.querySelector('.header');
        const body = document.querySelector('.body');
        header.classList.remove('additional__menu__black__ground');
        body.classList.remove('additional__menu__container');
    }
    render () {
        return (
            <section className="additional__gallery__list">
                <div className="additional__gallery__header">
                    <h2 className="">Галерея кафе</h2>
                    <div></div>
                </div>
                <div className="additional__gallery__grid">
                    <img src='../../../../img/gallery1.png'></img>
                    <img src='../../../../img/gallery2.png'></img>
                    <img src='../../../../img/gallery3.png'></img>
                    <img src='../../../../img/gallery4.png'></img>
                    <img src='../../../../img/gallery5.png'></img>
                    <img src='../../../../img/gallery6.png'></img>
                    <img src='../../../../img/gallery1.png'></img>
                    <img src='../../../../img/gallery2.png'></img>
                    <img src='../../../../img/gallery3.png'></img>
                    <img src='../../../../img/gallery4.png'></img>
                    <img src='../../../../img/gallery5.png'></img>
                    <img src='../../../../img/gallery6.png'></img>
                </div>
            </section>
        );
    }
}


export default GalleryList;