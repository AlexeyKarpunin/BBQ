
import React from 'react';
import Header from './Content/header/Header.jsx';
import Footer from './Content/footer/Footer.jsx';

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
