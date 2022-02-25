import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, FormGroup, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class FormValidation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <div className="page-title-box">
                        <Row className="align-items-center">

                            <Col sm="6">
                                
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">FeedFleet</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">settings</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Change Password</BreadcrumbItem>
                                </Breadcrumb>
                            </Col>
                            
                        </Row>
                    </div>

                    <div className='row d-flex justify-content-center '>
                        <div className='col-lg-6'>                        
                            <Card>
                                <CardBody>

                                    <h4 className="mt-0 header-title"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXrzwoh28BKI4auRz0oIdfGeOG_Ps-6w1Qig&usqp=CAU' style={{height:'4vh',width:'4vh'}}></img>Change Password</h4>
                                  <hr/>
                                    <b>Old Password</b>
                                    <input className='form-control' type='password' placeholder='Enter Old Password' ></input><br/><br/>

                                    <b>New Password</b>
                                    <input className='form-control' type='password' placeholder='Enter New Password' ></input><br/><br/>
                                    <b>Confirm New Password</b>
                                    <input className='form-control' type='password' placeholder='Confirm New Password' ></input>
                                    <br/><br/>
                                    <Button type="submit" color="primary" className="mr-1">
                                                    Submit
                                                    </Button>
                                </CardBody>
                            </Card>
                        
                            </div>

                        
                    </div>

                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(FormValidation));