import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const apikey = "f6e59caf1847b27e0d6fb9ef357e02db";

    const [data, setdata] = useState({})
    const [inputcity, setinputcity] = useState("");

    const getweatherDetail = (cityname) => {
        if (!cityname) return
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=" + apikey;
        axios.get(apiurl)
            .then((res) => {
                console.log(res.data);
                setdata(res.data)
            })
            .catch(err => { console.log(err) });
    };

    const handleinput = (event) => {
        setinputcity(event.target.value)
    };

    const handlesearch = () => {
       getweatherDetail(inputcity)
    };

   

    return (
        <div className="col-md-12">
            <div className="WeatherBG">
                <h1 className="weathertext">Weather App</h1>
                <div className="d-grid col-4 mt-3 gap-3">
                    <input type="text" className="form-control" onChange={handleinput} />
                    <button type="button" className="btn btn-primary" onClick={handlesearch} value={inputcity}>Submit</button>
                </div>
            </div>

    {Object.keys(data).length>0?
            <div className="col-md-12 text-center mt-5">
                <div className="shadow rounded WeatherResult">
                    <img className="Weathericon"
                        src="data:image/jpeg;base64,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" />
                    <h5 className="city">{data?.name}</h5>
                    <h6 className="temp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>

                </div>
            </div>
            :""}
        </div>
    );
}
export default App;