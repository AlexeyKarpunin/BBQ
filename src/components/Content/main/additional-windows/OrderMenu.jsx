import React from 'react';
import BasketMenu from './BasketMenu.jsx';
import PropTypes from 'prop-types';

class OrderMenu extends React.Component {
    constructor (props) {
        super(props);
        this.doOrder = this.doOrder.bind(this);
    }

    componentDidMount() {
        const header = document.querySelector('.header');
        const body = document.querySelector('.body');
        const basketMenu = document.querySelector('.basket__page');
        const closeBtn = document.querySelector('.close__basket__window');
        const pushOrderBtn = document.querySelector('.basket__btn_push_order');

        pushOrderBtn.classList.add('basket--non--active');
        closeBtn.classList.add('basket--non--active');
        basketMenu.classList.remove('basket--non--active');
        basketMenu.classList.add('main-basket__window');
        basketMenu.classList.remove('basket__page');
        header.classList.add('additional__menu__black__ground');
        body.classList.add('additional__menu__container');
    }

    componentWillUnmount() {
        const header = document.querySelector('.header');
        const body = document.querySelector('.body');
        const basketMenu = document.querySelector('.main-basket__window');
        const closeBtn = document.querySelector('.close__basket__window');
        const pushOrderBtn = document.querySelector('.basket__btn_push_order');
     
        closeBtn.classList.remove('basket--non--active');
        basketMenu.classList.add('basket--non--active');
        basketMenu.classList.add('basket__page');
        pushOrderBtn.classList.remove('basket--non--active');
        basketMenu.classList.remove('main-basket__window');
        header.classList.remove('additional__menu__black__ground');
        body.classList.remove('additional__menu__container');
    }

    
    doOrder () {
        const name = document.querySelector('#name');
        const number = document.querySelector('#number');
        const adress = document.querySelector('#adress');

       
        let validation = true;
        /* Name validation */
        const nameExp = /[^ a-zа-яё]/ui;
        if (name.classList.contains('error__border')) name.classList.remove('error__border');

        if (name.value.length === '' || name.value.length < 2) {
            name.classList.add('error__border');
            validation = false;
        }

        if (name.value.match(nameExp)) {
            name.classList.add('error__border');
            validation = false;
        }
        console.log(name.classList.contains('error__border'));
      
        /*Number validation*/
        const numberExp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        if (number.classList.contains('error__border')) number.classList.remove('error__border');

        if (number.value[0] !== '+' || number.value.length < 12) {
            number.classList.add('error__border');
            validation = false;
        }

        if (!number.value.match(numberExp)) {
            number.classList.add('error__border');
            validation = false;
        }
        /* Adress */
        if (adress.classList.contains('error__border')) adress.classList.remove('error__border');
        if (!adress.value || adress.value.length < 5) {
            adress.classList.add('error__border');
            validation = false;
        }

        const myProducts = JSON.parse(sessionStorage.getItem('myProducts'));
        if (myProducts.length < 1) {
            validation = false;
        }

        if(!validation) return;
        const {orderClick} = this.props;
        orderClick();
      
    }
    render () {
        return (
            <section className="main-basket__section">
                <div className="main-basket__container">
                    <h1 className="main-basket__header">Оформление заказа</h1>

                    <div className="main-basket__info__item">
                        <span>Ваше имя</span><br></br>
                        <input id='name' className="main-basket__input__text" type='text' maxLength='20'></input>
                    </div>

                    <div className="main-basket__info__item">
                        <span>Телефон</span><br></br>
                        <input id="number" className="main-basket__input__text" type='text'placeholder="+7____-____-___-___" maxLength='12'></input>
                    </div>

                    <div className="main-basket__info__item">
                        <span>Как вы хотите получить заказ ?</span><br></br>
                        <div className="radio">
                            <input className="radio__input" name='delivery' type='radio' id="delivery-btn"></input>
                            <label className="radio__label" htmlFor="delivery-btn">Доставка</label>
                        </div>
                        <div className="radio">
                            <input className="radio__input" name='delivery' type='radio' id="your-self-btn" defaultChecked></input>
                            <label className="radio__label" htmlFor="your-self-btn">Самовывоз</label>
                        </div>
                    </div>

                    <div className="main-basket__info__item adress__item">
                        <span>Адрес доставки:</span><br></br>
                        <input id='adress' className="main-basket__input__text" type='text' placeholder="Например: 3-я Зеленгинская, 40(в), 1,5,4б" maxLength="100"></input>
                    </div>
                    <div className="main-basket__info__item">
                        <span>Какой способ оплаты ?</span><br></br>
                        <div className="radio">
                            <input className="radio__input" name='pay' type='radio' id="cash"></input>
                            <label className="radio__label" htmlFor="cash">Наличные</label>
                        </div>
                        <div className="radio">
                            <input className="radio__input" name='pay' type='radio' id="card" defaultChecked></input>
                            <label className="radio__label" htmlFor="card">Карта</label>
                        </div>
                    </div>
                    <div className="main-basket__info__item comment__item">
                        <span>Ваш комментарий:</span><br></br>
                        <textarea className="main-basket__text__area" placeholder="Напишите дополнительную и уточняющую информацию, если считаете нужным это указать (необязательно)"></textarea>
                    </div>
                    <button onClick={this.doOrder} className="btn main-basket__btn">Оформить заказ</button>
                </div>
                <BasketMenu />
            </section>
        );
    }
}

OrderMenu.propTypes = {
    orderClick: PropTypes.func,
};

export default OrderMenu;