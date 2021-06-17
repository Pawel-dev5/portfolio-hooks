import React, { useState, useEffect } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { Portfolio } from './components/Portfolio';
import { Header } from './components/Header';
import { Tech } from './components/Tech';
import { AboutMe } from './components/AboutMe';
import { Work } from './components/Work';

const API = './resumeData.json';

function App() {
  const [data, setData] = useState([]);
  const [translateData, setTranslateData] = useState([]);
  const [error, setError] = useState("");
  const [lang, setLang] = useState({
    PL: true
  });
  console.log(data)
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

  console.log(error)
  if (translateData.length === 0) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  } else return (
    <div className="App">
      <Menu className="container" data={translateData.main} toggleLang={toggleLang} />
      <Header data={translateData.main} />
      <AboutMe data={translateData.main} />
      <Work data={translateData.resume} />
      <Portfolio data={translateData.portfolio} />
      <Tech data={translateData.resume} />
      <Footer className="container" data={translateData} />
    </div>
  )
}
export default App;
