import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Scroll from "react-scroll";

export const Menu = (props) => {
    const {
        data,
        toggleLang
    } = props;
    const ScrollLink = Scroll.Link;

    console.log(data.menu)
    return (
        <Navbar
            bg="light"
            sticky="top"
        >
            <Navbar.Brand onClick={toggleLang}>
                <img
                    alt="lang"
                    src={data.icon}
                />{' '}
            </Navbar.Brand>
            <Nav className="mr-auto">
                {data.menu.map((item, id) => {
                    return (
                        <ScrollLink
                            className="smoothscroll"
                            smooth={true}
                            duration={500}
                            to={item.href}
                            href={item.href}
                            key={id}
                        >
                            {item.name}
                            {/* <Nav.Link href={item.href} key={id}>{item.name}</Nav.Link> */}

                        </ScrollLink>
                    )
                })}
            </Nav>
        </Navbar>
    )
}