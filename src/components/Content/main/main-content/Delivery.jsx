import React from 'react';

const modal = document.querySelector('.modal');
const modalSubmit = modal.querySelector('.modal__form');

class Delivery extends React.Component {
    constructor (props) {
        super(props);

        this.modalTemplate = this.modalTemplate.bind(this);
        this.click = this.click.bind(this);
    }

    componentDidMount () {
        modalSubmit.addEventListener('submit', this.submit);
    }

    componentWillUnmount () {
        modalSubmit.removeEventListener('submit', this.submit);
    }

    submit (evt) {
        evt.preventDefault();
        modalSubmit.innerHTML = '<p class="modal__title">Ваша заявка принята!</p>';
    }

    modalTemplate () {
        return (
            `<p class="modal__title">Оставьте заявку, мы вам перезвоним и уточним детали заказа</p>
         <input class="modal__input" type="text" required placeholder="Ваше имя" minlength="3">
         <input class="modal__input" type="tel" required placeholder="Ваш номер">
         <button class="modal__btn btn" type="submit">Отправить</button>`
        );
    };

    click (evt) {
        evt.preventDefault();
        modalSubmit.innerHTML = this.modalTemplate();
        modal.classList.remove('modal--close');
    }

    render () {
        return (
            <section className="delivery" id="delivery">
                <div className="delivery__content">
                    <h2 className="delivery__title">
          Доставка шашлыка по&nbsp;городу <span>в&nbsp;течении часа</span>
                    </h2>
                    <p className="delivery__text">
          Талантливые повара приготовят массу необычных блюд.
          А фирменная подача блюд покорит красотой самых искушенных ценителей.
                    </p>
                    <a onClick={this.click} className="delivery__btn btn" href="">Заказать шашлык</a>
                </div>
            </section>
        );
    }
}

export default Delivery;