import React from 'react';

// FontAwesome Icons
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';

// Data
import productData from '../data/product.json';

// Components
import ProductImage from './ProductImage.jsx';
import TabBar from './TabBar.jsx';
import ContentArea from './ContentArea.jsx';
import Actions from './Actions.jsx';
import Variations from './Variations.jsx';

class App extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            product: productData,
            currentTab: Object.keys(productData.tabs)[0],
            currentColour: Object.keys(productData.colours)[0],
            addedToCart: false,
            addingToCart: false
        }

        this.handleSwitchTab = this.handleSwitchTab.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleColourChange = this.handleColourChange.bind(this);
    }

    handleSwitchTab(newTabIndex) {
        this.setState({
            currentTab: newTabIndex
        });
    }

    handleAddToCart(event) {
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

    handleColourChange(event) {
        event.preventDefault();
        this.setState({
            currentColour: event.target.value
        });
    }

    render() {

        let product = this.state.product;
        let selectedColor = product.colours[this.state.currentColour];

        return (
            <div className="product-page">

                <ProductImage imageName={selectedColor.image} />

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
                        switchTab={this.handleSwitchTab} 
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

                    <Variations
                        colours={product.colours}
                        changeColour={this.handleColourChange}
                        currentColour={this.state.currentColour}
                    />

                    <Actions
                        addToCart={this.handleAddToCart}
                        addingToCart={this.state.addingToCart}
                        addedToCart={this.state.addedToCart} 
                    />

                </div>
            </div>
        );
    }
}

export default App;