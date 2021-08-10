import React, { useState } from "react";
import { PortfolioGrid } from "./PortfolioGrid";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Pagination } from './Pagination';

export const Portfolio = ({ data }) => {
  const [filters, setFilters] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  // Get current projects to pagination with category filter
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = data.projects.filter(project => project.category.map(cat => cat).includes(filters)).slice(indexOfFirstPost, indexOfLastPost);

  // Change pagination page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Category filters changins also setting currenr page = 1
  function catChange(e) {
    setCurrentPage('1')
    setFilters(e.target.value)
  }

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col className="portfolio-container">
            <h1>{data.title}</h1>
            <div>
              <nav>
                <ul className='pagination'>
                  <li className={filters === "all" ? 'page-item-active page-item' : 'page-item'}>
                    <button className='page-link' onClick={catChange} value='all' name='all'>
                      All
                    </button>
                  </li>
                  <li className={filters === "react" ? 'page-item-active page-item' : 'page-item'}>
                    <button className='page-link' onClick={catChange} value='react' name='react'>
                      React
                    </button>
                  </li>
                  <li className={filters === "wordpress" ? 'page-item-active page-item' : 'page-item'}>
                    <button className='page-link' onClick={catChange} value='wordpress' name='wordpress'>
                      Wordpress
                    </button>
                  </li>
                  <li className={filters === "others" ? 'page-item-active page-item' : 'page-item'}>
                    <button className='page-link' onClick={catChange} value='others' name='others'>
                      Inne
                    </button>
                  </li>
                </ul>
              </nav>
              {filters === "react" || filters ==='all' ? (
                <Pagination
                  postPerPage={postPerPage}
                  totalPosts={data.projects.length}
                  paginate={paginate}
                  currentPage={currentPage}
                  setPostPerPage={setPostPerPage}
                />
              ) : ('')}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <PortfolioGrid data={currentPosts} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}