import React from "react";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const PortfolioGrid = (props) => {
    const {
        portfolio,
        filters
    } = props;
    const dataa = portfolio.projects;

    return (
        <>
            <Container>
                <Row>
                    <Col className="portfolio-box">
                        {dataa.map((pro, index) => {
                            const projectImage = 'images/portfolio/' + pro.image;
                            return (
                                <>
                                    {pro.category.filter((p, index) => p.includes(filters)).map((i) => (
                                        <div key={i}>
                                            <Container className="portfolio-item">
                                                <Row className="item-wrap card">
                                                    <Col>
                                                        <a href={pro.url} title={pro.title} target="_blank" rel="noopener noreferrer">
                                                            <img alt={pro.title} src={projectImage} />
                                                            <div className="overlay card-body">
                                                                <div className="portfolio-item-meta">
                                                                    <h5 className="card-title">{pro.title}</h5>
                                                                    <p className="newline card-text">{pro.description}</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </Col>
                                                </Row>
                                            </Container>
                                            <Container>
                                                <Row>
                                                    <Col className="btn-port-box">
                                                        <Button className="button-portfolio" href={pro.git} target="_blank" rel="noopener noreferrer">
                                                            {/* <i className="fa fa-github portfolio-icons"></i> */}
                                                            GIT
                                                        </Button>
                                                    </Col>
                                                    <Col className="btn-port-box">
                                                        <Button className="button-portfolio" href={pro.url} target="_blank" rel="noopener noreferrer" >
                                                            {/* <i className="fa fa-eye portfolio-icons"></i> */}
                                                            LIVE
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    ))}
                                </>
                            )
                        })
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}