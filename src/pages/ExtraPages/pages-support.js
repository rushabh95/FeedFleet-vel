import React, { Component } from "react";
import { activateAuthLayout } from "../../store/actions";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

export class Support extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.activateAuthLayout();
  }
  render() {
    return (
      <div className=" row m-5 d-flex justify-content-center" >
        <div className="col-md-10 card " >
        <h4><span><img src='https://image.shutterstock.com/image-vector/ticket-icon-flat-600w-567375721.jpg' style={{height:'7vh',width:'7vh'}}></img>
          Ticket List  
          </span></h4>
          <div>
            <a className="btn btn-sm btn-success float-right m-10" href="/pages-AddNewTicket">
              Add New Ticket
            </a>
            <div className="float-left m-5">
              show{" "}
              <select className="m-2">
                <option type="number">10</option>
                <option type="number">25</option>
                <option type="number">50</option>
                <option type="number">100</option>
              </select>
              entries
            </div>
          </div>
          <div>
            <label className="float-right m-2">Search</label>
            <input className="float-right "></input>
          </div>
          <div style={{ border: "1px solid black;" }}>
            <table className="border table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Category</th>
                  <th>Last Reply</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { activateAuthLayout })(Support));
