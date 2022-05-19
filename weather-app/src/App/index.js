
import { createContext, useState , } from 'react';
import ApiCalls from '../components/ApiCall/apiCall';
import Heading from '../components/heading';
import SearchBar from '../components/SearchBar/searchInput';
import SearchButton from '../components/SearchButton/searchButton';
import './App.css';


export const WeatherContext = createContext()


function App() {

const [ city , setCity]= useState("London")
const [ error , setError] = useState()
const [result , setResult] = useState()
const [dailyWeather, setDailyWeather]= useState([])
  return (
    <WeatherContext.Provider value ={{city , setCity, error, setError ,result , setResult ,dailyWeather, setDailyWeather}}>
    <div className="App">
      hello world
   

    <Heading title={"weather app"}/>
     <SearchButton label={"click me"}/>
    <SearchBar/>
   <ApiCalls/>
    </div>
    </WeatherContext.Provider>
  );
}

export default App;
