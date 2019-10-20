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
      <>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Order Detail</h1>
          </div>
        </section>

        <div className="container-fluid mb-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Order Ref.</th>
                      <th scope="col" className="text-center">
                        Date
                      </th>
                      <th scope="col" className="text-center">
                        Items
                      </th>
                      <th scope="col" className="text-center">
                        Qty
                      </th>
                      <th scope="col" className="text-center">
                        Item Price
                      </th>
                      <th scope="col" className="text-center">
                        Total
                      </th>
                      <th scope="col" className="text-center">
                        Address
                      </th>
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
      </>
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
