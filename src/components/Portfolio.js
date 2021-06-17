import React, { useState } from "react";
import { PortfolioGrid } from "./PortfolioGrid";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const Portfolio = ({data}) => {
  const [filters, setFilters] = useState("all");
  const filterAll = () => { setFilters("all") }
  const filterReact = () => { setFilters("react") }
  const filterOther = () => { setFilters("others") }
  const filterWord = () => { setFilters("wordpress") }

  if (data) {
    return (
      <section id="portfolio">
        <Container>
          <Row>
            <Col className="portfolio-container">
              <h1>{data.title}</h1>
              <div className="btn-group portfolio-buttons" role="group" aria-label="Basic example">
                <Button type="button" className="btn btn-secondary" onClick={filterAll}>All</Button>
                <Button type="button" className="btn btn-secondary" onClick={filterReact}>React</Button>
                <Button type="button" className="btn btn-secondary" onClick={filterWord}>Wordpress</Button>
                <Button type="button" className="btn btn-secondary" onClick={filterOther}>Inne</Button>
              </div>
              <div id="portfolio-wrapper" className="container-box col-sm">
                <PortfolioGrid filters={filters} portfolio={data} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  } else return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
}