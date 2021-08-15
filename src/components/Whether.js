import React, { useState,useEffect} from 'react';
import "./css/style.css"


const Whether = () => {
  const [city,
    setCity] = useState(null)
  const [search,
    setSearch] = useState("Raila")

  useEffect(() => {
    const fetchApi = async ()=> {
      const  url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b9697c694afd4b0d728c01899afd9194`
      const res = await fetch(url)
      const resJson = await res.json();
      setCity(resJson.main)
    }

    fetchApi();
  }, [search])


  return (
    <>
    <div className="box">
  <div className="inputData">
    <input
      type="search"
      className="inputfield"
      value={search}
      onChange={(event)=> {
        setSearch(event.target.value)
      }}
      placeholder="Search City"
      />
    </div>
      {!city ? (
      <div className="error">
      <i class="far fa-frown"></i>
        <p>
Data Not Found
        </p>
        </div>
      ): (
      <div>
        <div className="info">
  <h2 className="location">
  <i className="fas fa-street-view"></i>{search}
  </h2>
  <h1 className="temp">
    {city.temp}°Cel
  </h1>
  <h3 className="minMax">min : {city.temp_min}°Cel | max : {city.temp_max}°Cel</h3>
        </div>
        <div className="wave"></div>
        <div className="wave two "></div>
        <div className="wave three"></div>
        </div>
      )
      }
    </div>
   
    < />

  );
}


export default Whether;