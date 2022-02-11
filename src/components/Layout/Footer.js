import React, { Component } from 'react';
import { Row,Col } from 'reactstrap';

class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <footer className="footer">
                    <div className="container-fluid">
                        <Row>
                            <Col>
                                {new Date().getFullYear()} © Feed Fleet 
                            </Col>
                        </Row>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;






