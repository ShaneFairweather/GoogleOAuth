import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem  } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    renderLinks() {
       switch (this.props.user) {
           case null:
               return;
           case false:
               return (
                    <Nav className="ml-auto" navbar key={1}>
                        <NavItem className="header__list-item">
                            <Link to="/signin">Sign In</Link>
                        </NavItem>
                    </Nav>
               );
           default:
               return ([
                   <Nav className="ml-auto" navbar key={2}>
                       <NavItem className="header__list-item header__list-item--profile">
                           <div className="header__user-img">
                               <img src={this.props.user.image} alt="headerImg" />
                           </div>
                           {this.props.user.username} &nbsp;
                           <span className="vert">&#124;</span>
                       </NavItem>
                       <NavItem className="header__list-item">
                           <a href="/api/logout">Sign out</a>
                       </NavItem>
                   </Nav>
               ]);
       }
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md" className="header">
                    <NavbarBrand className="header__brand" href="/">Interreact</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {this.renderLinks()}
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}


export default Header;