import React from 'react';

// FontAwesome Icons
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';

// Data
import productData from '../data/product.json';

// Components
import TabBar from './TabBar.jsx';
import ContentArea from './ContentArea.jsx';

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
                    <img src="../../client/resources/images/ath-msr7-black.jpg" />
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

                    <ContentArea tabs={product.tabs} currentTabIndex={this.state.currentTab} />

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