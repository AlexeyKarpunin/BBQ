import React from 'react';

class Basket extends React.Component {
    constructor (props) {
        super(props);
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

    render () {
        const myProducts = JSON.parse(sessionStorage.getItem('myProducts'));

        return (
            <section className="basket__page">
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
            </section>
        );
    }
}

export default Basket;