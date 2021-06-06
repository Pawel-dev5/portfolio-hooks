import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Work = (props) => {
    const {
        data,
        lang
    } = props;

    // console.log(data)
    // console.log(lang)
    if (data.length !== 0) {
        return (
            <section className="work">
                <Container>
                    <h1>{data.title}</h1>
                </Container>
                <Container className="work-box">
                    <Row className="justify-content-md-center">
                        <Col
                            xs
                            lg="3"
                        >
                            <h3>
                                <span>
                                    {data.certtitle}
                                </span>
                            </h3>
                        </Col>
                        <Col md="auto" lg="7" className="abouttxt-box">
                            {data.certificates.map((item, index) => {
                                if (data.length !== 0) {
                                    return (
                                        <div key={index}><h3>{item.title}</h3>
                                            <p className="info">{item.company}<span>&bull;</span> <em className="date">{item.years}</em></p>
                                            <details className="newline">
                                                <summary >
                                                    {/* <FontAwesomeIcon className="icon-circle-down" icon={faChevronCircleDown} /> */}
                                                Pokaż szczegóły
                                            </summary>
                                                {item.description.map((i, index) => {
                                                    if (item.length !== 0) {
                                                        return (
                                                            <p className="newline" key={index}>{i.title}</p>
                                                        )

                                                    } else return (
                                                        <div className="container">
                                                            <div className="loader"></div>
                                                        </div>
                                                    )
                                                })}
                                            </details>
                                        </div>
                                    )
                                } else return (
                                    <div className="container">
                                        <div className="loader"></div>
                                    </div>
                                )
                            })}

                        </Col>
                    </Row>
                </Container>
                <Container className="work-box">
                    <Row className="justify-content-md-center">
                        <Col
                            xs
                            lg="3"
                        >
                            <h3>
                                <span>
                                    {data.worktitle}
                                </span>
                            </h3>
                        </Col>
                        <Col md="auto" lg="7" className="abouttxt-box">
                            {data.work.map((item, index) => {
                                if (data.length !== 0) {
                                    return (
                                        <div key={index}><h3>{item.company}</h3>
                                            <p className="info">{item.title}<span>&bull;</span> <em className="date">{item.years}</em></p>
                                            <details className="newline">
                                                <summary >
                                                    {/* <FontAwesomeIcon className="icon-circle-down" icon={faChevronCircleDown} /> */}
                                                Pokaż szczegóły
                                            </summary>
                                                {item.description.map((i, index) => {
                                                    const id = index + 1000
                                                    if (item.length !== 0) {
                                                        return (
                                                            <>
                                                                <p className="newline" key={id}>{i.subtitle}</p>
                                                                <p className="newline" key={index}>{i.title}</p>
                                                            </>
                                                        )

                                                    } else return (
                                                        <div className="container">
                                                            <div className="loader"></div>
                                                        </div>
                                                    )
                                                })}
                                            </details>
                                        </div>
                                    )
                                } else return (
                                    <div className="container">
                                        <div className="loader"></div>
                                    </div>
                                )
                            })}

                        </Col>
                    </Row>
                </Container>
                <Container className="work-box">
                    <Row className="justify-content-md-center">
                        <Col
                            xs
                            lg="3"
                        >
                            <h3>
                                <span>
                                    {data.edutitle}
                                </span>
                            </h3>
                        </Col>
                        <Col md="auto" lg="7" className="abouttxt-box">
                            {data.education.map((item, index) => {
                                if (data.length !== 0) {
                                    return (
                                        <div key={index}><h3>{item.school}</h3>
                                            <p className="info">{item.degree}<span>&bull;</span> <em className="date">{item.graduated}</em></p>
                                        </div>
                                    )
                                } else return (
                                    <div className="container">
                                        <div className="loader"></div>
                                    </div>
                                )
                            })}

                        </Col>
                    </Row>
                </Container>
            </section>
        )
    } else return (
        <div className="container">
            <div className="loader"></div>
        </div>
    )
}