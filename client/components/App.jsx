import React from 'react';

// FontAwesome Icons
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';

// Data
import productData from '../data/product.json';

// Components
import TabBar from './TabBar.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            product: productData,
            currentTab: 0,
            currentColour: 0
        }

        this.switchToTab = this.switchToTab.bind(this);
    }

    switchToTab(newTabIndex) {
        this.setState({
            currentTab: newTabIndex
        });
    }

    render() {

        let product = this.state.product;

        return (
            <div className="product-page">
                <div className="product-image">
                    <img src="../../client/resources/images/ath-msr7-black.jpg" alt=""/>
                </div>
                <div className="product-detail">

                    <section className="back-link">
                        <a href="#">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            All Products
                        </a>
                    </section>

                    <header>
                        <h1 className="product-title">
                            {product.title}
                        </h1>
                        <p className="subtitle">
                            {product.subtitle}
                        </p>
                    </header>

                    <TabBar 
                        tabs={product.tabs}
                        activeTabIndex={this.state.currentTab}
                        switchTab={this.switchToTab} 
                    />

                    <article className="content-area">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, mollitia corporis. Maxime id magni sed odio quis, ea quaerat consectetur vel obcaecati porro repellendus nulla quisquam praesentium quod facere est.
                        </p>
                    </article>

                    <section className="price">
                        <p>
                            <span className="discounted">$59.99</span>
                            <span className="original">$89.99</span>
                        </p>
                    </section>

                    <section className="variations">
                        <label htmlFor="colors">Colors</label>
                        <select name="colors" id="colors">
                            <option value="black">Black</option>
                            <option value="brown">Brown</option>
                        </select>
                    </section>

                    <footer className="actions">
                        <button className="button-blue">Add To Cart</button>
                    </footer>

                </div>
            </div>
        );
    }
}

export default App;