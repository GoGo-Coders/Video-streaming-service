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
       <Row
        title="Trending Now"
        fetchUrl={`${base_url}${requests.fetchTrending}`}
      />
      <Row
        title="Top Rated"
        fetchUrl={`${base_url}${requests.fetchTopRated}`}
      />
      <Row
        title="Action Movies"
        fetchUrl={`${base_url}${requests.fetchActionMovies}`}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={`${base_url}${requests.fetchComedyMovies}`}
      />
      <Row
        title="Horror Movies"
        fetchUrl={`${base_url}${requests.fetchHorrorMovies}`}
      />
      <Row
        title="Romantic Movies"
        fetchUrl={`${base_url}${requests.fetchRomanceMovies}`}
      />
      <Row
        title="Documentaries"
        fetchUrl={`${base_url}${requests.fetchDocumentaries}`}
      />
      
    </div>
  );
}

export default App;
