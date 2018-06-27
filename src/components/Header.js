import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';

class Header extends Component {



    render() {
        return (
            <PageHeader>
                Example page header <small>Subtext for header</small>
            </PageHeader>
        );
    }
}

export default Header;