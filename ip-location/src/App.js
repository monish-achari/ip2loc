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
          <li className="list-group-item">Continent : <b>{data.continent_name}</b></li>
          <li className="list-group-item">Continent Code: <b>{data.continent_code}</b></li>
            <li className="list-group-item">Country : <b>{data.country_name}</b></li>
            <li className="list-group-item">Country Code: <b>{data.country_code}</b></li>
            <li className="list-group-item">City : <b>{data.city}</b></li>
            <li className="list-group-item">Dma Code : <b>{data.dma_code}</b></li>
            <li className="list-group-item">City :<b> {data.city}</b></li>
            <li className="list-group-item">Region : <b>{data.region}</b></li>
            <li className="list-group-item">Postal Code : <b>{data.postal_code}</b></li>
            <li className="list-group-item">Latitude : <b>{data.latitude}</b></li>
            <li className="list-group-item">Longitude : <b>{data.longitude}</b></li>
            <li className="list-group-item">Postal Code : <b>{data.postal_code}</b></li>
            <li className="list-group-item">Time Zone : <b>{data.time_zone}</b></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
