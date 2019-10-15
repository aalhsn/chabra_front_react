import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import * as actionCreators from "../redux/actions";
import { connect } from "react-redux";


class ShoppingCard extends Component {
    render(){
        return(
            <tr>
            <td><img src={"https://dummyimage.com/50x50/55595c/fff"} /> </td>
            <td>Product Name Dada</td>
            <td>In stock</td>
            <td><input className="form-control" type="text" value="1" /></td>
            <td className="text-right">124,90 KWD</td>
            <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
        </tr>
        )
    }
}
export default ShoppingCard