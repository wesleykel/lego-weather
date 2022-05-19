
import Heading from '../components/heading';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchButton from '../components/SearchButton/searchButton';
import './App.css';

function App() {
  return (
    <div className="App">
      hello world
      <Heading title={"weather app"}/>
      <SearchButton label={"click me"}/>
      <SearchBar/>
   
    </div>
  );
}

export default App;
