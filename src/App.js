import logo from "./logo.svg";
import "./App.css";
// import { useTable } from '@tanstack/react-table';
// import Events from "./sort.js";
import MyComponent from "./purchased.js";
// import TotalMoneySpent from "./total.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <TotalMoneySpent /> */}
        <MyComponent />
        {/* <Events /> */}
      </header>
    </div>
  );
}

export default App;
