import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Scroll from "react-scroll";
import Container from 'react-bootstrap/Container';

export const Menu = (props) => {
    const {
        data,
        toggleLang
    } = props;
    const ScrollLink = Scroll.Link;

    return (
        <Navbar
            bg="light"
            sticky="top"
            collapseOnSelect
            expand="lg"
        >
            <Container className="menu-container">
                <ScrollLink
                    className="smoothscroll"
                    smooth={true}
                    duration={100}
                    to="about-me"
                    className="d-block d-lg-none"
                >
                    Paweł Nowecki
                </ScrollLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse 
                id="responsive-navbar-nav"
                >
                    <Nav className="me-auto">
                        {data.menu.map((item, id) => {
                            return (
                                <ScrollLink
                                    className="smoothscroll"
                                    smooth={true}
                                    duration={100}
                                    to={item.href}
                                    href={item.href}
                                    key={id}
                                >
                                    {item.name}
                                </ScrollLink>
                            )
                        })}
                        <Navbar.Brand onClick={toggleLang}>
                            <img
                                alt="lang"
                                src={data.icon}
                            />
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}