
import React, { Component } from 'react'
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import BrandIcon from 'components/HomePage/BrandIcon/BrandIcon';
import s from './NavigationBar.css';

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                  <Navbar.Header>
                      <Link to="/">
                    <Navbar.Brand >
                        <BrandIcon fn="Zach" ln="Yu"   />
                    </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                   
                    <Nav className={s.right_navlist} pullRight>
                      <NavItem eventKey={1} href="#">
                        <Link to="/"> Portfolio </Link>
                      </NavItem>
                      <NavItem eventKey={1} href="#">
                      <Link to="/"> Resume </Link>
                      </NavItem>
                      <NavItem eventKey={2} href="#">
                      <Link to="/"> About </Link>
                      </NavItem>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
                            </div>
        )
    }
}

export default NavigationBar