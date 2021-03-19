import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <div>
        <Welcome name="Sarah" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" age="29" />
      </div>
    </div>
  );
}

export default App;
