import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const AboutMe = (props) => {
    const {
        data
    } = props;

    console.log(data)
    const image = 'images/' + data.image;

    return (
        <section className="about-me">
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
                        <h3>{data.title}</h3>
                        <p>{data.biowork}</p>
                        <p>{data.biopriv}</p>
                        <Container className="details-container">
                            <Container className="contact-details-box">
                                <h3>{data.subtitle}</h3>
                                <p>{data.name}</p>
                                <p>{data.place}</p>
                                <a href="tel:791-893-867">{data.phone}</a>
                                <a href="mailto:p.nowecki@gmail.com">{data.email}</a>
                            </Container>
                            <Container className="contact-button-box">
                                <Button
                                    variant="outline-light"
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