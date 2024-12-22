import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfo from './components/WeatherInfo'
import WeatherInfo5Days from './components/WeatherInfo5Days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()


  const inputRef = useRef()

  async function searchCity() {

    const City = inputRef.current.value
    const API_key = '333a1dfe0aebb15ede910d4b9a05a782'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=${API_key}&lang=pt_br&units=metric`

    const info = await axios.get(url)
    const info5Days = await axios.get(url5Days)

    setWeather5Days(info5Days.data)
    setWeather(info.data)


  }

  return (
    <div className='container'>
      <h1>DevClub Previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInfo weather={weather} />}
      {weather5Days && <WeatherInfo5Days weather5Days={weather5Days} />}
    </div>
  )
}

export default App
