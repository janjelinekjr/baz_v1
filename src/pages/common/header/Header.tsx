import {Container, Nav, Navbar} from "react-bootstrap";
import './Header.scss'
// import mainLogo from '../../../devdata/imgs/lam.svg'
const Header = () => {
    return (
        <Navbar className='mb-5' bg="primary" variant="dark" expand={false}>
            <Container fluid='xxl'>
                <div>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            // src={mainLogo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top me-3"
                        />
                        BAZZAR
                    </Navbar.Brand>
                </div>
                <div className='d-flex justify-content-end'>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='navbar-expand order-first'>
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