import React from 'react';
import BasketMenu from './BasketMenu.jsx';

const DEFAUL__STATE = {

};

class MainBasket extends React.Component {
    constructor (props) {
        super (props);
        this.state = DEFAUL__STATE;
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

    render () {
        return (
            <section className="main-basket__section">
                <div className="main-basket__container">
                    <h1 className="main-basket__header">Оформление заказа</h1>

                    <div className="main-basket__info__item">
                        <span>Ваше имя</span><br></br>
                        <input className="main-basket__input__text" type='text'></input>
                    </div>

                    <div className="main-basket__info__item">
                        <span>Телефон</span><br></br>
                        <input className="main-basket__input__text" type='text'placeholder="+7____-____-___-___"></input>
                    </div>

                    <div className="main-basket__info__item">
                        <span>Как вы хотите заказывать ?</span><br></br>
                        <div className="radio">
                            <input className="radio__input" name='delivery' type='radio' id="delivery-btn"></input>
                            <label className="radio__label" htmlFor="delivery-btn">Доставка</label>
                        </div>
                        <div className="radio">
                            <input className="radio__input" name='delivery' type='radio' id="your-self-btn" defaultChecked></input>
                            <label className="radio__label" htmlFor="your-self-btn">Самовывоз</label>
                        </div>
                    </div>

                    <div>
                        <span>Адрес доставки:</span><br></br>
                        <input className="main-basket__input__text" type='text' placeholder="Например: 3-я Зеленгинская, 40(в), 1,5,4б"></input>
                    </div>
                    <div className="main-basket__info__item">
                        <span>Как вы хотите заказывать ?</span><br></br>
                        <div className="radio">
                            <input className="radio__input" name='pay' type='radio' id="cash"></input>
                            <label className="radio__label" htmlFor="cash">Наличные</label>
                        </div>
                        <div className="radio">
                            <input className="radio__input" name='pay' type='radio' id="card" defaultChecked></input>
                            <label className="radio__label" htmlFor="card">Карта</label>
                        </div>
                    </div>
                    <div className="main-basket__info__item">
                        <span>Ваш комментарий:</span><br></br>
                        <textarea className="main-basket__text__area" placeholder="Напишите дополнительную и уточняющую информацию, если считаете нужным это указать (необязательно)"></textarea>
                    </div>
                    <button className="btn main-basket__btn">Оформить заказ</button>
                </div>
                <BasketMenu />
            </section>
        );
    }
}

export default MainBasket;