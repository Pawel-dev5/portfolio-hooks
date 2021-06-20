
import firebase from 'firebase/app'
import 'firebase/database';
import { useState, useEffect } from 'react';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const Test = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const ref = firebase.database().ref();
        ref.on("value", snapshot => {
            // const array = {};
            // For each data in the entry
            // snapshot.forEach(el => {
            // Push the object to the array
            // If you also need to store the unique key from firebase,
            // You can use array.push({ ...el.val(), key: el.key });
            // array.push(el.val());
            // setData(el.val())
            setData(snapshot.val())
            // });
            // setData(array);
        });
        // Clean-up function
        return () => ref.off("value");
    }, []);

    console.log(data)
    if (data.length !== 0) {
        return (
            <h1>{data.PL.main.title}</h1>
        );

    } else return (
        <div className="loader-container">
            <div className="loader"></div>
        </div>
    )
}