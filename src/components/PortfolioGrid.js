import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGlobe, faEye } from '@fortawesome/free-solid-svg-icons';
import { Button } from "react-bootstrap";

function PortfolioGrid(props) {
    const {
        portfolio,
        filters
    } = props;
    const dataa = portfolio.projects;

    if (dataa.length !== 0) {
        return (
            <>
                <div className="container">
                    <div className="row" >
                        {dataa.map(pro => {
                            const projectImage = 'images/portfolio/' + pro.image;
                            if (pro.length !== 0) {
                                return (
                                    <>
                                        {pro.category.filter(p => p.includes(filters)).map((filteredName) => (
                                            <div key={pro.title} className="columns portfolio-item container-box col-sm">
                                                <div className="item-wrap card">
                                                    <a href={pro.url} title={pro.title} target="_blank" rel="noopener noreferrer">
                                                        <img alt={pro.title} src={projectImage} />
                                                        <div className="overlay card-body">
                                                            <div className="portfolio-item-meta">
                                                                <h5 className="card-title">{pro.title}</h5>
                                                                <p className="newline card-text">{pro.description}</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="v">
                                                    <div className="download-portfolio">
                                                        <a href={pro.git} title={pro.title} target="_blank" rel="noopener noreferrer" >
                                                            <Button className="button-portfolio" href={pro.git}>
                                                                {/* <i className="fa fa-github portfolio-icons"></i> */}
                                                                GIT
                                                            </Button>
                                                        </a>
                                                        <a href={pro.url} title={pro.title} target="_blank" rel="noopener noreferrer" >
                                                            <Button className="button-portfolio" href={pro.url} >
                                                                {/* <i className="fa fa-eye portfolio-icons"></i> */}
                                                                LIVE
                                                            </Button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )
                            } else return (
                                <div className="container">
                                  <div className="loader"></div>
                                </div>
                              );
                        })
                        }
                    </div>
                </div>
            </>
        )
    } else return <h1>Ładowanie</h1>
}
export default PortfolioGrid;