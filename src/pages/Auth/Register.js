import React, { Component } from 'react';
import { Alert, Button, Card, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser, emptyError } from '../../store/actions';
import logowhite from '../../images/logo-white.png';
import { AvForm, AvField } from 'availity-reactstrap-validation';


class Pagesregister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname:"",
            email:"",
            companyname:"",
            password: ""        
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, values) {
        this.props.registerUser(values)
    }

    componentWillReceiveProps(nextProps, prevProps) {
        console.log("nextProps", nextProps);
    }


    render() {
        return (
            <React.Fragment>
                <div className="home-btn d-none d-sm-block">
                    <Link to="/" className="text-dark"><i className="fas fa-home h2"></i></Link>
                </div>

                <div className="wrapper-page">

                    <Card className="overflow-hidden account-card mx-3">

                        <div className="bg-primary p-4 text-white text-center position-relative">
                            <h4 className="font-20 m-b-5">Free Register</h4>
                            <p className="text-white-50 mb-4">Get your free FeedFleet account now.</p>
                            <Link to="/" className="logo"><img src={logowhite} height="24" alt="logo" /></Link>
                        </div>
                        <div className="account-card-content">

                            {this.props.user && <Alert color="success">
                                Registration Done Successfully.</Alert>}

                            {this.props.registrationError && <Alert color="danger">
                                {this.props.registrationError}</Alert>}

                            <AvForm className="form-horizontal m-t-30" onValidSubmit={this.handleSubmit} >
                                <AvField name="Fullname" label="Fullname" value={this.state.fullname} placeholder="Enter Fullname" type="text" required />
                                <AvField name="email" label="Email" value={this.state.email} placeholder="Enter Email" type="email" required />
                                <AvField name="companyname" label="Company name" value={this.state.companyname} placeholder="Enter company name" type="text" required />
                                <AvField name="password" label="Password" value={this.state.password} placeholder="Enter Password" type="password" required />
                                <AvField name="confirmpassword" label="Confirm Password" value={this.state.password} placeholder="Enter Password" type="password" required />
                               
                                <Row className="form-group m-t-20">
                                    <Col md="12" className="text-right">
                                        {this.props.loading ? <Button color="primary" className="w-md waves-effect waves-light">Loading ...</Button> :
                                            <Button color="primary" className="w-md waves-effect waves-light" type="submit">Register</Button>}
                                    </Col>
                                </Row>

                                <Row className="form-group m-t-10 mb-0">
                                    <Col md="12" className="m-t-20">
                                        <p className="mb-0">By registering you agree to the FeedFleet <Link to="#" className="text-primary">Terms of Use</Link></p>
                                    </Col>
                                </Row>

                            </AvForm>

                        </div>
                    </Card>

                    <div className="m-t-40 text-center">
                        <p>Already have an account ? <Link to="/login" className="font-500 text-primary"> Login </Link> </p>
                        <p>© {new Date().getFullYear()} FeedFleet.</p>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {

    const { user, registrationError, loading } = state.Account;
    return { user, registrationError, loading };
}

export default connect(mapStatetoProps, { registerUser, emptyError })(Pagesregister);

