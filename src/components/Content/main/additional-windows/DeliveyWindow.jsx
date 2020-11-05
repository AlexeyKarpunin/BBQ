import React from 'react';
import Delivery from '../main-content/Delivery.jsx';

class DeliveryWindow extends React.Component {

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
            if (navItem.getAttribute('data-link') === '#delivery') {
                navItem.classList.add('navigation__link--active');
            }
        });
    }

    disableLink (arr) {
        arr.forEach((navItem) => {
            if (navItem.getAttribute('data-link') === '#delivery') {
                navItem.classList.remove('navigation__link--active');
            }
        });
    }

    render () {
        return (
            <section>
                <Delivery />
                <h1 className="additional__delivery__header">УСЛОВИЯ ЗАКАЗА И ДОСТАВКИ БЛЮД</h1>
                <ul className="additional__delivery__text">
                    <li className="additional__staks__list__item"><div className="staks__list__item__border"></div>Доставка по городу бесплатная при заказе на сумму от 600 руб.</li>
                    <li className="additional__staks__list__item"><div className="staks__list__item__border"></div>При заказе на сумму менее 600 руб., стоимость доставки составляет 100 рублей по городу, 150 рублей в отдаленные районы.</li>
                    <li className="additional__staks__list__item"><div className="staks__list__item__border"></div>Доставка в отдаленные районы при сумме заказа от 800 рублей бесплатная. </li>
                    <li className="additional__staks__list__item"><div className="staks__list__item__border"></div>Если сумма заказа превышает 2500 рублей, то необходимо внести предоплату или оплатить заказ на сайте. </li>
                    <li className="additional__staks__list__item"><div className="staks__list__item__border"></div>Более подробную информацию о районах доставки уточняйте у оператора.</li>
                    <li className="additional__staks__list__item"><div className="staks__list__item__border"></div>Компания оставляет за собой право изменять стоимость блюд и напитков. 
Просьба уточнять информацию у операторов в момент заказа. 
Описание блюд в меню не содержит детальной информацию входящих в состав ингредиентах. </li>
                </ul>
            </section>
        );
    }
}

export default DeliveryWindow;