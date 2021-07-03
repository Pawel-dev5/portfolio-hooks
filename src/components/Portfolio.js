import React, { useState } from "react";
import { PortfolioGrid } from "./PortfolioGrid";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Pagination } from './Pagination';

export const Portfolio = ({ data }) => {
  const [filters, setFilters] = useState("all");

  const [posts, setPosts] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  // GET current projects
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.projects.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
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
              <PortfolioGrid
                filters={filters}
                data={currentPosts}
              />
              <Pagination
                postPerPage={postPerPage}
                totalPosts={posts.projects.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}