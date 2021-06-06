import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ContactForm } from './ContactForm';
import Scroll from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';

export const Footer = (data) => {
    const [scroll, setScroll] = useState(false);
    const ScrollLink = Scroll.Link;

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 100);
            // console.log(window.scrollY)
        })
    })

    const footerData = data.data;
    console.log(footerData.main.social[0].name)
    if (footerData) {
        return (
            <footer>
                <h1>{footerData.footer.sectiontitle}</h1>

                <Container>
                    <Row>
                        <Col className="contact-details-box">
                            <div>
                                {/* <h3>{footerData.main.subtitle}</h3> */}
                                <h4>{footerData.main.name}</h4>
                                <h4>{footerData.main.place}</h4>
                                <a href="tel:791-893-867">
                                    <FontAwesomeIcon className="icon-footer" icon={faPhone} />
                                    {footerData.main.phone}
                                </a>
                                <a href="mailto:p.nowecki@gmail.com">
                                    <FontAwesomeIcon className="icon-footer" icon={faEnvelope} />
                                    {footerData.main.email}
                                </a>
                                <a href={footerData.main.social[0].url}>
                                    <FontAwesomeIcon className="icon-footer" icon={faGithub} />
                                    {footerData.main.social[0].name}
                                </a>
                                <a href={footerData.main.social[1].url}>
                                    <FontAwesomeIcon className="icon-footer" icon={faLinkedin} />
                                    {footerData.main.social[1].name}
                                </a>
                                <a href={footerData.main.social[2].url}>
                                    <FontAwesomeIcon className="icon-footer" icon={faFacebook} />
                                    {footerData.main.social[2].name}
                                </a>
                            </div>
                        </Col>
                        <Col className="border-footer">
                            <div>
                                <ContactForm data={footerData} />
                            </div>
                        </Col>
                    </Row>
                    <Row className={scroll ? 'active' : 'go-top'}>
                        <Col>
                            <ScrollLink
                                className="smoothscroll"
                                smooth={true}
                                duration={100}
                                to="home"
                            >
                                <FontAwesomeIcon icon={faChevronUp} />
                            </ScrollLink>
                        </Col>
                    </Row>
                    <Row className="copyright">
                        <Col>
                            <p>&copy; Copyright 2021
                            <a title="Paweł Nowecki" href={footerData.main.social[0].url}>Paweł Nowecki</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    } else return (
        <div className="loader-container">
            <div className="loader"></div>
        </div>
    );
}