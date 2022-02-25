
import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap';
import { withRouter } from 'react-router-dom';

// users
//import user11 from '../../../images/users/user-11.png';

class ProfileMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }

    render() {
        return (
            <React.Fragment>
                <Dropdown isOpen={this.state.menu} toggle={this.toggle} className="notification-list list-inline-item nav-pro-img mr-1" tag="li">
                    <DropdownToggle className="nav-link arrow-none nav-user" tag="a">
                        <img  alt="user" className="rounded-circle" />
                        <span> <b> </b>  </span>
                        
                    </DropdownToggle>
                    <DropdownMenu className="profile-dropdown" right>
                        <DropdownItem tag="a" href="/pages-profile"><i className="mdi mdi-account-circle m-r-5"></i> Profile Details</DropdownItem>
                        
                        
                        <DropdownItem tag="a" href="/pages-support"><i className="mdi mdi-lock-open-outline m-r-5"></i> Support</DropdownItem>
                        <div className="dropdown-divider"></div>
                        <DropdownItem tag="a" className="text-danger" href="/logout"><i className="mdi mdi-power text-danger"></i> Logout</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </React.Fragment >
        );
    }
}


export default withRouter(ProfileMenu);
