import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { activateAuthLayout } from '../../store/actions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ApiKey extends Component {
    constructor(props) {
        super(props);

        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange() {
        this.setState({
            checked: !this.state.checked
        })
    }

    componentDidMount() {
        this.props.activateAuthLayout();
    }

    render() {

        return (
            <React.Fragment>
                <Container fluid className='card'>
                    <div className="page-title-box">
                        <Row className="align-items-center">
                            <Col sm="6">

                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="#">FeedFleet</Link></BreadcrumbItem>
                                    <BreadcrumbItem><Link to="#">Settings</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>Api Key</BreadcrumbItem>
                                </Breadcrumb>
                            </Col>


                        </Row>
                    </div>
                    <div className='d-flex  col-lg-12'>

                        <div className='col-lg-6'>

                            <h4><span><img src='https://cdn-icons.flaticon.com/png/512/2838/premium/2838908.png?token=exp=1645600312~hmac=ea449b3fa1eb8c72b2590a6d548e3180' style={{ height: '3vh', width: '3vh' }}></img></span>Api Key</h4>
                            <hr />
                            <h6>Api Key Generate</h6>
                            <select className='form-control' style={{ width: '12rem' }}>
                                <option>Select Campaign</option>
                                <option>Mobile Application Review</option>
                                <option>Testing Campaigns</option>
                            </select>
                            <br />

                            {/* <h6><span><input type='checkbox' className='mr-1' 
                        checked={this.state.checked}
                        onChange={this.handleChange}></input>Hide Identity?</span></h6> */}
                            <div>
                               <input
                                    type="checkbox"
                                    checked={this.state.checked}
                                    onChange={this.handleChange}
                                    className='mr-1' />
                                    <label for>Hide Identity?</label>
                            </div>
                            <h6>Identity Name</h6>
                            <input className='form-control' style={{ width: '12rem' }} type='text' placeholder='Happy customer'></input>
                            <br />
                            <br />
                           
                        </div>

                 

                        <div className='col-lg-6'>
                            <h4>Widget Setting</h4><hr />
                            <span><input style={{ height: '15px', width: '15px' }} className='mr-1' type='radio'></input>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7FyPIxxFVQ0484nQw9wp5uOIK9GGmGHDfA&usqp=CAU' className='mr-3' style={{height:'30px',width:'30px'}}></img>
                                <input style={{ height: '15px', width: '15px' }} className='mr-1' type='radio'></input>
                                <img src='https://www.feedfleet.com/assests/img/icon-02.png' className='mr-3' style={{height:'30px',width:'30px'}}></img>
                                <input style={{ height: '15px', width: '15px' }} className='mr-1' type='radio'></input>
                                <img src='https://www.feedfleet.com/assests/img/icon-03.png' className='mr-3' style={{height:'30px',width:'30px'}}></img>
                            </span><br/><br/><br/><br/>
                            <input type='button' name='submit' className='btn btn-primary' value='Create Api Key'></input>
                        </div>

                    </div>
                    
                </ Container>
                <br/>
                <Container fluid className='card'>
                <fieldset className='form-group'>
                        <div className='element-box'>
                            <div className='row'>
                            <div className='col-sm-6'><h5 className='form-header ml-3'>API KEY LIST</h5></div>
                                <div className='col-sm-2'></div>
                                <div className='col-sm-4 m-3 float-right'>
                                <input type="text" name="searchBox" className="form-control" autocomplete="off"/>
                                <span className='search float-right'><i className='fa fa-search'></i></span>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-10 table-responsive'>
                            <table className='table table-stripped table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Campaign</th>
                                        <th>Get Code</th>
                                        <th>Hide Identity</th>
                                        <th>Identity Name</th>
                                        <th>Widget Type</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mobile Application Review</td>
                                        <td>
                                            <button type = 'button' className='btn btn-sm btn-primary'>Get Code</button>
                                        </td>
                                        <td>Yes</td>
                                        <td>Happy customer</td>
                                        <td className='text-center'>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7FyPIxxFVQ0484nQw9wp5uOIK9GGmGHDfA&usqp=CAU' style={{height:'30px',width:'30px'}}></img>
                                        </td>
                                        <td>
                                            <button type = ' button'  className='btn btn-primary'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMWWmDyDJUsf6kOvqP2c9_BI2CMOqWee7Hw&usqp=CAU' style={{height:'4vh',width:'4vh'}}></img></button>
                                            &nbsp;&nbsp;|&nbsp;&nbsp;
                                            <button type ='button' className='btn btn-danger'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqt5UrL87lhxtfxCLli8OWGPy0jtfG803hNA&usqp=CAU' style={{height:'4vh',width:'4vh'}}></img></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        </fieldset>
                        </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(null, { activateAuthLayout })(ApiKey));