
import React from 'react';
import Header from './Content/header/Header';
// import Main from './Content/main/Main';
import Footer from './Content/footer/Footer';
// import MenuList from './Content/main/additional-windows/MenuList';
import '../index';

class App extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        
        // eslint-disable-next-line react/prop-types
        const {children} = this.props;
        return (
            <section className="body">
                <Header />
                {children}
                <Footer />
            </section>
        );
    }
}

export default App;
