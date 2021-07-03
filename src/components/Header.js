import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Scroll from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ScrollLink = Scroll.Link;
export const Header = (props) => {
    const {
        data
    } = props;
    return (
        <section id="home">
            <Container className="header-container container-lg" >
                <Row >
                    <Col >
                        <div className="headet-txt-box">
                            <h1 className="responsive-headline">{data.name}</h1>
                            <h3>{data.shortBio}</h3>
                            <hr />
                            <Container>
                                <a href="tel:791-893-867">
                                    <FontAwesomeIcon className="icon-footer" icon={faPhone} />
                                </a>
                                <a href="mailto:p.nowecki@gmail.com">
                                    <FontAwesomeIcon className="icon-footer" icon={faEnvelope} />
                                </a>
                                <a href={data.social[0].url}>
                                    <FontAwesomeIcon className="icon-footer" icon={faGithub} />
                                </a>
                                <a href={data.social[1].url}>
                                    <FontAwesomeIcon className="icon-footer" icon={faLinkedin} />
                                </a>
                                <a href={data.social[2].url}>
                                    <FontAwesomeIcon className="icon-footer" icon={faFacebook} />
                                </a>
                            </Container>
                        </div>
                    </Col>
                </Row>
                <div className="scrolldown">
                    <ScrollLink
                        className="smoothscroll"
                        smooth={true}
                        duration={100}
                        to="about-me"
                    >
                        <div className="icon-scroll"></div>
                    </ScrollLink>
                </div>
            </Container>
        </section>
    )
}