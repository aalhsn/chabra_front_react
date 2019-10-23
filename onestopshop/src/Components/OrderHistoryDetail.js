import React, { Component } from "react";
import OrderHistoryDetailCard from "./OrderHistoryDetailCard";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loading from "./Loading"

class OrderHistoryDetail extends Component {

  state = {
    order: null
  }

  componentDidMount(){
    let order = this.props.orders.find(order => order.id === parseInt(this.props.match.params.orderID));
    this.setState({order})
  }
  
  render() {
    
   
    if (!this.props.user) return <Redirect to="/" />;

    if (!this.state.order) {
      return <Loading />;
    } else { 
      const order = this.state.order
      return (
        <div className="container text-center">
          <section id="overlay" className="single-section">
            <h1 style={{color:"white", marginTop:250, fontSize:"3em"}}>Order {order.order_ref.toUpperCase()}</h1>
            </section>

        <div className="container-fluid mb-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Order Ref.</th>
                      <th>Date</th>
                      <th>Items</th>
                      <th>Qty</th>
                      <th>Item Price</th>
                      <th>Total</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                  <OrderHistoryDetailCard key={order.id} order={order} />
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col mb-2">
              <div className="row">
                <div className="col-sm-12  col-md-6"></div>
                <div className="col-sm-12 col-md-6 text-right"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}
}

const mapStateToProps = state => {
  return {
    orders: state.cartReducer.orders,
    user: state.authReducer.user,
    loading: state.cartReducer.loading
  };
};

export default connect(mapStateToProps)(OrderHistoryDetail);
