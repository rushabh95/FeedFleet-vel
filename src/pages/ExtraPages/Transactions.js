import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem, Table } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settingmenu from '../Subpages/Settingmenu';

class BasicTable extends Component {
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
                                    <BreadcrumbItem><Link to="#">Setting</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Transactions</BreadcrumbItem>
                                </Breadcrumb>
                            </Col>
                            <Col sm="6">
                                <div className="float-right d-none d-md-block">
                                    
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <h4 className="mt-0 header-title">Transactions</h4>
                                    

                                    <div className="table-rep-plugin">
                                        <Table responsive striped>
                                            <thead>
                                                <tr>
                                                    <th>PAYER EMAIL</th>
                                                    <th>AMOUNT</th>
                                                    <th>PLAN TYPE</th>
                                                    <th>TRANSACTION STATUS</th>
                                                    <th>PLAN START DATE</th>
                                                    <th>PLAN END DATE</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    {this.useremail}
                                                    
                                                </tr>
                                                <tr>
                                                    
                                                    
                                                </tr>
                                                <tr>
                                                    
                                                    
                                                </tr>
                                                <tr>
                                                    
                                                    
                                                </tr>
                                                <tr>
                                                    
                                                   
                                                </tr>
                                                <tr>
                                                   
                                                   
                                                </tr>
                                                <tr>
                                                    
                                                    
                                                </tr>
                                               
                                            </tbody>
                                        </Table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(BasicTable));