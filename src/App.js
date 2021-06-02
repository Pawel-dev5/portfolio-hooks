import React, { useState, useEffect } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import Portfolio2 from './components/Portfolio';
import { set } from 'react-hook-form';
const API = './resumeData.json';

function App() {
  const [data, setData] = useState([]);
  const [translateData, setTranslateData] = useState([]);
  const [error, setError] = useState("");
  const [lang, setLang] = useState({
    PL: true
  });

  const toggleLang = () => {
    setLang((prevState) => ({
      ...prevState,
      PL: !prevState.PL,
    }));
    if (lang.PL === true) {
      return setTranslateData(data.EN)
    } else setTranslateData(data.PL)
  }
  useEffect(() => {
    fetch(`${API}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        if (data) {
          return (
            setData(data),
            setTranslateData(data.PL)
          )
        } else return (
          setError("Brak danych")
        )
      })
      .catch(() => {
        setError("Bład serwera");
      });
  }, []);

  if (translateData.length === 0) {
    return (
      <div className="container">
        <div className="loader"></div>
      </div>
    );
  } else return (
    <div className="App">
      <div className="container" >
        <img onClick={toggleLang} src={translateData.main.icon}></img>
        <h1 className="home">{translateData.main.description}</h1>
        <h1>1...</h1>
      </div>
      <Nav className="container" data={translateData} />
      <Portfolio2 data={translateData.portfolio} />
      <Footer className="container" data={translateData} />
    </div>
  )
}
export default App;
