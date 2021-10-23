import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({});

// let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;
  const getData = (e) => {
    e.preventDefault();
    let ipaddr = e.target.ip_addr.value
    const api = `http://localhost:8000/ip2loc/?ip=${ipaddr}`
    axios.get(api)
      .then(resp => {
        setData(resp.data)
      })
      .catch(error =>{
        console.log("ERRRORRRRRRRRRRRRRRR",error)
      })
  }

  useEffect(()=>{
    const api = "http://localhost:8000/ip2loc/" 
    axios.get(api)
      .then(resp => {
        setData(resp.data)
      })
      .catch(error =>{
        console.log("ERRRORRRRRRRRRRRRRRR",error)
      })
  },[])



  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid justify-content-center">
          <form className="d-flex" onSubmit={getData}>
            <input className="form-control me-2" type="search" name="ip_addr" placeholder="Search IP/Domain" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div className="container-fluid justify-content-center d-flex">
        <div className="card" style={{width: "18rem"}}>
          <ul className="list-group list-group-flush">
          {/* {JSON.stringify(data)} */}
          <li className="list-group-item">Continent : {data.continent_name}</li>
          <li className="list-group-item">Continent Code: {data.continent_code}</li>
            <li className="list-group-item">Country : {data.country_name}</li>
            <li className="list-group-item">Country Code: {data.country_code}</li>
            <li className="list-group-item">City : {data.city}</li>
            <li className="list-group-item">Dma Code : {data.dma_code}</li>
            <li className="list-group-item">City : {data.city}</li>
            <li className="list-group-item">Region : {data.region}</li>
            <li className="list-group-item">Postal Code : {data.postal_code}</li>
            <li className="list-group-item">Latitude : {data.latitude}</li>
            <li className="list-group-item">Longitude : {data.longitude}</li>
            <li className="list-group-item">Postal Code : {data.postal_code}</li>
            <li className="list-group-item">Time Zone : {data.time_zone}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
