import React, { Component } from 'react';
import { activateAuthLayout } from '../../store/actions';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TabContent, TabPane, Button, NavLink, CardTitle, Card, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { AppBar } from '@material-ui/core'

import 'react-tabs/style/react-tabs.css';

class SettingMenu extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '0'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }


    //     componentDidMount() {
    //         this.props.activateAuthLayout();
    //    }

    render() {

        return (
       

            <React.Fragment>
                <Dropdown isOpen={this.state.setting_menu} toggle={() => this.setState({ setting_menu: !this.state.setting_menu })}>
                    <DropdownToggle color="primary" className="arrow-none waves-effect waves-light">
                        <i className="mdi mdi-settings mr-2"></i> Settings
                    </DropdownToggle>
                    <DropdownMenu className="language-switch" right>
                        <DropdownItem tag="a" href="#">Action</DropdownItem>
                        <DropdownItem tag="a" href="#">Another action</DropdownItem>
                        <DropdownItem tag="a" href="#">Something else here</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem tag="a" href="#">Separated link</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </React.Fragment>
            

          
            
        );
    }
}

export default SettingMenu;


