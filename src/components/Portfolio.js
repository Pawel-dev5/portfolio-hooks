import React, { useState } from "react";
import { PortfolioGrid } from "./PortfolioGrid";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const Portfolio = ({ data }) => {
  const [filters, setFilters] = useState("all");

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col className="portfolio-container">
            <h1>{data.title}</h1>
            <div className="btn-group portfolio-buttons" role="group" aria-label="Basic example">
              <Button type="button" className="btn btn-secondary" onClick={() => setFilters("all")}>All</Button>
              <Button type="button" className="btn btn-secondary" onClick={() => setFilters("react")}>React</Button>
              <Button type="button" className="btn btn-secondary" onClick={() => setFilters("others")}>Wordpress</Button>
              <Button type="button" className="btn btn-secondary" onClick={() => setFilters("wordpress")}>Inne</Button>
            </div>
            <div id="portfolio-wrapper" className="container-box col-sm">
              <PortfolioGrid filters={filters} portfolio={data} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}