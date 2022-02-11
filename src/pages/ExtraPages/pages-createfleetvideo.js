import React, { Component } from "react";
import { activateAuthLayout } from "../../store/actions";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
class Createfleetvideo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.activateAuthLayout();
  }

  render() {
    return (
      <div className="text-center container">
        <h1>
          <b>Welcome to Intro Video</b>
        </h1>
        <br />
        <div>
          Welcome to Feedfleet, where you'll be able to create & manage
          <br />
          all your Intro Video videos, and generate your Video Widget code
        </div>
        <br />

        <div className="col-md-12 vertical-center ">
          <button type="button" className="btn btn-primary ">
            <i class="fa fa-video-camera icon_cam"></i>
            <br />
            <br />
            Start Recording
          </button>
        </div>
        <br />
        <div className="col-md-12 vertical-center ">
          <button type="button" className="btn btn-primary ">
            <i class="fa fa-upload icon_cam"></i>
            <br />
            <br />
            Upload Video
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(null, { activateAuthLayout })(Createfleetvideo)
);
