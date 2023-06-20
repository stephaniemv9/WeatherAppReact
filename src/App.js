import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <span>Lisbon </span>
          <span>Paris </span>
          <span>New York </span>
          <span>Quito </span>
          <span>Rome </span>
        </header>

        <div className="search-bar">
          <form>
            <input
              type="text"
              placeholder="Enter city name"
              autoComplete="off"
            ></input>

            <input
              type="submit"
              className="btn btn-primary"
              value="search"
            ></input>
            <button className="float-left btn btn-primary">
              Current location
            </button>
          </form>
        </div>

        <div className="weather-summary">
          <h2 className="search-city">New York</h2>
          <div className="weather-date-time">Monday 12pm</div>
          <div className="weather-detail">Sunny</div>
        </div>

        <div className="row">
          <div className="col-sm-3">21 degrees</div>
          <div className="col-sm-3">
            <div className="weather-detail-three">
              Precipitation: 82 percent
            </div>
            <div className="weather-detail-four">Wind: 4km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
