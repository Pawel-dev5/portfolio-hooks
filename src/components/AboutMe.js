import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const AboutMe = (props) => {
    const {
        data
    } = props;
    const image = 'images/' + data.image;
    return (
        <section className="about-me">
            <Container>
                <h1>{data.title}</h1>
            </Container>
            <Container>
                <Row className="justify-content-md-center">
                    <Col
                        xs
                        lg="2"
                        className="aboutimg-box d-none d-lg-block"
                    >
                        <img src={image} alt={data.name} />
                    </Col>
                    <Col md="auto" lg="7" className="abouttxt-box">
                        {/* <h3>{data.title}</h3> */}
                        <p>{data.biowork}</p>
                        <p>{data.biopriv}</p>
                        <Container className="details-container">
                            <Container className="contact-button-box">
                                <Button
                                    variant="outline-light"
                                    href={data.resumedownload}
                                >
                                    {data.resumebuttontext}
                                </Button>
                            </Container>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}