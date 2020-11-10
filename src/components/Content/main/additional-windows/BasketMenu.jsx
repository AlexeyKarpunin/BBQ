import React from 'react';

class BasketMenu extends React.Component {
    constructor (props) {
        super(props);
        this.basketProductPlus = this.basketProductPlus.bind(this);
        this.basketProductMinus = this.basketProductMinus.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount() {
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

    deleteProduct(e) {
        const myProducts = JSON.parse(sessionStorage.getItem('myProducts'));
        const index = e.target.getAttribute('data-index');
        myProducts.splice(index,1);
        sessionStorage.setItem('myProducts', JSON.stringify(myProducts));
        this.forceUpdate();
    }

    basketProductPlus (e) {
        const myProducts = JSON.parse(sessionStorage.getItem('myProducts'));
        console.log(e.target);
        const index = Number(e.target.getAttribute('data-index'));
        const product = myProducts[index];
        const price = product[4].split(' ')[0];
        
        product[4] = (Number(price) + Number(product[5])) + ' руб.';
        product[3] = Number(product[3]) + 1;
        sessionStorage.setItem('myProducts', JSON.stringify(myProducts));
        this.forceUpdate();
    }

    basketProductMinus (e) {
        const myProducts = JSON.parse(sessionStorage.getItem('myProducts'));
        const index = Number(e.target.getAttribute('data-index'));
        const product = myProducts[index];
        console.log(e.target);
        const price = product[4].split(' ')[0];

        if(product[3] === 1) return;
        product[4] = (Number(price) - Number(product[5])) + ' руб.';
        product[3] = Number(product[3]) - 1;
        sessionStorage.setItem('myProducts', JSON.stringify(myProducts));
        this.forceUpdate();
    }

    closeBasketWindow() {
        const basketMenu = document.querySelector('.basket__page');
        const basketLogo = document.querySelector('.basket');

        basketLogo.classList.remove('basket--non--active');
        basketMenu.classList.add('basket--non--active');
    }
    
    render () {
        const myProducts = JSON.parse(sessionStorage.getItem('myProducts'));

        return (
            <section className="basket__page basket--non--active">
                <div className="bascket__menu__items">
                    <h1>Ваш заказ: </h1> <div onClick={this.closeBasketWindow} className="basket__btn close__basket__window"><span></span></div>
                    {myProducts ? myProducts.map((product, index) => {
                        // array structure: 0 => img link, 1 => product name, 2 => dose, 3 => counter, 4 => price, 5 => for 1 product
                        return (
                            <div className="basket__products" key={index}>
                                <div className="basket__img__block">
                                    <img className="basket__img" src={product[0]}></img>
                                </div>
                                <div className="basket__product_name">
                                    <span className="basket__item_name__head">{product[1]}</span>
                                    <br></br>
                                    <span className="basket__item_name__text">{product[2]}</span>
                                </div>
                                <div className="basket__product_price">
                                    <div> 
                                        <button data-index={index} onClick={this.basketProductPlus} className="basket__btn__counter_plus"></button>
                                        <span>{product[3]}</span> 
                                        <button data-index={index} onClick={this.basketProductMinus} className="basket__btn__counter_minus"></button>
                                    </div>
                                    <br></br>
                                    <span className="basket__product__price__text">{product[4]}</span>
                                </div>
                                <div data-index={index} onClick={this.deleteProduct} className="garbage__btn">
                                    <img className="basket__btn_img" src='../../../../img/garbage.png' alt='корзина'></img>
                                </div>
                            </div>
                        );
                    }) : <div>Вы ни чего не заказали</div>}
                    <hr></hr>
                    <div className="basket__totatal__menu">
                       
                        <span>Сумма: {
                            myProducts.reduce((acc, product) => {
                                const num = parseInt(product[4].replace(/\D+/g,''));
                                return num + acc;
                            }, 0)
                        } руб.</span>
                        <button className="btn basket__btn_push_order">Перейти к заказу</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default BasketMenu;

/* 
{myProducts.map((product, index) => {
                    return (
                        <div className="basket__products" key={index}>
                            <div>{product[0] + ' ' + product[1] + ' ' + product[2]}</div>
                            <div data-index={index} onClick={this.deleteProduct} className="basket__btn"><span></span></div>
                        </div>
                    );
                })}
               Total: {
                    myProducts.reduce((acc, product) => {
                        const num = parseInt(product[2].replace(/\D+/g,''));

                        return num + acc;
                    }, 0)
                }
*/