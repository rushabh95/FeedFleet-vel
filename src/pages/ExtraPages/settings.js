import React, { Component, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { activateAuthLayout } from '../../store/actions';
import { TabContent, TabPane, Button, NavLink, CardTitle, Card, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Tab, Tabs, AppBar } from '@material-ui/core'

export default class Settings extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '0'
        };

    }
    // componentDidMount() {

    //     this.props.activateAuthLayout();
    // }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }



    render() {
        return (
            <div >
                <div className='col-md-2' >
                    <AppBar position='static'>
                        <Tabs orientation='vertical'>
                            <NavLink className={classnames({ active: this.state.activeTab === '0' })}
                                onClick={() => { this.toggle('0'); }} >API KEY</NavLink>
                            <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}>TRANSACTION</NavLink>
                            <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}>CHANGE PASSWORD</NavLink>
                        </Tabs>
                    </AppBar>
                </div>
                <div className='col-md-10'>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="0">
                            <div><Row>
                                <Col>
                                    <h4>API KEY</h4><hr />
                                    <div className='col-sm-6 card'>
                                        <h6>API Key Generate</h6>
                                        <select>
                                            <option>Select Campaign</option>
                                            <option>Mobile Application Review</option>
                                            <option>Testing Campaigns</option>
                                        </select>
                                    </div>
                                    <div className='col-sm-6 card'>
                                        <h6>Widget Setting</h6>
                                    </div>

                                </Col>
                            </Row></div>
                        </TabPane>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="6">
                                    <h1>hello world</h1>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="6">
                                    <h1>hello world from indore</h1>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </div>

        )
    }
}

// export default withRouter(connect(null,{activateAuthLayout})(Settings))

