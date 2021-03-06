import React, { Component } from "react";
import ProductsList from "./ProductsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faLeaf,
  faMedal,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "./assets/js/main.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <>
        <section className="section-one">
          <div className="overlay"></div>
          <div className="container">
            <h1 className="hero-text">100% Fresh Organic Foods </h1>
            <h2 className="hero-text-2">
              We deliver organic vegetables and fruits
            </h2>
          </div>
        </section>
        <section className="section-two">
          <div id="features" className="row">
            <div className="feature-one">
              <div id="shipping">
                <FontAwesomeIcon
                  id="shipping-icon"
                  icon={faShippingFast}
                  size="3x"
                />
              </div>

              <h3 id="feature-text">FREE SHIPPING</h3>
              <p id="feature-text-2">ON ORDER OVER 20KWD</p>
            </div>
            <div className="feature-two">
              <div id="shipping-2">
                <FontAwesomeIcon id="shipping-icon" icon={faLeaf} size="3x" />
              </div>
              <h3 id="feature-text">ALWAYS FRESH</h3>
              <p id="feature-text-2">PRODUCT WELL PACKAGE</p>
            </div>
            <div className="feature-three">
              <div id="shipping-3">
                <FontAwesomeIcon
                  id="shipping-icon-2"
                  icon={faMedal}
                  size="3x"
                />
              </div>
              <h3 id="feature-text">SUPERIOR QUALITY</h3>
              <p id="feature-text-2">QUALITY PRODUCTS</p>
            </div>
            <div className="feature-four">
              <div id="shipping-4">
                <FontAwesomeIcon
                  id="shipping-icon-3"
                  icon={faPhone}
                  size="3x"
                />
              </div>
              <h3 id="feature-text">SUPPORT</h3>
              <p id="feature-text-2">24/7 SUPPORT</p>
            </div>
          </div>
        </section>

        <section className="section-three">
          <div className="our-products">
            <h1 id="product-head" className="product-head">
              Our Products
            </h1>
            <p id="product-text" className="product-text">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
          <ProductsList />
        </section>
        <section className="section-four"></section>
      </>
    );
  }
}

export default Home;
