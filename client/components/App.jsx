import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="product-page">
                <div className="product-image">
                    <img src="../../client/resources/images/ath-msr7-black.jpg" alt=""/>
                </div>
                <div className="product-detail">
                    <section className="back-link">
                        <a href="#">All Products</a>
                    </section>
                    <header>
                        <h1 className="product-title">
                            Audio-Technica ATH-MSR7
                        </h1>
                        <p className="subtitle">
                            2017 Best Headphones of the Year Award Winner
                        </p>
                    </header>
                    <nav className="tab-bar">
                        <li className="active">
                            <a href="#">Description</a>
                        </li>
                        <li>
                            <a href="#">Details</a>
                        </li>
                    </nav>
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