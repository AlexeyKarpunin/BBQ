import React from 'react';
const modal = document.querySelector('.modal');
const modalSubmit = modal.querySelector('.modal__form');

class Adventage extends React.Component {
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
        modalSubmit.innerHTML = '<p class="modal__title">Стол забронирован!</p>';
    }

    modalTemplate () {
        return (
            `<p>
            <p class="modal__title">Тут будет схема брони или что типо того</p>
            <button class="modal__btn btn" type="submit">Забронировать</button>
        </p>`
        );
    };

    click (evt) {
        evt.preventDefault();
        modalSubmit.innerHTML = this.modalTemplate();
        modal.classList.remove('modal--close');
    }


    render () {
        return (
            <section className="advantage" id="about">
                <h2 className="advantage__title">Наши преимущества</h2>
                <div className="advantage__wrapper">
                    <div className="advantage__info">
                        <h3 className="advantage__subtitle">Ресторанное качество по&nbsp;ценам обычного кафе</h3>
    
                        <p className="advantage__text">
                В любом из сети кафе «ШАШЛЫЧНЫЙ МИР» у&nbsp;вас останутся незабываемые впечатления.
                Причина&nbsp;-&nbsp;в&nbsp;индивидуальном подходе при организации каждого мероприятия, уникальном оформлении зала,
                высоком профессионализме персонала.
                        </p>
                        <p className="advantage__text">
                Бесподобная европейская и&nbsp;кавказская кухня кафе «Шашлычный Мир» особенно славится шашлыками.
                        </p>
                        <a onClick={this.click} className="advantage__btn btn" href="">Забронировать стол</a>
                    </div>
                    <ul className="advantage__tabs">
                        <li className="advantage__item">
                            <img src='../../../img/advantage1.png' alt="Гости могут приносить алкоголь с собой"></img>
                        </li>
                        <li className="advantage__item">
                            <img src='../../../img/advantage2.png' alt="Разнообразная кухня"></img>
                        </li>
                        <li className="advantage__item">
                            <img src='../../../img/advantage3.png' alt="Авторские блюда"></img>
                        </li>
                        <li className="advantage__item">
                            <img src='../../../img/advantage4.png' alt="Музыкально световое оборудование"></img>
                        </li>
                        <li className="advantage__item">
                            <img src='../../../img/advantage5.png' alt="Вежливый персонал"></img>
                        </li>
                        <li className="advantage__item">
                            <img src='../../../img/advantage6.png' alt="Оформление зала по желанию заказчика"></img>
                        </li>
                    </ul>
                </div>
    
            </section>
        );
    }
}

export default Adventage;