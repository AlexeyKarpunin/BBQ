import React from 'react';

class Stoks extends React.Component {

    componentDidMount() {
        const header = document.querySelector('.header');
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));
        
        header.classList.add('additional__menu__black__ground');
        this.activationLink(navItemsArr);
    }

    componentWillUnmount() {
        const header = document.querySelector('.header');
        const navItemsArr = Array.from(document.querySelectorAll('.navigation__link'));

        this.disableLink(navItemsArr);
        header.classList.remove('additional__menu__black__ground');
    }

    activationLink(arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#stoks') {
                navItem.classList.add('navigation__link--active');
            }
        });
    }

    disableLink (arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#stoks') {
                navItem.classList.remove('navigation__link--active');
            }
        });
    }
    
    render () {
        const imgStyle = {
            'minHeight': '250px',
        };

        return (
            <section >
                <div className="stak__picture">
                    <img style={imgStyle} src='../../../../img/banner3.jpg' alt="stocks"></img>
                    <h1 className="stak__picture__text">Наши акции</h1>
                </div>
                <ul className="additional__staks__list">
                    <li className="additional__staks__list__item"><div className="staks__list__item__border"></div>Крепкий алкоголь с собой</li>
                    <li className="additional__staks__list__item"><div className="staks__list__item__border"></div>С Пн-Чт скидка 10% на основное меню</li>
                    <li className="additional__staks__list__item"><div className="staks__list__item__border"></div>Каждую среду день мяса. При заказе шашлыка,<br></br>фри, кока-кола в подарок</li>
                    <li className="additional__staks__list__item"><div className="staks__list__item__border"></div>Сделав заказ с нашего сайты, Вы получете <br></br>всегда вкусные подарки</li>
                    <li className="additional__staks__list__item"><div className="staks__list__item__border"></div>Ежедненвно 20% на кофе с собой</li>
                    <li className="additional__staks__list__item"><div className="staks__list__item__border"></div>Каждое воскресенье день семьи скидка 10%<br></br>на основне меню</li>
                    <li className="additional__staks__list__item"><div className="staks__list__item__border"></div>
                      Вкусные подарки на выбор при заказе: бесплатная<br></br> доставка, соус на выбор, кока-кола, лимонад, фри
                    </li>
                    <li className="additional__staks__list__item"><div className="staks__list__item__border"></div>
                      Счастливые часы Пн-Чт, Вс с 11:00 до 17:00: шампур картошки<br></br> в подарок, доставка в подарок, 
                  крепкий алкоголь с собой,<br></br> скидка на все меню 10%, сладкое угащение,<br></br> угащаем каждого гостя чаем
                    </li>
                    <li className="additional__staks__list__item"><div className="staks__list__item__border"></div>Люля-кебаб Fixprice 70руб/ 100гр</li>
                </ul>
            </section>
        ) ;
    }
}

export default Stoks;