import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};

export const Tech = (props) => {
    const {
        data
    } = props;
    console.log(data)
    return (
        <section className="tech">
            <Carousel
                ssr
                partialVisbile
                data={data}
                itemClass="image-item"
                responsive={responsive}
            >
                {data.map((item, index) => {
                    const itemUrl = 'images/tech/' + item.image;
                    return (
                        <div>
                            <img
                                key={index}
                                draggable={false}
                                style={{ width: "40%", height: "40%" }}
                                src={itemUrl}
                            />
                            <p>{item.name}</p>
                        </div>
                    );
                })}
            </Carousel>
        </section>

    )
}