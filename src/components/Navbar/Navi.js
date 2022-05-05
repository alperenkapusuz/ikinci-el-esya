import React from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";

const Navi = () => {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">ikinciel</NavbarBrand>
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/about/">about</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ads/">ads</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/addItem/">addItem</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
