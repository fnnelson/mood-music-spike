import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main className="main">
      <div className="container">
        <header className="App-header">
          <h1>Mood Music Spike</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Spotify API Here:</h3>
          {/* integrate something from Spotify API on back-end */}
          <h3>Display your Spotify profile data</h3>

          <section id="profile">
            <h4>Logged in as <span id="displayName"></span></h4>
            <span id="avatar"></span>
            <ul>
              <li>User ID: <span id="id"></span></li>
              <li>Email: <span id="email"></span></li>
              <li>Spotify URI: <a id="uri" href="#"></a></li>
              <li>Link: <a id="url" href="#"></a></li>
              <li>Profile Image: <span id="imgUrl"></span></li>
            </ul>
          </section>

        </header>
      </div>
    </main>
  );
}

export default App;
