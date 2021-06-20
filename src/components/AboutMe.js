import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import firebase from 'firebase/app'
// import 'firebase/database';
// import { getDatabase, ref, onValue } from 'firebase/firebase-database';
// import { useState } from 'react';


export const AboutMe = (props) => {
    const {
        data
    } = props;
// const [dataa, setDataa] = useState([]);
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    // const firebaseConfig = {
    //     apiKey: "AIzaSyBQ3TfzgYJA54OE0OBsXp3taSeIw5rag9c",
    //     authDomain: "cms-portfolio-6626c.firebaseapp.com",
    //     databaseURL: "https://cms-portfolio-6626c-default-rtdb.europe-west1.firebasedatabase.app",
    //     projectId: "cms-portfolio-6626c",
    //     storageBucket: "cms-portfolio-6626c.appspot.com",
    //     messagingSenderId: "585558060875",
    //     appId: "1:585558060875:web:540ac2ccb905ee29a882ce",
    //     measurementId: "G-C0Q4PSGTCF"
    // };

    // if (!firebase.apps.length) {
    //     firebase.initializeApp(firebaseConfig);
    // }

    // const database = firebase.database();
    // console.log(database)

    // const db = getDatabase();
    // const starCountRef = ref(db);
    // setDataa(starCountRef, (snapshot) => {
    //     const data = snapshot.val();
    //     setDataa(data)
    // })
    // onValue(starCountRef, (snapshot) => {
    //     const data = snapshot.val();
    //     updateStarCount(postElement, data);
    // });

    // console.log(db)


    // const dbRef = firebase.database().ref();
    // dbRef.child("users").child(userId).get().then((snapshot) => {
    //   if (snapshot.exists()) {
    //     console.log(snapshot.val());
    //   } else {
    //     console.log("No data available");
    //   }
    // }).catch((error) => {
    //   console.error(error);
    // });
    
    const image = 'images/' + data.image;
    // console.log(data)
    return (
        <section className="about-me">
            <Container>
                <h1>{data.title}</h1>
            </Container>
            <Container>
                <Row className="justify-content-md-center">
                    <Col
                        xs
                        lg="2"
                        className="aboutimg-box d-none d-lg-block"
                    >
                        <img src={image} alt={data.name} />
                    </Col>
                    <Col md="auto" lg="7" className="abouttxt-box">
                        {/* <h3>{data.title}</h3> */}
                        <p>{data.biowork}</p>
                        <p>{data.biopriv}</p>
                        <Container className="details-container">
                            <Container className="contact-button-box">
                                <Button
                                    variant="outline-light"
                                    href={data.resumedownload}
                                >
                                    {data.resumebuttontext}
                                </Button>
                            </Container>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}