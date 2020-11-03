import React from 'react';

class Delivery extends React.Component {
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
                    <a className="delivery__btn btn" href="">Заказать шашлык</a>
                </div>
            </section>
        );
    }
}

export default Delivery;