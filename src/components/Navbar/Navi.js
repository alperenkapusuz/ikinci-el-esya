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
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "../Auth/SignOut";

const Navi = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">ikinciel</NavbarBrand>
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            {/* <NavItem>
              <NavLink href="/about/">about</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="/ads/">ads</NavLink>
            </NavItem>
            {user ? (
              <>
                <NavItem>
                  <NavLink href="/addItem/">addItem</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <SignOut />
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <NavItem>
                <NavLink href="#">
                  <SignIn />
                </NavLink>
              </NavItem>
            )}

            {/* <NavItem>
              <NavLink href="/addItem/">addItem</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <SignIn />
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
