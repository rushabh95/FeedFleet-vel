import React, { Component } from "react";
import { activateAuthLayout } from "../../store/actions";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
class Createnewcampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.activateAuthLayout();
  }

  render() {
    return (
      <div className=" m-5 d-flex justify-content-center">
        <div className="col-md-6 card">
          <h6 style={{ color: "#24a2da" }}>CAMPAIGN</h6>
          <div className="">
            <input placeholder="Enter Title here  "></input>
          </div>
          <h5 style={{ color: "#24a2da" }}> COUSTMISE YOUR PAGE </h5>
          <div
            className="border border-primary position-relative "
            style={{ height: "200px" }}
          >
            <a>
              <img src=""></img>
            </a>
          </div>
          <div className="m-0">
            <i className="fa fa-edit float-right   "></i>
          </div>

          <h6> YOUR NAME</h6>
          <div className="">
            <input placeholder="Enter Name"></input>
          </div>
          <h6>Designation</h6>

          <input placeholder="Enter Designation"></input>
          <div className="mt-5" required="">
            <h6>Message</h6>
            <textarea
              class="form-control"
              required=""
              placeholder="Enter Message"
            ></textarea>
          </div>
          <div className="promt-box-heading">
            <h6>
              <span style={{ color: "#24a2da" }}>PROMPT</span>
            </h6>
            <div className="add-multiple-box">
              <button
                type="button"
                onclick=""
                class="btn delete-icon btn-primary"
              >
                <i class="fa fa-plus"></i>
              </button>
            </div>
            
          </div>

          <div>
            <textarea
              placeholder="Enter Field Value"
              class="form-control mt-3"
              required=""
            ></textarea>
          </div>
        </div>
        <div className="col-md-4 card m-1">
          <h4 style={{ color: "#24a2da" }}>
            <span>
              <h6>LEAD MANAGEMENT</h6>
            </span>
          </h4>

          <div>
            <label>
              <h5>Extra Field For Leads</h5>
            </label>
            <br />
            <select class="form-control ">
              <option></option>
              <option value="Name" selected="" locked="locked">
                Name
              </option>
              <option value="Email" selected="" locked="locked">
                Email
              </option>
              <option value="DOB">DOB</option>
              <option value="Phone Number">Phone Number</option>
              <option value="City">City</option>
              <option value="Country">Country</option>
            </select>
          </div>
          <div className="m-3">
            <label>Thank you message</label>
            <textarea
              className="form-control"
              placeholder="Enter Thank You Message"
            ></textarea>
          </div>
          <div className="m-3">
            <label>After thank you link</label>
            <input
              className="form-control"
              placeholder="Enter Thank you link"
            ></input>
          </div>
          <div class="">
            Do you want to give rating ? &nbsp;&nbsp;&nbsp;
            <input type="checkbox"></input>
          </div>
          <div className="float-right" >
          <input
            type="submit"
            name="save"
            value="Save"
            class="btn btn-success"
          ></input>
        </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(null, { activateAuthLayout })(Createnewcampaign)
);
