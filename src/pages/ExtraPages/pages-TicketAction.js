import React, { Component } from "react";
import { activateAuthLayout } from "../../store/actions";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

export class TicketAction extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.activateAuthLayout();
  }
  render() {
    return (
      <div className="m-5 d-flex justify-content-center">
        <div className="col-md-9 card d-flex justify-content-center align-items-center">
          <div className="col-md-8 m-2">
            <div className="bg-info text-white ">
              <h4>
                <b className="m-2">Demo Ticket for Attechment</b>
              </h4>
            </div>
            <div className="panel panel-default">
              <div class="panel-body">
                <h4 class="media-title">Ticket Details</h4>
                <table class="table">
                  <tbody>
                    <tr>
                      <td className="ticket-label-info">#</td>
                      <td>2</td>
                      <td class="ticket-label-info">Client</td>
                      <td>Kapil Karda</td>
                    </tr>
                    <tr>
                      <td class="ticket-label-info">Created</td>
                      <td>24-10-2020</td>
                      <td class="ticket-label-info">Priority</td>
                      <td>
                        <span class="label label-default">Low</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="ticket-label-info">Last Updated</td>
                      <td>24-10-2020 09:58:47</td>
                      <td class="ticket-label-info">Category</td>
                      <td>Campaign issue</td>
                    </tr>
                    <tr>
                      <td class="ticket-label-info">Status</td>
                      <td>
                        <button
                          class="btn btn-danger btn-xs"
                          type="button"
                          id="status-button"
                        >
                          Closed
                        </button>
                      </td>
                      <td class="ticket-label-info">Closed Date</td>
                      <td>24-10-2020</td>
                    </tr>
                  </tbody>
                </table>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { activateAuthLayout })(TicketAction));
