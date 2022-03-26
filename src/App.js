import './App.css';
import Main from "./Main.js"

function App() {
  const pStyle = {
    fontSize: "16px",
    color: "darkred"
  }

  const appDivStyle = {
    backgroundColor: "beige",
    maxWidth: "50%",
    margin: "auto"
  }

  return (
    <div className="App" style={appDivStyle}>
      <h1>Hello World</h1>
      <Main pStyle={pStyle}/>
    </div>
  );
}

export default App;
