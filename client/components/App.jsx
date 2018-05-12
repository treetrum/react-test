import React from 'react';

// FontAwesome Icons
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';

// Data
import productData from '../data/product.json';

// Components
import TabBar from './TabBar.jsx';
import ContentArea from './ContentArea.jsx';
import Actions from './Actions.jsx';

class App extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            product: productData,
            currentTab: 0,
            currentColour: 0,
            addedToCart: false,
            addingToCart: false
        }

        this.switchToTab = this.switchToTab.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    switchToTab(newTabIndex) {
        this.setState({
            currentTab: newTabIndex
        });
    }

    addToCart(event) {
        event.preventDefault();
        this.setState({
            addingToCart: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    addingToCart: false,
                    addedToCart: true
                });
            }, 2000);
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
                            <span className="discounted">
                                ${product.price.discounted}
                            </span>
                            <span className="original">
                                ${product.price.original}
                            </span>
                        </p>
                    </section>

                    <section className="variations">
                        <label htmlFor="colors">Colors</label>
                        <select name="colors" id="colors">
                            <option value="black">Black</option>
                            <option value="brown">Brown</option>
                        </select>
                    </section>

                    <Actions
                        addToCart={this.addToCart}
                        addingToCart={this.state.addingToCart}
                        addedToCart={this.state.addedToCart} 
                    />

                </div>
            </div>
        );
    }
}

export default App;