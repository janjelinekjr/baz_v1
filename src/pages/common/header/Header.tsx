import {Badge, Container, Nav, Navbar} from "react-bootstrap";
import clsx from "clsx";
import {useState} from "react";

const Header = () => {
    const [switchHeader, setSwitchHeader] = useState(false)

    return (
        <Navbar className={clsx('d-flex', 'mb-5', 'mt-3')} bg="white" variant="light" expand={false}>
            <Container fluid='xxl'>
                <div className={clsx('d-flex')}>
                    <Navbar.Brand href="/" onMouseEnter={() => {
                        setSwitchHeader(true)
                    }} onMouseLeave={() => {
                        setSwitchHeader(false)
                    }}>
                        {!switchHeader ? <h3 className={clsx('mb-0', 'd-flex')}>
                            <Badge>Vele</Badge><span
                            className={clsx('text-primary', 'align-self-end', 'pb-1')}>Bazar</span>
                        </h3> : <h3 className={clsx('mb-0', 'd-flex', 'gap-1')}>
                            <span
                                className={clsx('text-primary', 'align-self-end', 'pb-1')}>Vele</span><Badge>Bazar</Badge>
                        </h3>
                        }
                    </Navbar.Brand>
                </div>
                <div className={clsx('d-flex', 'justify-content-end')}>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className={clsx('navbar-expand', 'order-first')}>
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