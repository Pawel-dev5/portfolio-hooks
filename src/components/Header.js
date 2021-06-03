import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Scroll from "react-scroll";

const ScrollLink = Scroll.Link;
export const Header = (props) => {
    const {
        data
    } = props;
    return (
        <Container fluid="true" className="header-container">
            <Row>
                <Col>
                    <div className="headet-txt-box">
                        <h1 className="responsive-headline">{data.name}</h1>
                        <h4>{data.shortBio}</h4>
                        <hr />
                        <ul className="social">
                            {data.social.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href="">
                                            {item.name}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </Col>
            </Row>
            <div className="scrolldown">
                <ScrollLink
                    className="smoothscroll"
                    smooth={true}
                    duration={100}
                    to="contact"
                >
                    <div className="icon-scroll"></div>
                </ScrollLink>
            </div>
        </Container>
    )
}