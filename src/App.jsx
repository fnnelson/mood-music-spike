import logo from './logo.svg';
import './App.css';
import SpotifySearch from './SpotifySearch';
// import SpotifyProfile from './SpotifyProfile';

function App() {


  
  return (
    <main className="main">
      <div className="container">
        <header className="App-header">
          <h1>Mood Music Spike</h1>
          <img src={logo} className="App-logo" alt="logo" />
          {/* integrate something from Spotify API on back-end */}
          <h3>Display your Spotify profile data</h3>
          {/* <SpotifyProfile /> */}
          <h3>Search for Artist</h3>
          <SpotifySearch />

        </header>
      </div>
    </main>
  );
}

export default App;



