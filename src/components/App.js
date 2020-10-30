
import React from 'react';
import Header from './Content/header/Header';
import Main from './Content/main/Main';
import Footer from './Content/footer/Footer';


class App extends React.Component {
    render () {
        return (
            <section className="body">
                <Header />
                <Main />
                <Footer />
            </section>
        );
    }
}

export default App;
