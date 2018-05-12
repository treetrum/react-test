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
            currentTab: 0,
            currentColour: 0,
            addedToCart: false,
            addingToCart: false
        }

        this.switchToTab = this.switchToTab.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.handleColourChange = this.handleColourChange.bind(this);
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

    handleColourChange(event) {
        event.preventDefault();
        this.setState({
            currentColour: Number(event.target.value)
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

                    <Variations
                        colours={product.colours}
                        changeColour={this.handleColourChange}
                        currentColourIndex={this.state.currentColour}
                    />

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