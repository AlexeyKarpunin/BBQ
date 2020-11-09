import React from 'react';
import { Link } from 'react-router-dom';
import Style from 'style-it';

class Basket extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            store: 0,
        };
        this.onStore = this.onStorage.bind(this);
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.onStorage(),
            1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    onStorage () {
        const myProducts = JSON.parse(sessionStorage.getItem('myProducts'));
        this.setState({store: myProducts.length});
    }

    render () {
        const {store} = this.state;

        return Style.it(`
        .basket::before {
            content: '${store}';
            color: white;
            position: absolute;
            font-size: 20px;
            width: 5px;
            top: 30px;
            left: 40px;
          }
        `,
        <li className="social__item basket">
            <Link to="/basket" className="social__link" href="">
                <img src='../../img/temporary/basket.png' alt="Мы в Инстаграмме"></img>
            </Link>
        </li>
        );
    }
}

export default Basket;
