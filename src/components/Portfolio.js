import React, { useState } from "react";
import { PortfolioGrid } from "./PortfolioGrid";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Pagination } from './Pagination';

export const Portfolio = ({ data }) => {
  const [filters, setFilters] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  // Get current projects to pagination with category filter
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = data.projects.filter(project => project.category.map(cat => cat).includes(filters)).slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts)
  // Change pagination page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col className="portfolio-container">
            <h1>{data.title}</h1>
            <div className="btn-group portfolio-buttons" role="group" aria-label="Basic example">
              <Button type="button" className="btn btn-secondary" onClick={() => setFilters("all")}>All</Button>
              <Button type="button" className="btn btn-secondary" onClick={() => setFilters("react")}>React</Button>
              <Button type="button" className="btn btn-secondary" onClick={() => setFilters("wordpress")}>Wordpress</Button>
              <Button type="button" className="btn btn-secondary" onClick={() => setFilters("others")}>Inne</Button>
            </div>
            <div id="portfolio-wrapper" className="container-box col-sm">
              <PortfolioGrid data={currentPosts} />
              {/* {currentPosts.length >= 4 ? ( */}
                <Pagination
                  postPerPage={postPerPage}
                  totalPosts={data.projects.length}
                  paginate={paginate}
                  currentPage={currentPage}
                  setPostPerPage={setPostPerPage}
                />
              {/* // ) : ('')} */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}