import React, {Component} from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

class NavBar extends Component {



    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Klasik Social Network</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/blog">
                        Blog
                    </NavItem>
                    <NavItem eventKey={2} href="/profile">
                        Profile
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1} href="/blog">Blog</MenuItem>
                        <MenuItem eventKey={3.2} href="/settings">Settings</MenuItem>
                        <MenuItem eventKey={3.3} href="/signin">Sign in</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4} href="/">Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}

export default NavBar;