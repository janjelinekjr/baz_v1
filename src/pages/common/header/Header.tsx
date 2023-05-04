import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";

const Header = () => {
    return (
        <Navbar className='mb-5' bg="primary" variant="dark" expand='xxxl'>
            <Container fluid='xxl'>
                <div>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            // src={require("../../../devdata/imgs/lam.svg")}
                            width="30"
                            height="30"
                            className="d-inline-block align-top me-3"
                        />
                        BAZZAR
                    </Navbar.Brand>
                </div>
                <div className='justify-content-end'>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">Link</Nav.Link>
                            <Nav.Link href="/">Link</Nav.Link>
                            <Nav.Link href="/">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    )
}

export default Header