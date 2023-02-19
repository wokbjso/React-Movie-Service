import {  
  BrowserRouter as Router, 
  Route,
  Routes } from "react-router-dom";
import Details from "./routes/Details";
import Home from "./routes/Home";

function App() {
  return <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Details />} />
    </Routes>
  </Router>;
}

export default App;
