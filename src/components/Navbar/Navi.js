import React from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";
import SignIn from "../Auth/SignIn";
import SignOut from "../Auth/SignOut";
import "./Navi.css";

const Navi = () => {
  return (
    <div className="Navbar__page">
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">ikinciel</NavbarBrand>
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <div className="Navbar__ads_add">
              <NavItem className="Navbar__addItems">
                <NavLink href="/addItem/">Ürün Ekle</NavLink>
              </NavItem>
            </div>
            <div className="Navbar__button">
              <NavItem>
                <NavLink href="#">
                  <SignOut />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <SignIn />
                </NavLink>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
