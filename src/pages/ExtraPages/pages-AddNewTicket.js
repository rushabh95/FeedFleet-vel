import React, { Component } from "react";
import { activateAuthLayout } from "../../store/actions";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Editor } from "react-draft-wysiwyg";

export class AddNewTicket extends Component {
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
                <b className="m-2">Create New Ticket</b>
              </h4>
            </div>
            <div>
              <h5>
                <b> Ticket Title</b>
              </h5>

              <input className="form-control" type="text"></input>
            </div>
            <div>
              <h5>
                <b>Priority</b>
              </h5>

              <select className="form-control" type="text">
                <option>Low</option>
                <option>Medium</option>
                <option>high</option>
                <option>Urgent</option>
              </select>
            </div>
            <div>
              <h5>
                <b>Ticket Category</b>
              </h5>

              <select className="form-control" type="text">
                <option>campaign issue</option>
                <option>widget issue</option>
                <option>payment and billing issue</option>
                <option>invoice issue</option>
                <option>other</option>
              </select>
            </div>
            <br/>
            <Row>
              <Col md="12">
                <Form method="post">
                  <Editor
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                  />
                </Form>
              </Col>
            </Row>
            <hr/>
            <hr/>
            <br/>
            <h5>Attech Files</h5>
            <b>Select File</b>
            <input type="file" name="user_file[]" class="form-control"></input><br/>
            <input type="button"  value="Add another file" class="btn btn-info btn-xs"></input>
            <hr/>
            <input type="submit" class="btn btn-primary form-control" name="save" value="Create Ticket"></input>
          </div>
        
        </div>
        
        
      </div>
    );
  }
}

export default withRouter(connect(null, { activateAuthLayout })(AddNewTicket));
