import "./App.css";
import Nav from "./Nav";
const base_url = "https://api.themoviedb.org/3";
import Banner from './Banner'
import requests from './request'

function App() {
  return (
    <div>
      <Nav />
      <Banner fetchUrl={`${base_url}${requests.fetchNetflixOriginals}`} />
      
    </div>
  );
}

export default App;
