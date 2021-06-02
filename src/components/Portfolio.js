import React, { useState } from "react";
import PortfolioGrid from "./PortfolioGrid";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Portfolio2(props) {
  const {
    data
  } = props;
  const all = "all";
  const [filters, setFilters] = useState(all);
  const filterAll = () => { setFilters("all") }
  const filterReact = () => { setFilters("react") }
  const filterOther = () => { setFilters("others") }
  const filterWord = () => { setFilters("wordpress") }

  if (data) {
    return (
      <Container id="portfolio">
        <Row>
          <Col className="portfolio-container">
            <h3>{data.title}</h3>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-secondary" onClick={filterAll}>All</button>
              <button type="button" className="btn btn-secondary" onClick={filterReact}>React</button>
              <button type="button" className="btn btn-secondary" onClick={filterWord}>Wordpress</button>
              <button type="button" className="btn btn-secondary" onClick={filterOther}>Inne</button>
            </div>
            <div id="portfolio-wrapper" className="container-box col-sm">
              <PortfolioGrid filters={filters} portfolio={data} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  } else return (
    <div className="container">
      <div className="loader"></div>
    </div>
  );
}