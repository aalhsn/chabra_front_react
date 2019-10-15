import React, { Component } from "react";
import { Link} from "react-router-dom";
import { connect } from "react-redux";
import ShoppingCard from "./ShoppingCard"

class ShoppingCart extends Component {
    // getOrderItem =()=>{
    //     this.props,orders(order=>
    //     <ShoppingCard orderITem={order.orderITem}/>)
    // }
    
render(){
    return(
      <>
<section className="jumbotron text-center">
    <div className="container">
        <h1 className="jumbotron-heading">Shopping Cart</h1>
     </div>
</section>

<div className="container-fluid mb-4">
    <div className="row">
        <div className="col-12">
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Product</th>
                            <th scope="col">Available</th>
                            <th scope="col" className="text-center">Quantity</th>
                            <th scope="col" className="text-right">Price</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                  {/* {getOrderItem()} */}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>Total</strong></td>
                            <td className="text-right"><strong>346,90 KWD</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="col mb-2">
            <div className="row">
                <div className="col-sm-12  col-md-6">
                <Link to='/products'><button className="btn btn-block btn-light">Continue Shopping</button></Link>
                </div>
                <div className="col-sm-12 col-md-6 text-right">
                <Link to='/checkout'><button className="btn btn-lg btn-block btn-success text-uppercase">Checkout</button></Link>
                </div>
            </div>
        </div>
    </div>
</div>
</>
    )
}}

const mapStateToProps = state => {
    return {
      orders: state.orders
    };
  };
 
  export default connect(
    mapStateToProps
    
  )(ShoppingCart);
  