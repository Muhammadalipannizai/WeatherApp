import './App.css';
import Search from './components/search/Search';
// import Forecast from './components/forecast/Forecast';
function App() {

  const handleOnSearch = (searchData)=>{
console.log(searchData)
  }
  return (
    <div className="container">
    <Search onSearch = {handleOnSearch}/>
    
    </div>
  );
}

export default App;
