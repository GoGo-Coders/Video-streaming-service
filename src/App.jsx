import "./App.css";
import Nav from "./Nav";
const base_url = "https://api.themoviedb.org/3";
import Banner from './Banner'
import requests from './request'
import Row from './Row'

function App() {
  return (
    <div>
      <Nav />
      <Banner fetchUrl={`${base_url}${requests.fetchNetflixOriginals}`} />
      <Row
        title="Netflix Orginals"
        fetchUrl={`${base_url}${requests.fetchNetflixOriginals}`}
        isLarge={true}
      />
      
    </div>
  );
}

export default App;
