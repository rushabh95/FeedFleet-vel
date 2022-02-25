import React, { Component } from "react";
import { activateAuthLayout } from "../../store/actions";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import work from "../../images/gallery/work-8.jpg";
import { withWidth } from "@material-ui/core";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.activateAuthLayout();
  }
  render() {
    return (
      <div className=" m-4 d-flex justify-content-center">
        <div className="col-md-3 card mr-3">
          <div className="">
            <a>
              <img src={work} style={{ height: "300px", width: "300px" }}></img>
            </a>
          </div>
          <br />
          <div className="m-4 d-flex justify-content-center">
            <div className="col-sm-6 card">
              <div className="value">
                <b>
                  <h4>2</h4>
                </b>
              </div>
              <div className="label">create campaign</div>
            </div>
            <div className="col-sm-6 card">
              <div className="value">
                <b>
                  <h4>2</h4>
                </b>
              </div>
              <div className="label">video count</div>
            </div>
          </div>
        </div>

        <div className="col-md-7 card ">
        <i class="fa fa-file-text-o" aria-hidden="true"></i>
        <span>profile Settings</span><br/>
        <hr/>
          <div className=" m-2 d-flex justify-content-center">
            <div className="col-sm-6 card">
              <b className="">Full Name</b>
              <br />
              <input className="" placeholder="" type="text"></input>
              <hr />
              <b className="">Date Of Birth</b>
              <br />
              <input className="" placeholder="" type="text"></input>
              <hr />
              <b className="">Country</b>
              <br />
              <select id="country" name="country">
                <option value="">india</option>
              </select>
              <hr />
              <b className="">City</b>
              <br />
              <select className="" placeholder="" type=""></select>
              <hr />
              <b className="">Postal Code</b>
              <br />
              <input className="" placeholder="" type=""></input>
            </div>
            <div className="col-sm-6 card">
              <b className="">Email Address</b>
              <br />
              <input className="" placeholder="" type="email"></input>
              <hr />
              <b className="">Select Gender</b>
              <br />
              <select className="" placeholder="" type="gender">
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
              </select>
              <hr />
              <b className="">State</b>
              <br />
              <select className="" placeholder="" type=""></select>
              <hr />
              <b className="">Address</b>
              <br />
              <input className="" placeholder="" type="address"></input>
            </div>
          </div>
          <br />
          <div>
            {/* <i class="icon-file-text"></i> */}
            <i class="fa fa-file-text-o" aria-hidden="true"></i>
            <span>Company Information</span>
            <hr />
            <div className="m-4 d-flex justify-content-center">
              <div className="col-sm-6 card">
                <b className="">Company Name</b>
                <br />
                <input
                  className=""
                  placeholder="Company Name"
                  type="text"
                ></input>
                <hr />
                <b className="">Company Address</b>
                <br />
                <input
                  className=""
                  placeholder="Company Address"
                  type="text"
                ></input>
                <hr />
                <b className="">Company Contact Number</b>
                <input
                  className=""
                  placeholder="Company Contact Number"
                  type="tel"
                ></input>
                <br />
              </div>
              <div className="col-sm-6 card">
                <b className="">Company Email Address</b>
                <br />
                <input className="" placeholder="" type="email"></input>
                <hr />
                <b className="">Company Email website</b>
                <br />
                <input className="" placeholder="" type="email"></input>
              </div>
            </div>
          </div>
         <div>
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
         </div><br/><br/>
        <hr/>
          <div className="mt-5 d-flex justify-content-center ">
              <button className="border border-primary"  type="submit">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(connect(null, { activateAuthLayout })(Profile));
//export default (Profile);