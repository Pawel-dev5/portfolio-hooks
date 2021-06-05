import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

export const Tech = (props) => {
    const {
        data
    } = props;
    return (
        <section className="tech">
            <h3>{data.skills.title}</h3>
            <Carousel
                ssr
                partialVisible
                data={data}
                itemClass="image-item"
                responsive={responsive}
            >
                {data.skills.items.map((item, index) => {
                    const itemUrl = 'images/tech/' + item.image;
                    return (
                        <div key={index}>
                            <img
                                draggable={false}
                                src={itemUrl}
                                alt="tech icon"
                            />
                            <p>{item.name}</p>
                        </div>
                    );
                })}
            </Carousel>
        </section>

    )
}