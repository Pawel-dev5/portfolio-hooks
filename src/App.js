import React, { useState, useEffect } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { Portfolio } from './components/Portfolio';
import {Header} from './components/Header';
import { Tech } from './components/Tech';

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
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  } else return (
    <div className="App">
      <Menu className="container" data={translateData.main} toggleLang={toggleLang} />
      <Header data={translateData.main}/>
      <Tech data={translateData.resume.skills}/>
      <Portfolio data={translateData.portfolio} />
      <Footer className="container" data={translateData} />
    </div>
  )
}
export default App;
